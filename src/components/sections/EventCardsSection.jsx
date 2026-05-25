"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

const eventCards = [
  {
    title: "Monthly Breakfast Meets",
    description: "Connect with community over morning coffee and breakfast",
    bg: "bg-blue-100",
    image: "/images/connect-breakfast.webp",
    href: "/events",
  },
  {
    title: "Quarterly Cultural Events",
    description: "Celebrate our heritage through festivals and traditions",
    bg: "bg-pink-100",
    image: "/images/connect-events.webp",
    href: "/events",
  },
  {
    title: "Annual Workshops",
    description: "Learn and grow through skill-sharing workshops",
    bg: "bg-yellow-100",
    image: "/images/connect-workshop.webp",
    href: "/events",
  },
  {
    title: "Family Gatherings",
    description: "Memorable moments with loved ones in our community",
    bg: "bg-purple-100",
    image: "/images/connect-family.webp",
    href: "/events",
  },
];

export default function EventCardsSection() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % eventCards.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + eventCards.length) % eventCards.length);
  };

  const visibleCards = [
    eventCards[current],
    eventCards[(current + 1) % eventCards.length],
    eventCards[(current + 2) % eventCards.length],
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white" id="events-cards">
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
           How We Connect
          </h2>
          
        </div>

        {/* Cards Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleCards.map((card, idx) => (
              <div
                key={idx}
                className={`${card.bg} rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 transform hover:scale-105`}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {card.title}
                  </h3>
                  <p className="text-slate-700 mb-6 text-sm leading-relaxed">
                    {card.description}
                  </p>
                  <Link
                    href={card.href}
                    className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold px-6 py-3 rounded-full transition-all duration-300"
                  >
                    Explore <span className="text-lg">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pagination & Controls */}
        <div className="flex items-center justify-between">
          <div className="text-white/60 text-sm font-medium">
            {current + 1} of {eventCards.length}
          </div>

          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 ">
            <p className="text-lg text-white/80">
            Bringing people together through meaningful events, traditions, and shared experiences.
          </p>
          <br>
          </br>
          <Link href="/join" className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold px-8 py-4 rounded-full shadow-xl transition-all duration-300 text-lg">
            Join Our Community <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
