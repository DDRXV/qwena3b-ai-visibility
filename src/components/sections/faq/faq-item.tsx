import { AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import { Plus, Minus } from "lucide-react"

interface FAQItemProps {
  question: string
  answer: string
  value: string
  delay?: number
}

export function FAQItem({
  question,
  answer,
  value,
  delay = 0,
}: FAQItemProps) {
  const delayClass = {
    0: '',
    1: 'animation-delay-100',
    2: 'animation-delay-200',
    3: 'animation-delay-300',
    4: 'animation-delay-400',
    5: 'animation-delay-500',
    6: 'animation-delay-600',
    7: 'animation-delay-700',
    8: 'animation-delay-800',
    9: 'animation-delay-900',
  }[delay]

  return (
    <AccordionItem
      value={value}
      className={cn(
        "border-b border-black/10 last:border-0",
        delayClass,
      )}
    >
      <AccordionTrigger className="py-5 px-2 hover:no-underline transition-all">
        <div className="flex items-center gap-4">
          <span className="text-base font-medium text-foreground text-left flex-1">
            {question}
          </span>
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-colors">
            <Plus className="h-4 w-4 text-muted-foreground group-hover:hidden" />
            <Minus className="h-4 w-4 hidden group-hover:block text-foreground" />
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5 px-2">
        <div className="pl-12">
          {answer}
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
