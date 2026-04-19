import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="relative section-padding overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 to-background" />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-black/10 via-transparent to-transparent blur-3xl rounded-full animate-pulse-glow" />

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-black/5 rounded-full blur-3xl animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-black/5 rounded-full blur-3xl animate-blob animation-delay-2000" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #000000 1px, transparent 0)`,
          backgroundSize: '32px 32px',
        }}
      />

      <div className="container-max relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 border border-black/10 mb-8 animate-fade-in">
            <Sparkles className="h-4 w-4 text-black/60" />
            <span className="text-sm font-medium text-muted-foreground">
              Start your free trial today
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 tracking-tight animate-fade-in-up">
            Ready to Transform
            <span className="block bg-gradient-to-r from-black via-black/80 to-black/60 bg-clip-text text-transparent">
              Your AI Visibility?
            </span>
          </h2>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-200">
            Join hundreds of companies optimizing for the future of search.
            Get your comprehensive AEO report in minutes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Button
              size="lg"
              className="h-14 px-8 text-base bg-black hover:bg-black/90 shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:scale-105 group"
            >
              <span>Get Your Free Report</span>
              <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-base border-border hover:bg-black/5 transition-all duration-300"
            >
              Schedule a Demo
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 animate-fade-in-up animation-delay-600">
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
