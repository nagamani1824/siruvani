"use client";

import Link from "next/link";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container-custom py-14">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-3xl md:text-4xl font-semibold">Bringing Coimbatore to Chennai since 2012</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h3 className="font-semibold text-white text-lg mb-5">Get in touch</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>Siruvani Foundation</li>
              <li>TTK Road, Alwarpet, Chennai, India</li>
              <li>
                <a href="mailto:siruvani.ch@gmail.com" className="hover:text-accent transition-colors duration-200">
                  siruvani.ch@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919876654321" className="hover:text-accent transition-colors duration-200">
                  +91 98766 54321
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white text-lg mb-5">Quick links</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <Link href="/about" className="hover:text-accent transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-accent transition-colors duration-200">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-accent transition-colors duration-200">
                  Event Calendar
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-accent transition-colors duration-200">
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white text-lg mb-5">Legal</h3>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-200">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-accent transition-colors duration-200">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white text-lg mb-5">Community</h3>
            <ul className="space-y-3 text-sm text-slate-300 mb-5">
              <li>
                <Link href="/join" className="hover:text-accent transition-colors duration-200">
                  Membership
                </Link>
              </li>
              <li>
                <Link href="/join" className="hover:text-accent transition-colors duration-200">
                  Join Now
                </Link>
              </li>
            </ul>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent transition-colors duration-200 flex items-center justify-center"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-custom py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Siruvani Foundation. All rights reserved.</p>
          <a href="#top" className="inline-flex items-center justify-center h-11 w-11 rounded-full bg-white/10 text-white hover:bg-accent transition-colors duration-200">
            <span className="text-xl">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
