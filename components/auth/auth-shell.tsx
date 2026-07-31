import Link from 'next/link'
import Image from 'next/image'
import { Logo } from '@/components/brand/logo'

export function AuthShell({
  children,
  title,
  subtitle,
}: {
  children: React.ReactNode
  title: string
  subtitle?: string
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Brand / imagery panel */}
      <div className="relative hidden lg:block">
        <Image
          src="/images/hero-community.png"
          alt=""
          fill
          sizes="50vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" aria-hidden="true" />
        <div className="absolute inset-0 flex flex-col justify-between p-10 text-primary-foreground">
          <Link href="/" aria-label="Givermi home">
            <Logo className="[&_span:last-child]:text-primary-foreground [&>span:first-child]:bg-primary-foreground [&>span:first-child]:text-primary" />
          </Link>
          <blockquote className="max-w-md">
            <p className="font-serif text-2xl font-medium leading-snug text-balance">
              &ldquo;Generosity is contagious. Givermi is where it spreads.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-primary-foreground/80">
              A community built on trust and giving
            </footer>
          </blockquote>
        </div>
      </div>

      {/* Form panel */}
      <div className="flex flex-col">
        <div className="flex items-center justify-between p-6 lg:hidden">
          <Link href="/" aria-label="Givermi home">
            <Logo />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center px-4 py-8 sm:px-6">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h1 className="font-serif text-3xl font-bold tracking-tight text-foreground">
                {title}
              </h1>
              {subtitle && (
                <p className="mt-2 text-pretty text-muted-foreground">
                  {subtitle}
                </p>
              )}
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}
