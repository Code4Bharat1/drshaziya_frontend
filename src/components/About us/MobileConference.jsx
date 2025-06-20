import React from 'react';
import Head from 'next/head';


const MobileConference = () => {
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
  <title>Conference Presentations – Dr. Shazia Waghoo's Surgical Research</title>
  <meta
    name="description"
    content="Explore Dr. Shazia Waghoo’s notable conference presentations including ASICON 2020 and PSOGI 2018. Discover her research in general surgery, CRS+HIPEC, and ovarian cancer."
  />
  <meta
    name="keywords"
    content="Dr. Shazia Waghoo, Dr Shazia Waghoo Santacruz ,Dr Shazia Waghoo Andheri,Best laparoscopic surgeon in Santacruz  expert surgeon Mumbai, hope through surgery, quality surgical care"
  />
  <meta name="author" content="Dr. Shazia Waghoo" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://drshaziawaghoo.com/" />

  {/* ✅ Open Graph */}
  <meta property="og:title" content="Conference Presentations – Dr. Shazia Waghoo" />
  <meta
    property="og:description"
    content="See Dr. Shazia Waghoo's international conference presentations, including research on surgery training, ovarian cancer, and CRS+HIPEC."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://drshaziawaghoo.com/" />
  <meta property="og:image" content="https://drshaziawaghoosurgery.com/images/drshazia-cover.jpg" />

  {/* ✅ Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Conference Presentations – Dr. Shazia Waghoo" />
  <meta
    name="twitter:description"
    content="International conference presentations by Dr. Shazia Waghoo on CRS+HIPEC, ovarian cancer, and surgery training."
  />
  <meta name="twitter:image" content="https://drshaziawaghoosurgery.com/images/drshazia-cover.jpg" />

  {/* ✅ Schema Markup for a Medical Professional & Scholarly Work */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Dr. Shazia Waghoo",
      "description": "General, Hernia, and Laparoscopic Surgeon with several conference presentations on CRS+HIPEC, ovarian cancer, and general surgery education.",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://drshaziawaghoo.com/"
      },
      "worksFor": {
        "@type": "Hospital",
        "name": "Criticare Asia, Surya, Apollo Spectra"
      },
      "knowsAbout": ["CRS+HIPEC", "Ovarian Cancer", "General Surgery", "Surgical Education"],
      "url": "https://drshaziawaghoo.com/"
    }
    `}
  </script>
</Head>




    {/* main code start from here */}
    <div className="w-full bg-[#F9F8FE] py-2 px-4">
      <div className="max-w-6xl mx-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#004979] text-center mb-4">
          Conference Presentations
        </h1>
        
        <div className="space-y-10">
          {presentations.map((presentation) => (
            <div key={presentation.id} className="flex flex-col">
              {/* Square Image Box */}
              <div className="w-full aspect-square bg-gray-100 overflow-hidden shadow-md">
                <img 
                  src={presentation.image} 
                  alt={presentation.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Text Content - Outside the image box */}
              <div className="mt-4">
                <h2 className="text-lg sm:text-xl font-bold text-center text-[#004979] mb-2 leading-tight">
                  {presentation.title}
                </h2>
                <p className="text-gray-700 text-base text-center sm:text-lg">
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


export default MobileConference;
