"use client";

import { motion } from "framer-motion";
import { useBooking } from "@/context/BookingContext";
import {
  Shield,
  Heart,
  Sparkles,
  Smile,
  Activity,
  Award,
  Layers,
  Skull,
  Baby,
  HeartHandshake,
  RefreshCw,
  AlertTriangle,
  CalendarDays,
  ArrowRight
} from "lucide-react";

export default function ServicesClient() {
  const { openBookingModal } = useBooking();

  const services = [
    {
      icon: Shield,
      title: "Dental implants",
      description: "Permanent tooth replacement solution with titanium implants that look and function like natural teeth",
    },
    {
      icon: Heart,
      title: "Root canal treatment",
      description: "Painless procedure to save infected teeth and eliminate dental pain with advanced techniques",
    },
    {
      icon: Sparkles,
      title: "Teeth whitening",
      description: "Professional whitening treatments for a brighter, more confident smile in just one session",
    },
    {
      icon: Smile,
      title: "Smile designing",
      description: "Comprehensive cosmetic makeover combining multiple treatments for your perfect smile",
    },
    {
      icon: Activity,
      title: "Invisible braces",
      description: "Clear aligners for discreet orthodontic treatment without traditional metal braces",
    },
    {
      icon: Award,
      title: "Cosmetic dentistry",
      description: "Aesthetic treatments including bonding, contouring, and gum reshaping for beautiful smiles",
    },
    {
      icon: Layers,
      title: "Veneers",
      description: "Thin porcelain shells to correct chips, gaps, and discoloration for a flawless appearance",
    },
    {
      icon: Skull,
      title: "Tooth extraction",
      description: "Safe and comfortable removal of damaged or problematic teeth with minimal discomfort",
    },
    {
      icon: Baby,
      title: "Pediatric dentistry",
      description: "Specialized dental care for children in a friendly, comfortable environment",
    },
    {
      icon: HeartHandshake,
      title: "Gum treatment",
      description: "Treatment for gum disease, recession, and other periodontal conditions",
    },
    {
      icon: RefreshCw,
      title: "Full mouth rehabilitation",
      description: "Comprehensive restoration of all teeth for improved function and aesthetics",
    },
    {
      icon: AlertTriangle,
      title: "Emergency dental care",
      description: "Immediate treatment for dental emergencies, accidents, and severe pain",
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
              Our dental services
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive care for all your dental needs under one roof, using advanced techniques and equipment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="glass rounded-2xl p-6 hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 shadow-soft">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  {/* Title & Desc */}
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow text-sm">
                    {service.description}
                  </p>
                  {/* Action Link to Booking */}
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <button
                      onClick={openBookingModal}
                      className="text-primary font-semibold text-sm hover:text-secondary transition-colors inline-flex items-center gap-1.5"
                    >
                      Book Consultation <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Need customized dental guidance?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule an appointment for a dental checkup and let Dr. Bhavya Shah evaluate your requirements.
          </p>
          <button
            onClick={openBookingModal}
            className="inline-flex items-center justify-center h-12 px-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold rounded-xl transition-all duration-200 active:scale-[0.98]"
          >
            Request Appointment
            <CalendarDays className="ml-2 w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
