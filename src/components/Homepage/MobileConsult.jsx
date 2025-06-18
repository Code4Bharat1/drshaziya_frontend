import React from "react";
import Head from "next/head";


const cardData = [
  {
    title: "Experienced Doctor in Minimally-Invasive Surgery",
    description:
      "Our brand is well-regarded in the medical community for its accurate diagnosis and precise surgical care, specializing in advanced laser and laparoscopic treatments.",
  },
  {
    title: "Approachable & Available to Consult at Multiple Locations",
    description:
      "We offer advanced surgical care across multiple locations with follow-up consultations. Our approach ensures optimal treatment plans and full post-op support for a fast recovery.",
  },
  {
    title: "Cashless Facilities &\nRehabilitation Services Available",
    description:
      "We support you through your entire surgical journey—from pre-surgery onboarding and insurance to scheduling and post-op care. Our goal is to ensure a smooth, stress-free experience and full recovery.",
  },
];

const MobileConsult = () => {
  return (
    <>
    {/* SEO start from here */}
    <Head>
  {/* ✅ Primary Meta Tags */}
  <title>Why Choose Dr. Shazia Waghoo – Expert in Minimally-Invasive Surgery</title>
  <meta
    name="description"
    content="Discover why Dr. Shazia Waghoo is trusted for advanced laparoscopic and laser surgeries. Consult across multiple locations with cashless and rehab support."
  />
  <meta
    name="keywords"
    content="Dr. Shazia Waghoo, laparoscopic surgeon, laser surgery, surgical consultation, minimally invasive surgery, best surgeon Mumbai, cashless medical"
  />
  <meta name="author" content="Dr. Shazia Waghoo" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://drshaziawaghoosurgery.com/consult" />

  {/* ✅ Open Graph / Facebook */}
  <meta property="og:title" content="Why Choose Dr. Shazia Waghoo – Expert Surgeon" />
  <meta
    property="og:description"
    content="Minimally-invasive expert Dr. Shazia Waghoo offers precise surgical care, multiple consultation locations, and cashless facilities with complete support."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://drshaziawaghoosurgery.com/consult" />
  <meta property="og:image" content="https://drshaziawaghoosurgery.com/images/drshazia-profile.jpg" />
  <meta property="og:locale" content="en_IN" />

  {/* ✅ Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Why Choose Dr. Shazia Waghoo – Expert Surgeon" />
  <meta
    name="twitter:description"
    content="Consult Dr. Shazia Waghoo for advanced, accurate and patient-first surgical solutions across multiple clinics."
  />
  <meta name="twitter:image" content="https://drshaziawaghoosurgery.com/images/drshazia-profile.jpg" />

  {/* ✅ Structured Data (Schema.org) */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Physician",
      "name": "Dr. Shazia Waghoo",
      "image": "https://drshaziawaghoosurgery.com/images/drshazia-profile.jpg",
      "description": "Highly experienced laparoscopic and laser surgeon offering care across multiple locations with cashless facilities.",
      "medicalSpecialty": "Surgery",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mumbai",
        "addressCountry": "IN"
      },
      "url": "https://drshaziawaghoosurgery.com/consult",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9833584847",
        "contactType": "Customer Support"
      }
    }
    `}
  </script>
</Head>

    {/* Main code start from here */}
    <div className="bg-[#F8F9FE] py-3 sm:py-12 px-2 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <h2 className="text-[30px] md:text-[36px] mx-3 md:mx-0 font-bold text-center text-[#004979] mb-4 sm:mb-12">
        Why you should Consult Dr. Shazia Waghoo
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl shadow-[0_3px_4px_-1px_rgba(0,0,0,0.5)] md:shadow p-6 w-full max-w-[360px] sm:max-w-[280px] md:max-w-[350px] min-h-[340px] flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-lg text-center"
          >
            <h3 className="text-[18px] md:text-lg font-semibold text-[#000000] mb-3 whitespace-pre-wrap mt-9">
              {card.title}
            </h3>
            <p className="text-[18px] md:text-md text-[#000000] leading-relaxed flex-grow font-roboto">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default MobileConsult;
