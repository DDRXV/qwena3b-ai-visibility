import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import {
  Hero,
  Features,
  HowItWorks,
  Testimonials,
  Pricing,
  FAQ,
  CTASection,
} from "@/components/sections"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
