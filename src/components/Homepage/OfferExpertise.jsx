"use client";
import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const expertiseData = [
  {
    title: 'Laparoscopic Surgeries',
    description:
      'Laparoscopic surgery is a minimally invasive procedure using small incisions, specialized instruments and a camera to operate inside the body.',
    image: 'offer1.png',
     path: '/allartical/lepocrasy',
  },
  {
    title: 'Hernia Surgeries',
    description:
      'Hernia surgery is a procedure to repair a bulge or protrusion caused by an organ pushing through a weak spot in muscle or tissue.',
    image: 'offer2.png',
     path: '/allartical/harnia',
  },
  {
    title: 'Breast Surgeries',
    description:
      'Breast surgery involves procedures for treating breast conditions; benign and malignant, or cosmetic procedures including reconstruction.',
    image: 'offer3.png',
     path: '/allartical/breastcancer',
  },
    
  {
    title: 'Colorectal Anorectal Surgeries',
    description:
      'Colorectal surgery treats disorders of the rectum, anus, and colon including polyps, tumors, and inflammatory bowel diseases.',
    image: 'offer5.png',
     path: '/allartical/colorectalsurgery',
  },
  {
    title: 'Laser Surgeries',
  description:
  'Laser surgery uses focused light to treat or remove abnormal tissues with precision and minimal damage to surrounding areas.',

    image: 'offer6.png',
     path: '/allartical/leasersurgary',
  },

   {
    title: 'Gastrointestinal Surgeries',
    description:
     'Gastrointestinal surgeries involve procedures on the digestive tract, such as operations on the stomach, and gallbladder to treat conditions like ulcers.',
    image: 'offer9.png',
     path: '/allartical/gisurgery',
  },
    {
    title: 'Thyroid Surgeries',
    description:
           'Thyroid surgery is performed to treat thyroid nodules, cancer, or hyperthyroidism by removing part or all of the thyroid gland.',
    image: 'offer8.png',
     path: '/allartical/thyroid',
  },
  {
    title: 'Abdominal wall Reconstruction ',
    description:
  'Abdominal wall reconstruction is a surgical procedure to repair complex hernias and restore abdominal strength.',
    image: 'offer7.png',
     path: '/allartical/abdonomial',
  },
 
   

];

const OfferExpertise = () => {
  return (
    <>

{/* SEO Start from here */}
  <Head>
        {/* ✅ Basic SEO */}
        <title>Dr. Shazia – Laparoscopic & Breast Surgeon Andheri, Santacruz</title>
        <meta
          name="description"
          content="Explore surgical expertise by Dr. Shazia Waghoo, including laparoscopic, hernia, breast, colorectal, thyroid, GI, and laser surgeries in Mumbai."
        />
        <meta
          name="keywords"
          content="Laparoscopic Surgeon in Vashi Piles Doctor in Vashi Fissure Treatment in Vashi Fistula Specialist in Vashi Female Surgeon in Vashi Best General Surgeon in Vashi Hernia Surgery in Vashi Gallbladder Surgeon Vashi Proctologist in Vashi Women Surgeon near Vashi Navi Mumbai
 Minimally invasive surgery in Vashi/Santacruz/Khar Best laparoscopic gallbladder surgeon near me Laser surgery for piles in Mumbai suburbs Female gastrointestinal surgeon in Mumbai  Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo,Dr Shazia Waghoo Santacruz,Dr Shazia Waghoo Andheri,Best laparoscopic surgeon in Santacruz  , Laparoscopic Surgery, Hernia Surgery, Breast Surgery, Colorectal Surgery, Thyroid Surgery, GI Surgery, Laser Surgery, Mumbai Surgeon, Abdominal Wall Reconstruction ,Book appointment Dr Shazia Waghoo, Best surgeon in Santacruz, Lady surgeon Mumbai, Mobile consultation form, Piles treatment Santacruz, Gallbladder stone surgery Santacruz, Laparoscopic surgeon Santacruz, Hernia treatment, Fistula fissure doctor, Breast lump surgeon Santacruz"
        />
        <meta name="author" content="Dr. Shazia Waghoo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://drshaziawaghoo.com/" />

        {/* ✅ Open Graph (Facebook / LinkedIn) */}
        <meta property="og:title" content="Expert Surgeries by Dr. Shazia Waghoo" />
        <meta
          property="og:description"
          content="Discover advanced surgical procedures offered by Dr. Shazia Waghoo, including minimally invasive and laser treatments across specialties."
        />
        <meta property="og:url" content="https://drshaziawaghoo.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://drshaziawaghoosurgery.com/offer1.png" />
        <meta property="og:locale" content="en_IN" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Expert Surgical Specialties | Dr. Shazia Waghoo" />
        <meta
          name="twitter:description"
          content="Explore the range of surgical specialties by Dr. Shazia Waghoo in Mumbai, including laparoscopic, GI, and cosmetic procedures."
        />
        <meta name="twitter:image" content="https://drshaziawaghoosurgery.com/offer1.png" />

        {/* ✅ Structured Data (Schema.org) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Dr. Shazia Waghoo",
              "url": "https://drshaziawaghoo.com/",
              "logo": "https://drshaziawaghoosurgery.com/offer1.png",
              "description": "Dr. Shazia Waghoo offers specialized surgeries including laparoscopic, breast, hernia, laser, GI, thyroid, and abdominal wall reconstruction.",
              "medicalSpecialty": [
                "Laparoscopic Surgery",
                "Breast Surgery",
                "Hernia Repair",
                "Laser Surgery",
                "Thyroid Surgery",
                "Gastrointestinal Surgery",
                "Colorectal Surgery",
                "Abdominal Wall Reconstruction"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Yogiraj Apartment, Shop No. 4, Kisan Nagar 3, Wagle Estate",
                "addressLocality": "Thane West",
                "addressRegion": "MH",
                "postalCode": "400604",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 9833584847",
                "contactType": "Customer Service",
                "availableLanguage": ["English", "Hindi"]
              }
            }
          `}
        </script>
      </Head>

    {/* // main code start from here */}
    <div className="bg-[#F8F9FE] py-10 ">
      <h2 className="text-center text-2xl md:text-[36px] font-bold text-[#004979] mt-2 mb-11">
         Dr. Shazia Waghoo offers Expertise in the following Surgeries
      </h2>

      {/* Scrollable Row with Hidden Scrollbar */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-16 w-max pb-4">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className={`bg-white shadow-[0_3px_2px_rgba(0,0,0,0.3)] border border-[#C3C3C3] rounded-xl w-80 h-[310px] flex-shrink-0 flex flex-col justify-between p-6 text-center ${
                index === 0 ? 'ml-4' : ''
              }`}
            >
              <div>
                <div className="w-16 h-16 rounded-full bg-[#74C4F9] mx-auto mb-4 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#000000] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#000000] text-sm font-roboto">{item.description}</p>
              </div>
              <Link href={item.path}>
              <button className=" shadow-[0_3px_2px_rgba(0,0,0,0.3)] bg-[#0085DC] text-white text-xs px-6 py-3 rounded-md hover:bg-blue-500 mt-5 mx-auto block">
                KNOW MORE
              </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar using Tailwind plugin or manual styles */}
      <style jsx>{`
        .scrollbar-hide {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }
      `}</style>
    </div>
    </>
  );
};

export default OfferExpertise;



