'use client';
import React, { useState } from 'react';
import { MapPin } from 'lucide-react';

const clinics = [
  {
    title: 'Clinic 01',
    name: 'VLSR – The Clinic',
    address: `2nd floor, Corinthian, Linking Road,\nOpp. DBS Bank, Khar West,\nMumbai 400052`,
      locationUrl: 'https://maps.app.goo.gl/GYtbkfdc1cVYi3zR7?g_st=aw',
  },
  {
    title: 'Clinic 02',
    name: 'The Diagnostic Hub',
    address: `Florence, Nehru Road, Next to Axis Bank,\nVakola, Santacruz East,\nMumbai 400055`,
      locationUrl: 'https://maps.app.goo.gl/zT1GPjM5zAae4FGa7?g_st=aw',
  },
  {
    title: 'Clinic 03',
    name: 'CritiCare Asia Hospital',
    address: `Building No 1, Kirol Road, off Lal Bahadur Shastri Marg,\nnear Kohinoor International School,\nAli Yavar Jung, Kurla West\nMumbai 400070`,
      locationUrl: 'https://maps.app.goo.gl/cZcxSMhRq5GfAJkK8?g_st=aw',
  },
  {
    title: 'Clinic 04',
    name: 'Business Point',
    address: `8-28/B, DK Sandu Marg, Chembur Gaothan,\nChembur, Mumbai,\nMaharashtra 400071`,
      locationUrl: 'https://maps.app.goo.gl/RXbJbeJMTn8nix728?g_st=aw',
  },
  {
    title: 'Clinic 05',
    name: 'CritiCare Asia Hospital',
    address: `Plot No 516, Besides SBI, Teli Gali,\nMaheshwari Nagar, Andheri East,\nMumbai, Maharashtra 400069`,
      locationUrl: 'https://maps.app.goo.gl/5Ao6jnGeB3DP1k2eA?g_st=aw',
  },
  {
    title: 'Clinic 06',
    name: 'Mahavir Center',
    address: `Vashi-Turbhe Rd, Sector 17,\nVashi, Navi Mumbai,\nMaharashtra 400705`,
      locationUrl: 'https://maps.app.goo.gl/M3uiBh3fyG5Jy2YeA?g_st=aw',
  },
  {
    title: 'Clinic 07',
    name: 'NM Aesthetics',
    address: `Shop no. 1, Kaku Kunj CHS\nOpposite Mazgaon Garden\nSardar Balwant Singh Dodhi Marg\nMazgaon, Mumbai - 10`,
      locationUrl: 'https://maps.app.goo.gl/CZn3wx7NM1bTkoB96?g_st=aw',
  },
];

const ClinicCard = () => {
  const [showAll, setShowAll] = useState(false);

  const handleToggle = () => setShowAll(true);
  const displayedClinics = showAll ? clinics : clinics.slice(0, 6);

  return (
    <div className="bg-[#f4f6fb] py-10 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {displayedClinics.map((clinic, index) => {
          const addressLines = clinic.address.split('\n');
          return (
            <div
              key={index}
              className="bg-white rounded-md shadow-[0_2px_4px_-1px_rgba(0,0,0,0.2)] border p-6 w-full max-w-[2800px] text-center flex flex-col justify-between h-[320px] border-gray-300"
            >
              {/* Top Content */}
              <div className="flex-grow flex flex-col  items-center">
                <MapPin className="text-blue-600 mb-2" size={28} />
                <h2 className="font-semibold text-black text-xl">{clinic.title}</h2>
                <p className="font-semibold text-black mt-1 text-md">{clinic.name}</p>
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
  );
};

export default ClinicCard;
