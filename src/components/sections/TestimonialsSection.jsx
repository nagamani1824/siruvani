"use client";

import { useInView } from "react-intersection-observer";

const testimonials = [
  { name: "R. Kannan", text: "Wonderful community and events that brought our family closer." },
  { name: "Meera S.", text: "A true home away from home for Coimbatorians in Chennai." },
  { name: "Anand P.", text: "Well organized and friendly — highly recommend joining." },
];

export default function TestimonialsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="testimonials" ref={ref} className="py-20 bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="section-title">What Members Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="card p-6 bg-white">
              <p className="text-slate-700 mb-4">“{t.text}”</p>
              <p className="font-bold text-slate-800">{t.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
