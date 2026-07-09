import { Metadata } from "next";
import ServicesClient from "@/components/ServicesClient";

export const metadata: Metadata = {
  title: "Dental Services in Ahmedabad | Dr. Bhavya Shah's Dental Clinic",
  description: "Comprehensive dental services including implants, root canal, teeth whitening, smile designing, braces, and cosmetic dentistry in Ahmedabad.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
