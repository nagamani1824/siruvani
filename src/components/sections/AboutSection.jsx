"use client";

import { ArrowRight } from "lucide-react";

const benefits = [
  "Network with like-minded families",
  "Celebrate culture and festivals",
  "Access to year-round events",
  "Support system for you and your families",
  "Participate in family volunteering activities",
];

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-amber-50 text-slate-900">
      <div className="container-custom">
        <div className="max-w-3xl mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Benefits highlighted
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] items-center">
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
            <img
              src="/images/benefits-image.webp"
              alt="Community forest aerial image"
              className="w-full h-full max-h-[520px] object-cover"
            />
          </div>

          <div className="space-y-6">
            <p className="max-w-xl text-lg leading-relaxed text-slate-700">
              Whether you are new to Chennai or have been here for years, Siruvani welcomes all from the Kongu regions to join our vibrant community.
            </p>

            <div className="space-y-4">
              {benefits.map((item) => (
                <div key={item} className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white shadow-sm">
                    <ArrowRight size={16} />
                  </div>
                  <p className="text-base font-medium text-slate-900">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
