import Link from 'next/link'
import { Button } from '@/components/ui/button'

export function CtaSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center gap-6 rounded-2xl bg-primary px-6 py-14 text-center text-primary-foreground shadow-xl sm:px-12">
          <h2 className="text-balance font-serif text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to be part of something generous?
          </h2>
          <p className="max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
            Join a growing community of verified members who believe in showing
            up for one another.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/auth/sign-up">Create your free account</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
