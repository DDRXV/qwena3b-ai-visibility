import { HeroForm } from "./hero-form"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #000000 1px, transparent 1px), linear-gradient(to bottom, #000000 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      <div className="relative container-max z-10">
        {/* Headline */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground mb-6">
            Master Your AI Visibility
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Get comprehensive AEO reports and actionable insights for AI search.
          </p>
        </div>

        {/* Form */}
        <div className="max-w-xl mx-auto mb-12 animate-fade-in-up animation-delay-200">
          <HeroForm />
        </div>

        {/* Trust indicators - minimal */}
        <div className="text-center animate-fade-in-up animation-delay-400">
          <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">
            Trusted by innovative teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50">
            {['Acme Corp', 'GlobalTech', 'Nexus', 'Vertex'].map((company) => (
              <span
                key={company}
                className="text-sm font-medium text-muted-foreground"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
