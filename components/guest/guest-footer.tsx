import Link from 'next/link'
import { Logo } from '@/components/brand/logo'

export function GuestFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            A members-only community built on generosity, trust, and real human
            connection.
          </p>
        </div>

        <nav
          className="grid grid-cols-2 gap-x-12 gap-y-2 text-sm sm:grid-cols-3"
          aria-label="Footer"
        >
          <Link
            href="#how-it-works"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            How it works
          </Link>
          <Link
            href="#values"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Our values
          </Link>
          <Link
            href="#faq"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </Link>
          <Link
            href="/auth/login"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Sign in
          </Link>
          <Link
            href="/auth/sign-up"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Join
          </Link>
        </nav>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-xs text-muted-foreground sm:px-6">
          &copy; {new Date().getFullYear()} Givermi. Built on generosity.
        </div>
      </div>
    </footer>
  )
}
