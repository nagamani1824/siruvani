"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About Us", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Event Calendar", href: "/calendar" },
  { label: "Gallery", href: "/gallery" },
  { label: "Membership", href: "/membership" },
  
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHome && !scrolled ? "bg-transparent py-5" : "bg-slate-950/95 backdrop-blur-xl shadow-lg py-3"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-full bg-primary-600 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-lg" style={{ fontFamily: "Georgia, serif" }}>
                SF
              </span>
            </div>
            <div className="hidden sm:block">
              <p className="font-bold text-base leading-tight text-white" style={{ fontFamily: "Georgia, serif" }}>
                Siruvani Foundation
              </p>
              <p className="text-xs leading-tight text-slate-200">
                CNET Community · Chennai
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex flex-1 justify-center gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                  pathname === link.href
                    ? "text-accent"
                    : "text-slate-200 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/join" className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-accent-dark transition-all duration-200">
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors ${isHome ? "text-white" : "text-slate-700"}`}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-3 pb-4 border-t border-slate-100 animate-slide-down">
            <nav className="flex flex-col gap-1 mt-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-semibold transition-colors ${
                    pathname === link.href
                      ? "text-primary-600 bg-primary-50"
                      : "text-slate-700 hover:text-primary-600 hover:bg-slate-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/membership"
                className="mt-2 btn-primary text-sm text-center"
              >
                Join Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
