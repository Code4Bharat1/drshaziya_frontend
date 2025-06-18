import React from "react";
import Head from "next/head";


const RestoringhealthMobile = () => {
  return (
     <>
     {/* SEO start from here */}
<Head>
  {/* ✅ Title and Description */}
  <title>Restoring Health & Hope with Dr. Shazia Waghoo – Expert Surgeon in Mumbai</title>
  <meta
    name="description"
    content="Dr. Shazia Waghoo’s surgical practice focuses on restoring health and hope through advanced laparoscopic procedures, faster recovery, and minimal hospital stay."
  />
  <meta
    name="keywords"
    content="Dr. Shazia Waghoo, laparoscopic surgery Mumbai, minimal hospital stay, expert surgeon Mumbai, hope through surgery, quality surgical care"
  />
  <meta name="author" content="Dr. Shazia Waghoo" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://drshaziawaghoosurgery.com/restoring-health" />

  {/* ✅ Open Graph for Social Sharing */}
  <meta property="og:title" content="Restoring Health & Hope – Dr. Shazia Waghoo" />
  <meta
    property="og:description"
    content="With 10+ years of experience, Dr. Shazia Waghoo provides accessible and advanced surgical care in Mumbai, focusing on quicker recovery and compassionate treatment."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://drshaziawaghoosurgery.com/restoring-health" />
  <meta property="og:image" content="https://drshaziawaghoosurgery.com/restoringfinal.png" />
  <meta property="og:locale" content="en_IN" />

  {/* ✅ Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Restoring Health & Hope – Dr. Shazia Waghoo" />
  <meta
    name="twitter:description"
    content="Dr. Shazia Waghoo’s surgical care empowers patients through expert laparoscopic techniques and personalized recovery plans in Mumbai."
  />
  <meta name="twitter:image" content="https://drshaziawaghoosurgery.com/restoringfinal.png" />

  {/* ✅ Structured Data (JSON-LD Schema) */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Restoring Health and Hope - Dr. Shazia Waghoo",
        "url": "https://drshaziawaghoosurgery.com/restoring-health",
        "description": "Focused on healing and recovery, Dr. Shazia Waghoo provides minimally invasive surgery with a personalized care approach.",
        "mainEntity": {
          "@type": "Person",
          "name": "Dr. Shazia Waghoo",
          "jobTitle": "Laparoscopic, Hernia & Breast Surgeon",
          "image": "https://drshaziawaghoosurgery.com/restoringfinal.png",
          "url": "https://drshaziawaghoosurgery.com",
          "worksFor": {
            "@type": "MedicalOrganization",
            "name": "Dr. Shazia Waghoo Surgery Clinic"
          },
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Mumbai",
            "addressCountry": "IN"
          }
        }
      }
    `}
  </script>
</Head>


    {/* main code start from here */}
    <section className="px-4  bg-white block md:hidden">
      <div className="flex flex-col items-center text-left">
        {/* Image First in Mobile */}

        {/* Text Content */}
        <h2 className="text-[26px] font-bold text-[#004979] mb-4 leading-tight">
          <span>Restoring Health and Hope,</span>
          <br />
          <span>One Surgery At A Time</span>
        </h2>
        <p className="text-black text-normal text-lg px-2 leading-relaxed mb-4 font-jaldi">
          Dr. Shazia Waghoo’s brand offers expert, technology-driven surgical
          care with a focus on faster recovery and minimal hospital stay. With
          over 10 years of experience, her team is committed to making quality
          surgeries accessible to all.
        </p>
        <ul className="text-[#004979] text-xl mb-6 list-disc pl-5 text-left space-y-3 font-semibold">
          <li>Deep Expertise in Laparoscopic Surgeries</li>
          <li>Affiliated to Major Hospitals in Mumbai</li>
        </ul>
      </div>
      <div className="flex justify-center items-center ">
        <div className="w-[300px] h-[300px] flex items-center justify-center rounded-full overflow-hidden mb-6">
          <img
            src="restoringfinal.png"
            alt="Dr. Shazia Waghoo"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default RestoringhealthMobile;
