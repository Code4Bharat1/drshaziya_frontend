// import React from 'react';

// const Awareness3 = () => {
//   const images = [
//     "/event1.png",
//     "/event2.png",
//     "/event3.png",
//     "/event4.png",
//     "/event5.png",
//     "/event6.png",
//   ];

//   return (
//     <div className="bg-white pt-7 pb-16 px-4 md:px-20">
//       {/* Heading */}
//       <h2 className="text-xl md:text-xl font-bold text-[#004979] mb-9 text-center leading-relaxed ml-[-27rem]">
//         Breast illness awareness lecture at Rizvi College, Bandra West
//       </h2>

//       {/* Image Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//         {images.map((src, index) => (
//           <div key={index} className="w-full aspect-video  rounded-md overflow-hidden">
//             <img src={src} alt={`Awareness ${index + 1}`} className="w-full h-full object-cover" />
//           </div>
//         ))}
//       </div>

//       {/* Bottom Gray Line */}
//       <div className="mt-16 border-b  border-gray-100 shadow-[0_3px_2px_rgba(0,0,0,0.1)] max-w-5xl mx-auto"></div>
//     </div>
//   );
// };

// export default Awareness3;


import React from 'react';
import Head from 'next/head';

const Awareness3 = () => {
  const lectureImages = [
    "/event1.png",
    "/event2.png",
    "/event3.png",
    "/event4.png",
    "/event5.png",
    "/event6.png",
  ];

  const operationTheatreImages = [
    "/ot1.png",
    "/ot2.png",
    "/ot3.png" // assuming these are your operation theatre images
  ];

  return (
    <>
        <Head>
  {/* ✅ Meta Title & Description */}
  <title>Breast Cancer Awareness Drives – Dr. Shazia Waghoo</title>
  <meta
    name="description"
    content="Breast cancer awareness events by Dr. Shazia Waghoo at Kokan Cooperative Bank and Asian Paints Pvt Ltd, Mumbai. Promoting early detection and women's health."
  />
  <meta
    name="keywords"
    content="Dr. Shazia Waghoo, breast cancer awareness, cancer awareness Mumbai, health awareness drives, Kokan Bank event, Asian Paints health session, women's health, early detection cancer"
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

{/* Main code start from here */}
    <div className="bg-white pt-7 pb-16 px-4 md:px-20">
      {/* Lecture Section */}
      <h2 className="text-xl md:text-xl font-bold text-[#004979] mb-9 text-center leading-relaxed ml-[-27rem]">
        Breast cancer awareness lecture at Rizvi College, Bandra West
      </h2>

      {/* Lecture Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {lectureImages.map((src, index) => (
          <div key={`lecture-${index}`} className="w-full aspect-video rounded-md overflow-hidden">
            <img src={src} alt={`Lecture ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Horizontal Line */}
      <div className="mt-16 border-b border-1 border-[#004979]  max-w-5xl mx-auto"></div>

      {/* Operation Theatre Section */}
      <div className="mt-10 max-w-5xl mx-auto">
        <h3 className="text-[32px] font-bold text-[#004979] mb-8 text-center">
          In the Operation Theatre
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {operationTheatreImages.map((src, index) => (
            <div key={`ot-${index}`} className="w-full aspect-square rounded-md overflow-hidden">
              <img src={src} alt={`Operation Theatre ${index + 1}`} className="w-full h-full object-cover rounded-xl" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gray Line */}
      <div className="mt-16 border-b border-gray-100 shadow-[0_3px_1px_rgba(0,0,0,0.2)] max-w-5xl mx-auto"></div>
    </div>
    </>
  );
};

export default Awareness3;