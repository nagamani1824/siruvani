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

       <section className="py-16">
        <div className="container-custom">
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white border border-slate-200">
            <div className="md:flex md:items-center">
              <div className="md:w-1/2">
                <img src="/images/events-events-overview.webp" alt="Classical dance performance" className="w-full h-72 md:h-full object-cover" />
              </div>
              <div className="p-8 md:w-1/2">
                <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-4">Cultural Performance</span>
                <h2 className="text-2xl font-bold mb-3">Celebrating Our Heritage Through Dance</h2>
                <p className="text-slate-600 mb-4">Experience vibrant classical and folk dance performances at our upcoming cultural evenings. These performances showcase the talents of our youth and preserve cherished traditions.</p>
                <p className="text-slate-600 mb-6">Join us to applaud local artists, enjoy an evening of music and movement, and connect with community members who keep our cultural legacy alive.</p>
                <a href="/events" className="inline-flex items-center gap-2 text-primary-600 font-semibold">See upcoming performances <ArrowRight size={16} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Cultural Performance Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="rounded-2xl overflow-hidden shadow-lg bg-white border border-slate-200">
            <div className="md:flex md:items-center">
              <div className="md:w-1/2">
                <img src="/images/events-events-cultural-evenings.webp" alt="Classical dance performance" className="w-full h-72 md:h-full object-cover" />
              </div>
              <div className="p-8 md:w-1/2">
                <span className="inline-block text-sm font-semibold text-primary-600 bg-primary-50 px-3 py-1 rounded-full mb-4">Cultural Performance</span>
                <h2 className="text-2xl font-bold mb-3">Celebrating Our Heritage Through Dance</h2>
                <p className="text-slate-600 mb-4">Experience vibrant classical and folk dance performances at our upcoming cultural evenings. These performances showcase the talents of our youth and preserve cherished traditions.</p>
                <p className="text-slate-600 mb-6">Join us to applaud local artists, enjoy an evening of music and movement, and connect with community members who keep our cultural legacy alive.</p>
                <a href="/events" className="inline-flex items-center gap-2 text-primary-600 font-semibold">See upcoming performances <ArrowRight size={16} /></a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
