import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { Fragment } from "react";
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
// export const metadata = {
//   title: "Dr. Shazia Waghoo | Laparoscopic, Hernia & Breast Surgeon in Mumbai",
//   description:
//     "Dr. Shazia Waghoo – trusted lady laparoscopic surgeon in Mumbai, expert in hernia & breast surgeries. Serving Kurla & across Mumbai.",

//   keywords: [
//     "Laparoscopic Surgeon Mumbai",
//     "Hernia Surgeon Mumbai",
//     "Breast Surgeon Mumbai",
//     "Minimally Invasive Surgeon Mumbai",
//     "Laparoscopic Surgery in Mumbai",
//     "Hernia Surgery in Mumbai",
//     "Breast Surgery in Mumbai",
//     "Hernia Surgeon Kurla",
//     "Laparoscopic Surgeon Kurla",
//     "Best Breast Surgeon Kurla",
//     "General Surgeon Kurla East",
//     "General Surgeon Kurla West",
//     "Lady Surgeon Kurla",
//     "Best lady doctor for hernia in Mumbai",
//     "Best lady doctor for breast surgery Mumbai",
//     "Dr Shazia Waghoo Laparoscopic Surgeon",
//     "Dr Shazia Waghoo Hernia Surgeon",
//     "Dr Shazia Waghoo Breast Surgeon",
//     "Dr Shazia Waghoo reviews",
//     "Dr Shazia Waghoo clinic contact",
//     "Dr Shazia Waghoo fees",
//     "Dr Shazia Waghoo appointment",
//     "Female laparoscopic surgeon in Mumbai",
//     "Female hernia surgeon Kurla",
//     "Breast surgery by lady surgeon Mumbai",
//     "Hernia surgery cost Mumbai",
//     "Laparoscopic hernia surgery near Kurla",
//     "Breast cancer surgery lady surgeon Mumbai",
//   ],

//   openGraph: {
//     title: "Dr. Shazia Waghoo – Expert in Hernia, Breast & Laparoscopic Surgery",
//     description:
//       "Expert care by Dr. Shazia Waghoo – Mumbai’s trusted surgeon for hernia, breast & laparoscopic surgeries with a patient-first approach.",
//     url: "https://drshaziawaghoo.com",
//     siteName: "Dr. Shazia Waghoo",
//     type: "website",
//     images: [
//       {
//         url: "https://drshaziawaghoo.com/og-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Dr. Shazia Waghoo - Laparoscopic Surgeon in Mumbai",
//       },


//     ],
//   },

//   twitter: {
//     card: "summary_large_image",
//     title: "Dr. Shazia Waghoo | Hernia, Breast & Laparoscopic Surgeon",
//     description:
//       "Trusted surgical expertise in laparoscopic, hernia & breast surgeries by Dr. Shazia Waghoo in Mumbai. Book a consultation today.",
//     site: "@DrShaziaWaghoo",
//     images: ["https://drshaziawaghoo.com/og-image.jpg"],
//   },

//   icons: {
//     icon: "/logo.ico",
//     shortcut: "/logo.ico",
//     apple: "/apple-touch-icon.png",
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },

//   alternates: {
//     canonical: "https://drshaziawaghoo.com",
//   },
// };

export const metadata = {
  title: "Dr. Shazia Waghoo | Laparoscopic, Hernia & Breast Surgeon in Mumbai",
  description:
    "Dr. Shazia Waghoo – trusted lady laparoscopic surgeon in Mumbai, expert in hernia & breast surgeries. Serving Kurla & across Mumbai.",
  keywords: [
    "Laparoscopic Surgeon Mumbai",
    "Hernia Surgeon Mumbai",
    "Breast Surgeon Mumbai",
    "Minimally Invasive Surgeon Mumbai",
    "Hernia Surgeon Kurla",
    "Laparoscopic Surgeon Kurla",
    "Best Breast Surgeon Kurla",
    "Lady Surgeon Kurla",
    "Dr Shazia Waghoo reviews",
    "Dr Shazia Waghoo appointment",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://drshaziawaghoosurgery.com",
  },
};

// export default function RootLayout({ children }) {
//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "Physician",
//     "name": "Dr. Shazia Waghoo",
//     "url": "https://drshaziawaghoosurgery.com",
//     "image": "https://drshaziawaghoosurgery.com/og-image.jpg",
//     "description": "Trusted laparoscopic, hernia & breast surgeon in Mumbai",
//     "address": {
//       "@type": "PostalAddress",
//       "streetAddress": "Your Clinic Address, Kurla",
//       "addressLocality": "Kurla",
//       "addressRegion": "Mumbai",
//       "postalCode": "400070",
//       "addressCountry": "IN"
//     },
//     "telephone": "+91-XXXXXXXXXX",
//     "sameAs": [
//       "https://www.facebook.com/yourpage",
//       "https://www.instagram.com/yourpage",
//       "https://www.linkedin.com/in/yourprofile"
//     ]
//   };

//    return (
//     <html lang="en">
//       <head>
//         <script
//           type="application/ld+json"
//           dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
//         />
//       </head>
//       <body>{children}</body>
//     </html>
//   );
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />

        <Script id="schema-doctor" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physician",
            name: "Dr. Shazia Waghoo",
            image: "https://drshaziawaghoo.com/og-image.jpg",
            description:
              "Dr. Shazia Waghoo is a female laparoscopic surgeon in Mumbai, specializing in hernia & breast surgery.",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Kurla",
              addressRegion: "Maharashtra",
              addressCountry: "India",
            },
            url: "https://drshaziawaghoo.com",
            telephone: "+91-XXXXXXXXXX",
            medicalSpecialty: [
              "Laparoscopic Surgery",
              "Hernia Surgery",
              "Breast Surgery",
            ],
          })}
        </Script>
      </body>
    </html>
  );
}
