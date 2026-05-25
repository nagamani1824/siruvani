"use client";

import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";

const events = [
  { id: 1, title: "Pongal Celebration 2025", date: "Jan 14, 2025", time: "9:00 AM", location: "Community Hall, T. Nagar", category: "Festival", status: "completed", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80", description: "Grand annual Pongal celebration with traditional cooking, kolam competitions, and cultural performances for the whole family." },
  { id: 2, title: "Annual Sports Day", date: "Feb 8, 2025", time: "7:00 AM", location: "Nehru Park, Chennai", category: "Sports", status: "completed", image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80", description: "Fun-filled sports activities including cricket, kabaddi, relay races, and games for all age groups." },
  { id: 3, title: "Family Picnic & Get-together", date: "Mar 15, 2025", time: "8:00 AM", location: "ECR Beach, Chennai", category: "Social", status: "completed", image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80", description: "A relaxing day at ECR Beach with games, food stalls, and quality family time for all member families." },
  { id: 4, title: "Cultural Evening & Music Night", date: "Apr 20, 2025", time: "6:00 PM", location: "Bharatiya Vidya Bhavan, Mylapore", category: "Culture", status: "upcoming", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80", description: "An enchanting evening of classical music, dance performances, and cultural showcases by our talented members." },
  { id: 5, title: "Community Service Drive", date: "May 5, 2025", time: "9:00 AM", location: "Government School, Ambattur", category: "Service", status: "upcoming", image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&q=80", description: "Volunteer program distributing school supplies, books, and essentials to underprivileged children." },
  { id: 6, title: "Scholarship Award Ceremony", date: "Jun 10, 2025", time: "4:00 PM", location: "ITC Grand Chola, Chennai", category: "Education", status: "upcoming", image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80", description: "Annual ceremony recognizing and awarding scholarships to deserving students from member families." },
  { id: 7, title: "Karthigai Deepam", date: "Dec 5, 2025", time: "5:30 PM", location: "Community Hall, Anna Nagar", category: "Festival", status: "upcoming", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=600&q=80", description: "Karthigai Deepam celebration with lamp lighting, prayers, and traditional sweets distribution." },
  { id: 8, title: "Children's Day Special", date: "Nov 14, 2025", time: "10:00 AM", location: "VGP Golden Beach", category: "Social", status: "upcoming", image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=600&q=80", description: "A fun-packed day for children with games, competitions, magic shows, and lots of surprises." },
];

const recurringEvent = {
  title: "Monthly Breakfast Meet",
  label: "Breakfast Meet",
  tag: "RECURRENT",
  summary: "Open to all Siruvani members and guests, our breakfast gathering brings people together for warm conversation and community spirit.",
  schedule: "First Sunday of Every Month",
  time: "8:00 AM - 9:30 AM",
  location: "Geetham Veg Restaurant",
  image: "/images/connect-breakfast.webp",
};

const categoryColors = {
  Festival: "bg-orange-100 text-orange-700",
  Sports: "bg-green-100 text-green-700",
  Social: "bg-blue-100 text-blue-700",
  Culture: "bg-purple-100 text-purple-700",
  Service: "bg-rose-100 text-rose-700",
  Education: "bg-amber-100 text-amber-700",
};

export default function EventsPage() {
  const pastEvents = events.filter((event) => event.status === "completed");

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "25px 25px" }} />
        <div className="container-custom relative text-center">
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-semibold px-4 py-2 rounded-full mb-5">Event Calendar</span>
          <h1 className="text-white font-bold mb-4" style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            2026 Event Calendar
          </h1>
          <p className="text-primary-100 text-lg max-w-xl mx-auto">
            From cultural festivals to community service, discover what’s planned for our members this year.
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] items-start">
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Past Events</h2>
                <p className="mt-3 text-slate-600 max-w-2xl">
                  A look back at the moments that brought our community together in 2025.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {pastEvents.map((event) => (
                  <div key={event.id} className="rounded-[28px] bg-white p-6 shadow-lg border border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-slate-500 text-xs uppercase tracking-[0.2em]">{event.date}</p>
                        <h3 className="text-xl font-semibold text-slate-900 mt-2">{event.title}</h3>
                      </div>
                      <span className="rounded-full bg-fuchsia-100 text-fuchsia-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em]">
                        {event.category}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-5">{event.description}</p>
                    <div className="text-xs text-slate-500 space-y-2">
                      <div className="flex items-center gap-2">
                        <Clock size={12} className="text-primary-500" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={12} className="text-primary-500" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="rounded-[32px] bg-white shadow-2xl border border-slate-200 p-8">
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">{recurringEvent.label}</p>
                <h2 className="text-3xl font-bold text-slate-900 mt-3">Recurring</h2>
              </div>
              <p className="text-slate-600 leading-relaxed mb-6">{recurringEvent.summary}</p>
              <div className="space-y-4 text-slate-700">
                <div className="rounded-3xl border border-slate-100 bg-slate-50 p-5">
                  <p className="text-sm font-semibold text-slate-900">{recurringEvent.schedule}</p>
                  <p className="mt-2 text-sm text-slate-600">{recurringEvent.time}</p>
                  <p className="mt-1 text-sm text-slate-600">{recurringEvent.location}</p>
                </div>
                <ul className="space-y-3 text-sm leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary-600" />
                    <span>Breakfast meetings on the first Sunday of every month.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary-600" />
                    <span>Open to members and guests for warm conversation and community spirit.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary-600" />
                    <span>Held at Geetham Veg Restaurant with a welcoming atmosphere.</span>
                  </li>
                </ul>
              </div>
              <div className="flex justify-between items-center gap-4">
                <span className="rounded-full bg-fuchsia-100 text-fuchsia-700 px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em]">
                  {recurringEvent.tag}
                </span>
                <button className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-5 py-3 text-sm font-semibold text-white hover:bg-primary-700 transition-all duration-200">
                  View Details <ArrowRight size={16} />
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
