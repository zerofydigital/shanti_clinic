"use client";

import Link from "next/link";
import { useBooking } from "@/context/BookingContext";
import { motion } from "framer-motion";
import {
  Cpu,
  Smile,
  ShieldCheck,
  Stethoscope,
  IndianRupee,
  Heart,
  Activity,
  Award,
  CalendarDays,
  ArrowRight,
  Sparkles,
  Users
} from "lucide-react";
import shravanImage from "@/assets/images/shravan joshi ma.jpeg";
import drashtiImage from "@/assets/images/Drashti Shah.jpeg";

export default function HomeClient() {
  const { openBookingModal } = useBooking();

  const features = [
    {
      icon: Cpu,
      title: "Advanced dental technology",
      description: "State-of-the-art equipment for precise and comfortable treatments",
    },
    {
      icon: Smile,
      title: "Painless treatment",
      description: "Modern techniques ensuring minimal discomfort during procedures",
    },
    {
      icon: ShieldCheck,
      title: "Sterilized clinic",
      description: "Highest standards of hygiene and infection control protocols",
    },
    {
      icon: Stethoscope,
      title: "Expert doctors",
      description: "Highly qualified and experienced dental professionals",
    },
    {
      icon: IndianRupee,
      title: "Affordable pricing",
      description: "Quality dental care at competitive and transparent rates",
    },
    {
      icon: Heart,
      title: "Personalized care",
      description: "Customized treatment plans tailored to your specific needs",
    },
    {
      icon: Activity,
      title: "Modern equipment",
      description: "Latest dental technology for accurate diagnosis and treatment",
    },
    {
      icon: Smile,
      title: "Comfortable experience",
      description: "Relaxing environment designed for your peace of mind",
    },
  ];

  const stats = [
    { value: "2,847", label: "Happy patients" },
    { value: "12+", label: "Years experience" },
    { value: "98.4%", label: "Success rate" },
    { value: "24/7", label: "Emergency care" },
  ];

  const doctorProfiles = [
    {
      name: "Dr. Shravan Joshi",
      role: "Senior Implantologist",
      image: shravanImage.src,
      description:
        "With 30+ years of experience, Dr. Shravan Joshi has successfully handled 1000+ implant cases and is widely respected for full-mouth rehabilitation and advanced implant care across Ahmedabad.",
      highlights: ["30+ years of experience", "1000+ implant cases", "Full-mouth rehabilitation expertise"],
    },
    {
      name: "Dr. Drashti Shah",
      role: "RCT, Crown & Bridge Specialist",
      image: drashtiImage.src,
      description:
        "Dr. Drashti Shah specializes in root canal treatment, crowns, and bridges, with a strong focus on precision, long-term restoration, and patient comfort in complex specialist cases.",
      highlights: ["Specialist in RCT & crowns", "Bridge and restorative care", "Independent management of complex cases"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1629909613638-0e4a1fad8f81"
            alt="Modern dental clinic interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance"
                style={{ letterSpacing: "-0.02em" }}
              >
                Your smile deserves expert dental care
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-prose">
                Advanced dental implants, cosmetic dentistry and smile designing in Ahmedabad
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={openBookingModal}
                  className="inline-flex items-center justify-center h-14 px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold text-lg rounded-xl transition-all duration-200 active:scale-[0.98]"
                >
                  Book appointment
                  <CalendarDays className="ml-2 w-5 h-5" />
                </button>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center h-14 px-8 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20 font-semibold text-lg rounded-xl transition-all duration-200"
                >
                  View services
                </Link>
              </div>
            </motion.div>

            {/* Hero Right Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden lg:block"
            >
              <img
                src="https://horizons-cdn.hostinger.com/05e7eecf-9fbe-4351-a2ae-45a189dacfb0/96203144828e7bcffc8be1c5a4d4aacf.jpg"
                alt="Dr. Bhavya Shah - Expert Dental Surgeon"
                className="rounded-2xl shadow-soft-lg w-full max-w-md ml-auto object-cover aspect-[4/5]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Meet Dr. Bhavya Shah Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform translate-x-4 translate-y-4" />
                <img
                  src="https://horizons-cdn.hostinger.com/05e7eecf-9fbe-4351-a2ae-45a189dacfb0/96203144828e7bcffc8be1c5a4d4aacf.jpg"
                  alt="Dr. Bhavya Shah"
                  className="relative rounded-3xl shadow-soft-lg w-full object-cover aspect-[4/5]"
                />
              </div>
            </motion.div>

            {/* Right Bio Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-7"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Meet Dr. Bhavya Shah
              </h2>
              <p className="text-primary font-medium text-lg mb-6">
                Chief Dental Surgeon & Implantologist
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-lg">
                <p>
                  Dr. Bhavya Shah has worked with many reputed hospitals in East Ahmedabad and is now available in Nikol for evening sessions.
                </p>
                <p>
                  He has successfully completed{" "}
                  <span className="text-primary font-semibold">
                    100+ full mouth crown rehabilitation cases
                  </span>{" "}
                  and has extensive experience in{" "}
                  <span className="text-primary font-semibold">
                    Single Sitting RCT, Dental Implants, Crowns, Bridges, and advanced restorative treatments
                  </span>
                  .
                </p>
                <p>
                  He is supported by a highly skilled team of specialists, including an experienced Pediatric Dentist, Oral Surgeon, Orthodontist, and Implantologist, ensuring precise, comprehensive, and high-quality dental care for every patient.
                </p>
              </div>

              {/* Badges */}
              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="flex items-center gap-2 text-foreground font-medium">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <span>12+ Years Experience</span>
                </div>
                <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-border" />
                <div className="flex items-center gap-2 text-foreground font-medium">
                  <Users className="w-5 h-5 text-accent" />
                  <span>Expert Specialist Team</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specialists Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-3">
              Our team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet the experts behind your care
            </h2>
            <p className="text-lg text-muted-foreground">
              A trusted team of experienced dental professionals working together to deliver comprehensive care.
            </p>
          </div>

          <div className="space-y-12">
            {doctorProfiles.map((doctor, index) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="rounded-[2rem] border border-border/70 bg-white p-8 md:p-10 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
              >
                <div className={`flex flex-col lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : ""} items-center gap-8 lg:gap-12`}>
                  <div className="w-full lg:w-5/12">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-3xl transform translate-x-4 translate-y-4" />
                      <img
                        src={doctor.image}
                        alt={doctor.name}
                        className="relative rounded-3xl shadow-soft-lg w-full object-cover aspect-[4/5]"
                      />
                    </div>
                  </div>

                  <div className="w-full lg:w-7/12">
                    <p className="text-primary font-semibold uppercase tracking-[0.2em] text-sm mb-3">
                      Specialist profile
                    </p>
                    <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-2">
                      {doctor.name}
                    </h3>
                    <p className="text-lg font-medium text-primary mb-5">{doctor.role}</p>
                    <p className="text-base leading-relaxed text-muted-foreground mb-6">
                      {doctor.description}
                    </p>
                    <div className="grid sm:grid-cols-3 gap-3">
                      {doctor.highlights.map((highlight) => (
                        <div
                          key={highlight}
                          className="rounded-2xl bg-muted/60 px-4 py-3 text-sm font-medium text-foreground"
                        >
                          {highlight}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-br from-primary to-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div
                  className="text-4xl md:text-5xl font-bold text-white mb-2"
                  style={{ fontVariantNumeric: "tabular-nums" }}
                >
                  {stat.value}
                </div>
                <div className="text-white/90 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Why choose us for your dental care
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience world-class dental treatment with our commitment to excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-6 rounded-xl bg-muted/50 hover:bg-muted transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-soft">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary via-secondary to-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">
              Ready to transform your smile?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Book your consultation today and take the first step towards a healthier, brighter smile
            </p>
            <button
              onClick={openBookingModal}
              className="inline-flex items-center justify-center h-14 px-8 bg-white text-primary hover:bg-white/90 font-semibold text-lg rounded-xl transition-all duration-200 active:scale-[0.98] shadow-lg"
            >
              Schedule your appointment
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
