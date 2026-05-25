"use client";

import { useState } from "react";
import { X, ZoomIn } from "lucide-react";

const categories = ["All Events", "Family", "Professional", "Community"];

const gallery = [
  {
    id: 1,
    src: "/images/gallery-gallery-event-3-bulk-1761889185844.webp",
    title: "Diwali Galatta",
    details: "October 26, 2025 • Cosmo Club - Chennai",
    category: "All Events",
    tag: "48 photos",
  },
  {
    id: 2,
    src: "/images/gallery-gallery-event-1-image-0.webp",
    title: "Evening Meet",
    details: "August 9, 2025 • Gandhi Nagar Club, Adyar",
    category: "Family",
    tag: "3 photos",
  },
  {
    id: 3,
    src: "/images/gallery-gallery-event-2-image-0.webp",
    title: "Monthly Breakfast Meet",
    details: "August 3, 2025 • Geetham Veg Restaurant",
    category: "Professional",
    tag: "17 photos",
  },
  {
    id: 4,
    src: "/images/gallery-gallery-event-0-bulk-1760353126875-16.webp",
    title: "Mr. Velayutham Felicitation",
    details: "August 30, 2024 • Indian Officers Association Auditorium",
    category: "Community",
    tag: "22 photos",
  },
];

const categoryColors = {
  "All Events": "bg-slate-100 text-slate-700",
  Family: "bg-blue-100 text-blue-700",
  Professional: "bg-emerald-100 text-emerald-700",
  Community: "bg-fuchsia-100 text-fuchsia-700",
};

export default function GalleryPage() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState(null);

  const filtered = filter === "All" ? gallery : gallery.filter((g) => g.category === filter);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "25px 25px" }} />
        <div className="container-custom relative text-center">
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-semibold px-4 py-2 rounded-full mb-5">Our Memories</span>
          <h1 className="text-white font-bold mb-4" style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Photo Gallery
          </h1>
          <p className="text-primary-100 text-lg max-w-xl mx-auto">
            Glimpses of our vibrant community life — celebrations, service, and togetherness.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-16 z-30 bg-white/95 backdrop-blur-sm">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
                  filter === cat ? "bg-primary-600 text-white shadow-md" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid gap-6 lg:grid-cols-2">
            {filtered.map((item) => (
              <div
                key={item.id}
                className="rounded-[32px] bg-white shadow-2xl overflow-hidden border border-slate-200 cursor-pointer group"
                onClick={() => setLightbox({ src: item.src, alt: item.title })}
              >
                <div className="relative overflow-hidden h-72">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-slate-950/80 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                    {item.tag}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-slate-950 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm mb-4">{item.details}</p>
                  <div className="flex items-center justify-between">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryColors[item.category]}`}>
                      {item.category}
                    </span>
                    <span className="text-primary-600 text-xs font-semibold">View Gallery →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10" onClick={() => setLightbox(null)}>
            <X size={32} />
          </button>
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} className="max-w-full max-h-[88vh] rounded-2xl shadow-2xl" />
            <p className="text-white/70 text-center text-sm mt-3">{lightbox.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
