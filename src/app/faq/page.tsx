import { Metadata } from "next";
import FaqClient from "@/components/FaqClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Dr. Bhavya Shah's Dental Clinic",
  description: "Find answers to common questions about dental treatments, procedures, and oral health care at Dr. Bhavya Shah's clinic in Ahmedabad.",
};

export default function FAQPage() {
  return <FaqClient />;
}
