'use client';

import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const colorectalContent = [
  {
    heading: 'Colorectal Surgery',
    text: `Colorectal surgery focuses on treating conditions of the colon, rectum, and anus, such as cancer, inflammatory bowel disease, and diverticulitis. It may involve removing diseased sections and reconnecting healthy parts. Minimally invasive techniques like laparoscopy and robotic surgery allow better visualization in these narrow areas. Endoscopy is also used for diagnosis and treatment. These advanced methods help improve recovery and reduce complications.`,
  },
  {
    heading: 'When do Doctors Advise Colorectal surgery?',
    text: `Doctors advise surgery when non-surgical treatments fail to alleviate symptoms of colorectal problems like blood in stool, mucus in stool, cramping pain on left side of abdomen, absolute constipation, rectal pain, anal pain, anal fistula and haemorrhoids. The decision is based on a thorough evaluation of the patient’s medical history, symptoms, and diagnostic test results.`,
  },
  {
    heading: 'What are some Conditions Treated with Colorectal surgery?',
    text: `Doctors typically advise surgery when patients experience significant disorders affecting the colon, rectum, or anus. Common indications include Diverticulitis, colorectal cancer, severe inflammatory bowel diseases (like Crohn’s disease and ulcerative colitis), colovesical or vaginal fistulae, conditions such as rectal bleeding, rectal prolapse, hemorrhoids, anal fistula and anal fissures.`,
  },
];

const ColorectalSurgery = () => {
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
    <div className="md:mt-14 mt-24 bg-white">
      <div className="bg-white p-6 md:p-10 max-w-6xl mx-auto font-sans text-gray-800">
       
        <div className="relative  overflow-hidden shadow-md h-60 md:h-72">
          <Image
            src="/colorectalsurgery.jpg"
            alt="Colorectal Surgery"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute top-11 left-4 text-white text-xl md:text-5xl font-semibold px-4 py-2 rounded">
            Colorectal Surgery
          </div>
        </div>

       
        <div className="mt-10 space-y-10 text-gray-900">
          {colorectalContent.map((section, index) => (
            <div key={index}>
              <h2 className="text-3xl md:text-3xl font-bold mb-2">{section.heading}</h2>
              <p className="text-base md:text-xl leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default ColorectalSurgery;
