// import React from "react";

// const cardData = [
//   {
//     title: "Experienced Doctor in Minimally-Invasive Surgery",
//     description:
//       "Our brand is well-regarded in the medical community for its accurate diagnosis and precise surgical care, specializing in advanced laser and laparoscopic treatments.",
//   },
//   {
//     title: "Approachable & Available to Consult at Multiple Locations",
//     description:
//       "We offer advanced surgical care across multiple locations with follow-up consultations. Our approach ensures optimal treatment plans and full post-op support for a fast recovery.",
//   },
//   {
//     title: "Cashless Facilities &\nRehabilitation Services Available",
//     description:
//       "We support you through your entire surgical journey—from pre-surgery onboarding and insurance to scheduling and post-op care. Our goal is to ensure a smooth, stress-free experience and full recovery.",
//   },
// ];

// const Consult = () => {
//   return (
//     <div className="bg-[#F8F9FE] py-3 sm:py-12 px-2 sm:px-8 md:px-12 lg:px-20 xl:px-32">
//       <h2 className="text-[30px] md:text-[36px] mx-3 md:mx-0 font-bold text-center text-[#004979] mb-4 sm:mb-12">
//         Why you should Consult Dr. Shazia Waghoo
//       </h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
//         {cardData.map((card, index) => (
//           <div
//             key={index}
//             className="bg-white border rounded-xl shadow-[0_3px_4px_-1px_rgba(0,0,0,0.5)] md:shadow p-3 sm:p-4 w-full max-w-[280px] md:max-w-[350px] md:min-h-[280px] flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-lg"
//           >
//             <h3 className="text-[17px] md:text-lg font-semibold text-[#000000] mb-3 whitespace-pre-wrap">
//               {card.title}
//             </h3>
//             <p className="text-[18px] md:text-md text-[#000000] leading-relaxed flex-grow font-roboto">
//               {card.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Consult;



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

const Consult = () => {
  return (
    <>
    {/* SEO start from here */}
    <Head>
  {/* ✅ Basic SEO */}
  <title>Why Consult Dr. Shazia Waghoo – Surgical Expertise & Compassionate Care</title>
  <meta
    name="description"
    content="Discover why patients trust Dr. Shazia Waghoo for minimally-invasive, laser, and laparoscopic surgeries. Multiple consultation locations and post-op care available."
  />
  <meta
    name="keywords"
    content="Dr. Shazia Waghoo, consult surgeon Mumbai, laser surgeon, laparoscopic specialist, hernia surgery, multiple locations, cashless surgery, rehabilitation"
  />
  <meta name="author" content="Dr. Shazia Waghoo" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://drshaziawaghoosurgery.com/consult" />

  {/* ✅ Open Graph for Facebook */}
  <meta property="og:title" content="Why Consult Dr. Shazia Waghoo – Surgical Expertise & Care" />
  <meta
    property="og:description"
    content="Consult Dr. Shazia Waghoo for advanced, minimally-invasive surgical care. Locations across Mumbai. Compassionate follow-up and rehabilitation support available."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://drshaziawaghoosurgery.com/consult" />
  <meta property="og:image" content="https://drshaziawaghoosurgery.com/images/drshazia-cover.jpg" />

  {/* ✅ Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Why Consult Dr. Shazia Waghoo – Surgical Expertise" />
  <meta
    name="twitter:description"
    content="Patients consult Dr. Shazia Waghoo for accurate diagnosis, surgical precision, and multiple location support. Book now!"
  />
  <meta name="twitter:image" content="https://drshaziawaghoosurgery.com/images/drshazia-cover.jpg" />

  {/* ✅ Structured Data for Medical Webpage */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": "Dr. Shazia Waghoo Surgical Services",
      "url": "https://drshaziawaghoosurgery.com/consult",
      "logo": "https://drshaziawaghoosurgery.com/images/logo.png",
      "description": "Minimally-invasive surgeries, laser treatments, and post-operative rehabilitation by Dr. Shazia Waghoo in Mumbai.",
      "founder": "Dr. Shazia Waghoo",
      "areaServed": {
        "@type": "Place",
        "name": "Mumbai"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-9833584847",
        "contactType": "Customer Support",
        "areaServed": "IN",
        "availableLanguage": "English"
      }
    }
    `}
  </script>
</Head>


    {/* main code start from here */}
    <div className="bg-[#F8F9FE] py-3 sm:py-12 px-2 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <h2 className="text-[30px] md:text-[36px] mx-3 md:mx-0 font-bold text-center text-[#004979] mb-4 sm:mb-12">
        Why you should Consult Dr. Shazia Waghoo
      </h2>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white border text-center rounded-xl shadow-[0_3px_4px_-1px_rgba(0,0,0,0.5)] md:shadow p-4 w-full max-w-[320px] min-h-[320px] sm:max-w-[280px] md:max-w-[350px] md:min-h-[280px] flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
           <h3 className="text-[18px] px-3 md:text-lg font-semibold text-[#000000] mb-1 whitespace-pre-wrap">
            {card.title}
            </h3>
        <p className="text-[16px] md:text-md text-[#000000] leading-relaxed flex-grow font-roboto px-3 pt-2 pb-1">
           {card.description}
        </p>

          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Consult;
