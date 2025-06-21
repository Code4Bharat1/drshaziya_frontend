'use client';

import React from 'react';
import Head from 'next/head';
const Resource = () => {
  const resources = [
    {
      image: '/resource1.png',
      title: 'Delayed Management of Chemoport Complication',
      journal: 'Indian Journal of Surgical Oncology, September 20',
    },
    {
      image: '/resource2.png',
      title:
        '"Can Intraoperative Pelvic Peritoneal Disease Predict Nodal Metastasis in Advanced Ovarian Cancer and Guide Systematic Nodal Dissection?"',
      journal: 'Indian Journal of Surgical Oncology, February 2019',
    },
    {
      image: '/resource3.png',
      title: 'Aberrant Renal Vessels',
      journal: 'Annals of Case Reports and Images, 2019',
    },
  ];

  return (
<>
    
               <Head>
  {/* ✅ Meta Title & Description */}
  <title>Breast Cancer Awareness Drives – Dr. Shazia Waghoo</title>
  <meta
    name="description"
    content="Breast cancer awareness events by Dr. Shazia Waghoo at Kokan Cooperative Bank and Asian Paints Pvt Ltd, Mumbai. Promoting early detection and women's health."
  />
  <meta
    name="keywords"
    content="Dr. Shazia Waghoo, Dr Shazia Waghoo Santacruz ,Dr Shazia Waghoo Andheri,Best laparoscopic surgeon in Santacruz  expert surgeon Mumbai, hope through surgery, quality surgical care"
  />
  <meta name="author" content="Dr. Shazia Waghoo" />
  <link rel="canonical" href="https://drshaziawaghoo.com/" />

  {/* ✅ Open Graph Tags */}
  <meta property="og:title" content="Breast Cancer Awareness Drives – Dr. Shazia Waghoo" />
  <meta
    property="og:description"
    content="See highlights of breast cancer awareness programs conducted by Dr. Shazia Waghoo at corporate and community levels across Mumbai."
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
    <div className="bg-[#F8F9FE] py-12 px-4 text-center mt-14">
      <h2 className="text-4xl font-bold text-blue-900 mb-12 mt-5">RESOURCES</h2>

      <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {resources.map((res, index) => (
          <div key={index}>
            <img
              src={res.image}
              alt={res.title}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-2xl font-bold text-black mb-1">{res.title}</h3>
            <p className="text-gray-900 mt-4 font-bold">{res.journal}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Resource;

