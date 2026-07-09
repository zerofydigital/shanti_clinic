"use client";

import { motion } from "framer-motion";
import { useBooking } from "@/context/BookingContext";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import before1 from "@/assets/images/Before-1.png";
import after1 from "@/assets/images/After-1.png";
import before2 from "@/assets/images/before2.jpg";
import after2 from "@/assets/images/after2.jpg";
import before3 from "@/assets/images/before3.jpg";
import after3 from "@/assets/images/after3.jpg";
import before4 from "@/assets/images/before4.jpg";
import after4 from "@/assets/images/after4.jpg";
import before5 from "@/assets/images/before5.jpg";
import after5 from "@/assets/images/after5.jpg";
import before6 from "@/assets/images/before6.jpg";
import after6 from "@/assets/images/after6.jpg";

export default function GalleryClient() {
  const { openBookingModal } = useBooking();

  const galleryItems = [
    { before: before1.src, after: after1.src, title: "Smile Reconstruction Case 1" },
    { before: before2.src, after: after2.src, title: "Cosmetic Restoration Case 2" },
    { before: before3.src, after: after3.src, title: "Dental Implants Case 3" },
    { before: before4.src, after: after4.src, title: "Smile Designing Case 4" },
    { before: before5.src, after: after5.src, title: "Implant Case 5" },
    { before: before6.src, after: after6.src, title: "Orthodontic Case 6" },
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
              Smile transformations
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              See the amazing results our patients have achieved with our expert dental care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Before / After Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col"
              >
                <BeforeAfterSlider
                  beforeImage={item.before}
                  afterImage={item.after}
                  className="aspect-[3/4] w-full max-w-sm mx-auto"
                />
                <h3 className="text-lg font-semibold text-foreground mt-4 text-center">
                  {item.title}
                </h3>
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
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Ready for your transformation?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied patients who have transformed their smiles with our expert care.
            </p>
            <button
              onClick={openBookingModal}
              className="inline-flex items-center justify-center h-14 px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold text-lg rounded-xl transition-all duration-200 active:scale-[0.98] shadow-soft"
            >
              Start your journey
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
