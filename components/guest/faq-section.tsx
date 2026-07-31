const faqs = [
  {
    q: 'Is Givermi free to join?',
    a: 'Yes. Creating an account and becoming a verified member is completely free. Givermi is built around generosity, not fees.',
  },
  {
    q: 'Why do I need to verify my phone and email?',
    a: 'Verification keeps the community safe and genuine. It ensures every member is a real person and helps prevent spam and abuse.',
  },
  {
    q: 'What can I do on Givermi?',
    a: 'Share resources and skills, offer or ask for help, connect over shared interests, and build meaningful relationships with people who care.',
  },
  {
    q: 'Is my information private?',
    a: 'You control what appears on your profile. Your contact details are never shared publicly, and you can adjust your visibility at any time.',
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="bg-secondary/40 py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="text-balance font-serif text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Everything you need to know before joining.
          </p>
        </div>

        <dl className="mt-12 flex flex-col gap-4">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <dt className="font-serif text-lg font-semibold text-foreground">
                {faq.q}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
