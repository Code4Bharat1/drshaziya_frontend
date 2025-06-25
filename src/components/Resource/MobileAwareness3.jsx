'use client';

import React from 'react';
import Head from 'next/head';

const MobileAwareness3 = () => {
  const lectureImages = [
    '/event1.png',
    '/event2.png',
    '/event3.png',
    '/event4.png',
    '/event5.png',
    '/event6.png',
  ];

  const operationTheatreImages = [
    '/ot1.png',
    '/ot2.png',
    '/ot3.png',
  ];

  return (
    <>

                <Head>
  {/* ✅ Meta Title & Description */}
  <title>Breast Cancer Awareness Drives – Dr. Shazia Waghoo</title>
  <meta
    name="description"
    content="Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo surgeon Dr Shazia Waghoo Santacruz  Dr Shazia Waghoo Andheri Dr Shazia laparoscopic surgeon Best laparoscopic surgeon in Santacruz"
  />
  <meta
    name="keywords"
    content="Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo surgeon Dr Shazia Waghoo Santacruz  Dr Shazia Waghoo Andheri Dr Shazia laparoscopic surgeon Best laparoscopic surgeon in Santacruz"
  />
  <meta name="author" content="Dr. Shazia Waghoo" />
  <link rel="canonical" href="https://drshaziawaghoo.com/" />

  {/* ✅ Open Graph Tags */}
  <meta property="og:title" content="Breast Cancer Awareness Drives – Dr. Shazia Waghoo" />
  <meta
    property="og:description"
    content="Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo surgeon Dr Shazia Waghoo Santacruz  Dr Shazia Waghoo Andheri Dr Shazia laparoscopic surgeon Best laparoscopic surgeon in Santacruz"
  />
  <meta property="og:url" content="https://drshaziawaghoo.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://drshaziawaghoosurgery.com/aware1.png" />

  {/* ✅ Twitter Card Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Breast Cancer Awareness Drives – Dr. Shazia Waghoo" />
  <meta
    name="twitter:description"
    content="Educational and impactful breast cancer awareness drives led by Dr. Shazia Waghoo at Kokan Bank and Asian Paints."
  />
  <meta name="twitter:image" content="https://drshaziawaghoosurgery.com/aware1.png" />

  {/* ✅ JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": "Dr. Shazia Waghoo | Surgical Clinic",
      "url": "https://drshaziawaghoo.com/",
      "image": "https://drshaziawaghoosurgery.com/aware1.png",
      "description": "Dr. Shazia Waghoo's breast cancer awareness drives focus on educating women about early detection and cancer prevention.",
      "location": {
        "@type": "Place",
        "name": "Mumbai, India"
      },
      "event": [
        {
          "@type": "EducationalEvent",
          "name": "Breast Cancer Awareness Lecture at Kokan Cooperative Bank",
          "location": "Mumbai, India"
        },
        {
          "@type": "EducationalEvent",
          "name": "Breast Cancer Awareness Drive at Asian Paints Pvt Ltd",
          "location": "Andheri | Santacruz"
        }
      ]
    }
    `}
  </script>
</Head>

{/* main code start from here */}
    <div className="bg-white pt-6 pb-10 px-4">
      {/* Horizontal line + Heading tightly grouped */}
      <div className="border-t border-[#004979] w-full border-[1.5px] mb-3"></div>
      <p className="text-[#004979] text-[18px] font-bold mb-4">
        Breast illness awareness lecture at Rizvi College, Bandra West
      </p>

      {/* Lecture Images */}
      <div className="grid grid-cols-2 gap-4 mb-10">
        {lectureImages.map((src, index) => (
          <img
            key={`lecture-${index}`}
            src={src}
            alt={`Lecture ${index + 1}`}
            className="w-full h-40 object-cover rounded-md"
          />
        ))}
      </div>

      {/* Operation Theatre Section */}
      <h3 className="text-[22px] font-semibold text-[#004979] text-center mb-4">
        In the Operation Theatre
      </h3>

      <div className="flex flex-col items-center gap-4">
        {operationTheatreImages.map((src, index) => (
          <img
            key={`ot-${index}`}
            src={src}
            alt={`OT ${index + 1}`}
            className="w-3/4 max-w-xs h-48 object-cover rounded-md"
          />
        ))}
      </div>
    </div>
    </>
  );
};

export default MobileAwareness3;
