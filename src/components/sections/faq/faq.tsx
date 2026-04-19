import { FAQS } from "@/lib/constants"
import { FAQItem } from "./faq-item"
import { Accordion } from "@/components/ui/accordion"
import { Plus } from "lucide-react"

export function FAQ() {
  return (
    <section id="faq" className="relative section-padding bg-background overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient mesh */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-black/5 via-transparent to-transparent blur-3xl rounded-full" />

        {/* Subtle dots */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #000000 1px, transparent 0)`,
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="container-max relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 border border-black/10 mb-6">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              FAQ
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Frequently Asked
            <span className="block text-muted-foreground">Questions</span>
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Everything you need to know about AI visibility and our reports.
          </p>
        </div>

        {/* Accordion with premium styling */}
        <div className="max-w-3xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full"
          >
            {FAQS.map((faq, index) => (
              <FAQItem
                key={index}
                value={`item-${index}`}
                question={faq.question}
                answer={faq.answer}
                delay={index}
              />
            ))}
          </Accordion>
        </div>

        {/* Still have questions */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Still have questions?
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-black transition-colors group"
          >
            Get in touch with our team
            <Plus className="h-4 w-4 transition-transform group-hover:rotate-90" />
          </a>
        </div>
      </div>
    </section>
  )
}
