"use client";

import Image from "next/image";
import React from "react";
import Head from "next/head";

const breastContent = [
  {
    heading: "What is Breast Surgery?",
    text: `Breast surgery includes procedures for both benign conditions like lumps, nipple discharge, and gynecomastia, and malignant conditions like carcinoma or sarcoma. Benign cases may require removal of the lump, ducts, or a breast quadrant, while cancer treatment involves lumpectomy or mastectomy. Cosmetic surgeries include breast augmentation, reduction, or reconstruction post-mastectomy. Some surgeries are done to reduce cancer risk or as reconstruction. Lymph node removal is also performed to check cancer spread. Surgery is usually combined with radiation or chemotherapy for complete treatment.`,
  },
  {
    heading: "What is the role of a Breast Surgeon?",
    text: `To evaluate patients with breast complaints using clinical, radiological and pathological methods to diagnose the condition appropriately and based on that advise the appropriate course of treatment.\n\nBreast reconstruction may be advised after some breast surgeries to restore breast shape and symmetry. Women with excessively large breasts are evaluated and advised for breast reduction to relieve physical pain and improve self-esteem. Patients experiencing changes in breast appearance after pregnancy or aging can be advised to consider breast lifts or augmentation.`,
  },
];

const commonProblems = [
  {
    title: "Breast Cancer:",
    desc: "Surgery is often necessary to remove cancerous tumors and axillary lymph nodes, which may involve procedures like lumpectomy or mastectomy.",
  },
  {
    title: "Benign Tumors:",
    desc: "Noncancerous tumors, such as fibroadenomas or papillomas, require removal if they increase in size, have discomfort or concern for physical appearance.",
  },
  {
    title: "Breast Reconstruction:",
    desc: "Following a mastectomy, many women opt for reconstruction to restore breast shape and symmetry using implants or body tissue.",
  },
  {
    title: "Cosmetic Enhancement:",
    desc: "Procedures like breast augmentation and lifts are cosmetic interventions performed to enhance appearance or restore volume lost due to aging or pregnancy.",
  },
  {
    title: "Genetically at Risk for Cancer:",
    desc: "If you have a family history of breast cancer or certain risk factors, regular checkups and consultation with a breast surgeon are advised.",
  },
];

const BreastCancer = () => {
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
    content="Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo surgeon Dr Shazia Waghoo Santacruz  Dr Shazia Waghoo Andheri Dr Shazia laparoscopic surgeon Best laparoscopic surgeon in Santacruz ,Best surgeon in Santacruz, Lady surgeon Santacruz Mumbai, Laparoscopic surgeon Santacruz, General surgeon Santacruz West, Piles treatment Santacruz, Gallbladder stone surgery Santacruz, Hernia specialist in Santacruz, Fissure doctor Santacruz, Fistula specialist Santacruz, Laser piles surgery Mumbai, Breast lump surgery in Santacruz, Appendix surgery in Mumbai, Female surgeon for daycare surgery Santacruz, Dr Shazia Waghoo surgeon Mumbai, Expert laparoscopic surgeon Santacruz, Proctologist near Santacruz" 
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
    <div className="md:mt-14 mt-24 bg-white">
    <div className="bg-white p-6 md:p-10 max-w-6xl mx-auto font-sans text-gray-800">
     
      <div className="relative  overflow-hidden shadow-md h-60">
        <Image
          src="/lasersurgary.jpg" 
          alt="Breast Surgery"
          layout="fill"
          objectFit="cover"
          priority
        />
        <div className="absolute top-7 left-4 text-white text-4xl font-semibold bg-opacity-50 px-4 py-2 rounded">
          Breast Surgery
        </div>
      </div>

      
      <div className="mt-6 space-y-10">
        {breastContent.map((section, index) => (
          <div key={index}>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
              {section.heading}
            </h2>
            <p className="text-xl md:text-base leading-relaxed whitespace-pre-line">
              {section.text}
            </p>
          </div>
        ))}

       
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            What are some common problems that may require seeking a Breast Surgeon?
          </h2>
          <ul className="list-disc list-inside text-xl md:text-base leading-relaxed space-y-1">
            {commonProblems.map((item, index) => (
              <li key={index}>
                <strong>{item.title}</strong> {item.desc}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default BreastCancer;
