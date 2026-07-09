"use client";

import { createContext, useContext, useState } from "react";
import BookingModal from "@/components/BookingModal";
import FloatingCTA from "@/components/FloatingCTA";

const BookingContext = createContext<{ openBookingModal: () => void }>({
  openBookingModal: () => {},
});

export const useBooking = () => useContext(BookingContext);

export function BookingProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openBookingModal = () => setIsOpen(true);
  const closeBookingModal = () => setIsOpen(false);

  return (
    <BookingContext.Provider value={{ openBookingModal }}>
      {children}
      <FloatingCTA onBookAppointment={openBookingModal} />
      <BookingModal isOpen={isOpen} onClose={closeBookingModal} />
    </BookingContext.Provider>
  );
}
