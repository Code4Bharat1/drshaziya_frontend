"use client";
import React, { useState, useEffect } from "react";
import { MapPin } from "lucide-react";
import Head from "next/head";

/* ===========================
   DISTANCE FUNCTION
=========================== */
const getDistanceKm = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) *
      Math.cos(lat2 * Math.PI / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  return R * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
};

/* ===========================
   CLINIC DATA
=========================== */
const clinics = [
  {
    name: "VLSR – The Clinic",
    area: "Khar West",
    nearbyAreas: ["Bandra West", "Santacruz West", "Linking Road"],
    address: `2nd floor, Corinthian, Linking Road,
Opp. DBS Bank, Khar West,
Mumbai 400052`,
    locationUrl: "https://maps.app.goo.gl/GYtbkfdc1cVYi3zR7",
    lat: 19.0717,
    lng: 72.8320,
  },
  {
    name: "The Diagnostic Hub",
    area: "Santacruz East",
    nearbyAreas: ["Vakola", "Kalina", "Bandra East"],
    address: `Florence, Nehru Road, Next to Axis Bank,
Vakola, Santacruz East,
Mumbai 400055`,
    locationUrl: "https://maps.app.goo.gl/zT1GPjM5zAae4FGa7",
    lat: 19.079,
    lng: 72.8479,
  },
  {
    name: "CritiCare Asia Hospital Santacruz (W)",
    area: "Santacruz West",
    nearbyAreas: ["Khar West", "Bandra West", "Juhu"],
    address: `Building No 1, Kirol Road,
near Kohinoor International School,
Ali Yavar Jung, Santacruz (W)
Mumbai 400070`,
    locationUrl: "https://maps.app.goo.gl/cZcxSMhRq5GfAJkK8",
    lat: 19.0866,
    lng: 72.83,
  },
  {
    name: "Precision Super Speciality",
    area: "Vashi",
    nearbyAreas: ["Navi Mumbai","Turbhe","Sanpada", "Turbhe", "Nerul"],
    address: `Vashi-Turbhe Rd, Sector 17,
Vashi, Navi Mumbai,
Maharashtra 400705`,
    locationUrl: "https://maps.app.goo.gl/M3uiBh3fyG5Jy2YeA",
    lat: 19.0759,
    lng: 72.9987,
  },
  {
    name: "CritiCare Asia Hospital Andheri (E)",
    area: "Andheri East",
    nearbyAreas: ["Jogeshwari East", "MIDC", "Chakala"],
    address: `Plot No 516, Teli Gali,
Maheshwari Nagar, Andheri (E),
Mumbai 400069`,
    locationUrl: "https://maps.app.goo.gl/5Ao6jnGeB3DP1k2eA",
    lat: 19.1136,
    lng: 72.8697,
  },
  {
    name: "Chembur clinic (Dr.Sheth Clinic)",
    area: "Chembur",
    nearbyAreas: ["Ghatkopar", "Kurla", "Tilak Nagar"],
    address: `8-28/B, DK Sandu Marg,
Chembur, Mumbai 400071`,
    locationUrl: "https://maps.app.goo.gl/RXbJbeJMTn8nix728",
    lat: 19.0534,
    lng: 72.9005,
  },
  {
    name: "NM Aesthetics",
    area: "Mazgaon",
    nearbyAreas: ["Mahalaxmi", "Byculla", "Lower Parel"],
    address: `Shop no. 1, Kaku Kunj CHS
Opposite Mazgaon Garden
Sardar Balwant Singh Dodhi Marg
Mazgaon, Mumbai - 10`,
    locationUrl: "https://maps.app.goo.gl/CZn3wx7NM1bTkoB96",
    lat: 18.969,
    lng: 72.8353,
  },
  {
    name: " SRV Hospital",
    area: "Chembur",
    nearbyAreas: ["Govandi", "Mankhurd", "Kurla East"],
    address: `Dr. Mandakini Parihar Marg,
Shell Colony, Chembur,
Mumbai 400089`,
    locationUrl: "https://share.google/48KldfYZktqTd4laW",
    lat: 19.0544,
    lng: 72.8992,
  },
];



const ClinicCard = () => {
  const [showAll, setShowAll] = useState(false);
  const [nearbyClinics, setNearbyClinics] = useState([]);

  const SUBLOCATION_WHITELIST = new Set(["CritiCare Asia Hospital"]);

  const getSubLocation = (address) => {
    const match = address.match(
      /(Khar|Santacruz|Chembur|Andheri|Vashi|Mazgaon|Navi\s*Mumbai)\s*(East|West|E|W)?/i
    );
    if (!match) return null;
    return match[2]
      ? `${match[1]} (${match[2][0].toUpperCase()})`
      : match[1];
  };

useEffect(() => {
  if (!navigator.geolocation) {
    setNearbyClinics(clinics);
    return;
  }

  const searchArea =
    typeof window !== "undefined"
      ? new URLSearchParams(window.location.search)
          .get("area")
          ?.toLowerCase()
      : "";

  navigator.geolocation.getCurrentPosition(
    (pos) => {
      const { latitude, longitude } = pos.coords;

      const filtered = clinics.filter((clinic) => {
        const dist = getDistanceKm(
          latitude,
          longitude,
          clinic.lat,
          clinic.lng
        );

        const areaMatch =
          clinic.area.toLowerCase().includes(searchArea || "") ||
          clinic.nearbyAreas.some((a) =>
            a.toLowerCase().includes(searchArea || "")
          );

        // ✅ show clinic if near OR area matches
        return dist <= 10 || areaMatch;
      });

      setNearbyClinics(filtered.length ? filtered : clinics);
    },
    () => setNearbyClinics(clinics)
  );
}, []);



  const displayedClinics = showAll
    ? nearbyClinics
    : nearbyClinics.slice(0, 6);

  return (
    <>
      <Head>
       <title>
          Clinic Locations – Dr. Shazia Waghoo | Multispecialty Surgery Clinics
          in Mumbai
        </title>
        <meta
          name="description"
          content="Find all clinic locations of Dr. Shazia Waghoo in Mumbai including Khar West, Santacruz East, Santacruz West, Chembur, Andheri East, Navi Mumbai, and Mazgaon."
        />
         <meta
          name="keywords"
          content=" Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo, clinic locations Mumbai, surgery clinics Mumbai, laparoscopic surgery clinics, multispecialty surgical clinics, Andheri, Chembur, Khar, Santacruz, Santacruz ,Best surgeon in Santacruz, Lady surgeon Santacruz Mumbai, Laparoscopic surgeon Santacruz, General surgeon Santacruz West, Piles treatment Santacruz, Gallbladder stone surgery Santacruz, Hernia specialist in Santacruz, Fissure doctor Santacruz, Fistula specialist Santacruz, Laser piles surgery Mumbai, Breast lump surgery in Santacruz, Appendix surgery in Mumbai, Female surgeon for daycare surgery Santacruz, Dr Shazia Waghoo surgeon Mumbai, Expert laparoscopic surgeon Santacruz, Proctologist near Santacruz"
        />
        <meta name="author" content="Dr. Shazia Waghoo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://drshaziawaghoo.com" />
         {/* ✅ Open Graph Meta for Facebook/LinkedIn */}
        <meta
          property="og:title"
          content="Clinic Locations – Dr. Shazia Waghoo | Multispecialty Surgery Clinics in Mumbai"
        />
        <meta
          property="og:description"
          content="Explore all clinic locations of Dr. Shazia Waghoo for expert laparoscopic and surgical consultations across Mumbai."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drshaziawaghoo.com/" />
        <meta
          property="og:image"
          content="https://drshaziawaghoo.com/images/clinic-locations-og.jpg"
        />

        {/* ✅ Twitter Card Meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Clinic Locations – Dr. Shazia Waghoo | Surgical Clinics in Mumbai"
        />
        <meta
          name="twitter:description"
          content="Locate the nearest clinic of Dr. Shazia Waghoo in Mumbai including Khar, Santacruz, Santacruz, Chembur, Andheri and Navi Mumbai."
        />
        <meta
          name="twitter:image"
          content="https://drshaziawaghoo.com/images/clinic-locations-og.jpg"
        />
        {/* ✅ Structured Data with Schema.org */}
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        "name": "Dr. Shazia Waghoo Surgical Clinics",
        "url": "https://drshaziawaghoo.com/clinics",
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
        "image": "https://drshaziawaghoo.com/images/clinic-locations-og.jpg"
      }
    `}
        </script>
      </Head>
  {/* main code start from here */}
      <div className="bg-[#f4f6fb] py-10 px-4 mt-[120px]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {displayedClinics.map((clinic, index) => {
            const addressLines = clinic.address.split("\n");
            const subLocation = SUBLOCATION_WHITELIST.has(clinic.name)
              ? getSubLocation(clinic.address)
              : null;

            const isTwoInLastRow = displayedClinics.length % 3 === 2;
            const isFirstOfLastTwo = index === displayedClinics.length - 2;
            const isLast = index === displayedClinics.length - 1;

            if (isTwoInLastRow && isFirstOfLastTwo) {
              const nextClinic = displayedClinics[index + 1];

              const Card = ({ c }) => (
                  <div className="bg-white border
                  
                border-gray-300 rounded-md shadow-md p-6 w-[320px] text-center flex flex-col justify-between h-[320px]">

                  <div>
                    <MapPin className="text-blue-600 mb-2 mx-auto" size={28} />
                    <p className="font-semibold text-[20px] leading-tight">
    {c.name}
  </p>

                    {SUBLOCATION_WHITELIST.has(c.name) && (
                      <p className="font-bold">
                        {getSubLocation(c.address)}
                      </p>
                    )}
                    {c.address.split("\n").map((line, i) => (
                      <p
                        key={i}
                        className="underline decoration-gray-500 underline-offset-2"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                  <div className="pt-4 text-center">
                    <button
                      onClick={() => window.open(c.locationUrl, "_blank")}
                      className="bg-[#069bd6] hover:bg-blue-700 text-white text-sm px-6 py-2 rounded"
                    >
                      View Direction
                    </button>
                  </div>
                </div>
              );

              return (
                <div
                  key="last-two"
                  className="col-span-1 sm:col-span-2 lg:col-span-3 flex justify-center gap-8"
                >
                  <Card c={clinic} />
                  <Card c={nextClinic} />
                </div>
              );
            }

            if (isTwoInLastRow && isLast) return null;

            return (
              <div
                key={index}
                className="bg-white border border-gray-300 rounded-md shadow-md p-6 text-center flex flex-col justify-between h-[320px]">

                <div>
                  <MapPin className="text-blue-600 mb-2 mx-auto" size={28} />
                  <p className="font-semibold text-[20px] leading-snug">{clinic.name}</p>
                  {subLocation && (
                    <p className="font-bold">{subLocation}</p>
                  )}
                  {addressLines.map((line, i) => (
                    <p
                      key={i}
                      className="underline decoration-gray-500 underline-offset-2"
                    >
                      {line}
                    </p>
                  ))}
                </div>
                <div className="pt-4 text-center">
                  <button
                    onClick={() =>
                      window.open(clinic.locationUrl, "_blank")
                    }
                    className="bg-[#069bd6] hover:bg-blue-700 text-white px-6 py-2 rounded"
                  >
                    View Direction
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {!showAll && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(true)}
              className="bg-[#069bd6] hover:bg-blue-700 text-white px-6 py-2 rounded"
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
