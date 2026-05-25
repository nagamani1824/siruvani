export default function OurStorySection() {
  return (
    <section className="py-20 md:py-28 bg-blue-100" id="our-story">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="flex justify-center">
            <img
              src="/images/story-image.webp"
              alt="Our story - Community gathering under tree"
              className="rounded-3xl shadow-2xl w-full max-w-md h-auto object-cover"
            />
          </div>

          {/* Right - Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-700 mb-6" style={{ fontFamily: "Playfair Display, Georgia, serif" }}>
              Our Story
            </h2>

            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              Founded in 2012, the Siruvani Foundation began as a small gathering of CNET (Coimbatore, Nilgiris, Erode and Tiruppur) families in Chennai. What started as weekend breakfast meets has grown into a vibrant community of over 100 families, celebrating our shared heritage while building new memories.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              Named after the pristine Siruvani River, our foundation represents the spirit of togetherness and the continuous flow of connections that bind us as one family.
            </p>

            <div className="flex gap-4">
              <a href="#about-section" className="btn-primary text-sm py-3 px-6">
                Learn More
              </a>
              <a href="/join" className="btn-outline text-sm py-3 px-6">
                Join Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
