"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useBooking } from "@/context/BookingContext";

export default function FaqClient() {
  const { openBookingModal } = useBooking();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Are dental implants painful?",
      answer: "Dental implant procedures are performed under local anesthesia, so you will not feel pain during the treatment. Modern techniques and sedation options ensure maximum comfort. After the procedure, mild discomfort can be managed with prescribed medications. Most patients report that the procedure is much easier than they expected.",
    },
    {
      question: "How long does root canal treatment take?",
      answer: "A typical root canal treatment can be completed in one to two visits, with each session lasting 60 to 90 minutes. The duration depends on the complexity of the case and which tooth is being treated. Front teeth usually require less time than molars. We use advanced rotary endodontic systems to make the procedure faster and more comfortable.",
    },
    {
      question: "Is teeth whitening safe?",
      answer: "Professional teeth whitening performed by a qualified dentist is completely safe. We use clinically approved whitening agents that do not damage tooth enamel. The procedure is customized to your specific needs and sensitivity levels. Results can last from several months to a few years depending on your oral hygiene and lifestyle habits.",
    },
    {
      question: "What is smile designing?",
      answer: "Smile designing is a comprehensive cosmetic dental treatment that combines multiple procedures to create your ideal smile. It may include teeth whitening, veneers, crowns, orthodontics, and gum contouring. We use digital smile design technology to show you a preview of your new smile before starting treatment. The process is completely personalized to match your facial features and preferences.",
    },
    {
      question: "How often should I visit the dentist?",
      answer: "We recommend visiting the dentist every six months for routine checkups and professional cleaning. Regular visits help detect dental problems early when they are easier and less expensive to treat. If you have specific dental conditions or are undergoing treatment, more frequent visits may be necessary. Children, pregnant women, and people with gum disease may need to visit more often.",
    },
  ];

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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
              Frequently asked questions
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Get answers to common questions about dental treatments and procedures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Accordion List */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;
              return (
                <div
                  key={index}
                  className="glass rounded-2xl overflow-hidden hover:shadow-soft transition-all duration-300 border border-border"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-6 text-left font-semibold text-lg text-foreground focus:outline-none transition-colors duration-200 hover:text-primary gap-4"
                  >
                    <span className="flex items-center gap-3">
                      <HelpCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? "transform rotate-180 text-primary" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                      >
                        <div className="p-6 pt-0 text-muted-foreground leading-relaxed text-base border-t border-border/20">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
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
              Still have questions?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team is here to help. Book a consultation and we will contact you shortly to answer all your queries.
            </p>
            <button
              onClick={openBookingModal}
              className="inline-flex items-center justify-center h-14 px-8 bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-white font-semibold text-lg rounded-xl transition-all duration-200 active:scale-[0.98] shadow-soft"
            >
              Ask our experts
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
