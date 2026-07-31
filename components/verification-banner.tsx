import Link from "next/link"
import { MailWarning, PhoneCall, BadgeCheck } from "lucide-react"

type Props = {
  emailVerified: boolean
  phoneVerified: boolean
}

export function VerificationBanner({ emailVerified, phoneVerified }: Props) {
  if (emailVerified && phoneVerified) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-4 py-3">
        <BadgeCheck className="size-5 shrink-0 text-primary" />
        <p className="text-sm text-foreground text-pretty">
          You&apos;re a <span className="font-medium">Verified Member</span>. You have full access to Givermi.
        </p>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-accent/40 bg-accent/10 px-4 py-4">
      <p className="text-sm font-medium text-foreground">Finish setting up your account</p>
      <ul className="flex flex-col gap-2">
        {!emailVerified && (
          <li className="flex items-center gap-2 text-sm text-muted-foreground">
            <MailWarning className="size-4 shrink-0 text-accent-foreground" />
            Confirm your email address from the link we sent you.
          </li>
        )}
        {!phoneVerified && (
          <li className="flex items-center justify-between gap-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <PhoneCall className="size-4 shrink-0 text-accent-foreground" />
              Verify your phone number to unlock full access.
            </span>
            <Link
              href="/onboarding/verify-phone"
              className="shrink-0 font-medium text-primary underline-offset-4 hover:underline"
            >
              Verify now
            </Link>
          </li>
        )}
      </ul>
    </div>
  )
}
