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

// ✅ Global Metadata (fixed with metadataBase)
export const metadata = {
  metadataBase: new URL("https://drshaziawaghoosurgery.com"), // 👈 fixes localhost warning
  title: "Dr. Shazia Waghoo | Hernia Surgery in Kurla – 10+ Years Experience",
  description:
    "Expert hernia surgery in Kurla by Dr. Shazia Waghoo. 10+ years of experience in advanced, safe, and minimally invasive hernia treatment.",
  keywords: [
    "Dr Shazia Waghoo",
    "Hernia Kurla",
    "Hernia Surgeon Kurla",
    "Laparoscopic Surgeon Kurla",
    "Best Breast Surgeon Kurla",
    "Dr Shazia Waghoo reviews",
    "Dr Shazia Waghoo appointment",
    "Laparoscopic Surgeon Mumbai",
    "Hernia Surgeon Mumbai",
    "Breast Surgeon Mumbai",
    "Minimally Invasive Surgeon Mumbai",
    "Lady Surgeon Kurla",
    "Best lady doctor for hernia in Mumbai",
    "Best lady doctor for breast surgery Mumbai",
  ],
  openGraph: {
    title: "Dr. Shazia Waghoo – Expert Hernia & Laparoscopic Surgeon in Kurla",
    description:
      "Dr. Shazia Waghoo is a trusted laparoscopic surgeon in Kurla, Mumbai. Specializing in hernia & breast surgeries with 10+ years of experience.",
    url: "https://drshaziawaghoosurgery.com",
    siteName: "Dr. Shazia Waghoo",
    images: [
      {
        url: "/og-image.jpg", // 👈 put this inside /public
        width: 1200,
        height: 630,
        alt: "Dr. Shazia Waghoo - Hernia Surgeon in Kurla",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Shazia Waghoo | Hernia & Laparoscopic Surgeon in Kurla",
    description:
      "Trusted laparoscopic & hernia surgeon in Kurla, Mumbai with 10+ years of experience.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://drshaziawaghoosurgery.com",
  },
  icons: {
    icon: "/logo.ico",
    shortcut: "/logo.ico",
    apple: "/apple-touch-icon.png",
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
        <Footer />

        {/* ✅ JSON-LD Structured Data */}
        <Script
          id="schema-doctor"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            name: "Dr. Shazia Waghoo",
            image: "https://drshaziawaghoosurgery.com/og-image.jpg",
            description:
              "Dr. Shazia Waghoo is a female laparoscopic surgeon in Mumbai, specializing in hernia & breast surgery.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Your Clinic Address, Kurla",
              addressLocality: "Kurla",
              addressRegion: "Maharashtra",
              postalCode: "400070",
              addressCountry: "IN",
            },
            url: "https://drshaziawaghoosurgery.com",
            telephone: "+91-XXXXXXXXXX",
            medicalSpecialty: [
              "Dr.Shazia Waghoo",
              "Laparoscopic Surgery",
              "Hernia Surgery",
              "Breast Surgery",
            ],
            sameAs: [
              "https://www.facebook.com/yourpage",
              "https://www.instagram.com/yourpage",
              "https://www.linkedin.com/in/yourprofile",
            ],
          })}
        </Script>
      </body>
    </html>
  );
}
