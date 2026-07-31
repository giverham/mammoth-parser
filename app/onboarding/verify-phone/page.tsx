import { redirect } from "next/navigation"
import { ShieldCheck } from "lucide-react"
import { createClient } from "@/lib/supabase/server"
import { AuthShell } from "@/components/auth/auth-shell"
import { PhoneVerifyForm } from "@/components/onboarding/phone-verify-form"

export default async function VerifyPhonePage() {
  const supabase = await createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) redirect("/auth/login")

  const { data: profile } = await supabase
    .from("profiles")
    .select("phone_verified")
    .eq("id", user.id)
    .single()

  if (profile?.phone_verified) redirect("/feed")

  return (
    <AuthShell
      eyebrow="One last step"
      title="Verify your phone"
      subtitle="A verified phone number keeps Givermi safe and trusted. It unlocks full access to the community."
    >
      <div className="mb-6 flex items-center gap-3 rounded-lg border border-border bg-secondary/50 px-4 py-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
          <ShieldCheck className="size-5" />
        </span>
        <p className="text-sm text-muted-foreground text-pretty">
          Your email is confirmed. Verify your phone to become a{" "}
          <span className="font-medium text-foreground">Verified Member</span>.
        </p>
      </div>
      <PhoneVerifyForm />
    </AuthShell>
  )
}
