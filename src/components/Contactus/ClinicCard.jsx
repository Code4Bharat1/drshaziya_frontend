

'use client';
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import Head from 'next/head';

const clinics = [
  {
    name: 'VLSR – The Clinic',
    address: `2nd floor, Corinthian, Linking Road,\nOpp. DBS Bank, Khar West,\nMumbai 400052`,
    locationUrl: 'https://maps.app.goo.gl/GYtbkfdc1cVYi3zR7?g_st=aw',
  },
  {
    name: 'The Diagnostic Hub',
    address: `Florence, Nehru Road, Next to Axis Bank,\nVakola, Santacruz East,\nMumbai 400055`,
    locationUrl: 'https://maps.app.goo.gl/zT1GPjM5zAae4FGa7?g_st=aw',
  },
  {
    name: 'CritiCare Asia Hospital',
    address: `Building No 1, Kirol Road, off Lal Bahadur Shastri Marg,\nnear Kohinoor International School,\nAli Yavar Jung, Kurla West\nMumbai 400070`,
    locationUrl: 'https://maps.app.goo.gl/cZcxSMhRq5GfAJkK8?g_st=aw',
  },
  {
    name: 'Chembur clinic (Dr.sheth clinic)',
    address: `8-28/B, DK Sandu Marg, Chembur Gaothan,\nChembur, Mumbai,\nMaharashtra 400071`,
    locationUrl: 'https://maps.app.goo.gl/RXbJbeJMTn8nix728?g_st=aw',
  },
  {
    name: 'CritiCare Asia Hospital',
    address: `Plot No 516, Besides SBI, Teli Gali,\nMaheshwari Nagar, Andheri East,\nMumbai, Maharashtra 400069`,
    locationUrl: 'https://maps.app.goo.gl/5Ao6jnGeB3DP1k2eA?g_st=aw',
  },
  {
    name: 'Precision super speciality',
    address: `Vashi-Turbhe Rd, Sector 17,\nVashi, Navi Mumbai,\nMaharashtra 400705`,
    locationUrl: 'https://maps.app.goo.gl/M3uiBh3fyG5Jy2YeA?g_st=aw',
  },
  {
    name: 'NM Aesthetics',
    address: `Shop no. 1, Kaku Kunj CHS\nOpposite Mazgaon Garden\nSardar Balwant Singh Dodhi Marg\nMazgaon, Mumbai - 10`,
    locationUrl: 'https://maps.app.goo.gl/CZn3wx7NM1bTkoB96?g_st=aw',
    isFeatured: true, // Add a flag for the card you want to center
  },
];

const ClinicCard = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => setShowAll(true);
  
  // When not showing all, display first 6 clinics
  // When showing all, we'll add an empty div if needed for layout
  const displayedClinics = showAll ? [...clinics] : clinics.slice(0, 6);

  return (
    <>
    {/* SEO start from here */}
    <Head>
  {/* ✅ Page Title and Description */}
  <title>Clinic Locations – Dr. Shazia Waghoo | Multispecialty Surgery Clinics in Mumbai</title>
  <meta
    name="description"
    content="Find all clinic locations of Dr. Shazia Waghoo in Mumbai including Khar West, Santacruz East, Kurla West, Chembur, Andheri East, Navi Mumbai, and Mazgaon."
  />
  <meta
    name="keywords"
    content=" Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo, clinic locations Mumbai, surgery clinics Mumbai, laparoscopic surgery clinics, multispecialty surgical clinics, Andheri, Chembur, Khar, Santacruz, Kurla ,Best surgeon in Santacruz, Lady surgeon Santacruz Mumbai, Laparoscopic surgeon Santacruz, General surgeon Santacruz West, Piles treatment Santacruz, Gallbladder stone surgery Santacruz, Hernia specialist in Santacruz, Fissure doctor Santacruz, Fistula specialist Santacruz, Laser piles surgery Mumbai, Breast lump surgery in Santacruz, Appendix surgery in Mumbai, Female surgeon for daycare surgery Santacruz, Dr Shazia Waghoo surgeon Mumbai, Expert laparoscopic surgeon Santacruz, Proctologist near Santacruz"
  />
  <meta name="author" content="Dr. Shazia Waghoo" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://drshaziawaghoosurgery.com" />

  {/* ✅ Open Graph Meta for Facebook/LinkedIn */}
  <meta property="og:title" content="Clinic Locations – Dr. Shazia Waghoo | Multispecialty Surgery Clinics in Mumbai" />
  <meta
    property="og:description"
    content="Explore all clinic locations of Dr. Shazia Waghoo for expert laparoscopic and surgical consultations across Mumbai."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://drshaziawaghoosurgery.com/" />
  <meta property="og:image" content="https://drshaziawaghoosurgery.com/images/clinic-locations-og.jpg" />

  {/* ✅ Twitter Card Meta */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Clinic Locations – Dr. Shazia Waghoo | Surgical Clinics in Mumbai" />
  <meta
    name="twitter:description"
    content="Locate the nearest clinic of Dr. Shazia Waghoo in Mumbai including Khar, Santacruz, Kurla, Chembur, Andheri and Navi Mumbai."
  />
  <meta name="twitter:image" content="https://drshaziawaghoosurgery.com/images/clinic-locations-og.jpg" />

  {/* ✅ Structured Data with Schema.org */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "name": "Dr. Shazia Waghoo Surgical Clinics",
        "url": "https://drshaziawaghoosurgery.com/clinics",
        "description": "List of clinic locations of Dr. Shazia Waghoo in Mumbai for surgical consultations including laparoscopic, hernia, breast, and GI treatments.",
        "medicalSpecialty": "Surgical",
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "2nd floor, Corinthian, Linking Road, Khar West",
            "addressLocality": "Mumbai",
            "addressRegion": "MH",
            "postalCode": "400052",
            "addressCountry": "IN"
          },
          {
            "@type": "PostalAddress",
            "streetAddress": "Florence, Nehru Road, Vakola, Santacruz East",
            "addressLocality": "Mumbai",
            "addressRegion": "MH",
            "postalCode": "400055",
            "addressCountry": "IN"
          }
        ],
        "image": "https://drshaziawaghoosurgery.com/images/clinic-locations-og.jpg"
      }
    `}
  </script>
</Head>


    {/* main code start from here */}
    <div className="bg-[#f4f6fb] py-10 px-4">
      <div className={`max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ${showAll ? 'place-items-center' : ''}`}>
        {displayedClinics.map((clinic, index) => {
          const addressLines = clinic.address.split('\n');
          
          return (
            <div
              key={index}
              className={`bg-white rounded-md shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2)] border p-6 w-full max-w-[2800px] text-center flex flex-col justify-between h-[320px] border-gray-300 ${
                showAll && clinic.isFeatured ? 'lg:col-start-2' : ''
              }`}
            >
              {/* Top Content */}
              <div className="flex-grow flex flex-col items-center">
                <MapPin className="text-blue-600 mb-2" size={28} />
                <p className="font-semibold text-black mt-1 text-[19px]">{clinic.name}</p>
                <div className="text-gray-700 mt-2 text-md">
                  {addressLines.map((line, i) => (
                    <p key={i} className={i === 1 || i === 2 ? 'underline text-black' : ''}>
                      {line}
                    </p>
                  ))}
                </div>
              </div>

              {/* Button at bottom */}
              <div className="pt-4">
                <button
                  onClick={() => window.open(clinic.locationUrl, '_blank')}
                  className="bg-[#0085DC] hover:bg-blue-700 text-white text-sm px-4 py-2 rounded"
                >
                  VIEW LOCATION
                </button>
              </div>
            </div>
          );
        })}
        
        {/* Add empty divs if needed to maintain grid layout when showing all */}
        {showAll && clinics.length % 3 === 1 && (
          <>
            <div className="hidden lg:block"></div>
            <div className="hidden lg:block"></div>
          </>
        )}
      </div>

      {!showAll && (
        <div className="text-center mt-6">
          <button
            onClick={handleToggle}
            className="bg-[#0085DC] hover:bg-blue-700 text-white px-6 py-2 rounded text-sm"
          >
            VIEW MORE
          </button>
        </div>
      )}
    </div>
    </>
  );
};

export default ClinicCard;



