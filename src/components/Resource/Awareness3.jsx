import React from 'react';

const Awareness3 = () => {
  const images = [
    "/event1.png",
    "/event2.png",
    "/event3.png",
    "/event4.png",
    "/event5.png",
    "/event6.png",
  ];

  return (
    <div className="bg-white pt-7 pb-16 px-4 md:px-20">
      {/* Heading */}
      <h2 className="text-xl md:text-xl font-medium text-[#004979] mb-9 text-center leading-relaxed ml-[-30rem]">
        Breast illness awareness lecture at Rizvi College, Bandra West
      </h2>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {images.map((src, index) => (
          <div key={index} className="w-full aspect-video  rounded-md overflow-hidden">
            <img src={src} alt={`Awareness ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Bottom Gray Line */}
      <div className="mt-16 border-b  border-gray-100 shadow-[0_3px_2px_rgba(0,0,0,0.1)] max-w-5xl mx-auto"></div>
    </div>
  );
};

export default Awareness3;
