import { Metadata } from "next";
import ContactClient from "@/components/ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | Dr. Bhavya Shah's Dental Clinic",
  description: "Get in touch with Dr. Bhavya Shah's Dental Clinic in Ahmedabad. Visit us, call, or email for appointments and inquiries.",
};

export default function ContactPage() {
  return <ContactClient />;
}
