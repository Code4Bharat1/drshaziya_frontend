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
    '/imp1.png',
    '/imp2.png',
    '/imp3.png',
    '/imp4.png',
    '/imp5.png',
    '/imp6.png',
    '/imp7.png',
    '/imp8.png',
  ];

  return (
    <div className="bg-[#F8F9FE] py-10 px-4 text-center">
      {/* Main Heading */}
      <h2 className="text-5xl font-bold text-[#004979] mb-10">OUR IMPACT NUMBERS</h2>

      {/* Impact Cards */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-16 mb-12">
        {impactCards.map((card, index) => (
          <div
            key={index}
            className="bg-white  shadow-[0_4px_10px_rgba(0,0,0,0.4)] rounded-xl p-6 w-80 flex flex-col items-center border-2 border-gray-300"
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
      <h3 className="text-5xl font-bold text-[#004979] mb-2">Hospital Affiliations</h3>
      <p className="text-[#004979] font-bold text-2xl mt-5">
        Affiliated with 7+ reputed Hospitals and Clinics in Mumbai
      </p>

     {/* Scrolling Logos */}
 <div className="overflow-hidden h-40 mt-12"> {/* Increased height */}
  <div className="flex whitespace-nowrap animate-scroll-horizontal items-center">
    {[...logos, ...logos].map((logo, index) => (
      <img
        key={index}
        src={logo}
        alt={`Hospital logo ${index + 1}`}
        className="w-32 h-32 object-contain rounded-full border-2 p-3 bg-white shadow-[0_3px_2px_rgba(0,0,0,0.4)] mx-5"
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

