



//main
// import React from 'react';

// const careItems = [
//   {
//     text: 'Pre-operative assessment covers patient complaints, physical examination, counseling on illness and treatment, and addressing patient or family concerns.',
//   },
//   {
//     text: 'Physiotherapy, including limb and chest exercises, is vital for preoperative optimization, improving surgical outcomes and accelerating postoperative recovery.',
//   },
//   {
//     text: 'Post-operative care involves immediate hospital care after surgery, provided by a dedicated team of doctors and nurses. It includes pain management, wound care, and dietary support following the surgeon’s instructions.',
//   },
//   {
//     text: 'Follow-up care, tailored to the surgery and patient’s needs, is done regularly from discharge until full recovery and is crucial to surgical success, just like pre-op and post-op care.',
//   },
//   {
//     text: 'Diet and lifestyle consultations are essential across clinical, pre-operative, and post-operative care, with tailored advice and follow-up to ensure effective treatment and patient well-being.',
//   },
//   {
//     text: 'One of the stellar patient reviews we have received on Google',
//   },
// ];

// const PatientCare = () => {
//   return (
//     <div className="py-12 px-6 max-w-8xl mx-auto bg-[#F9F8FE]">
//       <h2 className="text-[52px] font-bold text-center mb-12 text-[#004979]">Patient Care</h2>
//       <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
//         {careItems.map((item, index) => (
//           <div key={index} className="relative w-[336px] h-[205px] mx-auto">
//             {/* Blue background card */}
//             <div className=" shadow-[0_3px_2px_rgba(0,0,0,0.3)] absolute top-0 left-0 w-full h-[199px] bg-[#0085DC] rounded-[38px] transform -translate-x-6 -translate-y-3"></div>

//             {/* White card */}
//             <div className="absolute top-1 left-6 w-[345px] h-[184px] bg-white rounded-[36px] shadow-[0_3px_2px_rgba(0,0,0,0.2)] p-4 pt-1 flex items-start z-10 border border-[#bcbbbb]">
//               <p className="text-md text-[#000000] leading-snug mt-6 ml-4">{item.text}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default PatientCare;





import React from 'react';
import Head from 'next/head';


const careItems = [
  {
    title: 'Pre Operative Assessment',
    text: 'Pre-operative assessment covers patient complaints, physical examination, counseling on illness and treatment, and addressing patient or family concerns.',
  },
  {
    title: 'Physiotherapy',
    text: 'Physiotherapy, including limb and chest exercises, is vital for preoperative optimization, improving surgical outcomes and accelerating postoperative recovery.',
  },
  {
    title: 'Post Operative Care',
    text: 'Post-operative care involves immediate hospital care after surgery, provided by a dedicated team of doctors and nurses. It includes pain management, wound care, and dietary support following the surgeon’s instructions.',
  },
  {
    title: 'Follow Up Care',
    text: 'Follow-up care, tailored to the surgery and patient’s needs, is done regularly from discharge until full recovery and is crucial to surgical success, just like pre-op and post-op care.',
  },
  {
    title: 'Diet & Lifestyle',
    text: 'Diet and lifestyle consultations are essential across clinical, pre-operative, and post-operative care, with tailored advice and follow-up to ensure effective treatment and patient well-being.',
  },
  {
    title: 'Patients’ Review',
    text: 'One of the stellar patient reviews we have received on Google',
  },
];

const PatientCare = () => {
  return (
    <>
    <Head>

  <title>Comprehensive Patient Care – Dr. Shazia Waghoo</title>
  <meta
    name="description"
    content="Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo surgeon Dr Shazia Waghoo Santacruz  Dr Shazia Waghoo Andheri Dr Shazia laparoscopic surgeon Best laparoscopic surgeon in Santacruz"
  />
  <meta
    name="keywords"
    content="Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo surgeon Dr Shazia Waghoo Santacruz  Dr Shazia Waghoo Andheri Dr Shazia laparoscopic surgeon Best laparoscopic surgeon in Santacruz"
  />
  <meta name="author" content="Dr. Shazia Waghoo" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://drshaziawaghoo.com/" />

  {/* ✅ Open Graph for social sharing */}
  <meta property="og:title" content="Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo surgeon Dr Shazia Waghoo Santacruz  Dr Shazia Waghoo Andheri Dr Shazia laparoscopic surgeon Best laparoscopic surgeon in Santacruz" />
  <meta
    property="og:description"
    content="We provide end-to-end patient care – from pre-operative assessment, physiotherapy, to post-op and follow-up care – tailored to individual patient needs."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://drshaziawaghoo.com/" />
  <meta property="og:image" content="https://drshaziawaghoosurgery.com/images/patient-care-og.jpg" />

  {/* ✅ Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Comprehensive Patient Care – Dr. Shazia Waghoo" />
  <meta
    name="twitter:description"
    content="Detailed patient care approach by Dr. Shazia Waghoo from surgery planning to full recovery. Your health is our priority."
  />
  <meta name="twitter:image" content="https://drshaziawaghoosurgery.com/images/patient-care-og.jpg" />

  {/* ✅ Schema.org Structured Data for Patient Care */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "MedicalOrganization",
        "name": "Dr. Shazia Waghoo Clinic",
        "url": "https://drshaziawaghoo.com/",
        "description": "Comprehensive surgical and patient care by Dr. Shazia Waghoo, including pre-operative assessment, physiotherapy, post-operative and follow-up care.",
        "medicalSpecialty": "Surgery",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Mumbai",
          "addressRegion": "MH",
          "postalCode": "400016",
          "addressCountry": "IN"
        },
        "image": "https://drshaziawaghoosurgery.com/images/patient-care-og.jpg"
      }
    `}
  </script>
</Head>

    {/* main code start from here  */}
    <div className="py-12 px-6 max-w-8xl mx-auto bg-[#F9F8FE]">
      <h2 className="text-[52px] font-bold text-center mb-12 text-[#004979]">Patient Care</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {careItems.map((item, index) => (
          <div key={index} className="relative w-[336px] h-[205px] mx-auto">
            {/* Blue background card */}
            <div className=" shadow-[0_3px_2px_rgba(0,0,0,0.3)] absolute top-0 left-0 w-full h-[199px] bg-[#0085DC] rounded-[38px] transform -translate-x-6 -translate-y-3"></div>

            {/* White card */}
            <div className="absolute top-1 left-6 w-[345px] h-[184px] bg-white rounded-[36px] shadow-[0_3px_2px_rgba(0,0,0,0.2)] p-4 pt-1 flex flex-col items-start z-10 border border-[#bcbbbb]">
              <h3 className="text-[17px] font-bold text-black ml-4 mt-4">{item.title}</h3>
              <p className="text-sm font-medium text-gray-900 leading-snug mt-2 ml-4">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default PatientCare;