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

// ✅ Global Metadata
export const metadata = {
  metadataBase: new URL("https://drshaziawaghoo.com/"),
  title: "Dr. Shazia Waghoo | Best Hernia Surgeon in Santacruz, Mumbai",
  description:
    "Consult Dr. Shazia Waghoo – trusted laparoscopic & hernia surgeon in Kurla, Mumbai. 10+ years of experience in advanced, safe, and minimally invasive treatments.",
  keywords: [
    "Dr Shazia Waghoo",
    "Hernia Surgeon Kurla",
    "Laparoscopic Surgeon Kurla",
    "Best Breast Surgeon Kurla",
    "Lady Surgeon Mumbai",
    "Best lady doctor for hernia in Mumbai",
    "Breast Surgery Kurla",
    "Minimally Invasive Surgeon Mumbai",
    "Best Hernia Treatment Mumbai",
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Dr. Shazia Waghoo – Hernia & Laparoscopic Surgeon in Kurla, Mumbai",
    description:
      "Trusted hernia & laparoscopic surgeon in Kurla with 10+ years of expertise. Book your appointment with Dr. Shazia Waghoo today.",
    url: "https://drshaziawaghoo.com/",
    siteName: "Dr. Shazia Waghoo",
    images: [
      {
        url: "https://drshaziawaghoo.com/og-image.jpg",
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
      "Leading female laparoscopic & hernia surgeon in Kurla, Mumbai with 10+ years of experience.",
    images: ["https://drshaziawaghoo.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://drshaziawaghoo.com/",
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

        {/* ✅ Schema Markup for Local SEO */}
        <Script
          id="schema-doctor"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            name: "Dr. Shazia Waghoo",
            image: "https://drshaziawaghoo.com/og-image.jpg", // fixed image
            description:
              "Dr. Shazia Waghoo is a laparoscopic surgeon in Mumbai specializing in hernia & breast surgery with 10+ years of experience.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Kurla Clinic Address",
              addressLocality: "Kurla",
              addressRegion: "Maharashtra",
              postalCode: "400070",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "19.06497", // replace with real clinic lat
              longitude: "72.88741", // replace with real clinic lng
            },
            url: "https://drshaziawaghoo.com/",
            telephone: "+91-XXXXXXXXXX", // replace with real contact
            medicalSpecialty: [
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
