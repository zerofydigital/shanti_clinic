import { Metadata } from "next";
import TestimonialsClient from "@/components/TestimonialsClient";

export const metadata: Metadata = {
  title: "Patient Testimonials | Dr. Bhavya Shah's Dental Clinic",
  description: "Read reviews from our satisfied patients about their dental treatment experiences at Dr. Bhavya Shah's clinic in Ahmedabad.",
};

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}
