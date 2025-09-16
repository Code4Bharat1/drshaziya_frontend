import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Script from "next/script";


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
  title: "Dr. Shaziya Waghoo | Laparoscopic, Hernia & Breast Surgeon in Mumbai",
  description:
    "Dr. Shaziya Waghoo – trusted lady laparoscopic surgeon in Mumbai, expert in hernia & breast surgeries. Serving Kurla & across Mumbai.",
  // keywords: [
  //   "Dr Shaziya Waghoo",
  //   "Hernia doctor",
  //   "Best doctor in kurla west",
  //   "best doctor in kurla east",
  //   "best doctor in kurla",
  //   "best lady doctor in kurla",
  //   "best lady doctor in mumbai",
  //   "Breast Surgeon ladies",
  //   "ladies doctor for hernia",
  //   "hernia lady doctor in mumbai",
  //   "Laparoscopic Surgeon in Kurla",
  //   "Laparoscopic Surgeon in Mumbai",
  //   "Hernia Surgeon in Kurla",
  //   "Hernia Surgeon in Mumbai",
  //   "Breast Surgeon in Kurla",
  //   "Breast Surgeon in Mumbai",
  //   "Best Laparoscopic Surgeon in Mumbai",
  //   "Best Hernia Surgeon in Mumbai",
  //   "Best Breast Surgeon in Mumbai",
  //   "ladies doctor for breast surgery",
  //   "ladies doctor for laparoscopic surgery",
  //   "doctor for laparoscopic surgery in mumbai",
  //   "doctor for hernia surgery in mumbai",
  //   "doctor for breast surgery in mumbai",
  //   "dr shaziya waghoo reviews",
  //   "dr shaziya waghoo",
  //   "dr shaziya waghoo contact",
  //   "dr shaziya waghoo appointment",
  //   "dr shaziya waghoo address",
  //   "dr shaziya waghoo phone number",
  //   "dr shaziya waghoo email",
  //   "dr shaziya waghoo website",
  //   "dr shaziya waghoo fees",
  //   "dr shaziya waghoo consultation",
  //   "dr shaziya waghoo clinic",
    
  
  // ],
keywords:["Laparoscopic Surgeon Mumbai",
 "Hernia Surgeon Mumbai",
 "Breast Surgeon Mumbai",
" Minimally Invasive Surgeon Mumbai",

 "Laparoscopic Surgery in Mumbai",
" Hernia Surgery in Mumbai",
 "Breast Surgery in Mumbai",
"Hernia Surgeon Kurla",
 "Laparoscopic Surgeon Kurla",
 "Best Breast Surgeon Kurla",
 "General Surgeon Kurla East / Kurla West",
 "Lady Surgeon Kurla",
 "Best lady doctor for hernia in Mumbai",
 "Best lady doctor for breast surgery Mumbai",
"Dr Shazia Waghoo Laparoscopic Surgeon",
 "Dr Shazia Waghoo Hernia Surgeon",
 "Dr Shazia Waghoo Breast Surgeon",
 "Dr Shazia Waghoo reviews",
 "Dr Shazia Waghoo clinic contact",
 "Dr Shazia Waghoo fees",
 "Dr Shazia Waghoo appointment",
"Combination & long-tail	 Female laparoscopic surgeon in Mumbai",
 "Female hernia surgeon Kurla",
 "Breast surgery by lady surgeon Mumbai",
 "Hernia surgery cost Mumbai",
 "Laparoscopic hernia surgery best doctor near Kurla",
 "Breast cancer surgery lady surgeon Mumbai",
 ] ,// ✅ Use ONE main domain

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

          {/* <Script id="schema-doctor" type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Physician",
            "name": "Dr. Shaziya Waghoo",
            "image": "https://drshaziawaghoo.com/og-image.jpg",
            "description": "Dr. Shaziya Waghoo is a female laparoscopic surgeon in Mumbai, specializing in hernia & breast surgery.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Kurla",
              "addressRegion": "Maharashtra",
              "addressCountry": "India"
            },
            "url": "https://drshaziawaghoo.com",
            "telephone": "+91-XXXXXXXXXX",
            "medicalSpecialty": [
              "Laparoscopic Surgery",
              "Hernia Surgery",
              "Breast Surgery"
            ]
          }
          `}
        </Script> */}
      </body>
    </html>
  );
}
