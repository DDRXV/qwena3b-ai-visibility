import { FEATURES } from "@/lib/constants"
import { FeatureCard } from "./feature-card"
import { ChevronRight } from "lucide-react"

export function Features() {
  return (
    <section id="features" className="relative section-padding bg-background overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-1/2 -right-1/2 w-full h-full opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #000000 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-black/5 to-transparent blur-3xl" />
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Features
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Everything You Need to
            <span className="block text-muted-foreground">Dominate AI Search</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Our comprehensive suite of tools helps you understand, measure, and improve
            your visibility in AI-powered search results.
          </p>
        </div>

        {/* Grid with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-4">
            Ready to see your visibility score?
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-black transition-colors group"
          >
            Get your free report
            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  )
}
