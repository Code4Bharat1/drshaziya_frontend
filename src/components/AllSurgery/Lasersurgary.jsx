"use client";

import Image from "next/image";
import Head from "next/head";

const laserContent = [
  {
    heading: "Laser Surgery",
    text: `Laser surgery is a precise and minimally invasive technique that uses focused light beams to treat various medical conditions. It involves directing a laser to cut or destroy tissue, often resulting in less pain, less bleeding, and scarring compared to traditional surgery. The precision of lasers allows for targeted treatment, reducing damage to surrounding tissues. Additionally, laser surgeries are typically quicker, leading to shorter recovery times and lower risk of infection.`,
  },
  {
    heading: "When do Doctors Advise Laser surgery?",
    text: `Doctors advise Laser surgery for a variety of medical conditions due to its minimally invasive nature and precision. Common indications include the treatment of skin lesions, tumors, and abnormal tissue growths. Laser surgery is often recommended for removal of tumors in organs like the thyroid or prostate or anal area. Additionally, it is effective in treating anorectal conditions, varicose vein and can alleviate symptoms associated with kidney stones.`,
  },
  {
    heading: "What are some Conditions Treated with Laser surgery?",
    text: `Laser surgery is used to treat the following conditions here:\n\nAnorectal illness like Haemorrhoids, Anal Fissure, Anal Fistula and Pilonidal Sinus.\n\nVaricose Veins.\n\nBenign Thyroid Nodules.`,
  },
];

const LaserSurgery = () => {
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
    content="General Surgeon in Khar Laparoscopic Surgery in Khar Mumbai Best Female Surgeon in Khar Piles and Fissure Doctor Khar Fistula Treatment Khar Gallbladder Surgery Doctor Khar Hernia Specialist in Khar Mumbai Surgeon near Khar West Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo surgeon Dr Shazia Waghoo Santacruz  Dr Shazia Waghoo Andheri Dr Shazia laparoscopic surgeon Best laparoscopic surgeon in Santacruz ,Best surgeon in Santacruz, Lady surgeon Santacruz Mumbai, Laparoscopic surgeon Santacruz, General surgeon Santacruz West, Piles treatment Santacruz, Gallbladder stone surgery Santacruz, Hernia specialist in Santacruz, Fissure doctor Santacruz, Fistula specialist Santacruz, Laser piles surgery Mumbai, Breast lump surgery in Santacruz, Appendix surgery in Mumbai, Female surgeon for daycare surgery Santacruz, Dr Shazia Waghoo surgeon Mumbai, Expert laparoscopic surgeon Santacruz, Proctologist near Santacruz"
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


    <div className="md:mt-14 mt-24 bg-white">
      <div className="bg-white p-6 md:p-10 max-w-6xl mx-auto font-sans text-gray-800">

        
        <div className="relative  overflow-hidden shadow-md h-60 md:h-72">
          <Image
            src="/lasersurgary.jpg" 
            alt="Laser Surgery"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute top-11 left-4 text-white text-4xl md:text-5xl font-semibold px-4 py-2 rounded">
            Laser Surgery
          </div>
        </div>

       
        <div className="mt-10 space-y-10 text-gray-900">
          {laserContent.map((section, index) => (
            <div key={index}>
              <h2 className="text-3xl md:text-3xl font-bold mb-2">{section.heading}</h2>
              <p className="text-xl md:text-xl leading-relaxed whitespace-pre-line">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default LaserSurgery;
