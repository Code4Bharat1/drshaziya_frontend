'use client';

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const articles = [
  { title: 'Article-1', image: '/artical7.png', path: '/finalartical/artical1' },
  { title: 'Article-2', image: '/artical2.png', path: '/finalartical/artical1' },
  { title: 'Article-3', image: '/artical3.png', path: '/finalartical/artical1' },
  { title: 'Article-4', image: '/artical4.png', path: '/finalartical/artical1' },
  { title: 'Article-5', image: '/artical5.png', path: '/finalartical/artical1' },
  { title: 'Article-6', image: '/artical6.png', path: '/finalartical/artical1' },
];

const MobileArtical = () => {
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
    content="Dr. Shazia Waghoo, breast cancer awareness, cancer awareness Mumbai, health awareness drives, Kokan Bank event, Asian Paints health session, women's health, early detection cancer"
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
    <div className="py-6 bg-[#F8F9FE] flex flex-col items-center px-4">
      <h2 className="text-[28px] sm:text-[34px] font-bold text-center text-[#004979] mb-6">
        Articles by Dr. Shazia
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-md sm:max-w-4xl">
        {articles.map((article, index) => (
          <Link href={article.path} key={index}>
            <div
              className="relative rounded overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105 w-full h-[150px] sm:h-[220px] "
            >
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-white bg-opacity-10 flex items-center justify-center">
                <h3 className="text-white text-sm sm:text-lg font-semibold text-center">
                  {article.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </>
  );
};

export default MobileArtical;
