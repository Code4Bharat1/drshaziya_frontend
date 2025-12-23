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
    "Consult Dr. Shazia Waghoo – trusted laparoscopic & hernia surgeon in Santacruz, Mumbai. 11+ years of experience in advanced, safe, and minimally invasive treatments.",
 keywords: [
  "Dr Shazia Waghoo",
  "Dr Shazia Waghoo mumbai",
  "Dr Shazia Waghoo surgeon",
  "Dr Shazia Waghoo santacruz east",
  "Dr Shazia Waghoo santacruz west",
  "Dr Shazia Waghoo khar east",
  "Dr Shazia Waghoo khar road",
  "Dr Shazia Waghoo khar west",
  "Dr Shazia Waghoo malad east",
  "Dr Shazia Waghoo malad west",
  "Dr Shazia Waghoo mahalaxmi east",
  "Dr Shazia Waghoo mahalaxmi west",
  "Dr Shazia Waghoo govandi east",
  "Dr Shazia Waghoo govandi west",
  "Dr Shazia Waghoo goregaon east",
  "Dr Shazia Waghoo goregaon west",
  "hernia surgeon khar",
  "laparoscopic surgeon khar",
  "surgeon near khar west",
  "surgeon near khar east",
  "Dr Shazia Waghoo santacruz",
  "surgeon near santacruz",
  "hernia surgeon santacruz west",
  "laparoscopic surgeon santacruz west",
  "best surgeon in santacruz",
  "Dr Shazia Waghoo malad",
  "laparoscopic surgeon malad",
  "hernia surgeon malad",
  "surgeon near malad",
  "best surgeon in malad",
  "Dr Shazia Waghoo goregaon",
  "laparoscopic surgeon goregaon",
  "hernia surgeon goregaon",
  "surgeon near goregaon",
  "best surgeon in goregaon",
  "Dr Shazia Waghoo mahalaxmi",
  "laparoscopic surgeon mahalaxmi",
  "hernia surgeon mahalaxmi",
  "surgeon near mahalaxmi",
  "Dr Shazia Waghoo govandi",
  "laparoscopic surgeon govandi",
  "hernia surgeon govandi",
  "surgeon near govandi",
  "laparoscopic surgeon near me",
  "hernia surgeon near me",
  "surgeon near me",
  "laparoscopic surgeon within 7 km",
  "hernia surgeon within 7 km",
  "best laparoscopic surgeon near me",
  "Dr Shazia Waghoo malad east",
  "Dr Shazia Waghoo malad west",
  "best hernia surgeon malad",
  "laparoscopic surgeon malad",
],

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Dr. Shazia Waghoo – Hernia & Laparoscopic Surgeon in Santacruz, Mumbai",
    description:
      "Trusted hernia & laparoscopic surgeon in Santacruz with 11+ years of expertise. Book your appointment with Dr. Shazia Waghoo today.",
    url: "https://drshaziawaghoo.com/",
    siteName: "Dr. Shazia Waghoo",
    images: [
      {
        url: "https://drshaziawaghoo.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Shazia Waghoo - Hernia Surgeon in Santacruz",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Shazia Waghoo | Hernia & Laparoscopic Surgeon in Santacruz",
    description:
      "Leading female laparoscopic & hernia surgeon in Santacruz, Mumbai with 11+ years of experience.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-clip`}
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
              "Dr. Shazia Waghoo is a laparoscopic surgeon in Mumbai specializing in hernia & breast surgery with 11+ years of experience.",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Santacruz Clinic Address",
              addressLocality: "Santacruz",
              addressRegion: "Maharashtra",
              postalCode: "400070",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "19.06497", // replace with real clinic lat
              longitude: "72.88741", // replace with real clinic lng
            },
          
                      // 🔑 ADD HERE
              serviceArea: {
                "@type": "AdministrativeArea",
                name: [
                  "Malad",
                  "Malad East",
                  "Malad West",
                  "Goregaon",
                  "Goregaon East",
                  "Goregaon West",
                  "Santacruz",
                  "Santacruz East",
                  "Santacruz West",
                  "Khar",
                  "Khar East",
                  "Khar West",
                  "Mahalaxmi",
                  "Mahalaxmi East",
                  "Mahalaxmi West",
                  "Govandi",
                  "Govandi East",
                  "Govandi West",
                  "Bandra",
                  "Bandra West",
                  "Bandra East",
                  "Vile Parle",
                  "Vile Parle East",
                  "Vile Parle West",
                  "Jogeshwari",
                  "Oshiwara",
                  "Ram Mandir",
                  "Andheri West"
                ]
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
