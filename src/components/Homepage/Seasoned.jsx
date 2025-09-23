"use client"
import React from 'react';
import { useRouter } from 'next/navigation';
import Head from 'next/head';

const Seasoned = () => {
const router = useRouter();
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Head>
        <title>Dr. Shazia – Laparoscopic & Breast Surgeon Andheri, Santacruz</title>
        <meta
          name="description"
          content="Meet Dr. Shazia Waghoo, a Mumbai-based surgeon with 10+ years of experience in laparoscopic, hernia, and breast surgeries. Book an appointment today."
        />
        <meta
          name="keywords"
          content=" Laparoscopic Surgeon in Vashi Piles Doctor in Vashi Fissure Treatment in Vashi Fistula Specialist in Vashi Female Surgeon in Vashi Best General Surgeon in Vashi Hernia Surgery in Vashi Gallbladder Surgeon Vashi Proctologist in Vashi Women Surgeon near Vashi Navi Mumbai
 Minimally invasive surgery in Vashi/Santacruz/Khar Best laparoscopic gallbladder surgeon near me Laser surgery for piles in Mumbai suburbs Female gastrointestinal surgeon in Mumbai Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr. Shazia Waghoo, Dr Shazia Waghoo Santacruz ,Dr Shazia Waghoo Andheri,Best laparoscopic surgeon in Santacruz  expert surgeon Mumbai, hope through surgery, quality surgical care ,Book appointment Dr Shazia Waghoo, Best surgeon in Santacruz, Lady surgeon Mumbai, Mobile consultation form, Piles treatment Santacruz, Gallbladder stone surgery Santacruz, Laparoscopic surgeon Santacruz, Hernia treatment, Fistula fissure doctor, Breast lump surgeon Santacruz"
        />
        <meta name="author" content="Dr. Shazia Waghoo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://drshaziawaghoo.com/" />

        {/* ✅ Open Graph (Facebook, LinkedIn, etc.) */}
        <meta property="og:title" content="Dr. Shazia Waghoo Laparoscopic, Hernia & Breast Surgeon in Andheri and santacruz" />
        <meta
          property="og:description"
          content="Over 10 years of surgical excellence in Mumbai. Expert in minimally invasive hernia and breast surgeries. Trusted and compassionate care."
        />
        <meta property="og:url" content="https://drshaziawaghoo.com/" />
        <meta property="og:image" content="https://drshaziawaghoo.com/surgicalexellencedr.png" />
        <meta property="og:type" content="profile" />
        <meta property="og:locale" content="en_IN" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dr. Shazia Waghoo | Laparoscopic & Hernia Surgeon in Mumbai" />
        <meta
          name="twitter:description"
          content="Learn more about Dr. Shazia Waghoo’s 10+ years of experience in minimally invasive surgeries and patient-centered surgical care."
        />
        <meta name="twitter:image" content="https://drshaziawaghoo.com/surgicalexellencedr.png" />

        {/* ✅ Structured Data (Schema.org) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Physician",
              "name": "Dr. Shazia Waghoo",
              "url": "https://drshaziawaghoo.com/",
              "image": "https://drshaziawaghoo.com/surgicalexellencedr.png",
              "description": "Laparoscopic, Hernia, and Breast Surgeon in Andheri | Santacruz with over 10 years of experience.",
              "medicalSpecialty": [
                "Laparoscopic Surgery",
                "Hernia Surgery",
                "Breast Surgery"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Andheri | Santacruz",
                "addressLocality": "Andheri Santacruz",
                "addressRegion": "Andheri Santacruz",
                "postalCode": "400047",
                "addressCountry": "IN"
              },
              "telephone": "+91 9876543210",
              "email": "drshaziawaghoosurgery@gmail.com",
              "sameAs": [
                "https://www.linkedin.com/in/drshaziawaghoo",
                "https://www.instagram.com/drshaziawaghoo"
              ]
            }
          `}
        </script>
      </Head>



    {/* main code from here */}
    <div className="bg-[#F8F9FE] text-[#000] p-6 ">
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-start gap-9 lg:ml-24 mt-16 ">
        
        {/* Left Section - Image and Name */}
        <div className="flex flex-col items-center w-full lg:w-1/3">
          <img
            src="/surgicalexellencedr.png"
            alt="Dr. Shazia Waghoo"
            className="rounded-xl w-full max-w-[490px] object-cover"
          />
          <div className="text-center mt-7">
            <h2 className="text-[27px] font-bold">Dr. Shazia Waghoo</h2>
            <p className="text-xl text-[#000000]">MBBS, DNB General Surgery</p>
          </div>
        </div>

        {/* Right Section - Content */}
        <div className="w-full lg:w-2/3 ml-16">
          <h2 className="text-4xl font-serif text-[#004979] mb-4">
            A seasoned Laparoscopic, Hernia, <br /> and Breast Surgeon
          </h2>
          <h3 className="text-2xl text-[#004979] font-serif mb-4">
            Creating Impact across Millions of Lives
          </h3>
          <p className="text-gray-800  text-xl mb-3 ">
            Dr. Shazia Waghoo is a skilled Laparoscopic, Hernia, and <br /> Breast Surgeon based in Mumbai with <strong>over 10 years</strong> of <br /> experience. She is known for minimally invasive <br /> techniques and a strong patient-focused approach. . <br /> Dr Waghoo actively <strong>promotes cancer and health awareness <br /> </strong> through camps and educational sessions. Her expertise, <br /> surgical care, and commitment to patient recovery <br /> make her highly recommended.
          </p>
          <button className=" font-semibold text-md bg-[#0085DC] hover:bg-yellow-500 text-white px-6 py-3 rounded-md transition duration-200 mt-7 mb-7"  onClick={() => router.push('/contactus')}>
            BOOK AN APPOINTMENT
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Seasoned;
