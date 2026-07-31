import { GuestHeader } from '@/components/guest/guest-header'
import { HeroSection } from '@/components/guest/hero-section'
import { ValuesSection } from '@/components/guest/values-section'
import { HowItWorksSection } from '@/components/guest/how-it-works-section'
import { FaqSection } from '@/components/guest/faq-section'
import { CtaSection } from '@/components/guest/cta-section'
import { GuestFooter } from '@/components/guest/guest-footer'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <GuestHeader />
      <main className="flex-1">
        <HeroSection />
        <ValuesSection />
        <HowItWorksSection />
        <FaqSection />
        <CtaSection />
      </main>
      <GuestFooter />
    </div>
  )
}
