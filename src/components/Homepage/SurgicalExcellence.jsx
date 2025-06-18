"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Head from "next/head";

const SurgicalExcellence = () => {
    const router = useRouter();
  return (
    <>
{/* ✅ SEO Meta Tags */}
<Head>
  <title>Contact Dr. Shazia Waghoo | Expert Laparoscopic Surgeon</title>
  <meta
    name="description"
    content="Get in touch with Dr. Shazia Waghoo – a trusted expert in hernia, breast, and laparoscopic surgery. Book appointments, ask queries, or visit her clinic for quality surgical care."
  />
  <meta
    name="keywords"
    content="Dr Shazia Waghoo, contact surgeon, laparoscopic surgery contact, hernia specialist India, female surgeon consultation, surgical care India, appointment Dr Waghoo, best surgeon contact, breast surgery doctor, surgical excellence contact"
  />
  <meta name="author" content="Dr. Shazia Waghoo" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://drshaziawaghoosurgery.com/contact" />

  {/* ✅ Open Graph (for social media sharing) */}
  <meta property="og:title" content="Contact Dr. Shazia Waghoo | Surgical Expert in India" />
  <meta
    property="og:description"
    content="Reach out to Dr. Shazia Waghoo for expert consultation in laparoscopic, hernia, and breast surgeries. Schedule your appointment today."
  />
  <meta property="og:image" content="https://drshaziawaghoosurgery.com/og-image.jpg" />
  <meta property="og:url" content="https://drshaziawaghoosurgery.com/contact" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="en_IN" />

  {/* ✅ Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Contact Dr. Shazia Waghoo | Surgery Specialist India" />
  <meta
    name="twitter:description"
    content="Consult with Dr. Shazia Waghoo for laparoscopic, hernia, or breast surgery. Book an appointment or send your queries online."
  />
  <meta name="twitter:image" content="https://drshaziawaghoosurgery.com/og-image.jpg" />

  {/* ✅ Structured Data (Local Business Schema) */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Physician",
        "name": "Dr. Shazia Waghoo",
        "url": "https://drshaziawaghoosurgery.com",
        "image": "https://drshaziawaghoosurgery.com/og-image.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Clinic Address Here",
          "addressLocality": "City Name",
          "addressRegion": "MH",
          "postalCode": "400000",
          "addressCountry": "IN"
        },
        "email": "drshazia@example.com",
        "telephone": "+91 9876543210",
        "medicalSpecialty": [
          "Laparoscopic Surgery",
          "Hernia Surgery",
          "Breast Surgery"
        ],
        "availableService": {
          "@type": "MedicalProcedure",
          "name": "Minimally Invasive Surgery"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "contactType": "Appointment Booking",
          "telephone": "+91 9876543210",
          "areaServed": "IN",
          "availableLanguage": ["English", "Hindi"]
        }
      }
    `}
  </script>
</Head>

{/* main code start from here */}
    <section className="bg-white min-h-screen relative w-full max-w-screen overflow-hidden pt-24 md:pt-28">
      {/* Image Container */}
      <div className="relative w-full h-[87vh] md:min-h-screen">
        <Image
          src="/hero4.png" // Place this image in public/
          alt="Surgical Background"
          layout="fill"
          objectFit="cover"
          className="md:block z-0 "
          priority
        />
  {/* overlay */}
<div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>


        {/* Text Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4">
       <h1 className="text-white text-[53px] font-semibold leading-snug text-center font-inter">
  <span className="block">Immersive Surgical Care</span>
  <span className="block mt-1">Using Advanced Surgery</span>
  <span className="block mt-1">Modalities.</span>
</h1>


          <button className="mt-14 bg-[#0085DC] hover:bg-yellow-500 text-white font-semibold py-4 px-9 rounded-md transition duration-300" onClick={() => router.push('/contactus')}>
            BOOK AN APPOINTMENT
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default SurgicalExcellence;


