"use client";

import Link from "next/link";

export default function GallerySection() {
  const images = [
    "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=800&q=80",
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="section-title">Photo Gallery</h2>
          <p className="section-subtitle">Moments from our recent events</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden shadow-md">
              <img src={src} alt={`Gallery ${i + 1}`} className="w-full h-48 object-cover" />
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link href="/gallery" className="btn-outline">View Full Gallery</Link>
        </div>
      </div>
    </section>
  );
}
