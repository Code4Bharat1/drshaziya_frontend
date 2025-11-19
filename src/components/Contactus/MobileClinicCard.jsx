'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import { MapPin } from 'lucide-react';

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
    address: `Building No 1, Kirol Road, off Lal Bahadur Shastri Marg,\nnear Kohinoor International School,\nAli Yavar Jung, Santacruz West\nMumbai 400070`,
    locationUrl: 'https://maps.app.goo.gl/cZcxSMhRq5GfAJkK8?g_st=aw',
  },
  {
    name: 'Precision Super Speciality',
    address: `Vashi-Turbhe Rd, Sector 17,\nVashi, Navi Mumbai,\nMaharashtra 400705`,
    locationUrl: 'https://maps.app.goo.gl/M3uiBh3fyG5Jy2YeA?g_st=aw',
  },
  {
    name: 'CritiCare Asia Hospital',
    address: `Plot No 516, Besides SBI, Teli Gali,\nMaheshwari Nagar, Andheri East,\nMumbai, Maharashtra 400069`,
    locationUrl: 'https://maps.app.goo.gl/5Ao6jnGeB3DP1k2eA?g_st=aw',
  },
  {
    name: 'Chembur clinic (Dr.Sheth Clinic)',
    address: `8-28/B, DK Sandu Marg, Chembur Gaothan,\nChembur, Mumbai,\nMaharashtra 400071`,
    locationUrl:'https://maps.app.goo.gl/RXbJbeJMTn8nix728?g_st=aw' ,
  },
  {
    name: 'NM Aesthetics',
    address: `Shop no. 1, Kaku Kunj CHS\nOpposite Mazgaon Garden\nSardar Balwant Singh Dodhi Marg\nMazgaon, Mumbai - 10`,
    locationUrl: 'https://maps.app.goo.gl/CZn3wx7NM1bTkoB96?g_st=aw',
  },
  {
    name: "SRV Hospital",
    address: `Dr. Mandakini Parihar Marg, Shell Colony, Chembur, Mumbai, Maharashtra 400089`,
    locationUrl: "https://share.google/48KldfYZktqTd4laW",
  },
];

const MobileClinicCard = () => {
  const [showAll, setShowAll] = useState(false);
  const handleToggle = () => setShowAll(true);
  const displayedClinics = showAll ? clinics : clinics.slice(0, 6);

  return (
    <>
      <Head>
        <title>Best Clinics & Surgeons in Santacruz, Mumbai | Find Nearby Locations</title>
        <meta
          name="description"
          content="Explore top clinics and surgeons in Santacruz and across Mumbai. Includes details like addresses, Google Map locations, and specialties in laparoscopic and laser surgeries."
        />
        <meta
          name="keywords"
          content="Lady surgeon in Santacruz, Best general surgeon in Santacruz Mumbai, Laparoscopic surgeon Santacruz, Breast lump surgery Santacruz, Hernia specialist Santacruz, Piles treatment Santacruz Mumbai, Gallbladder stone surgery Santacruz, Fissure treatment Santacruz, Fistula specialist Santacruz, Laser piles surgery Mumbai, Appendix surgery Santacruz, Daycare surgery Santacruz, Female doctor for surgery, Proctologist Santacruz, Best laparoscopic surgeon near Santacruz"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="VLSR - The Clinic" />
        <meta property="og:title" content="Top Clinics & Laparoscopic Surgeons in Santacruz" />
        <meta
          property="og:description"
          content="List of top-rated clinics and surgeons in Santacruz and surrounding Mumbai. View Directions and specialties online."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drshaziawaghoo.com/clinics" />
        <meta property="og:image" content="/santacruz-clinic-thumbnail.jpg" />
        <link rel="canonical" href="https://drshaziawaghoo.com/clinics" />
      </Head>

      <div className="bg-[#f4f6fb] py-10 px-4 mt-[120px]">
        <div className="max-w-5xl mx-8 grid grid-cols-1 gap-8">
          {displayedClinics.map((clinic, index) => {
            const addressLines = clinic.address.split('\n');
            return (
              <div
                key={index}
                className="bg-white rounded-md shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2)] p-6 w-full text-center flex flex-col justify-between h-auto"
              >
                <div className="flex-grow flex flex-col items-center">
                  <MapPin className="text-blue-600 mb-2" size={28} />
                  <p className="font-semibold mt-1 text-[19px] text-black">{clinic.name}</p>
                  <div className="text-gray-700 mt-2 text-md">
                    {addressLines.map((line, i) => (
                      <p key={i} className={i === 1 || i === 2 ? 'underline text-black' : ''}>
                        {line}
                      </p>
                    ))}
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => window.open(clinic.locationUrl, '_blank')}
                    className="bg-[#069bd6] hover:bg-blue-700 text-white text-sm px-4 py-2 rounded"
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
              onClick={handleToggle}
              className="bg-[#069bd6] hover:bg-blue-700 text-white px-6 py-2 rounded text-sm"
            >
              VIEW MORE
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileClinicCard;
