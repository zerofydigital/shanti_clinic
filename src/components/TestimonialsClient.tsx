"use client";

import { motion } from "framer-motion";
import { Star, MessageSquare } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function TestimonialsClient() {
  const { openBookingModal } = useBooking();

  const testimonials = [
    {
      name: "Amit Patel",
      text: "I was terrified of root canal treatment, but Dr. Bhavya Shah made it completely painless. The entire procedure was smooth and I felt no discomfort at all. Highly recommend this clinic for anyone with dental anxiety.",
      rating: 5,
    },
    {
      name: "Neha Sharma",
      text: "The smile designing service exceeded my expectations. Dr. Shah understood exactly what I wanted and delivered perfect results. My confidence has increased tremendously. Thank you for the beautiful smile!",
      rating: 5,
    },
    {
      name: "Rajesh Mehta",
      text: "Best dental implant clinic in Ahmedabad. The technology they use is top-notch and the staff is very professional. My implants look and feel completely natural. Worth every penny.",
      rating: 5,
    },
    {
      name: "Priya Desai",
      text: "Very comfortable treatment experience. The clinic is modern, clean, and the team makes you feel at ease. Dr. Shah explained everything clearly before starting. I will definitely return for future dental needs.",
      rating: 5,
    },
    {
      name: "Karan Joshi",
      text: "Affordable and professional service. I got my teeth whitening done here and the results are amazing. The pricing is very reasonable compared to other clinics and the quality is excellent.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Banner */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1
              className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance"
              style={{ letterSpacing: "-0.02em" }}
            >
              Patient testimonials
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Read reviews from our satisfied patients about their dental treatment experiences at our clinic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Cards Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, index) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass rounded-2xl p-8 hover:shadow-soft-lg transition-all duration-300 flex flex-col h-full relative"
              >
                {/* Quote Icon Background */}
                <MessageSquare className="w-12 h-12 text-primary/5 absolute top-6 right-6 pointer-events-none" />

                {/* Rating Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-accent fill-accent" />
                  ))}
                </div>

                {/* Text Copy */}
                <p className="text-muted-foreground leading-relaxed flex-grow italic mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Patient Profile info */}
                <div className="pt-4 border-t border-border flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary text-white font-bold flex items-center justify-center shadow-soft">
                    {t.name[0]}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{t.name}</h4>
                    <p className="text-xs text-muted-foreground">Verified Patient</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Want a stress-free dental session?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join our happy patients. Let Dr. Bhavya Shah provide you with painless, professional treatments.
            </p>
            <button
              onClick={openBookingModal}
              className="inline-flex items-center justify-center h-14 px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold text-lg rounded-xl transition-all duration-200 active:scale-[0.98] shadow-soft"
            >
              Book your appointment
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
