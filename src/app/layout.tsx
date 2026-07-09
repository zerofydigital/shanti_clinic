import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookingProvider } from "@/context/BookingContext";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: {
    default: "Dr. Bhavya Shah's Dental Clinic & Implant Centre | Expert Dental Care in Ahmedabad",
    template: "%s | Dr. Bhavya Shah's Dental Clinic & Implant Centre"
  },
  description: "Advanced dental implants, cosmetic dentistry, and smile designing in Ahmedabad. Expert care with modern technology and painless treatments.",
  metadataBase: new URL("https://www.drbhavyashahdentistry.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Dr. Bhavya Shah's Dental Clinic & Implant Centre | Expert Dental Care in Ahmedabad",
    description: "Advanced dental implants, cosmetic dentistry, and smile designing in Ahmedabad. Expert care with modern technology and painless treatments.",
    url: "https://www.drbhavyashahdentistry.com",
    siteName: "Dr. Bhavya Shah's Dental Clinic & Implant Centre",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} h-full antialiased`}>
      <body className={`${dmSans.className} min-h-full flex flex-col`}>
        <BookingProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </BookingProvider>
      </body>
    </html>
  );
}
