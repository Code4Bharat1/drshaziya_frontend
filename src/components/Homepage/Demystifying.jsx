'use client'
import React from 'react';
import { useRouter } from 'next/navigation';
import Head from "next/head";

const Demystifying = () => {
       const router = useRouter();
  return (
    <>
    {/* SEO start from here */}
    <Head>
  {/* ✅ Basic SEO */}
  <title>Demystifying Surgery with Dr. Shazia Waghoo – Safe & Seamless Surgical Experience</title>
  <meta
    name="description"
    content="Get expert diagnosis and advanced surgical care with Dr. Shazia Waghoo. We simplify the surgical experience and help patients heal faster with personalized treatment."
  />
  <meta
    name="keywords"
    content=" Minimally invasive surgery in Vashi/Santacruz/Khar Best laparoscopic gallbladder surgeon near me Laser surgery for piles in Mumbai suburbs Female gastrointestinal surgeon in Mumbai  General Surgeon in Khar Laparoscopic Surgery in Khar Mumbai Best Female Surgeon in Khar Piles and Fissure Doctor Khar Fistula Treatment Khar Gallbladder Surgery Doctor Khar Hernia Specialist in Khar Mumbai Surgeon near Khar West Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo, Dr Shazia Waghoo Santacruz ,Dr Shazia Waghoo Andheri,Best laparoscopic surgeon in Santacruz  expert surgeon Mumbai, hope through surgery, quality surgical care"
  />
  <meta name="author" content="Dr. Shazia Waghoo" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://drshaziawaghoo.com/" />

  {/* ✅ Open Graph / Facebook */}
  <meta property="og:title" content="Demystifying Surgery with Dr. Shazia Waghoo" />
  <meta
    property="og:description"
    content="Surgery doesn't have to be stressful. Learn how Dr. Shazia Waghoo delivers expert, compassionate care for over 30+ conditions with cutting-edge technologies."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://drshaziawaghoo.com/" />
  <meta property="og:image" content="https://drshaziawaghoosurgery.com/images/drshazia-profile.jpg" />
  <meta property="og:locale" content="en_IN" />

  {/* ✅ Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Demystifying Surgery with Dr. Shazia Waghoo" />
  <meta
    name="twitter:description"
    content="Book a consultation with Dr. Shazia Waghoo for hassle-free surgical care and faster recovery. Personalized treatment across multiple diseases."
  />
  <meta name="twitter:image" content="https://drshaziawaghoosurgery.com/images/drshazia-profile.jpg" />

  {/* ✅ Schema Markup for Doctor */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Shazia Waghoo",
      "description": "Delivering precise and compassionate surgical care with expertise in laparoscopic and laser surgery.",
      "medicalSpecialty": "Surgery",
      "url": "https://drshaziawaghoo.com/",
      "image": "https://drshaziawaghoosurgery.com/images/drshazia-profile.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Andheri | Santacruz",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9833584847",
        "contactType": "Appointment Booking"
      }
    }
    `}
  </script>
</Head>


    {/* main code start from here */}
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-50 px-6 py-12 md:px-16 gap-6">
      
      {/* Left Side */}
      <div className="relative w-full md:w-1/2 flex justify-center">
        {/* Square image */}
     {/* Square image with white overlay */}
<div className="relative">
  <img
    src="/square3.png"
    alt="Square Background"
    className="w-72 h-72 sm:w-80 sm:h-80 md:w-[390px] md:h-[400px] object-cover "
  />
  {/* White overlay */}
  <div className="absolute inset-0 bg-black opacity-20 rounded-lg"></div>
</div>

        {/* Circle image centered */}
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden">
            <img
              src="/circle3.png"
              alt="Dr. Shazia Waghoo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#004979] mb-4 font-inter">
          Demystifying the Surgery experience
        </h2>
        <p className="text-gray-700 mb-6 text-base sm:text-lg leading-relaxed font-inter">
          Surgery may be complex, but getting the right<br />diagnosis and treatment doesn’t have to be a complex process.
          Our aim is to deliver a Seamless<br />Surgical Experience to patients and to help them heal faster.
          Consult <br />with our expert surgeon, Dr. Shazia Waghoo for more than 30+ diseases.
        </p>
        <button className="bg-[#0085DC] text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-900  "   onClick={() => router.push('/contactus')}>
          BOOK AN APPOINTMENT
        </button>
      </div>
    </div>
    </>
  );
};

export default Demystifying;
