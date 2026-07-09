import { Metadata } from "next";
import GalleryClient from "@/components/GalleryClient";

export const metadata: Metadata = {
  title: "Before & After Gallery | Dr. Bhavya Shah's Dental Clinic",
  description: "View our dental transformation gallery showcasing successful treatments including implants, whitening, veneers, and smile designing.",
};

export default function GalleryPage() {
  return <GalleryClient />;
}
