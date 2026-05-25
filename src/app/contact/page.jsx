"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle, Send } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Our Location",
    lines: ["Chennai, Tamil Nadu, India", "Serving Coimbatorians across the city"],
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 XXXXX XXXXX", "Mon–Sat, 9AM–6PM"],
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@siruvanifoundation.com", "We reply within 24 hours"],
  },
  {
    icon: Clock,
    title: "Office Hours",
    lines: ["Monday – Saturday", "9:00 AM – 6:00 PM"],
  },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-gradient-to-br from-primary-900 via-primary-700 to-primary-600 overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "25px 25px" }} />
        <div className="container-custom relative text-center">
          <span className="inline-block bg-white/15 border border-white/25 text-white text-xs font-semibold px-4 py-2 rounded-full mb-5">Get In Touch</span>
          <h1 className="text-white font-bold mb-4" style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            Contact Us
          </h1>
          <p className="text-primary-100 text-lg max-w-xl mx-auto">
            Have questions about membership or events? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-14 bg-white border-b border-slate-100">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map(({ icon: Icon, title, lines }) => (
              <div key={title} className="card p-6 text-center hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-primary-600" />
                </div>
                <h4 className="font-bold text-slate-800 mb-2 text-sm">{title}</h4>
                {lines.map((line, i) => (
                  <p key={i} className={`text-xs ${i === 0 ? "text-slate-700 font-medium" : "text-slate-500"}`}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Form */}
            <div>
              <h2 className="section-title mb-2">Send Us a Message</h2>
              <p className="text-slate-600 mb-8">Fill in the form and our team will get back to you shortly.</p>

              {sent ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <CheckCircle size={40} className="text-green-500 mx-auto mb-3" />
                  <h3 className="font-bold text-slate-800 mb-2">Message Sent!</h3>
                  <p className="text-slate-600 text-sm mb-4">Thank you for reaching out. We'll reply within 24 hours.</p>
                  <button onClick={() => { setSent(false); setForm({ name: "", email: "", phone: "", subject: "", message: "" }); }} className="btn-outline text-sm">
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="form-label">Your Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} type="text" placeholder="Your full name" className="form-input" required />
                    </div>
                    <div>
                      <label className="form-label">Phone Number</label>
                      <input name="phone" value={form.phone} onChange={handleChange} type="tel" placeholder="+91 XXXXX XXXXX" className="form-input" />
                    </div>
                  </div>
                  <div>
                    <label className="form-label">Email Address *</label>
                    <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="your@email.com" className="form-input" required />
                  </div>
                  <div>
                    <label className="form-label">Subject</label>
                    <select name="subject" value={form.subject} onChange={handleChange} className="form-input">
                      <option value="">Select a subject</option>
                      <option value="membership">Membership Enquiry</option>
                      <option value="event">Event Information</option>
                      <option value="volunteer">Volunteering</option>
                      <option value="donation">Donation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="form-label">Message *</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Tell us how we can help you..." className="form-input resize-none" required />
                  </div>
                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                    <Send size={16} /> Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Map + Info */}
            <div className="space-y-6">
              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden shadow-md h-72 bg-slate-200 relative">
                <iframe
                  title="Siruvani Foundation Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497698.2089637047!2d79.87232809453124!3d13.047672792764624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Quick Links */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <h4 className="font-bold text-slate-800 mb-4 text-base">Quick Actions</h4>
                <div className="space-y-3">
                  {[
                    { label: "Become a Member", href: "/join", primary: true },
                    { label: "View Upcoming Events", href: "/events", primary: false },
                    { label: "See Our Gallery", href: "/gallery", primary: false },
                  ].map((action) => (
                    <a
                      key={action.label}
                      href={action.href}
                      className={`block text-center py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 ${
                        action.primary
                          ? "bg-primary-600 text-white hover:bg-primary-700"
                          : "border border-slate-200 text-slate-700 hover:border-primary-300 hover:text-primary-600"
                      }`}
                    >
                      {action.label}
                    </a>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="bg-primary-50 rounded-2xl border border-primary-100 p-6">
                <h4 className="font-bold text-primary-700 mb-3 text-sm">Follow Us on Social Media</h4>
                <p className="text-slate-600 text-xs mb-4 leading-relaxed">
                  Stay updated with our latest events, photos, and announcements on social media.
                </p>
                <div className="flex gap-3">
                  {['Facebook', 'Instagram', 'YouTube', 'Twitter'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="flex-1 text-center py-2 bg-white border border-primary-200 rounded-lg text-xs font-semibold text-primary-600 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all duration-200"
                    >
                      {platform.slice(0, 2)}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
