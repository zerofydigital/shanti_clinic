"use client";

import { Phone, MessageCircle, CalendarDays } from "lucide-react";
import { motion } from "framer-motion";

interface FloatingCTAProps {
  onBookAppointment: () => void;
}

export default function FloatingCTA({ onBookAppointment }: FloatingCTAProps) {
  const openWhatsApp = () => {
    const text = encodeURIComponent("Hello Doctor, I want to book an appointment.");
    window.open(`https://wa.me/919173998544?text=${text}`, "_blank");
  };

  return (
    <>
      {/* Mobile Sticky Bottom CTA Bar (visible only on mobile) */}
      <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden glass border-t border-border shadow-soft-lg">
        <div className="grid grid-cols-3 gap-2 p-2">
          {/* Call CTA */}
          <a
            href="tel:+919173998544"
            className="flex flex-col items-center justify-center h-14 rounded-xl bg-primary text-white font-semibold transition-all duration-200 active:scale-95"
          >
            <Phone className="w-5 h-5 mb-1" />
            <span className="text-[10px]">Call now</span>
          </a>

          {/* WhatsApp CTA */}
          <button
            onClick={openWhatsApp}
            className="flex flex-col items-center justify-center h-14 rounded-xl bg-green-600 text-white font-semibold transition-all duration-200 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 mb-1" />
            <span className="text-[10px]">WhatsApp</span>
          </button>

          {/* Book Appointment CTA */}
          <motion.button
            onClick={onBookAppointment}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center justify-center h-14 rounded-xl bg-gradient-to-r from-accent to-yellow-500 text-gray-900 font-semibold transition-all duration-200 active:scale-95 shadow-soft"
          >
            <CalendarDays className="w-5 h-5 mb-1" />
            <span className="text-[10px]">Book now</span>
          </motion.button>
        </div>
      </div>

      {/* Desktop Floating WhatsApp Button (visible only on screens larger than sm) */}
      <motion.button
        onClick={openWhatsApp}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="hidden sm:flex fixed bottom-6 right-6 z-30 w-16 h-16 rounded-full bg-green-600 hover:bg-green-700 text-white items-center justify-center shadow-soft-lg transition-all duration-200 active:scale-95"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </motion.button>
    </>
  );
}
