// import React from 'react';

// const Awareness3 = () => {
//   const images = [
//     "/event1.png",
//     "/event2.png",
//     "/event3.png",
//     "/event4.png",
//     "/event5.png",
//     "/event6.png",
//   ];

//   return (
//     <div className="bg-white pt-7 pb-16 px-4 md:px-20">
//       {/* Heading */}
//       <h2 className="text-xl md:text-xl font-bold text-[#004979] mb-9 text-center leading-relaxed ml-[-27rem]">
//         Breast illness awareness lecture at Rizvi College, Bandra West
//       </h2>

//       {/* Image Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//         {images.map((src, index) => (
//           <div key={index} className="w-full aspect-video  rounded-md overflow-hidden">
//             <img src={src} alt={`Awareness ${index + 1}`} className="w-full h-full object-cover" />
//           </div>
//         ))}
//       </div>

//       {/* Bottom Gray Line */}
//       <div className="mt-16 border-b  border-gray-100 shadow-[0_3px_2px_rgba(0,0,0,0.1)] max-w-5xl mx-auto"></div>
//     </div>
//   );
// };

// export default Awareness3;


import React from 'react';

const Awareness3 = () => {
  const lectureImages = [
    "/event1.png",
    "/event2.png",
    "/event3.png",
    "/event4.png",
    "/event5.png",
    "/event6.png",
  ];

  const operationTheatreImages = [
    "/ot1.png",
    "/ot2.png",
    "/ot3.png" // assuming these are your operation theatre images
  ];

  return (
    <div className="bg-white pt-7 pb-16 px-4 md:px-20">
      {/* Lecture Section */}
      <h2 className="text-xl md:text-xl font-bold text-[#004979] mb-9 text-center leading-relaxed ml-[-27rem]">
        Breast cancer awareness lecture at Rizvi College, Bandra West
      </h2>

      {/* Lecture Images Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {lectureImages.map((src, index) => (
          <div key={`lecture-${index}`} className="w-full aspect-video rounded-md overflow-hidden">
            <img src={src} alt={`Lecture ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Horizontal Line */}
      <div className="mt-16 border-b border-1 border-[#004979]  max-w-5xl mx-auto"></div>

      {/* Operation Theatre Section */}
      <div className="mt-10 max-w-5xl mx-auto">
        <h3 className="text-[32px] font-bold text-[#004979] mb-8 text-center">
          In the Operation Theatre
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {operationTheatreImages.map((src, index) => (
            <div key={`ot-${index}`} className="w-full aspect-square rounded-md overflow-hidden">
              <img src={src} alt={`Operation Theatre ${index + 1}`} className="w-full h-full object-cover rounded-xl" />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Gray Line */}
      <div className="mt-16 border-b border-gray-100 shadow-[0_3px_1px_rgba(0,0,0,0.2)] max-w-5xl mx-auto"></div>
    </div>
  );
};

export default Awareness3;