import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

const content = [
  {
    title: "What is Hernia?",
    text: [
      "A hernia occurs when an internal part of the body pushes through a weakness in the muscle or surrounding tissue wall. It can develop in various parts of the body, most commonly in the abdomen, groin, upper thigh, and belly button area. A bulge or lump may be noticeable, especially when coughing, bending over, or lifting heavy objects. Hernias can be painful and may require surgical treatment to repair the weak spot and prevent complications."
    ]
  },
  {
    title: "When Do Doctors Recommend Hernia Surgery?",
    text: [
      "Doctors usually recommend hernia surgery if the hernia is painful, growing, or causing complications. Hernia surgery helps prevent the risk of strangulation — a serious condition where the blood supply to the trapped tissue is cut off. Surgery is also advised when lifestyle changes or medications cannot alleviate the symptoms. Laparoscopic hernia repair is a common minimally invasive method involving smaller incisions, less pain, and a quicker recovery compared to open surgery."
    ]
  },
  {
    title: "What are some common problems that may require seeking a specialist Hernia Surgeon?",
    text: [
         "Doctors typically advise hernia surgery in the following situations:",
"Persistent Pain or Discomfort in Hernia area due to irreducibility or obstruction.",
"Bowel Obstruction :Hernias can obstruct bowel movements like inability to pass flatus or stool, nausea or vomiting, fever.",
"Gynecological Issues :This is a life-threatening condition where the blood supply to the herniated organ or tissue is cut off. It requires emergency surgery.",

    ],
    isList: true
  },
  {
    title: "Symptoms Interfere with Quality of Life:",
    text: [
      "If the symptoms are severe and interfere with quality of life.",

"Remember, not all hernias require immediate treatment, but eventually do as there is no treatment for hernia other than surgery. If left untreated, hernias can worsen over time, increasing discomfort and risk of complications."
    ]
  }
];

const MobileHarnia = () => {
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
    content=" Minimally invasive surgery in Vashi/Santacruz/Khar Best laparoscopic gallbladder surgeon near me Laser surgery for piles in Mumbai suburbs Female gastrointestinal surgeon in Mumbai Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo surgeon Dr Shazia Waghoo Santacruz  Dr Shazia Waghoo Andheri Dr Shazia laparoscopic surgeon Best laparoscopic surgeon in Santacruz ,Best surgeon in Santacruz, Lady surgeon Santacruz Mumbai, Laparoscopic surgeon Santacruz, General surgeon Santacruz West, Piles treatment Santacruz, Gallbladder stone surgery Santacruz, Hernia specialist in Santacruz, Fissure doctor Santacruz, Fistula specialist Santacruz, Laser piles surgery Mumbai, Breast lump surgery in Santacruz, Appendix surgery in Mumbai, Female surgeon for daycare surgery Santacruz, Dr Shazia Waghoo surgeon Mumbai, Expert laparoscopic surgeon Santacruz, Proctologist near Santacruz"
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
  <meta property="og:image" content="https://drshaziawaghoo.com/aware1.png" />

  {/* ✅ Twitter Card Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Breast Cancer Awareness Drives – Dr. Shazia Waghoo" />
  <meta
    name="twitter:description"
    content="Educational and impactful breast cancer awareness drives led by Dr. Shazia Waghoo at Kokan Bank and Asian Paints."
  />
  <meta name="twitter:image" content="https://drshaziawaghoo.com/aware1.png" />

  {/* ✅ JSON-LD Structured Data */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": "Dr. Shazia Waghoo | Surgical Clinic",
      "url": "https://drshaziawaghoo.com/",
      "image": "https://drshaziawaghoo.com/aware1.png",
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


{/* main code start from here */}
    <div className= "md:mt-14 mt-24 bg-white">
    <div className="bg-white p-6 md:p-10 max-w-5xl mx-auto font-sans text-gray-800">
     
      <div className="relative rounded-lg overflow-hidden shadow-md h-60 w-full">
        <Image
      
          src="/harniasurgary.jpg"
          alt="Hernia"
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
        />
        <div className="absolute top-7 left-4 text-white text-4xl font-semibold bg-opacity-50 px-4 py-2 rounded">
          Hernia Surgery
        </div>
      </div>

     
      {content.map((section, idx) => (
        <div className="mt-6" key={idx}>
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">{section.title}</h2>
          {section.isList ? (
            <ul className="list-disc list-inside text-xl md:text-base leading-relaxed space-y-1">
              {section.text.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : (
            section.text.map((paragraph, i) => (
              <p key={i} className="text-xl md:text-base leading-relaxed mt-2 first:mt-0">
                {paragraph}
              </p>
            ))
          )}
        </div>
      ))}
    </div>
    </div>
    </>
  );
};

export default MobileHarnia;
