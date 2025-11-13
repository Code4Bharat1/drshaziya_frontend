'use client';

import React from 'react';
import Head from 'next/head';

const MobileResource = () => {
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


    <div className="bg-[#F8F9FE] py-12 px-4 text-center mt-14">
      <h2 className="text-4xl font-bold text-[#284578] mb-4 mt-5">RESOURCES</h2>

      <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {resources.map((res, index) => (
          <div key={index}>
            <img
              src={res.image}
              alt={res.title}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-[25px] font-bold text-black mb-1">{res.title}</h3>
            <p className="text-black text-[20px] mt-3 font-medium">{res.journal}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default MobileResource;

