import { testimonials } from "@/data/testimonials";
import { TestimonialCard } from "../testimonial-card";

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-bg-deep">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-sans font-black text-text-primary mb-4">
            Lo que dicen nuestros usuarios
          </h2>
          <p className="text-text-secondary font-body text-lg">
            Historias reales de academias reales lanzadas con NivelatuAcademy
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
