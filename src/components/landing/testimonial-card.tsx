import { Star } from "lucide-react";
import type { Testimonial } from "@/types";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({ testimonial, className }: TestimonialCardProps) {
  return (
    <div className={cn("glass-card rounded-xl p-6 flex flex-col gap-4", className)}>
      {/* Stars */}
      <div className="flex items-center gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-text-body font-body text-sm leading-relaxed flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-glass-border">
        <div className="w-10 h-10 rounded-full flex items-center justify-center font-sans font-bold text-sm text-white flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #FF6B00, #FF8C33)" }}
        >
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-text-primary font-sans font-semibold text-sm">
            {testimonial.name}
          </p>
          <p className="text-text-secondary text-xs font-body">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
}
