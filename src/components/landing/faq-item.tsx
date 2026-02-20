import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { FAQ } from "@/types";

interface FAQItemProps {
  faq: FAQ;
}

export function FAQItem({ faq }: FAQItemProps) {
  return (
    <AccordionItem
      value={faq.id}
      className="border-b border-glass-border last:border-0"
    >
      <AccordionTrigger className="text-text-primary font-sans font-semibold text-left hover:text-accent transition-colors duration-200 py-5 text-sm md:text-base [&[data-state=open]]:text-accent">
        {faq.question}
      </AccordionTrigger>
      <AccordionContent className="text-text-secondary font-body text-sm leading-relaxed pb-5">
        {faq.answer}
      </AccordionContent>
    </AccordionItem>
  );
}
