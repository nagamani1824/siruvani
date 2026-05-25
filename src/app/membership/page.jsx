export default function MembershipPage() {
  return (
    <div className="min-h-screen bg-white text-slate-950">
      <section className="relative overflow-hidden pb-16 pt-24 bg-white">
        <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-100/70 blur-3xl" />
        <div className="absolute right-10 top-20 h-56 w-56 rounded-full bg-lime-100/60 blur-3xl" />
        <div className="container-custom relative z-10 px-4">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-700">Membership</p>
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6 text-slate-950">Become a Part of Siruvani Foundation</h1>
            <p className="mx-auto max-w-2xl text-slate-600 text-base md:text-lg leading-relaxed">
              Join a thriving Chennai community of CNET families, professionals and performers. Discover the benefits of membership, upcoming events and how to apply.
            </p>
          </div>
        </div>
      </section>

      <section className="container-custom px-4 pb-20">
        <div className="mx-auto grid gap-8 lg:grid-cols-[1fr_420px] items-center">
          <div className="space-y-6">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-cyan-700">Why Join Siruvani?</p>
            <div className="space-y-4 text-slate-700">
              <p className="flex items-start gap-3"><span className="mt-1 text-cyan-700">→</span>Celebrate your CNET heritage in Chennai</p>
              <p className="flex items-start gap-3"><span className="mt-1 text-cyan-700">→</span>Connect with like-minded families sharing similar values</p>
              <p className="flex items-start gap-3"><span className="mt-1 text-cyan-700">→</span>Access to diverse events and programs</p>
              <p className="flex items-start gap-3"><span className="mt-1 text-cyan-700">→</span>Families to learn, perform and grow</p>
              <p className="flex items-start gap-3"><span className="mt-1 text-cyan-700">→</span>Network with professionals from various industries</p>
              <p className="flex items-start gap-3"><span className="mt-1 text-cyan-700">→</span>Reliable community during personal or professional needs</p>
              <p className="flex items-start gap-3"><span className="mt-1 text-cyan-700">→</span>Make a meaningful impact through community initiatives</p>
            </div>
            <a href="/join" className="inline-flex items-center gap-2 rounded-full bg-cyan-900 px-8 py-3 text-white font-semibold shadow-xl shadow-cyan-200/30 hover:bg-cyan-800 transition">
              Join Now <span aria-hidden="true">→</span>
            </a>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 p-1 shadow-sm">
            <img src="/images/membership-membership-whyjoin.webp" alt="Why join Siruvani" className="h-full w-full object-cover rounded-[26px]" />
          </div>
        </div>
      </section>

      <section className="container-custom px-4 pb-20">
        <div className="mx-auto grid gap-8 lg:grid-cols-[1fr_420px] items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-950">Who Can Join?</h2>
            <p className="text-slate-700 leading-relaxed">
              Siruvani welcomes all families with connections to CNET regions (Coimbatore, Nilgiris, Erode and Tiruppur) - whether you were born there, lived there, worked there, or simply love our culture. What matters is your heart for community and willingness to be part of something beautiful.
            </p>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-slate-50 p-1 shadow-sm">
            <img src="/images/membership-membership-benefits.webp" alt="Who can join" className="h-full w-full object-cover rounded-[26px]" />
          </div>
        </div>
      </section>

      <section className="container-custom px-4 pb-20">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-950">How to Join</h2>
            <p className="mt-2 text-slate-600">Simple 3-step process</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[28px] bg-sky-100 p-8 text-slate-950 shadow-sm">
              <div className="text-4xl font-bold text-sky-700">01</div>
              <h3 className="mt-6 text-xl font-semibold">Fill Application</h3>
              <p className="mt-3 text-slate-700">Complete online membership form with family details.</p>
            </div>
            <div className="rounded-[28px] bg-sky-100 p-8 text-slate-950 shadow-sm">
              <div className="text-4xl font-bold text-sky-700">02</div>
              <h3 className="mt-6 text-xl font-semibold">Application Validation</h3>
              <p className="mt-3 text-slate-700">Members will validate your application and approve.</p>
            </div>
            <div className="rounded-[28px] bg-sky-100 p-8 text-slate-950 shadow-sm">
              <div className="text-4xl font-bold text-sky-700">03</div>
              <h3 className="mt-6 text-xl font-semibold">Welcome Event</h3>
              <p className="mt-3 text-slate-700">Attend your first community event as a new member.</p>
            </div>
          </div>

          <div className="text-center">
            <a href="/join" className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-900 px-8 py-4 text-white text-sm font-semibold shadow-xl shadow-cyan-200/30 hover:bg-cyan-800 transition">
              Join the Siruvani Family Today! <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="container-custom px-4 pb-24">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-slate-200 bg-slate-50 shadow-sm p-10">
          <h2 className="text-3xl font-semibold mb-4 text-slate-950">Membership Overview</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Siruvani membership is designed for families and individuals who want to engage with our cultural events, workshops, and professional network. Members benefit from exclusive gatherings, learning sessions, and a supportive community of peers.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[24px] bg-white border border-slate-200 p-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-950">What You Get</h3>
              <ul className="space-y-3 text-slate-700">
                <li>Priority access to events and workshops</li>
                <li>Community support and networking</li>
                <li>Opportunities to perform and collaborate</li>
              </ul>
            </div>
            <div className="rounded-[24px] bg-white border border-slate-200 p-6">
              <h3 className="text-xl font-semibold mb-3 text-slate-950">How to Join</h3>
              <ul className="space-y-3 text-slate-700">
                <li>Complete the online application</li>
                <li>Share your details and interests</li>
                <li>Attend the membership orientation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
