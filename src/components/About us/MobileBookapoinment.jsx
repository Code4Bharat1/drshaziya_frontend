'use client'
import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Head from 'next/head';


export default function BookAppointmentMobile() {
    const router = useRouter();

  return (
    <>
    {/* SEO start from here */}
    <Head>
  {/* ✅ Basic SEO */}
  <title>Book Appointment – Dr. Shazia Waghoo | Advanced Laparoscopic Surgery</title>
  <meta
    name="description"
    content="Book an appointment with Dr. Shazia Waghoo, a trusted laparoscopic and hernia surgeon. Personalized surgical care with over a decade of expertise."
  />
  <meta
    name="keywords"
    content="Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo surgeon Dr Shazia Waghoo Santacruz  Dr Shazia Waghoo Andheri Dr Shazia laparoscopic surgeon Best laparoscopic surgeon in Santacruz"
  />
  <meta name="author" content="Dr. Shazia Waghoo" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://drshaziawaghoo.com/" />

  {/* ✅ Open Graph Tags */}
  <meta property="og:title" content="Book Appointment – Dr. Shazia Waghoo" />
  <meta
    property="og:description"
    content="Schedule a consultation with Dr. Shazia Waghoo, Mumbai's experienced laparoscopic surgeon. Expert care, patient-focused service."
  />
  <meta property="og:url" content="https://drshaziawaghoo.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://drshaziawaghoosurgery.com/images/book-appointment-cover.jpg" />

  {/* ✅ Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Book Appointment – Dr. Shazia Waghoo" />
  <meta
    name="twitter:description"
    content="Book an appointment for advanced laparoscopic and hernia surgery with Dr. Shazia Waghoo."
  />
  <meta name="twitter:image" content="https://drshaziawaghoosurgery.com/images/book-appointment-cover.jpg" />

  {/* ✅ Optional Schema Markup */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "MedicalClinic",
      "name": "Dr. Shazia Waghoo's Surgery Clinic",
      "url": "https://drshaziawaghoo.com",
      "image": "https://drshaziawaghoosurgery.com/images/book-appointment-cover.jpg",
      "description": "Trusted clinic for laparoscopic, hernia, and breast surgery led by Dr. Shazia Waghoo.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Andheri | Santacruz",
        "addressCountry": "IN"
      },
      "medicalSpecialty": "Laparoscopic Surgery",
      "availableService": {
        "@type": "MedicalProcedure",
        "name": "Laparoscopic and Hernia Surgery"
      }
    }
    `}
  </script>
</Head>


    {/* main code start from here */}
    <div className=" bg-white relative w-full h-[300px] sm:h-[350px] overflow-hidden md:hidden mb-6 mt-6">
      <Image
        src="/book-apoinment.jpg"
        width={1920}
        height={1300}
        alt="Modern hospital background"
        className="absolute top-0 left-0 w-full h-full object-cover"
        priority
      />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0085dc70)]"></div>
      
 {/* White gradient from bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/50 to-transparent z-20"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 sm:px-6 py-6 text-center">
        <div className="max-w-xs">
          <h1 className="text-lg text-center font-bold text-white mb-2 sm:mb-3 leading-tight">
            Dr. Shazia Waghoo's Surgery Clinic
          </h1>
          <p className="text-2xl sm:text-3xl text-white font-semibold mt-4 sm:mt-6 leading-relaxed">
            "Your trusted partner in advanced laparoscopic surgery."
          </p>
          <div className="flex justify-center mt-8 sm:mt-6">
            <button 
              className="bg-[#0085DC] text-white font-bold py-2 sm:py-3 px-4 sm:px-5 rounded text-xs sm:text-sm hover:bg-[#006bb3] transition duration-300 shadow-lg min-w-[140px] sm:min-w-[160px]"
              onClick={() => router.push('/contactus')}
            >
              BOOK AN APPOINTMENT
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}