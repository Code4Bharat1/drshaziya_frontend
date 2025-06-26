"use client";
import React from "react";
import Head from "next/head";


const MobileOurImpact = () => {
  const impactCards = [
    {
      image: "/heart.png",
      count: "2,000+",
      label: "Happy Patients",
    },
    {
      image: "/experience.png",
      count: "10+",
      label: "Years Of Experience",
    },
    {
      image: "/heart-hand.png",
      count: "1,000+",
      label: "Successful Surgeries",
    },
  ];

  const logos = [
    "/imp1.png",
    "/imp2.png",
    "/imp3.png",
    "/imp4.png",
    "/imp5.png",
    "/imp6.png",
    "/imp7.png",
    "/imp8.png",
  ];

  return (
    <>
    {/* SEO start from here */}
    <Head>
  {/* ✅ Basic SEO */}
  <title>Dr. Shazia Waghoo Laparoscopic Surgeon in Andheri and Santacruz</title>
  <meta
    name="description"
    content="Discover the impact of Dr. Shazia Waghoo’s surgical journey – 2,000+ happy patients, 1,000+ successful surgeries, and 10+ years of experience across top hospitals in Mumbai."
  />
  <meta
    name="keywords"
    content=" Minimally invasive surgery in Vashi/Santacruz/Khar Best laparoscopic gallbladder surgeon near me Laser surgery for piles in Mumbai suburbs Female gastrointestinal surgeon in Mumbai Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo, Dr Shazia Waghoo Santacruz ,Dr Shazia Waghoo Andheri,Best laparoscopic surgeon in Santacruz  expert surgeon Mumbai, hope through surgery, quality surgical care"
  />
  <meta name="author" content="Dr. Shazia Waghoo" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://drshaziawaghoo.com/" />

  {/* ✅ Open Graph Meta Tags */}
  <meta property="og:title" content="Our Impact – Dr. Shazia Waghoo’s Legacy in Mumbai" />
  <meta
    property="og:description"
    content="Trusted by thousands, Dr. Shazia Waghoo has made a lasting impact with over 1,000 surgeries and affiliations with Mumbai’s leading hospitals."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://drshaziawaghoo.com/" />
  <meta property="og:image" content="https://drshaziawaghoosurgery.com/heart.png" />
  <meta property="og:locale" content="en_IN" />

  {/* ✅ Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Our Impact – Dr. Shazia Waghoo’s Surgical Journey" />
  <meta
    name="twitter:description"
    content="Explore how Dr. Shazia Waghoo has transformed lives with 2,000+ happy patients and 1,000+ surgeries in Mumbai."
  />
  <meta name="twitter:image" content="https://drshaziawaghoosurgery.com/heart.png" />

  {/* ✅ Structured Data (JSON-LD Schema) */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Our Impact - Dr. Shazia Waghoo",
      "url": "https://drshaziawaghoo.com/",
      "description": "2000+ happy patients, 1000+ surgeries, 10+ years of experience. Discover Dr. Shazia Waghoo’s surgical achievements and trusted hospital affiliations in Mumbai.",
      "mainEntity": {
        "@type": "Person",
        "name": "Dr. Shazia Waghoo",
        "jobTitle": "Laparoscopic, Hernia & Breast Surgeon",
        "url": "https://drshaziawaghoo.com/",
        "worksFor": {
          "@type": "MedicalOrganization",
          "name": "Dr. Shazia Waghoo Surgery Clinic"
        },
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressCountry": "IN"
        },
        "image": "https://drshaziawaghoosurgery.com/heart.png"
      }
    }
    `}
  </script>
</Head>


    {/* main code start from here */}
    <div className="bg-[#F8F9FE] py-6 px-4 text-center block md:hidden">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-[#004979] mx-2 mb-8">
        OUR IMPACT NUMBERS
      </h2>

      {/* Impact Cards */}
      <div className="flex flex-col items-center gap-8 mb-10">
        {impactCards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 w-[280px] min-w-[280px] max-w-[280px] border border-gray-300 text-center"
          >
            <img
              src={card.image}
              alt={card.label}
              className="w-14 h-14 object-contain mb-3 mx-auto"
            />
            <h3 className="text-3xl font-bold">{card.count}</h3>
            <p className="text-base text-gray-900 mt-1">{card.label}</p>
          </div>
        ))}
      </div>

      {/* Affiliation Section */}
      <h3 className="text-2xl font-bold text-[#004979] mb-3">
        Hospital Affiliations
      </h3>
      <p className="text-[#004979] font-semibold  text-base px-2">
        Affiliated with 7+ reputed Hospitals and Clinics in Mumbai
      </p>

      {/* Logo Scroll */}
      {/* <div className="overflow-hidden h-32 mt-10">
        <div className="flex whitespace-nowrap animate-scroll-horizontal items-center">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Hospital logo ${index + 1}`}
              className="w-24 h-24 object-contain rounded-full border p-2 bg-white shadow mx-3"
            />
          ))}
        </div>
      </div> */}

      {/* Animation CSS */}
      {/* <style jsx>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-horizontal {
          animation: scroll-horizontal 7s linear infinite;
        }
      `}</style> */}



      {/* Logo Scroll */}
<div className="overflow-hidden w-full mt-10">
  <div className="scroll-wrapper">
    {[...logos, ...logos].map((logo, index) => (
      <img
        key={index}
        src={logo}
        alt={`Hospital logo ${index + 1}`}
        className="w-20 h-20 object-contain rounded-full border p-2 bg-white shadow mx-4 inline-block"
      />
    ))}
  </div>

  {/* Animation CSS */}
  <style jsx>{`
    .scroll-wrapper {
      display: inline-block;
      white-space: nowrap;
      animation: scroll-horizontal 20s linear infinite;
    }

    @keyframes scroll-horizontal {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `}</style>
</div>

    </div>
    </>
  );
};

export default MobileOurImpact;
