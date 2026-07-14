"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Clock, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/services", label: "Services" },
    { path: "/gallery", label: "Gallery" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/faq", label: "FAQ" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-sm font-medium text-center flex items-center justify-center gap-2 z-50 relative">
        <Clock className="w-4 h-4" />
        <span>Clinic Timings: 09:00 AM - 1:30 PM, 05:00 PM - 09:00 PM</span>
      </div>

      {/* Main Header */}
      <header
        className={`fixed top-10 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`flex items-center justify-between rounded-full border border-white/70 bg-white/80 px-4 shadow-[0_10px_35px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 ${
              isScrolled ? "h-16" : "h-20"
            }`}
          >
            {/* Logo and Clinic Brand */}
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="https://horizons-cdn.hostinger.com/05e7eecf-9fbe-4351-a2ae-45a189dacfb0/3a5e757af5352330b939968f8e760ad1.jpg"
                alt="Shanti Dental Clinic Logo"
                className="h-12 w-12 rounded-2xl object-cover shadow-[0_8px_20px_rgba(15,23,42,0.12)] transition-transform duration-300 group-hover:scale-105"
              />
              <div className="hidden sm:block">
                <div className="font-bold text-foreground text-lg leading-tight">
                  Shanti Dental Clinic
                </div>
                <div className="text-xs font-medium text-muted-foreground">
                  Dental Clinic & Implant Centre
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-primary text-white shadow-[0_8px_20px_rgba(15,118,110,0.2)]"
                        : "text-foreground hover:bg-primary/10 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-white/90 text-foreground shadow-sm transition-all duration-200 hover:bg-primary/10 hover:text-primary"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden mt-3 overflow-hidden"
            >
              <div className="mx-4 rounded-3xl border border-white/70 bg-white/90 px-3 py-3 shadow-[0_10px_35px_rgba(15,23,42,0.08)] backdrop-blur-xl">
                <nav className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      href={link.path}
                        className={`block rounded-2xl px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                        isActive
                            ? "bg-primary text-white"
                            : "text-foreground hover:bg-primary/10 hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
