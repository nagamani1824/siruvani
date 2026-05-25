"use client";

import Link from "next/link";
import { Users, Calendar, Sparkles, Heart } from "lucide-react";

const stats = [
  { icon: Users, value: "100+", label: "Families Connected" },
  { icon: Calendar, value: "50+", label: "Breakfast Meets Hosted" },
  { icon: Sparkles, value: "5+", label: "Annual Events Celebrated" },
  { icon: Heart, value: "2+", label: "Community Relief & Service" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white" id="hero">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero-image.webp')",
        }}
      />
      <div className="absolute top-16 left-16 w-72 h-72 rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-12 right-16 w-80 h-80 rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative container-custom flex min-h-screen items-center py-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/15 text-white text-sm font-semibold px-5 py-3 rounded-full mb-8 shadow-lg shadow-black/20">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-pulse" />
            Our Roots, Our Culture, Our Family
          </div>

          <h1 className="font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight tracking-tight mb-8" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
            Connecting Coimbatore Hearts
            <br />
            in Chennai 2012
          </h1>

          <p className="text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed mb-12">
            A vibrant community where families connect, celebrate, and grow together since 2012.
          </p>

          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              href="/join"
              className="inline-flex items-center justify-center bg-emerald-400 hover:bg-emerald-500 text-slate-950 font-bold px-8 py-4 rounded-full shadow-2xl shadow-black/20 transition duration-300"
            >
              Join Our Community
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center border border-white/30 hover:border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-full transition duration-300"
            >
              Explore
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="bg-white/10 border border-white/15 rounded-3xl p-6 backdrop-blur-xl shadow-xl shadow-black/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-400/20 flex items-center justify-center text-emerald-200">
                    <Icon size={20} />
                  </div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/70">{label}</p>
                </div>
                <p className="text-4xl font-extrabold tracking-tight">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
