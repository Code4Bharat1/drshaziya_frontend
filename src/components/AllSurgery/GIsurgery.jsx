'use client';

import React from 'react';
import Image from 'next/image';
import Head from "next/head";

const giContent = [
  {
    heading: "What is Gastrointestinal (GI) surgery?",
    text: `Gastrointestinal (GI) surgery encompasses a range of procedures aimed at treating conditions affecting the digestive tract. This includes the esophagus, stomach, intestines, liver, pancreas, and gallbladder. GI surgery can be performed using traditional open surgery or minimally invasive techniques like laparoscopy.`,
  },
  {
    heading: "When do Doctors Advise Gastrointestinal (GI) surgery?",
    text: `Doctors typically advise surgery when non-surgical treatments fail to alleviate symptoms of severe gastrointestinal and digestive disorders which include chronic acid reflux, gallstones, hernias, and gastrointestinal bleeding. Surgery may also be necessary for diagnosing or treating cancers of the digestive tract. The decision is based on a thorough evaluation of the patient’s medical history, symptoms, and diagnostic test results.`,
  },
  {
    heading: "What are some Conditions Treated with Gastrointestinal (GI) surgery?",
    text: `Gastrointestinal (GI) surgery addresses various conditions affecting the digestive tract. Commonly treated conditions include gastroesophageal reflux disease (GERD), which causes chronic heartburn and acid reflux. Gallbladder disease, such as gallstones, often requires surgical intervention. Hernias – all types, intestinal obstructions, and perforations, and gastrointestinal cancers, including those affecting the esophagus, stomach, and intestines. These surgeries often utilize minimally invasive techniques to reduce recovery time and improve outcomes.`,
  },
];

const GIsurgery = () => {
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
    content=" General Surgeon in Khar Laparoscopic Surgery in Khar Mumbai Best Female Surgeon in Khar Piles and Fissure Doctor Khar Fistula Treatment Khar Gallbladder Surgery Doctor Khar Hernia Specialist in Khar Mumbai Surgeon near Khar West Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo surgeon Dr Shazia Waghoo Santacruz  Dr Shazia Waghoo Andheri Dr Shazia laparoscopic surgeon Best laparoscopic surgeon in Santacruz ,Best surgeon in Santacruz, Lady surgeon Santacruz Mumbai, Laparoscopic surgeon Santacruz, General surgeon Santacruz West, Piles treatment Santacruz, Gallbladder stone surgery Santacruz, Hernia specialist in Santacruz, Fissure doctor Santacruz, Fistula specialist Santacruz, Laser piles surgery Mumbai, Breast lump surgery in Santacruz, Appendix surgery in Mumbai, Female surgeon for daycare surgery Santacruz, Dr Shazia Waghoo surgeon Mumbai, Expert laparoscopic surgeon Santacruz, Proctologist near Santacruz"
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

{/* main code start from here */}
    <div className="md:mt-14 mt-24 bg-white">
      <div className="bg-white p-6 md:p-10 max-w-6xl mx-auto font-sans text-gray-800">

       
        <div className="relative  overflow-hidden shadow-md h-60 md:h-72">
          <Image
            src="/gisurgery.jpg"
            alt="Gastrointestinal Surgery"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute top-7 left-4 text-white text-4xl font-semibold bg-opacity-50 px-4 py-2 rounded">
            Gastrointestinal (GI) Surgery
          </div>
        </div>

        
        <div className="mt-10 space-y-10 text-gray-900">
          {giContent.map((section, index) => (
            <div key={index}>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{section.heading}</h2>
              <p className="text-xl md:text-base leading-relaxed mt-2 first:mt-0">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default GIsurgery;
