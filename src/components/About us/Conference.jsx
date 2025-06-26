import React from 'react';
import Head from 'next/head';

const Conference = () => {
  const presentations = [
    {
      id: 1,
      title: "COVID 19 pandemic induced Nominal training and Deskilling in the specialty of General Surgery",
      description: "Free Paper at ASI Virtual ASICON 2020.",
      image: "/conference-1.jpg",
      alt: "Surgery team in operating room"
    },
    {
      id: 2,
      title: "Extent of Peritoneal disease in lower abdomen and its relation to nodal disease in Stage 3c Epithelial Ovarian Cancer",
      description: "Poster Presentation at 11th International Workshop on Peritoneal Malignancy – PSOGI 2018, Paris, September 2018.",
      image: "/conference-2.jpg",
      alt: "Medical professional with equipment in hallway"
    },
    {
      id: 3,
      title: "Utility of BiPAP (Biphasic Positive Airway Pressure) ventilation in CRS+HIPEC (Cytoreductive Surgery +Hyperthermic Intraperitoneal Chemotherapy)",
      description: "Poster Presentation in 11th International Workshop on Peritoneal Malignancy – PSOGI 2018, Paris, September 2018.",
      image: "/conference-3.jpg",
      alt: "Medical professional in green scrubs working"
    }
  ];

  return (
    <>
    {/* SEO start from here */}
    <Head>
  {/* ✅ Basic SEO */}
  <title>Conference Presentations – Dr. Shazia Waghoo | Advanced Surgical Expertise</title>
  <meta
    name="description"
    content="Explore Dr. Shazia Waghoo’s international conference presentations on laparoscopic and oncological surgery, including ASICON and PSOGI 2018 Paris."
  />
  <meta
    name="keywords"
    content="Laparoscopic Surgeon in Vashi Piles Doctor in Vashi Fissure Treatment in Vashi Fistula Specialist in Vashi Female Surgeon in Vashi Best General Surgeon in Vashi Hernia Surgery in Vashi Gallbladder Surgeon Vashi Proctologist in Vashi Women Surgeon near Vashi Navi Mumbai Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo, Dr Shazia Waghoo Santacruz ,Dr Shazia Waghoo Andheri,Best laparoscopic surgeon in Santacruz  expert surgeon Mumbai, hope through surgery, quality surgical care"
  />
  <meta name="author" content="Dr. Shazia Waghoo" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://drshaziawaghoosurgery.com" />

  {/* ✅ Open Graph (Facebook, LinkedIn) */}
  <meta property="og:title" content="Conference Presentations – Dr. Shazia Waghoo" />
  <meta
    property="og:description"
    content="Highlights of Dr. Shazia Waghoo’s contributions to global surgical conferences including CRS+HIPEC and ovarian cancer research."
  />
  <meta property="og:url" content="https://drshaziawaghoo.com" />
  <meta property="og:type" content="website" />
  <meta property="og:image" content="https://drshaziawaghoosurgery.com/images/conference-og.jpg" />

  {/* ✅ Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Conference Presentations – Dr. Shazia Waghoo" />
  <meta
    name="twitter:description"
    content="Explore global conference presentations on advanced surgical techniques by Dr. Shazia Waghoo."
  />
  <meta name="twitter:image" content="https://drshaziawaghoosurgery.com/images/conference-og.jpg" />

  {/* ✅ Optional Schema Markup */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": "Dr. Shazia Waghoo's Surgery Clinic",
      "url": "https://drshaziawaghoo.com/",
      "logo": "https://drshaziawaghoosurgery.com/logo.png",
      "sameAs": [
        "https://www.facebook.com/DrShaziaWaghoo",
        "https://www.linkedin.com/in/drshaziawaghoo"
      ],
      "description": "Explore conference presentations by Dr. Shazia Waghoo, showcasing her expertise in laparoscopic and oncological surgery.",
      "event": [
        {
          "@type": "MedicalConference",
          "name": "ASI Virtual ASICON 2020",
          "startDate": "2020-12-15",
          "location": {
            "@type": "VirtualLocation",
            "url": "https://drshaziawaghoo.com/"
          }
        },
        {
          "@type": "MedicalConference",
          "name": "PSOGI 2018 Paris",
          "startDate": "2018-09-10",
          "location": {
            "@type": "Place",
            "name": "Andheri, Santacruz"
          }
        }
      ]
    }
    `}
  </script>
</Head>


    {/* main code start from here */}
    <div className="w-full bg-[#F9F8FE]">
    <div className="max-w-6xl mx-auto p-6 ">
      <h1 className="text-4xl font-bold text-[#004979] text-center mb-10">
        Conference Presentations
      </h1>
      
      {/* Desktop Layout - Hidden on Mobile */}
      <div className="hidden lg:flex gap-25">
        <div className="flex-1 space-y-8 bg-[#F8F9FE] p-8">
          {/* First Presentation */}
          <div>
            <h2 className="text-2xl font-bold text-[#004979] mb-5">
              COVID 19 pandemic induced Nominal training and <br />
              Deskilling in the specialty of General Surgery
            </h2>
            <p className="text-gray-700 mb-10 text-2xl ">
              Free Paper at ASI Virtual ASICON 2020.
            </p>
          </div>

          {/* Second Presentation */}
          <div>
            <h2 className="text-2xl font-bold text-[#004979] mb-5">
              Extent of Peritoneal disease in lower <br />
              abdomen and its relation to nodal disease in <br />
              Stage 3c Epithelial Ovarian Cancer
            </h2>
            <p className="text-gray-700 mb-10 text-2xl ">
              Poster Presentation at 11th International <br />
              Workshop on Peritoneal Malignancy – PSOGI <br />
              2018, Paris, September 2018.
            </p>
          </div>

          {/* Third Presentation */}
          <div>
            <h2 className="text-2xl font-bold text-[#004979] mb-5">
              Utility of BiPAP (Biphasic Positive Airway <br />
              Pressure) ventilation in CRS+HIPEC <br />
              (Cytoreductive Surgery +Hyperthermic <br />
              Intraperitoneal Chemotherapy)
            </h2>
            <p className="text-gray-700 text-2xl ">
              Poster Presentation in 11th International <br />
              Workshop on Peritoneal Malignancy – PSOGI <br />
              2018, Paris, September 2018.
            </p>
          </div>
        </div>

        {/* Right side - Images stacked vertically */}
        <div className="w-110 border-2 border-[#004979] p-4 bg-gray-50">
          <div className="space-y-3">
            <div className="w-80 h-56 bg-gray-200 ">
              <img 
                src="/conference-1.jpg" 
                alt="Surgery team in operating room"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="w-80 h-56 bg-gray-200 ">
              <img 
                src="/conference-2.jpg" 
                alt="Medical professional with equipment in hallway"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="w-80 h-56 bg-gray-200 ">
              <img 
                src="/conference-3.jpg" 
                alt="Medical professional in green scrubs working"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Visible only on Mobile */}
      <div className="lg:hidden space-y-8">
        {presentations.map((presentation) => (
          <div key={presentation.id} className="bg-white border-2 border-[#004979] rounded-lg overflow-hidden">
            {/* Image */}
            <div className="w-full h-48 bg-gray-200">
              <img 
                src={presentation.image} 
                alt={presentation.alt}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Content */}
            <div className="p-4">
              <h2 className="text-lg font-bold text-[#004979] mb-3 leading-tight">
                {presentation.title}
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                {presentation.description}
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

export default Conference;