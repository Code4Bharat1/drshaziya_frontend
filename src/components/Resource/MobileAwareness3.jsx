'use client';

import React from 'react';

const MobileAwareness3 = () => {
  const lectureImages = [
    '/event1.png',
    '/event2.png',
    '/event3.png',
    '/event4.png',
    '/event5.png',
    '/event6.png',
  ];

  const operationTheatreImages = [
    '/ot1.png',
    '/ot2.png',
    '/ot3.png',
  ];

  return (
    <div className="bg-white pt-6 pb-10 px-4">
      {/* Horizontal line + Heading tightly grouped */}
      <div className="border-t border-[#004979] w-full border-[1.5px] mb-3"></div>
      <p className="text-[#004979] text-[18px] font-bold mb-4">
        Breast illness awareness lecture at Rizvi College, Bandra West
      </p>

      {/* Lecture Images */}
      <div className="grid grid-cols-2 gap-4 mb-10">
        {lectureImages.map((src, index) => (
          <img
            key={`lecture-${index}`}
            src={src}
            alt={`Lecture ${index + 1}`}
            className="w-full h-40 object-cover rounded-md"
          />
        ))}
      </div>

      {/* Operation Theatre Section */}
      <h3 className="text-[22px] font-semibold text-[#004979] text-center mb-4">
        In the Operation Theatre
      </h3>

      <div className="flex flex-col items-center gap-4">
        {operationTheatreImages.map((src, index) => (
          <img
            key={`ot-${index}`}
            src={src}
            alt={`OT ${index + 1}`}
            className="w-3/4 max-w-xs h-48 object-cover rounded-md"
          />
        ))}
      </div>
    </div>
  );
};

export default MobileAwareness3;
