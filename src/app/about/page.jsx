"use client";

import { useInView } from "react-intersection-observer";
import { Users, Globe, Star, Heart, Target, Eye } from "lucide-react";

const team = [
  { name: "Krishnamurthy V.", role: "President", avatarImage: "/images/about-member1.webp", desc: "Leading with vision for 5+ years" },
  { name: "Suresh Babu R.", role: "Secretary", avatarImage: "/images/about-member2.webp", desc: "Organizing community since 2016" },
  { name: "Meenakshi A.", role: "Treasurer", avatarImage: "/images/about-member3.webp", desc: "Managing funds with transparency" },
  { name: "Rajan P.", role: "Cultural Head", avatarImage: "/images/about-member4.webp", desc: "Keeping our traditions alive" },
  { name: "Priya K.", role: "Social Media", avatarImage: "/images/murali-mahadevan.webp", desc: "Connecting the community online" },
  { name: "Arumugam S.", role: "Events Coordinator", avatarImage: "/images/venkatesh.webp", desc: "Making every event memorable" },
];

const milestones = [
  { year: "2014", event: "Foundation established with 50 founding families" },
  { year: "2015", event: "First Annual Pongal Celebration with 200 attendees" },
  { year: "2016", event: "Launched Scholarship Fund for students" },
  { year: "2018", event: "Crossed 300 member families milestone" },
  { year: "2020", event: "Virtual community events during pandemic" },
  { year: "2022", event: "Community Service Wing established" },
  { year: "2024", event: "500+ families — decade of togetherness celebrated" },
];

export default function AboutPage() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative pt-24 pb-20 bg-slate-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900" />
        <div className="container-custom relative text-center">
          <span className="inline-block bg-slate-800/60 border border-slate-700 text-slate-200 text-xs font-semibold px-4 py-2 rounded-full mb-5">About Us</span>
          <h1 className="text-white font-bold mb-4" style={{ fontFamily: "Playfair Display, Georgia, serif", fontSize: "clamp(2rem, 5vw, 3.5rem)" }}>
            From Crisis to Community
          </h1>
          
        </div>
        
      </section>


      <section className="py-20 bg-sky-100">
        <div className="container-custom">
          <img src="/images/story-image.webp" alt="Community gathering" className="mx-auto rounded-2xl shadow-lg mt-6 w-full max-w-3xl object-cover" />

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] items-center">
            <div className="space-y-6 text-slate-900">
              <p className="text-lg leading-relaxed max-w-2xl">
                Siruvani was born in 2012 to unite Coimbatorians living in Chennai. It aimed to bring together families sharing a common heritage and create a supportive community far from home. During the devastating 2015-16 Chennai floods, Siruvani made a substantial impact. When a few Coimbatorian families came together to provide relief and support, they discovered something beautiful: the power of community.
              </p>
              <p className="text-lg leading-relaxed max-w-2xl">
                What began as an emergency response evolved into something much deeper - a bonded family of families who celebrate together, support each other, and preserve the rich cultural heritage of Coimbatore while embracing their new life in Chennai.
              </p>
              <p className="text-lg leading-relaxed max-w-2xl">
                Today, Siruvani Foundation is a thriving community of 500+ families across Chennai, united by shared roots, mutual support, and the joy of celebrating our Coimbatorian identity together. Our journey from crisis to community is a testament to the strength of togetherness and the enduring spirit of our people.
              </p>
              
      
             
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white ">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] mb-16">
            <div className="space-y-8">
              <div className="overflow-hidden rounded-[32px] bg-white shadow-lg">
                <div className="overflow-hidden rounded-t-[24px]">
                  <img src="/images/about-vision.webp" alt="Our Vision"  className="w-full h-100 object-cover" />
                </div>
               
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-primary-50 rounded-2xl p-8 border border-primary-100">
                <div >
                  <Target size={22} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-primary-700 mb-6" style={{ fontFamily: "Georgia, serif" }}>Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  To create a vibrant, inclusive community for Coimbatorian families in Chennai — fostering cultural pride, social connections, and collective welfare through meaningful events and service initiatives.
                </p>
              </div>
             
            </div>

          </div>

        
         
        </div>
      </section>

      <section className="section-padding bg-primary-950 text-blue">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title text-white mb-4">Who We Are Today</h2>
            <p className="max-w-3xl mx-auto text-slate-200 text-lg leading-relaxed">
              A thriving community that bridges the gap between our CNET (Coimbatore, Nilgiris, Erode and Tiruppur) heritage and Chennai life.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-[32px] bg-slate-900/80 border border-white/10 p-6 shadow-xl backdrop-blur-sm">
              <img src="/images/about-feature1.webp" alt="A Network of Families" className="w-full h-52 rounded-3xl object-cover mb-5" />
              <h3 className="text-xl font-semibold text-white mb-2">A Network of Families</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                United by shared CNET roots and Chennai experiences.
              </p>
            </div>
            <div className="rounded-[32px] bg-slate-900/80 border border-white/10 p-6 shadow-xl backdrop-blur-sm">
              <img src="/images/about-feature2.webp" alt="Cultural Exchange Platform" className="w-full h-52 rounded-3xl object-cover mb-5" />
              <h3 className="text-xl font-semibold text-white mb-2">Cultural Exchange Platform</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Where traditions meet modernity and friendships flourish.
              </p>
            </div>
            <div className="rounded-[32px] bg-slate-900/80 border border-white/10 p-6 shadow-xl backdrop-blur-sm">
              <img src="/images/about-feature3.webp" alt="Support System" className="w-full h-52 rounded-3xl object-cover mb-5" />
              <h3 className="text-xl font-semibold text-white mb-2">Support System</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Standing together through life's celebrations and challenges.
              </p>
            </div>
            <div className="rounded-[32px] bg-slate-900/80 border border-white/10 p-6 shadow-xl backdrop-blur-sm">
              <img src="/images/about-feature4.webp" alt="Youth Engagement Space" className="w-full h-52 rounded-3xl object-cover mb-5" />
              <h3 className="text-xl font-semibold text-white mb-2">Youth Engagement Space</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Helping youth connect with their cultural identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-center">
            <div className="max-w-xl">
              <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Growing Impact</span>
              <h2 className="section-title mb-4">Our Growing Impact</h2>
              <p className="text-slate-600 leading-relaxed">
                These numbers reflect the strength, service and spirit of the Siruvani community today.
              </p>
            </div>

            <div className="space-y-5">
              <div className="rounded-3xl bg-primary-700 text-white p-6 shadow-lg">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-4xl font-bold">100+</p>
                    <p className="mt-2 text-sm text-slate-200">Families actively participating</p>
                  </div>
                  <div className="opacity-20 text-6xl">✓</div>
                </div>
              </div>
              <div className="rounded-3xl bg-sky-500 text-white p-6 shadow-lg">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-4xl font-bold">50+</p>
                    <p className="mt-2 text-sm text-slate-100">Successful breakfast meets organized</p>
                  </div>
                  <div className="opacity-20 text-6xl">✓</div>
                </div>
              </div>
              <div className="rounded-3xl bg-slate-400 text-slate-900 p-6 shadow-lg">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-4xl font-bold">5+</p>
                    <p className="mt-2 text-sm">Major annual events celebrated</p>
                  </div>
                  <div className="opacity-20 text-6xl">✓</div>
                </div>
              </div>
              <div className="rounded-3xl bg-slate-400/80 text-slate-900 p-6 shadow-lg">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-4xl font-bold">4</p>
                    <p className="mt-2 text-sm">Multiple community service initiatives</p>
                  </div>
                  <div className="opacity-20 text-6xl">✓</div>
                </div>
              </div>
              <div className="rounded-3xl bg-slate-100 text-slate-900 p-6 shadow-lg">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-4xl font-bold">2</p>
                    <p className="mt-2 text-sm">Educational and cultural programs for youth</p>
                  </div>
                  <div className="opacity-20 text-6xl">✓</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mb-4">Our Leadership Team</h2>
            <p className="section-subtitle">Dedicated volunteers who give their time and heart to serve our community.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member) => (
              <div key={member.name} className="card p-6 text-center hover:-translate-y-1 transition-all duration-300">
                {member.avatarImage ? (
                  <img
                    src={member.avatarImage}
                    alt={`${member.name} portrait`}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4 shadow-md"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {member.avatar}
                  </div>
                )}
                <h4 className="font-bold text-slate-800 mb-0.5">{member.name}</h4>
                <p className="text-primary-600 text-sm font-semibold mb-2">{member.role}</p>
                <p className="text-slate-500 text-xs">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
