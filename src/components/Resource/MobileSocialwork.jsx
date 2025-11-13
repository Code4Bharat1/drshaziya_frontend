'use client';

import React from 'react';
import Head from 'next/head';

const MobileSocialwork = () => {
  const events = [
    {
      image: '/social1.png',
      title: 'Free Surgical Camp At Sehat NGO, Kurla West',
    },
    {
      image: '/social2.png',
      title: 'Health Camp At Criticare Asia Hospital',
    },
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
    content=" Minimally invasive surgery in Vashi/Santacruz/Khar Best laparoscopic gallbladder surgeon near me Laser surgery for piles in Mumbai suburbs Female gastrointestinal surgeon in Mumbai Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo surgeon Dr Shazia Waghoo Santacruz  Dr Shazia Waghoo Andheri Dr Shazia laparoscopic surgeon Best laparoscopic surgeon in Santacruz"
  />
  <meta name="author" content="Dr. Shazia Waghoo" />
  <link rel="canonical" href="https://drshaziawaghoo.com/" />

  {/* ✅ Open Graph Tags */}
  <meta property="og:title" content="Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo surgeon Dr Shazia Waghoo Santacruz  Dr Shazia Waghoo Andheri Dr Shazia laparoscopic surgeon Best laparoscopic surgeon in Santacruz" />
  <meta
    property="og:description"
    content="See highlights of breast cancer awareness programs conducted by Dr. Shazia Waghoo at corporate and community levels across Mumbai."
  />
  <meta property="og:url" content="https://drshaziawaghoo.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://drshaziawaghoo.com/aware1.png" />

  {/* ✅ Twitter Card Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Breast Cancer Awareness Drives – Dr. Shazia Waghoo" />
  <meta
    name="twitter:description"
    content="Educational and impactful breast cancer awareness drives led by Dr. Shazia Waghoo at Kokan Bank and Asian Paints."
  />
  <meta name="twitter:image" content="https://drshaziawaghoo.com/aware1.png" />

  {/* ✅ JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": "Dr. Shazia Waghoo | Surgical Clinic",
      "url": "https://drshaziawaghoo.com/",
      "image": "https://drshaziawaghoo.com/aware1.png",
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

    <div className="bg-white py-12 px-4 text-center">
      <h2 className="text-4xl font-bold text-[#284578] mb-10">SOCIAL WORK</h2>

      <div className="grid  gap-16 max-w-3xl mx-auto">
        {events.map((event, index) => (
          <div key={index}>
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-64 object-cover mb-2 "
            />
            <h2 className="text-[27px] font-semibold text-black text-center">{event.title}</h2>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default MobileSocialwork;

