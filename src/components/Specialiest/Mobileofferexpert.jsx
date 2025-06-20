"use client";
import React from "react";
import Link from "next/link";
import Head from 'next/head';


const expertiseData = [

  {
    title: "Laparoscopic Surgeries",
    description:
      "Laparoscopic surgery is a minimally invasive procedure using small incisions, specialized Laparoscopic instruments and a camera to operate inside the body.",
    image: "offer1.png",
    path: "/allartical/lepocrasy",
  },
  {
    title: "Hernia Surgeries",
    description:
      "Hernia surgery is a procedure to repair a bulge or protrusion caused by an organ pushing through a weak spot in muscle or tissue.",
    image: "offer2.png",
    path: "/allartical/harnia",
  },
  {
    title: "Breast Surgeries",
    description:
      "Breast surgery involves procedures for treating breast conditions: benign and malignant, or cosmetic procedures including reconstruction.",
    image: "offer3.png",
    path: "/allartical/breastcancer",
  },
  
  {
    title: "Colorectal Anorectal Surgeries",
    description:
      "Breast surgery involves procedures for treating breast conditions: benign and malignant, or cosmetic procedures including reconstruction.",
    image: "offer5.png",
    path: "/allartical/colorectalsurgery",
  },

  {
    title: "Laser Surgeries",
    description:
      "Laser surgery uses focused light to treat or remove tissue, used to treat anorectal diseases, varicose veins and benign thyroid nodules",
    image: "offer6.png",
    path: "/allartical/leasersurgary",
  },
    {
    title: "Gastrointestinal Surgeries",
    description:
      "Gastrointestinal surgery treats digestive tract conditions using open or minimally invasive techniques, improving outcomes with less recovery time.",
    image: "offer9.png",
    path: "/allartical/gisurgery",
  },
    {
    title: "Thyroid Surgeries",
    description:
      "Thyroid surgery is a procedure to remove part or all of the thyroid gland, to improve conditions caused often due to cancer or nodules.",
    image: "offer8.png",
    path: "/allartical/thyroid",
  },
   {
    title: "Abdominal wall Reconstruction ",
    description:
      "Laser surgery uses focused light to treat or remove tissue, used to treat anorectal diseases, varicose veins and benign thyroid nodules",
    image: "offer7.png",
    path: "/allartical/abdonomial",
  },

];

const MobileOfferExpert = () => {
  return (
    <>
    <Head>
  {/* ✅ Page Title and Description */}
  <title>Expert Surgical Procedures by Dr. Shazia Waghoo</title>
  <meta
    name="description"
    content="Explore the wide range of surgical expertise offered by Dr. Shazia Waghoo, including laparoscopic, hernia, breast, thyroid, colorectal, and gastrointestinal surgeries in Mumbai."
  />
  <meta
    name="keywords"
    content="Dr. Shazia Waghoo, surgeon Mumbai, laparoscopic surgery, hernia surgery, breast surgery, thyroid surgery, gastrointestinal surgery, colorectal surgery, laser surgery, abdominal wall reconstruction"
  />
  <meta name="author" content="Dr. Shazia Waghoo" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://drshaziawaghoosurgery.com/expertise" />

  {/* ✅ Open Graph for Social Sharing */}
  <meta property="og:title" content="Expert Surgical Procedures by Dr. Shazia Waghoo" />
  <meta
    property="og:description"
    content="Discover surgical excellence with Dr. Shazia Waghoo – Laparoscopic, Hernia, Breast, Colorectal, GI, Laser, Thyroid and Abdominal wall reconstruction surgeries."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://drshaziawaghoosurgery.com/expertise" />
  <meta property="og:image" content="https://drshaziawaghoosurgery.com/images/surgery-expertise-og.jpg" />

  {/* ✅ Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Expert Surgical Procedures by Dr. Shazia Waghoo" />
  <meta
    name="twitter:description"
    content="Laparoscopic, Hernia, Breast, and GI surgeries – Get advanced surgical care with compassion by Dr. Shazia Waghoo."
  />
  <meta name="twitter:image" content="https://drshaziawaghoosurgery.com/images/surgery-expertise-og.jpg" />

  {/* ✅ Structured Data with Schema.org */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "name": "Dr. Shazia Waghoo Surgical Clinic",
        "url": "https://drshaziawaghoosurgery.com/expertise",
        "description": "Offering expert surgical services including laparoscopic, breast, thyroid, gastrointestinal, hernia and laser surgeries in Mumbai.",
        "medicalSpecialty": "Surgical",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Hospital Address Here",
          "addressLocality": "Mumbai",
          "addressRegion": "MH",
          "postalCode": "400016",
          "addressCountry": "IN"
        },
        "image": "https://drshaziawaghoosurgery.com/images/surgery-expertise-og.jpg"
      }
    `}
  </script>
</Head>

    <div className="bg-[#F8F9FE]   py-2 px-4 block md:hidden">
      <h2 className="text-center text-xl px-5 font-bold text-[#004979] mt-24 mb-6">
        Dr. Shazia Waghoo offers Expertise in the following Surgeries
      </h2>

      {/* <div className="grid grid-cols-1 gap-6 mx-10 mb-10"> */}
       <div className="grid grid-cols-1 gap-6 px-2 mb-10">
        
        {expertiseData.map((item, index) => (
       <div
  key={index}
  className="bg-white w-full max-w-[95%] mx-auto shadow-[0_3px_4px_-1px_rgba(0,0,0,0.5)] border border-[#C3C3C3] rounded-xl p-6"
>
            <div className="w-16 h-16 rounded-full bg-[#74C4F9] mx-auto mb-4 flex items-center justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-10 h-10 object-contain"
              />
            </div>
            <h3 className="text-lg whitespace-nowrap  font-semibold text-[#000000] text-center mb-2">
              {item.title}
            </h3>
            <p className="text-[#000000] text-sm font-roboto text-center">
              {item.description}
            </p>

            <Link href={item.path}>
              <button
                className="bg-[#0085DC] text-white text-xs px-6 py-3 rounded-md hover:bg-blue-500 mt-5 mx-auto block shadow-[0_3px_4px_-1px_rgba(0,0,0,0.4)]
"
              >
                KNOW MORE
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default MobileOfferExpert;
