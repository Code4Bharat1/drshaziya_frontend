'use client';

import React from 'react';
import Head from 'next/head';

const MobileAwareness1 = () => {
  const firstImages = [
    '/aware1.png',
    '/aware2.png',
  ];

  const secondImages = [
    '/aware6.png',
    '/aware4.png',
  ];

  const thirdImages = [
    '/aware5.png',
    '/aware7.png',
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
    content=" General Surgeon in Khar Laparoscopic Surgery in Khar Mumbai Best Female Surgeon in Khar Piles and Fissure Doctor Khar Fistula Treatment Khar Gallbladder Surgery Doctor Khar Hernia Specialist in Khar Mumbai Surgeon near Khar West Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo surgeon Dr Shazia Waghoo Santacruz  Dr Shazia Waghoo Andheri Dr Shazia laparoscopic surgeon Best laparoscopic surgeon in Santacruz"
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


    <div className="bg-white pt-2 pb-4 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-[34px] font-bold text-[#004979] text-center mb-2">
          AWARENESS
        </h2>
        <div className="border-t border-[#004979] w-full mb-6"></div>

        {/* Section 1 */}
        <p className="text-[#004979] font-semibold text-[19px] mb-3">
          Breast cancer awareness lecture at Kokan Cooperative Bank, Mumbai
        </p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {firstImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Kokan Bank ${idx + 1}`}
              className="w-full h-40 rounded-lg object-cover"
            />
          ))}
        </div>

        {/* Section 2 */}
        <p className="text-[#004979] font-semibold text-[19px] mb-3">
          Breast cancer awareness drive at Asian Paints Pvt Ltd, Mumbai
        </p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {secondImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Asian Paints ${idx + 1}`}
              className="w-full h-40 rounded-lg object-cover"
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {thirdImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Asian Paints extra ${idx + 1}`}
              className="w-full h-40 rounded-lg object-cover"
            />
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default MobileAwareness1;
