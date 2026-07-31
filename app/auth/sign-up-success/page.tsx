import Link from 'next/link'
import { AuthShell } from '@/components/auth/auth-shell'
import { Button } from '@/components/ui/button'
import { MailCheck } from 'lucide-react'

export default async function SignUpSuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ email?: string }>
}) {
  const { email } = await searchParams

  return (
    <AuthShell title="Check your inbox">
      <div className="flex flex-col items-center gap-6 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-primary/10 text-primary">
          <MailCheck className="h-8 w-8" aria-hidden="true" />
        </span>

        <div className="flex flex-col gap-2">
          <p className="text-pretty text-muted-foreground">
            We sent a confirmation link to
          </p>
          <p className="font-medium text-foreground">
            {email ?? 'your email address'}
          </p>
          <p className="mt-2 text-pretty text-sm text-muted-foreground">
            Click the link in that email to verify your account. Once confirmed,
            you can sign in and finish setting up your profile.
          </p>
        </div>

        <div className="flex w-full flex-col gap-3">
          <Button size="lg" className="w-full" render={<Link href="/auth/login" />}>
            Continue to sign in
          </Button>
          <p className="text-xs text-muted-foreground">
            Didn&apos;t get the email? Check your spam folder, or wait a moment
            and try signing in.
          </p>
        </div>
      </div>
    </AuthShell>
  )
}
