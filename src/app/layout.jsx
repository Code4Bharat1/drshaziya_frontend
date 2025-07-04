// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import Navbar from "@/components/Layout/Navbar";
// import Footer from "@/components/Layout/Footer";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"], 
// });
// //my metadata
// export const metadata = {
  
//   title: "Dr Shazia Waghoo",
//   icons: {
//     icon: "/logo.ico", 
//   },
//   description: "Generated by create next app",
// };
// // Enhanced metadata for SEO
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       {/* SEO */}
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
      
//         <Navbar />
//         {children}
       
//         <Footer/>
//       </body>
//     </html>
//   );
// }




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
//my metadata
// export const metadata = {
  
//   title: "Dr Shazia Waghoo",
//   icons: {
//     icon: "/logo.ico", 
//   },
//   description: "Generated by create next app",
// };


// Enhanced metadata for SEO
export const metadata = {
  title: "Dr. Shazia Waghoo | Laparoscopic, Hernia & Breast Surgery Specialist",
  description:
    "Dr. Shazia Waghoo is a highly skilled laparoscopic surgeon specializing in hernia, breast, and minimally invasive surgeries. Delivering compassionate, expert care in India.",
  keywords:
    "Dr Shazia Waghoo, Hernia Surgery, Breast Surgeon, Laparoscopic Surgeon, Female Surgeon India, Best Surgeon India, Surgery Specialist, Minimally Invasive Surgery, Women's Health Surgery, General Surgery India, Expert Surgeon Thane, Indian Laparoscopic Surgeon",
  
  metadataBase: new URL("https://drshaziawaghoosurgery.com"),

  openGraph: {
    title: "Dr. Shazia Waghoo – Expert in Hernia, Breast & Laparoscopic Surgery",
    description:
      "Explore Dr. Shazia Waghoo’s excellence in surgical care. Specialized in hernia, breast, and laparoscopic procedures with a patient-first approach.",
    url: "https://drshaziawaghoosurgery.com",
    siteName: "Dr. Shazia Waghoo",
    type: "website",
    images: [
      {
        url: "https://drshaziawaghoosurgery.com/og-image.jpg", // ✅ Place this image in your public folder
        width: 1200,
        height: 630,
        alt: "Dr. Shazia Waghoo - Laparoscopic Surgeon",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dr. Shazia Waghoo | Hernia, Breast & Laparoscopic Surgeon",
    description:
      "Trusted surgical expertise in laparoscopic, hernia, and breast procedures by Dr. Shazia Waghoo. Book your consultation today.",
    site: "@DrShaziaWaghoo", // ✅ Replace with actual Twitter handle if available
    images: ["https://drshaziawaghoosurgery.com/og-image.jpg"],
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
    canonical: "https://drshaziawaghoosurgery.com",
  },
};




export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* SEO */}
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
