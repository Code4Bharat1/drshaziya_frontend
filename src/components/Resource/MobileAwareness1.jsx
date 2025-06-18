'use client';

import React from 'react';

const MobileAwareness1 = () => {
  const firstImages = [
    '/aware1.png',
    '/aware2.png',
  ];

  const secondImages = [
    '/aware6.png',
    '/aware4.png',
  ];

  const thirdImages = [
    '/aware5.png',
    '/aware7.png',
  ];

  return (
    <div className="bg-white pt-2 pb-4 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2 className="text-[34px] font-bold text-[#004979] text-center mb-2">
          AWARENESS
        </h2>
        <div className="border-t border-[#004979] w-full mb-6"></div>

        {/* Section 1 */}
        <p className="text-[#004979] font-semibold text-[19px] mb-3">
          Breast cancer awareness lecture at Kokan Cooperative Bank, Mumbai
        </p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {firstImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Kokan Bank ${idx + 1}`}
              className="w-full h-40 rounded-lg object-cover"
            />
          ))}
        </div>

        {/* Section 2 */}
        <p className="text-[#004979] font-semibold text-[19px] mb-3">
          Breast cancer awareness drive at Asian Paints Pvt Ltd, Mumbai
        </p>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {secondImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Asian Paints ${idx + 1}`}
              className="w-full h-40 rounded-lg object-cover"
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {thirdImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Asian Paints extra ${idx + 1}`}
              className="w-full h-40 rounded-lg object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileAwareness1;
