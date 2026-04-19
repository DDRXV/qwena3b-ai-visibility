import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface PricingTier {
  name: string
  price: number
  features: string[]
  featured?: boolean
}

export function PricingCard({ tier, delay = 0 }: { tier: PricingTier; delay?: number }) {
  const delayClass = {
    0: 'animation-delay-200',
    1: 'animation-delay-400',
    2: 'animation-delay-600',
  }[delay]

  const isFeatured = tier.name === 'Pro'

  return (
    <div
      className={cn(
        "relative",
        delayClass,
        isFeatured && "lg:-mt-4 lg:mb-4",
      )}
    >
      {/* Glow effect for featured */}
      {isFeatured && (
        <div className="absolute -inset-0.5 bg-gradient-to-r from-black via-black/80 to-black rounded-2xl blur-lg opacity-50 animate-pulse-glow" />
      )}

      <Card
        className={cn(
          "border-border h-full relative overflow-hidden",
          isFeatured
            ? "bg-white shadow-premium-lg"
            : "bg-white/60 backdrop-blur-sm hover:shadow-premium transition-all duration-500",
        )}
      >
        {/* Featured badge */}
        {isFeatured && (
          <div className="absolute top-0 right-0">
            <div className="bg-black text-white text-xs font-semibold px-3 py-1.5 rounded-bl-lg">
              MOST POPULAR
            </div>
          </div>
        )}

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500" />

        <CardHeader className="text-center pb-4">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            {tier.name}
          </h3>

          <div className="flex items-baseline justify-center gap-1">
            <span className="text-5xl font-bold text-foreground">
              ${tier.price}
            </span>
            {tier.price > 0 && (
              <span className="text-muted-foreground">/month</span>
            )}
          </div>

          {tier.price === 0 && (
            <p className="text-sm text-muted-foreground mt-2">Forever free</p>
          )}
        </CardHeader>

        <CardContent className="pt-6">
          {/* Features list */}
          <ul className="space-y-3 mb-8">
            {tier.features.map((feature, _index) => (
              <li
                key={feature}
                className="flex items-start gap-3"
              >
                <div className={cn(
                  "flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5",
                  isFeatured ? "bg-black" : "bg-black/10",
                )}>
                  <Check className={cn(
                    "h-3.5 w-3.5",
                    isFeatured ? "text-white" : "text-black",
                  )} />
                </div>
                <span className="text-sm text-muted-foreground">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <Button
            variant={isFeatured ? "default" : "outline"}
            className={cn(
              "w-full h-12 text-base font-medium transition-all duration-300 hover:scale-105",
              isFeatured && "shadow-lg hover:shadow-xl",
            )}
          >
            {tier.price === 0 ? "Get Started Free" : "Start Free Trial"}
          </Button>

          {/* Trial note */}
          <p className="text-xs text-muted-foreground text-center mt-4">
            {tier.price === 0 ? "No expiration" : "14-day free trial • Cancel anytime"}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
