import React from 'react';
import Image from 'next/image';
import Head from 'next/head';



const MobilePatientCare = () => {
  const patientCareItems = [
    {
      id: 1,
      title: "Pre Operative Assessment",
      description: "Pre-operative assessment includes discussing the patient's complaints, a thorough physical examination, counseling on the factors and treatment options, and addressing any questions or concerns from the patient or relatives."
    },
    {
      id: 2,
      title: "Post Operative Care",
      description: "Post-operative care involves immediate hospital care after surgery, provided by a dedicated team of doctors and nurses. It includes pain management, wound care and dietary support following the surgeon's instructions."
    },
    {
      id: 3,
      title: "Diet & Lifestyle",
      description: "Diet and lifestyle consultations are vital in every clinical, pre-operative, and post-operative management. Specialized recommendations are provided and followed up to ensure effective treatment and proper care for the patient."
    },
    {
      id: 4,
      title: "Physiotherapy",
      description: "Physiotherapy plays a crucial role in preoperative optimization, enhancing surgical outcomes and speeding up post-operative recovery. Limb and chest physiotherapy work together to aid patients in recovering quickly from surgery."
    },
    {
      id: 5,
      title: "Follow Up Care",
      description: "Follow up care the surgery performed and patients requirement but done on a regular basis. Follow up care extends from post discharge up to the time patient has completely recovered physically. Good follow up care goes a long way in determining the success of the surgery as is preop preparation and postoperative care."
    },
    {
      id: 6,
      title: "Patients Review",
      description: "One of the stellar patient reviews we have received on Google"
    }
  ];

  return (
    <>
    <Head>
  {/* ✅ Basic SEO */}
  <title>Comprehensive Patient Care – Dr. Shazia Waghoo</title>
  <meta
    name="description"
    content="Explore our complete patient care services – from pre-operative assessments to post-op recovery, diet, physiotherapy, and follow-up care by Dr. Shazia Waghoo's dedicated team."
  />
  <meta
    name="keywords"
    content=" Laparoscopic Surgeon in Vashi Piles Doctor in Vashi Fissure Treatment in Vashi Fistula Specialist in Vashi Female Surgeon in Vashi Best General Surgeon in Vashi Hernia Surgery in Vashi Gallbladder Surgeon Vashi Proctologist in Vashi Women Surgeon near Vashi Navi Mumbai
 Minimally invasive surgery in Vashi/Santacruz/Khar Best laparoscopic gallbladder surgeon near me Laser surgery for piles in Mumbai suburbs Female gastrointestinal surgeon in Mumbai Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo surgeon Dr Shazia Waghoo Santacruz  Dr Shazia Waghoo Andheri Dr Shazia laparoscopic surgeon Best laparoscopic surgeon in Santacruz"
  />
  <meta name="author" content="Dr. Shazia Waghoo" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://drshaziawaghoo.com/" />

  {/* ✅ Open Graph for social sharing */}
  <meta property="og:title" content="Comprehensive Patient Care – Dr. Shazia Waghoo" />
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
          "postalCode": "400047",
          "addressCountry": "IN"
        },
        "image": "https://drshaziawaghoosurgery.com/images/patient-care-og.jpg"
      }
    `}
  </script>
</Head>

{/* main code start from here */}
    <div className="w-full  bg-[#F8F9FE] py-8 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-[#004979] text-center mb-8">
          Patient Care
        </h1>
        
        <div className="space-y-6">
          {patientCareItems.map((item) => (
            <div key={item.id} className="flex mx-4 items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
  <Image 
    src="/patientcare.png" 
    width={16} 
    height={16} 
    alt="Icon"
    className="w-4 h-4 object-contain"
  />
</div>
              </div>
              <div className="flex-1 mx-3">
                <h3 className="text-lg font-bold text-[#081D72] mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-black text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default MobilePatientCare;