"use server"

import { createClient } from "@/lib/supabase/server"

const CODE_TTL_MINUTES = 10
const MAX_ATTEMPTS = 5

// Demo mode: no SMS provider is connected yet, so the generated code is
// returned to the client to display on screen. When an SMS provider (e.g.
// Twilio) is added, remove `devCode` from the response and send via SMS.
const DEMO_MODE = true

function generateCode(): string {
  return String(Math.floor(100000 + Math.random() * 900000))
}

function normalizePhone(raw: string): string | null {
  const trimmed = raw.trim()
  // Accept E.164-ish: optional +, 8-15 digits.
  const digits = trimmed.replace(/[^\d+]/g, "")
  if (!/^\+?\d{8,15}$/.test(digits)) return null
  return digits.startsWith("+") ? digits : `+${digits}`
}

export async function sendPhoneCode(
  phoneInput: string,
): Promise<{ ok: boolean; error?: string; devCode?: string }> {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return { ok: false, error: "You must be signed in." }

  const phone = normalizePhone(phoneInput)
  if (!phone) return { ok: false, error: "Enter a valid phone number in international format." }

  const code = generateCode()
  const expiresAt = new Date(Date.now() + CODE_TTL_MINUTES * 60_000).toISOString()

  const { error } = await supabase.from("phone_verifications").upsert(
    {
      user_id: user.id,
      phone,
      code,
      expires_at: expiresAt,
      attempts: 0,
    },
    { onConflict: "user_id" },
  )

  if (error) return { ok: false, error: "Could not start verification. Please try again." }

  // TODO: integrate real SMS delivery here.
  return { ok: true, devCode: DEMO_MODE ? code : undefined }
}

export async function verifyPhoneCode(
  codeInput: string,
): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) return { ok: false, error: "You must be signed in." }

  const { data: row, error } = await supabase
    .from("phone_verifications")
    .select("phone, code, expires_at, attempts")
    .eq("user_id", user.id)
    .single()

  if (error || !row) return { ok: false, error: "No verification in progress. Request a new code." }

  if (new Date(row.expires_at).getTime() < Date.now()) {
    return { ok: false, error: "This code has expired. Request a new one." }
  }

  if (row.attempts >= MAX_ATTEMPTS) {
    return { ok: false, error: "Too many attempts. Request a new code." }
  }

  if (codeInput.trim() !== row.code) {
    await supabase
      .from("phone_verifications")
      .update({ attempts: row.attempts + 1 })
      .eq("user_id", user.id)
    return { ok: false, error: "Incorrect code. Please try again." }
  }

  const { error: rpcError } = await supabase.rpc("mark_phone_verified", { p_phone: row.phone })
  if (rpcError) return { ok: false, error: "Could not complete verification. Please try again." }

  return { ok: true }
}
