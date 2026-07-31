import Image from 'next/image'

const steps = [
  {
    number: '01',
    title: 'Create your account',
    description:
      'Sign up with your name, email, and a few details about your interests and location.',
  },
  {
    number: '02',
    title: 'Verify your identity',
    description:
      'Confirm your email and phone number. This keeps Givermi a trusted, spam-free space.',
  },
  {
    number: '03',
    title: 'Join the community',
    description:
      'Complete your profile, connect with members, and start giving and receiving generosity.',
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-16 lg:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border shadow-xl">
            <Image
              src="/images/feature-trust.png"
              alt="Two members exchanging a gift, representing trust and generosity"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="order-1 flex flex-col gap-8 lg:order-2">
          <div>
            <h2 className="text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Getting started is simple
            </h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              Three quick steps to become part of a community that gives.
            </p>
          </div>

          <ol className="flex flex-col gap-6">
            {steps.map((step) => (
              <li key={step.number} className="flex gap-5">
                <span className="font-serif text-2xl font-bold text-primary/40">
                  {step.number}
                </span>
                <div className="flex flex-col gap-1 pt-0.5">
                  <h3 className="font-serif text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
