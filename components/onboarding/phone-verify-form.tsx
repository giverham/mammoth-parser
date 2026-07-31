"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"
import { Phone, ShieldCheck, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { sendPhoneCode, verifyPhoneCode } from "@/app/onboarding/verify-phone/actions"

type Step = "phone" | "code"

export function PhoneVerifyForm() {
  const router = useRouter()
  const [step, setStep] = useState<Step>("phone")
  const [phone, setPhone] = useState("")
  const [code, setCode] = useState("")
  const [devCode, setDevCode] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSend(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    const res = await sendPhoneCode(phone)
    setLoading(false)
    if (!res.ok) {
      toast.error(res.error ?? "Something went wrong.")
      return
    }
    setDevCode(res.devCode ?? null)
    setStep("code")
    toast.success("Verification code sent.")
  }

  async function handleVerify(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    const res = await verifyPhoneCode(code)
    setLoading(false)
    if (!res.ok) {
      toast.error(res.error ?? "Something went wrong.")
      return
    }
    toast.success("Phone verified. Welcome to Givermi.")
    router.push("/feed")
    router.refresh()
  }

  async function handleResend() {
    setLoading(true)
    const res = await sendPhoneCode(phone)
    setLoading(false)
    if (!res.ok) {
      toast.error(res.error ?? "Something went wrong.")
      return
    }
    setDevCode(res.devCode ?? null)
    toast.success("A new code is on its way.")
  }

  if (step === "phone") {
    return (
      <form onSubmit={handleSend} className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Mobile number</Label>
          <div className="relative">
            <Phone className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              id="phone"
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              placeholder="+1 555 123 4567"
              className="pl-9"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <p className="text-sm text-muted-foreground">
            Use international format including your country code.
          </p>
        </div>
        <Button type="submit" disabled={loading} className="w-full">
          {loading ? <Loader2 className="size-4 animate-spin" /> : "Send verification code"}
        </Button>
      </form>
    )
  }

  return (
    <form onSubmit={handleVerify} className="flex flex-col gap-5">
      {devCode && (
        <div className="rounded-lg border border-accent/40 bg-accent/10 px-4 py-3 text-sm">
          <p className="font-medium text-accent-foreground">Demo mode</p>
          <p className="text-muted-foreground">
            SMS delivery is not connected yet. Your code is{" "}
            <span className="font-mono font-semibold tracking-widest text-foreground">{devCode}</span>.
          </p>
        </div>
      )}
      <div className="flex flex-col gap-2">
        <Label htmlFor="code">6-digit code</Label>
        <Input
          id="code"
          inputMode="numeric"
          autoComplete="one-time-code"
          maxLength={6}
          placeholder="000000"
          className="text-center font-mono text-lg tracking-[0.5em]"
          value={code}
          onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))}
          required
        />
        <p className="text-sm text-muted-foreground">
          Sent to <span className="font-medium text-foreground">{phone}</span>.
        </p>
      </div>
      <Button type="submit" disabled={loading || code.length < 6} className="w-full">
        {loading ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <>
            <ShieldCheck className="size-4" />
            Verify & continue
          </>
        )}
      </Button>
      <div className="flex items-center justify-between text-sm">
        <button
          type="button"
          onClick={() => setStep("phone")}
          className="text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
        >
          Change number
        </button>
        <button
          type="button"
          onClick={handleResend}
          disabled={loading}
          className="font-medium text-primary underline-offset-4 hover:underline"
        >
          Resend code
        </button>
      </div>
    </form>
  )
}
