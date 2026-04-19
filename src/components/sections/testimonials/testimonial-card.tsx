import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
  delay?: number
}

export function TestimonialCard({
  quote,
  author,
  role,
  company,
  delay = 0,
}: TestimonialCardProps) {
  const delayClass = {
    0: 'animation-delay-200',
    1: 'animation-delay-400',
    2: 'animation-delay-600',
  }[delay]

  return (
    <Card
      className={cn(
        "border-border bg-white/60 backdrop-blur-sm hover:shadow-premium-lg transition-all duration-500 group cursor-default",
        delayClass,
      )}
    >
      <CardContent className="p-8 relative overflow-hidden">
        {/* Gradient background on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Quote icon */}
        <div className="relative z-10">
          <Quote className="h-8 w-8 text-muted-foreground/30 mb-4 group-hover:text-black/20 transition-colors" />

          {/* Quote */}
          <p className="text-base text-foreground mb-6 leading-relaxed relative z-10">
            "{quote}"
          </p>

          {/* Divider */}
          <div className="w-12 h-px bg-black/20 mb-6 group-hover:w-full group-hover:bg-gradient-to-r from-transparent via-black/30 to-transparent transition-all duration-500" />

          {/* Author */}
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-black to-black/80 flex items-center justify-center text-sm font-semibold text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
              {author.split(' ').map((n) => n[0]).join('')}
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground group-hover:text-black transition-colors">
                {author}
              </p>
              <p className="text-sm text-muted-foreground">
                {role} at <span className="font-medium text-foreground">{company}</span>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
