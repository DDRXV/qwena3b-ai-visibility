import { LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
}

export function FeatureCard({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) {
  const delayClass = {
    0: '',
    1: 'animation-delay-200',
    2: 'animation-delay-400',
    3: 'animation-delay-600',
    4: 'animation-delay-800',
    5: 'animation-delay-1000',
  }[delay]

  return (
    <Card
      className={cn(
        "border-border bg-white/50 backdrop-blur-sm hover:shadow-premium-lg transition-all duration-500 group cursor-default overflow-hidden",
        delayClass,
      )}
    >
      {/* Gradient border on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Top highlight */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardContent className="p-6 relative">
        {/* Icon with gradient background */}
        <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-black to-black/80 text-white flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500">
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Icon className="h-7 w-7 relative z-10" />
        </div>

        {/* Content */}
        <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-black transition-colors">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-black/70 transition-colors">
          {description}
        </p>

        {/* Bottom accent line */}
        <div className="mt-4 h-px bg-gradient-to-r from-black/10 to-transparent w-0 group-hover:w-full transition-all duration-500" />
      </CardContent>
    </Card>
  )
}
