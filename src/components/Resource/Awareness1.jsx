// 'use client'

// import React from 'react'

// const Awareness1 = () => {
//   const images = [
//     '/aware1.png',
//     '/aware2.png',
//     '/aware3.png',
//   ];

//   return (
//     <div className="bg-white py-10 px-4">
//       {/* Heading and line */}
//       <div className="w-full max-w-5xl mx-auto mb-4 px-2">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#004979] text-center mb-2">
//           AWARENESS
//         </h2>
//         <hr className="border-t-2 border-[#004979] w-full mt-9" />
//       </div>

//       {/* Subtitle */}
//       <div className="w-full max-w-5xl mx-auto mb-8 px-2">
//         <p className="text-[#004979] font-medium text-base sm:text-lg md:text-xl mt-8 ml-2">
//           Breast cancer awareness lecture at Kokan Cooperative Bank, Mumbai
//         </p>
//       </div>

//       {/* Image Grid */}
//       <div className="flex flex-wrap justify-center gap-6 sm:gap-10 md:gap-12">
//         {images.map((src, index) => (
//           <img
//             key={index}
//             src={src}
//             alt={`Awareness ${index + 1}`}
//             className={`rounded-lg  object-cover 
//               w-64 h-44 
//               sm:w-72 sm:h-52 
//               md:w-80 md:h-60 
//               ${index === 0 ? 'sm:ml-6 md:ml-11' : ''}
//             `}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Awareness1;




'use client'

import React from 'react'

const Awareness1 = () => {
  const images = [
    '/aware1.png',
    '/aware2.png',
    '/aware3.png',
  ];

  const secondImages = [
    '/aware4.png',
    '/aware5.png',
    '/aware6.png',
  ];

  return (
    <div className="bg-white py-10 px-4">
      {/* Main Container */}
      <div className="max-w-5xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#004979] mb-4 text-center">AWARENESS</h2>
        <div className="border-t border-[#004979] w-full mb-10"></div>

        {/* Subtitle 1 */}
        <p className="text-[#004979] font-semibold text-lg sm:text-xl mb-6">
          Breast cancer awareness lecture at Kokan Cooperative Bank, Mumbai
        </p>

        {/* First Image Row - Left Aligned */}
        <div className="flex flex-wrap gap-6 sm:gap-8 mb-10">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Awareness ${index + 1}`}
              className="rounded-lg object-cover w-64 h-44 sm:w-72 sm:h-52 md:w-80 md:h-60"
            />
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#004979] w-full mb-6"></div>

        {/* Subtitle 2 */}
        <p className="text-[#004979] font-semibold text-lg sm:text-xl mb-6">
          Breast cancer awareness drive at Asian Paints Pvt Ltd, Mumbai
        </p>

        {/* Second Image Row - Left Aligned */}
        <div className="flex flex-wrap gap-6 sm:gap-8 mb-10">
          {secondImages.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Awareness Drive ${index + 1}`}
              className="rounded-lg object-cover w-64 h-44 sm:w-72 sm:h-52 md:w-80 md:h-60"
            />
          ))}
        </div>

        {/* Bottom Divider */}
        <div className="border-t border-[#004979] w-full"></div>
      </div>
    </div>
  );
};

export default Awareness1;

