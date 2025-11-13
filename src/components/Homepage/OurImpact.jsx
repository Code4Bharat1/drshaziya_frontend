'use client'

import React from 'react';
import Head from 'next/head';

const OurImpact = () => {
  const impactCards = [
    {
      image: '/heart.png', // 👈 Replace with your actual image path
      count: '2,000+',
      label: 'Happy Patients',
    },
    {
      image: '/experience.png',
      count: '10+',
      label: 'Years Of Experience',
    },
    {
      image: '/heart-hand.png',
      count: '1,000+',
      label: 'Successful Surgeries',
    },
  ];

  const logos = [
    '/imp1.png',
    '/imp2.png',
    '/imp3.png',
    '/imp4.png',
    '/imp5.png',
    '/imp6.png',
    '/imp7.png',
    '/imp8.png',
  ];

  return (
    <>
    {/* SEO start from here */}
    <Head>
        {/* ✅ Meta Title and Description */}
        <title>Dr. Shazia – Laparoscopic & Breast Surgeon Andheri, Santacruz</title>
        <meta
          name="description"
          content="Dr. Shazia Waghoo, Dr Shazia Waghoo Santacruz ,Dr Shazia Waghoo Andheri,Best laparoscopic surgeon in Santacruz  expert surgeon Mumbai, hope through surgery, quality surgical care"
        />
        <meta
          name="keywords"
          content=" Laparoscopic Surgeon in Vashi Piles Doctor in Vashi Fissure Treatment in Vashi Fistula Specialist in Vashi Female Surgeon in Vashi Best General Surgeon in Vashi Hernia Surgery in Vashi Gallbladder Surgeon Vashi Proctologist in Vashi Women Surgeon near Vashi Navi Mumbai
Minimally invasive surgery in Vashi/Santacruz/Khar Best laparoscopic gallbladder surgeon near me Laser surgery for piles in Mumbai suburbs Female gastrointestinal surgeon in Mumbai Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo, Dr Shazia Waghoo Santacruz Dr Shazia Waghoo Andheri ,Best laparoscopic surgeon in Santacruz, hernia surgery, breast surgeon, Mumbai hospitals ,Book appointment Dr Shazia Waghoo, Best surgeon in Santacruz, Lady surgeon Mumbai, Mobile consultation form, Piles treatment Santacruz, Gallbladder stone surgery Santacruz, Laparoscopic surgeon Santacruz, Hernia treatment, Fistula fissure doctor, Breast lump surgeon Santacruz"
        />
        <meta name="author" content="Dr. Shazia Waghoo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://drshaziawaghoo.com/" />

        {/* ✅ Open Graph Tags (for Facebook/LinkedIn/etc.) */}
        <meta property="og:title" content="Our Impact | Dr. Shazia Waghoo – Transforming Surgical Outcomes" />
        <meta
          property="og:description"
          content="Over 10 years of experience with more than 2,000 happy patients and 1,000+ successful surgeries. Affiliated with leading hospitals in Mumbai."
        />
        <meta property="og:image" content="https://drshaziawaghoo.com/heart.png" />
        <meta property="og:url" content="https://drshaziawaghoo.com/our-impact" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />

        {/* ✅ Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Impact – 2,000+ Happy Patients | Dr. Shazia Waghoo" />
        <meta
          name="twitter:description"
          content="Dr. Shazia Waghoo’s expert surgical care has improved thousands of lives. Explore her impact across patients, surgeries, and hospitals."
        />
        <meta name="twitter:image" content="https://drshaziawaghoo.com/heart.png" />

        {/* ✅ Structured Data (Organization + Medical Specialty) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "MedicalOrganization",
              "name": "Dr. Shazia Waghoo",
              "url": "https://drshaziawaghoo.com/",
              "logo": "https://drshaziawaghoo.com/heart.png",
              "image": "https://drshaziawaghoo.com/heart.png",
              "description": "Experienced Laparoscopic, Hernia and Breast Surgeon with over 2,000 happy patients and affiliations with top hospitals in Mumbai.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Yogiraj Apartment, Shop No. 4, Kisan Nagar 3, Wagle Estate",
                "addressLocality": "Andheri | Santacruz",
                "addressRegion": "Andheri | Santacruz",
                "postalCode": "400074",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91 9833584847",
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["English", "Hindi"]
              },
              "medicalSpecialty": [
                "Laparoscopic Surgery",
                "Breast Surgery",
                "Hernia Repair",
                "General Surgery"
              ]
            }
          `}
        </script>
      </Head>



    {/* code start from here */}
    <div className="bg-[#F8F9FE] py-10 px-4 text-center">
      {/* Main Heading */}
      <h2 className="text-5xl font-bold text-[#284578] mb-10">OUR IMPACT NUMBERS</h2>

      {/* Impact Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-16 mb-12">
        {impactCards.map((card, index) => (
          <div
            key={index}
            className="bg-white  shadow-[0_4px_10px_rgba(0,0,0,0.4)] rounded-xl p-6 w-80 flex flex-col items-center border-2 border-gray-300"
          >
            <img
              src={card.image}
              alt={card.label}
              className="w-14 h-14 object-contain mb-4"
            />
            <h3 className="text-2xl text-black font-bold">{card.count}</h3>
            <p className="text-gray-700">{card.label}</p>
          </div>
        ))}
      </div>

      {/* Hospital Affiliation Section */}
      <h3 className="text-5xl font-bold text-[#284578] mb-2">Hospital Affiliations</h3>
      <p className="text-[#284578] font-bold text-2xl mt-5">
        Affiliated with 7+ reputed Hospitals and Clinics in Mumbai
      </p>

     {/* Scrolling Logos */}
 <div className="overflow-hidden h-40 mt-12"> {/* Increased height */}
  <div className="flex whitespace-nowrap animate-scroll-horizontal items-center">
    {[...logos, ...logos].map((logo, index) => (
      <img
        key={index}
        src={logo}
        alt={`Hospital logo ${index + 1}`}
        className="w-32 h-32 object-contain rounded-full border-2 p-3 bg-white shadow-[0_3px_2px_rgba(0,0,0,0.4)] mx-5"
      />
    ))}
  </div>
</div>


      {/* Animation CSS */}
      <style jsx>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-horizontal {
          animation: scroll-horizontal 25s linear infinite;
        }
      `}</style>
    </div>
    </>
  );
};

export default OurImpact;

