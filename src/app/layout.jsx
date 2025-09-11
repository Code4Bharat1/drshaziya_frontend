import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"], 
});

// ✅ Enhanced Metadata for SEO
export const metadata = {
  title: "Dr. Shaziya Waghoo | Laparoscopic, Hernia & Breast Surgery Specialist in Mumbai",
  description:
    "Dr. Shaziya Waghoo is a trusted female laparoscopic surgeon in Mumbai, specializing in hernia surgery, breast surgery, and minimally invasive procedures. Serving patients in Kurla, Thane & across Mumbai.",
  keywords: [
    "Dr Shaziya Waghoo",
    "Hernia",
    "Breast Surgeon ladies",
    "ladies doctor for haernia",
    "Laparoscopic Surgeon in Kurla",
    "Laparoscopic Surgeon in Mumbai",
    "Hernia Surgeon in Kurla",
    "Hernia Surgeon in Mumbai",
    "Breast Surgeon in Kurla",
    "Breast Surgeon in Mumbai",
    "Best Laparoscopic Surgeon in Mumbai",
    "Best Hernia Surgeon in Mumbai",
    "Best Breast Surgeon in Mumbai",
    "ladies doctor for breast surgery",
    "ladies doctor for laparoscopic surgery",
    "doctor for laparoscopic surgery in mumbai",
    "doctor for hernia surgery in mumbai",
    "doctor for breast surgery in mumbai",
    "dr shaziya waghoo reviews",
    "dr shaziya waghoo",
    "dr shaziya waghoo contact",
    "dr shaziya waghoo appointment",
    "dr shaziya waghoo address",
    "dr shaziya waghoo phone number",
    "dr shaziya waghoo email",
    "dr shaziya waghoo website",
    "dr shaziya waghoo fees",
    "dr shaziya waghoo consultation",
    "dr shaziya waghoo clinic",
    
  
  ],

  metadataBase: new URL("https://drshaziawaghoo.com"), // ✅ Use ONE main domain

  openGraph: {
    title: "Dr. Shaziya Waghoo – Expert in Hernia, Breast & Laparoscopic Surgery",
    description:
      "Expert care by Dr. Shaziya Waghoo – Mumbai’s trusted surgeon for hernia, breast & laparoscopic surgeries with a patient-first approach.",
    url: "https://drshaziawaghoo.com",
    siteName: "Dr. Shaziya Waghoo",
    type: "website",
    images: [
      {
        url: "https://drshaziawaghoo.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Shaziya Waghoo - Laparoscopic Surgeon in Mumbai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dr. Shaziya Waghoo | Hernia, Breast & Laparoscopic Surgeon",
    description:
      "Trusted surgical expertise in laparoscopic, hernia & breast surgeries by Dr. Shaziya Waghoo in Mumbai. Book a consultation today.",
    site: "@DrShaziyaWaghoo", // Replace with actual handle if available
    images: ["https://drshaziawaghoo.com/og-image.jpg"],
  },

  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/apple-touch-icon.png",
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://drshaziawaghoo.com", // ✅ matches metadataBase
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
