import { PRICING_TIERS } from "@/lib/constants"
import { PricingCard } from "./pricing-card"
import { Check } from "lucide-react"

export function Pricing() {
  return (
    <section id="pricing" className="relative section-padding bg-muted/30 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-black/5 via-transparent to-transparent blur-3xl rounded-full" />

        {/* Diagonal lines */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(45deg, #000000 25%, transparent 25%, transparent 75%, #000000 75%, #000000), linear-gradient(45deg, #000000 25%, transparent 25%, transparent 75%, #000000 75%, #000000)`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 30px 30px',
          }}
        />
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 mb-6">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Pricing
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Simple, Transparent
            <span className="block text-muted-foreground">Pricing for Every Stage</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Start free and scale as you grow. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing cards with glow effect */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {PRICING_TIERS.map((tier, _index) => (
            <PricingCard
              key={tier.name}
              tier={tier}
              delay={_index + 1}
            />
          ))}
        </div>

        {/* Enterprise CTA */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-6">
            Need custom solutions for your organization?
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-black transition-colors group"
          >
            Contact our enterprise team
            <Check className="h-4 w-4 ml-1 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
