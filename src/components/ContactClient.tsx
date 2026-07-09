"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Compass } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function ContactClient() {
  const { openBookingModal } = useBooking();

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit us",
      content:
        "GF-36 , Rhythm Plaza , Amar jawan Circle, Sardar Patel Ring Rd, Nikol, Ahmedabad, Gujarat 380049",
      link: null,
    },
    {
      icon: Phone,
      title: "Call us",
      content: "+91 9173998544",
      link: "tel:+919173998544",
    },
    {
      icon: Mail,
      title: "Email us",
      content: "drbhavyashahdentistry@gmail.com",
      link: "mailto:drbhavyashahdentistry@gmail.com",
    },
    {
      icon: Clock,
      title: "Working hours",
      content:
        "Monday - Saturday: 4:30 PM - 9:00 PM\nSunday: By appointment only",
      link: null,
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
              Get in touch
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We&apos;re here to answer your questions and schedule your
              appointment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column: Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <h2 className="text-2xl font-bold text-foreground mb-8">
                Contact information
              </h2>
              <div className="grid gap-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={index}
                      className="glass rounded-2xl p-6 hover:shadow-soft-lg transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        {/* Gradient Icon Holder */}
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 shadow-soft">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        {/* Info details */}
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground mb-2">
                            {item.title}
                          </h3>
                          {item.link ? (
                            <a
                              href={item.link}
                              className="text-muted-foreground hover:text-primary transition-colors break-all text-base md:text-lg"
                            >
                              {item.content}
                            </a>
                          ) : (
                            <p className="text-muted-foreground whitespace-pre-line text-base leading-relaxed">
                              {item.content}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Column: Google Maps Map Frame */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="h-[500px] rounded-2xl overflow-hidden shadow-soft-lg relative group border border-border/50"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1835.7955324313239!2d72.67549540934856!3d23.038804728618178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e874c76e61761%3A0xd4ff5e9133e107ed!2sShanti%20Dental%20Clinic%20Implant%20%26%20Laser%20Center!5e0!3m2!1sen!2sin!4v1783577685794!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. Bhavya Shah's Dental Clinic Location Map"
                className="w-full h-full"
              ></iframe>
              <a
                href="https://www.google.com/maps/search/?api=1&query=GF-36%20Rhythm%20Plaza%20Amar%20jawan%20Circle%20Sardar%20Patel%20Ring%20Rd%20Nikol%20Ahmedabad"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-3 rounded-full font-semibold shadow-lg flex items-center gap-2 hover:bg-primary/90 transition-colors active:scale-95"
              >
                <Compass className="w-5 h-5" />
                Navigate to Clinic
              </a>
            </motion.div>
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
              Ready to visit us?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book your consultation today and take the first step towards a
              healthier, brighter smile.
            </p>
            <button
              onClick={openBookingModal}
              className="inline-flex items-center justify-center h-14 px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold text-lg rounded-xl transition-all duration-200 active:scale-[0.98] shadow-soft"
            >
              Schedule your appointment
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
