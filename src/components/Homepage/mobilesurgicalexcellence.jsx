

"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import Head from 'next/head';

const MobileSurgicalExcellence = () => {
  const router = useRouter();
  return (
    <>
    {/* SEO start from here */}
      <Head>
        {/* ✅ Basic SEO */}
        <title>Dr. Shazia Waghoo Laparoscopic Surgeon in Andheri and Santacruz</title>
        <meta
          name="description"
          content="Explore mobile-optimized, immersive surgical care with Dr. Shazia Waghoo, featuring modern modalities and compassionate expertise."
        />
        <meta
          name="keywords"
          content=" Minimally invasive surgery in Vashi/Santacruz/Khar Best laparoscopic gallbladder surgeon near me Laser surgery for piles in Mumbai suburbs Female gastrointestinal surgeon in Mumbai Laparoscopic Surgeon in Santacruz Piles Specialist Santacruz Mumbai Fissure and Fistula Doctor in Santacruz Best Female Surgeon in Santacruz General Surgeon near Santacruz West Hernia Operation in Santacruz Gallbladder Removal Surgeon Santacruz Female Proctologist Santacruz
 Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr. Shazia Waghoo, Dr Shazia Waghoo Santacruz Dr Shazia Waghoo Andheri Best laparoscopic surgeon in Santacruz Top hernia specialist Santacruz ,Book appointment Dr Shazia Waghoo, Best surgeon in Santacruz, Lady surgeon Mumbai, Mobile consultation form, Piles treatment Santacruz, Gallbladder stone surgery Santacruz, Laparoscopic surgeon Santacruz, Hernia treatment, Fistula fissure doctor, Breast lump surgeon Santacruz"
        />
        <meta name="author" content="Dr. Shazia Waghoo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://drshaziawaghoo.com/" />

        {/* ✅ Open Graph Meta Tags */}
        <meta property="og:title" content=" Dr. Shazia Waghoo" />
        <meta
          property="og:description"
          content="Book an appointment and experience personalized surgical excellence through advanced techniques by Dr. Shazia Waghoo."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drshaziawaghoo.com/" />
        <meta property="og:image" content="https://drshaziawaghoo.com/hero4.png" />
        <meta property="og:locale" content="en_IN" />

        {/* ✅ Twitter Card Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Immersive Mobile Surgical Experience | Dr. Shazia Waghoo" />
        <meta
          name="twitter:description"
          content="Mobile-friendly advanced surgical care with Dr. Shazia Waghoo – focused on precision, expertise, and compassion."
        />
        <meta name="twitter:image" content="https://drshaziawaghoo.com/hero4.png" />

        {/* ✅ Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "MedicalClinic",
            "name": "Dr. Shazia Waghoo Surgical Care",
            "image": "https://drshaziawaghoo.com/hero4.png",
            "url": "https://drshaziawaghoo.com/",
            "description": "Mobile-optimized page offering immersive surgical care with modern modalities by Dr. Shazia Waghoo in Mumbai.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Mumbai",
              "addressCountry": "IN"
            },
            "medicalSpecialty": "GeneralSurgery"
          }
          `}
        </script>
      </Head>


{/* main code start from here */}
    <section className="relative w-full overflow-hidden pt-8 sm:pt-20 md:hidden ">
      {/* Background Image */}
      <div className="relative w-full h-[349px]">
        <Image
          src="/hero4.png"
          alt="Surgical Background"
          width={1200}
          height={1800}
          className="z-0 h-full"
          priority
        />

        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#069bd6] bg-opacity-35 z-10"></div>

        {/* Text Content */}
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-white mx-18 md-mx-0 text-2xl sm:text-3xl font-semibold leading-snug font-inter mt-9">
            <span className="block">Immersive </span>
            <span className="block mt-1">Surgical Care</span>
            <span className="block mt-1">Using</span>
            <span className="block mt-1"> Advanced </span>
            <span className="block mt-1"> Surgery</span>
            <span className="block mt-1">Modalities.</span>
          </h1>

          <button className="mt-7 bg-[#284578] hover:bg-[#FFB900] text-white font-medium text-sm py-2 px-3 rounded-md transition duration-300" onClick={() => router.push('/contactus')}>
            BOOK AN APPOINTMENT
          </button>
        </div>
      </div>
    </section>
    </>
  );
};

export default MobileSurgicalExcellence;