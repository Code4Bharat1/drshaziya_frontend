// components/MissionVissionMobile.jsx
import React from "react";
import Head from "next/head";


const MobileMissionVission = () => {
  return (
    <>
    {/* SEo start from here */}
    <Head>
  {/* ✅ Basic Meta Tags */}
  <title>Dr. Shazia Waghoo Laparoscopic Surgeon in Andheri and Santacruz</title>
  <meta
    name="description"
    content="Discover the mission and vision of Dr. Shazia Waghoo's healthcare brand – committed to affordable, high-quality surgical care, innovation, and patient dignity."
  />
  <meta
    name="keywords"
    content="Laparoscopic Surgeon in Vashi Piles Doctor in Vashi Fissure Treatment in Vashi Fistula Specialist in Vashi Female Surgeon in Vashi Best General Surgeon in Vashi Hernia Surgery in Vashi Gallbladder Surgeon Vashi Proctologist in Vashi Women Surgeon near Vashi Navi Mumbai
 Minimally invasive surgery in Vashi/Santacruz/Khar Best laparoscopic gallbladder surgeon near me Laser surgery for piles in Mumbai suburbs Female gastrointestinal surgeon in Mumbai Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo, Dr Shazia Waghoo Santacruz ,Dr Shazia Waghoo Andheri,Best laparoscopic surgeon in Santacruz  expert surgeon Mumbai, hope through surgery, quality surgical care"
  />
  <meta name="author" content="Dr. Shazia Waghoo" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://drshaziawaghoo.com/" />

  {/* ✅ Open Graph */}
  <meta property="og:title" content="Our Mission & Vision – Dr. Shazia Waghoo" />
  <meta
    property="og:description"
    content="We aim to deliver superior surgical outcomes through innovation, compassion, and commitment to making healthcare accessible to all."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://drshaziawaghoo.com/" />
  <meta property="og:image" content="https://drshaziawaghoosurgery.com/cover-mission.png" />
  <meta property="og:locale" content="en_IN" />

  {/* ✅ Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Our Mission & Vision – Dr. Shazia Waghoo" />
  <meta
    name="twitter:description"
    content="Empowering lives through affordable surgical excellence. Learn more about Dr. Shazia Waghoo’s mission and vision."
  />
  <meta name="twitter:image" content="https://drshaziawaghoosurgery.com/cover-mission.png" />

  {/* ✅ JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": "Dr. Shazia Waghoo Surgery",
      "url": "https://drshaziawaghoo.com/",
      "logo": "https://drshaziawaghoosurgery.com/cover-mission.png",
      "description": "Delivering accessible, high-quality surgical care with dignity, innovation, and patient-first values.",
      "founder": {
        "@type": "Person",
        "name": "Dr. Shazia Waghoo"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressCountry": "IN"
      }
    }
    `}
  </script>
</Head>

    {/* main code start from here */}
    <div className="bg-[#F8F9FE] w-full text-center px-4 font-sans mb-4">
      <div className="max-w-xl mx-8 flex flex-col gap-10">
        {/* Vision */}
        <div>
          <h2 className="text-3xl font-bold mb-4 text-center mt-4 text-black">Our Vision</h2>
          <p className="text-gray-800 text-[16px] leading-relaxed font-alata font-bold">
            Our vision is to deliver superior surgical outcomes and positively
            impact millions of lives. Led by Dr. Shazia Waghoo, our expanding
            team specializes in advanced surgical procedures using the latest
            technologies. We are committed to making high-quality, affordable
            healthcare accessible to all.
          </p>
        </div>

        {/* Mission */}
         <div className="-mt-2 mb-4"> {/* slight upward adjustment */}
          <h2 className="text-3xl font-bold mb-4 text-center text-black">Our Mission</h2>
          <p className="text-gray-800 text-[17px] leading-relaxed font-alata font-bold">
            Our healthcare brand is dedicated to providing high-quality,
            affordable care in a patient-focused setting. Through innovation and
            advanced research, we aim for medical excellence while also engaging
            in community outreach and education. We’re committed to empowering
            individuals to lead healthier lives, treating every patient with
            dignity and respect.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default MobileMissionVission;
