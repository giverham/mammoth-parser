import Link from 'next/link'
import { AuthShell } from '@/components/auth/auth-shell'
import { Button } from '@/components/ui/button'
import { AlertTriangle } from 'lucide-react'

export default function AuthErrorPage() {
  return (
    <AuthShell title="Something went wrong">
      <div className="flex flex-col items-center gap-6 text-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-destructive/10 text-destructive">
          <AlertTriangle className="h-8 w-8" aria-hidden="true" />
        </span>
        <p className="text-pretty text-muted-foreground">
          We couldn&apos;t verify your link. It may have expired or already been
          used. Please try signing in, or request a new confirmation email by
          signing up again.
        </p>
        <div className="flex w-full flex-col gap-3">
          <Button asChild size="lg" className="w-full">
            <Link href="/auth/login">Back to sign in</Link>
          </Button>
        </div>
      </div>
    </AuthShell>
  )
}
