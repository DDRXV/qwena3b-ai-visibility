import { STEPS } from "@/lib/constants"
import { StepCard } from "./step-card"
import { ArrowRight } from "lucide-react"

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative section-padding bg-muted/30 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 to-transparent"
          style={{ transform: 'rotate(5deg)' }}
        />
        <div className="absolute top-1/3 right-0 w-64 h-64 bg-black/5 rounded-full blur-3xl" />
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 mb-6">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Process
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            From URL to Actionable
            <span className="block text-muted-foreground">Insights in Minutes</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Our proprietary AI analyzes over 100 data points to give you a complete picture
            of your AI search visibility.
          </p>
        </div>

        {/* Steps with connecting lines */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden lg:block absolute left-12 top-0 bottom-0 w-px bg-gradient-to-b from-black/30 via-black/10 to-transparent" />

            <div className="space-y-8">
              {STEPS.map((step, index) => (
                <StepCard
                  key={step.number}
                  number={step.number}
                  title={step.title}
                  description={step.description}
                  delay={index}
                  showArrow={index < STEPS.length - 1}
                />
              ))}
            </div>
          </div>

          {/* Mobile connecting lines */}
          <div className="lg:hidden relative">
            <div className="absolute left-6 top-12 bottom-12 w-px bg-gradient-to-b from-black/30 via-black/10 to-transparent" />

            <div className="space-y-8">
              {STEPS.map((step, index) => (
                <div key={step.number} className="relative">
                  <div className="absolute left-5 top-0 w-3 h-px bg-black/30" />
                  <div className="ml-14">
                    <StepCard
                      key={step.number}
                      number={step.number}
                      title={step.title}
                      description={step.description}
                      delay={index}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-black/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <span>Start Your Free Analysis</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
