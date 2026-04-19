import { cn } from "@/lib/utils"
import { ArrowRight } from "lucide-react"

interface StepCardProps {
  number: number
  title: string
  description: string
  delay?: number
  showArrow?: boolean
}

export function StepCard({
  number,
  title,
  description,
  delay = 0,
  showArrow = false,
}: StepCardProps) {
  const delayClass = {
    0: '',
    1: 'animation-delay-200',
    2: 'animation-delay-400',
    3: 'animation-delay-600',
  }[delay]

  return (
    <div className={cn("relative", delayClass)}>
      <div className="flex items-start gap-6">
        {/* Number badge */}
        <div className="flex-shrink-0">
          <div className="relative">
            {/* Outer ring */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-black to-black/80 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold text-white">{number}</span>
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-black blur-xl opacity-20 -z-10" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 pt-2">
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-black transition-colors">
            {title}
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>

        {/* Arrow indicator */}
        {showArrow && (
          <div className="hidden lg:flex items-center justify-center">
            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-black group-hover:translate-x-1 transition-all duration-300" />
          </div>
        )}
      </div>
    </div>
  )
}
