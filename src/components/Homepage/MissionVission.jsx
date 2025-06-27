import React from 'react';
import Head from "next/head";


const MissionVission = () => {
  return (
    <>
    <Head>
  {/* ✅ Basic Meta Tags */}
  <title>Our Vision – Dr. Shazia Waghoo’s Commitment to Excellence</title>
  <meta
    name="description"
    content="Learn about our mission to deliver affordable, high-quality surgical care and our vision to improve millions of lives through cutting-edge techniques led by Dr. Shazia Waghoo."
  />
  <meta
    name="keywords"
    content="Laparoscopic Surgeon in Vashi Piles Doctor in Vashi Fissure Treatment in Vashi Fistula Specialist in Vashi Female Surgeon in Vashi Best General Surgeon in Vashi Hernia Surgery in Vashi Gallbladder Surgeon Vashi Proctologist in Vashi Women Surgeon near Vashi Navi Mumbai
 Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo, Dr Shazia Waghoo Santacruz ,Dr Shazia Waghoo Andheri,Best laparoscopic surgeon in Santacruz  expert surgeon Mumbai, hope through surgery, quality surgical care"
  />
  <meta name="author" content="Dr. Shazia Waghoo" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://drshaziawaghoo.com/" />

  {/* ✅ Open Graph / Facebook */}
  <meta property="og:title" content="Our Vision & Mission – Dr. Shazia Waghoo’s Surgical Excellence" />
  <meta
    property="og:description"
    content="Explore how Dr. Shazia Waghoo and her team are transforming surgical care with a patient-focused approach and modern technologies."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://drshaziawaghoo.com/" />
  <meta property="og:image" content="https://drshaziawaghoosurgery.com/images/drshazia-profile.jpg" />
  <meta property="og:locale" content="en_IN" />

  {/* ✅ Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Our Vision & Mission – Dr. Shazia Waghoo" />
  <meta
    name="twitter:description"
    content="Committed to patient-centered, affordable, and advanced surgical care for a healthier future. Learn more about our mission and vision."
  />
  <meta name="twitter:image" content="https://drshaziawaghoosurgery.com/images/drshazia-profile.jpg" />

  {/* ✅ Schema Markup */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": "Dr. Shazia Waghoo Surgical Care",
      "description": "We provide advanced, affordable surgical treatments with a focus on patient dignity and high outcomes.",
      "url": "https://drshaziawaghoo.com/",
      "logo": "https://drshaziawaghoosurgery.com/images/logo.png",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Andheri | Santacruz ",
        "addressCountry": "IN"
      },
      "founder": {
        "@type": "Person",
        "name": "Dr. Shazia Waghoo"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9833584847",
        "contactType": "Customer Support"
      }
    }
    `}
  </script>
</Head>


    {/* main code Start from here  */}
    <div className="bg-[#F8F9FE] w-full px-4 py-10 font-sans">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-start py-10 gap-10 md:gap-0">
        
        {/* Vision */}
        <div className="md:w-1/2 md:pr-8 border-r md:border-r-[#000000] md:h-[350px] md:ml-[-8px]">
          <h2 className="text-4xl font-bold mb-4 text-center md:text-center text-black">Our Vision</h2>
          <p className="text-gray-800 text-[18px] leading-relaxed text-center font-alata font-bold">
            Our vision is to deliver superior surgical outcomes and positively impact millions of lives.
            Led by Dr. Shazia Waghoo, our expanding team specializes in advanced surgical procedures using
            the latest technologies. We are committed to making high-quality, affordable healthcare accessible to all.
          </p>
        </div>

        {/* Mission */}
        <div className="md:w-1/2 md:pl-24 md:ml-9">
          <h2 className="text-4xl font-bold mb-4 text-center md:text-center text-black">Our Mission</h2>
          <p className="text-gray-800 text-[18px] leading-relaxed font-alata font-bold text-center">
            Our healthcare brand is dedicated to providing high-quality, affordable care in a patient-focused setting.
            Through innovation and advanced research, we aim for medical excellence while also engaging in community
            outreach and education. We’re committed to empowering individuals to lead healthier lives, treating every
            patient with dignity and respect.
          </p>
        </div>
        
      </div>
    </div>
    </>
  );
};

export default MissionVission;
