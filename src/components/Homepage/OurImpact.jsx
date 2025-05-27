'use client'

import React from 'react';

const OurImpact = () => {
  const impactCards = [
    {
      image: '/heart.png', // 👈 Replace with your actual image path
      count: '2,000+',
      label: 'Happy Patients',
    },
    {
      image: '/experience.png',
      count: '10+',
      label: 'Years Of Experience',
    },
    {
      image: '/heart-hand.png',
      count: '1,000+',
      label: 'Successful Surgeries',
    },
  ];

  const logos = [
    '/impact1.png',
    '/impact2.png',
    '/impact3.png',
    '/impact4.png',
    '/impact5.png',
    '/impact6.png',
    '/impact7.png',
    '/impact8.png',
  ];

  return (
    <div className="bg-[#f8faff] py-10 px-4 text-center">
      {/* Main Heading */}
      <h2 className="text-4xl font-bold text-blue-900 mb-10">OUR IMPACT NUMBERS</h2>

      {/* Impact Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
        {impactCards.map((card, index) => (
          <div
            key={index}
            className="bg-white  shadow-[0_4px_10px_rgba(0,0,0,0.4)] rounded-xl p-6 w-72 flex flex-col items-center border-2 border-gray-300"
          >
            <img
              src={card.image}
              alt={card.label}
              className="w-14 h-14 object-contain mb-4"
            />
            <h3 className="text-2xl font-bold">{card.count}</h3>
            <p className="text-gray-700">{card.label}</p>
          </div>
        ))}
      </div>

      {/* Hospital Affiliation Section */}
      <h3 className="text-3xl font-bold text-blue-900 mb-2">Hospital Affiliations</h3>
      <p className="text-blue-800 font-medium mb-8">
        Affiliated with 7+ reputed Hospitals and Clinics in Mumbai
      </p>

     {/* Scrolling Logos */}
      <div className="overflow-hidden  ">
        <div className="flex whitespace-nowrap animate-scroll-horizontal">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Hospital logo ${index + 1}`}
              className="w-24 h-24 object-contain rounded-full border-2 p-2 bg-white shadow-[0_3px_2px_rgba(0,0,0,0.4)] mx-4 m-5 "
            />
          ))}
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-horizontal {
          animation: scroll-horizontal 25s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default OurImpact;

