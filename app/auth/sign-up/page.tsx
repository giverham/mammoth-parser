import { AuthShell } from '@/components/auth/auth-shell'
import { SignUpForm } from '@/components/auth/sign-up-form'

export default function SignUpPage() {
  return (
    <AuthShell
      title="Join Givermi"
      subtitle="Create your account to become part of a community built on generosity."
    >
      <SignUpForm />
    </AuthShell>
  )
}
