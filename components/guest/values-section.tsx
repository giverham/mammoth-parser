import { HeartHandshake, ShieldCheck, Users, Gift } from 'lucide-react'

const values = [
  {
    icon: ShieldCheck,
    title: 'Verified & trusted',
    description:
      'Real people, real identities. Every member confirms their email and phone number, so the community stays safe and genuine.',
  },
  {
    icon: HeartHandshake,
    title: 'Generosity first',
    description:
      'Give what you can and receive with grace. Givermi is designed around helping, not selling or self-promotion.',
  },
  {
    icon: Users,
    title: 'A real community',
    description:
      'Connect over shared interests and local ties. Build lasting relationships with people who genuinely care.',
  },
  {
    icon: Gift,
    title: 'Meaningful exchange',
    description:
      'Share skills, resources, and encouragement. Small acts of kindness add up to something lasting.',
  },
]

export function ValuesSection() {
  return (
    <section id="values" className="bg-secondary/40 py-16 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Built on values that matter
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Givermi isn&apos;t another social feed. It&apos;s a place where
            trust and generosity come first.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary">
                <value.icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
