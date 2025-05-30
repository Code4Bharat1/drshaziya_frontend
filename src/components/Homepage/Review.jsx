// import React from 'react';

// const reviews = [
//   { name: 'Priyanka Rathod', initial: 'P', text: 'Dr. Shazia has been treating my mother for the past 1 year and she has been exceptionally supportive and patient in guiding the direction for my mother’s diagnosis. She is extremely knowledgeable and has explained everything empathetically which is very appreciated. Will not be judgmental and I will continue to consult with her for future treatments!', date: '10/01/2025' },
//   { name: 'Asma Khan', initial: 'A', text: 'I had a wonderful experience with Dr. Shazia. She is not only highly skilled but also compassionate and attentive to her patients’ needs. She took the time to explain everything thoroughly, making it a very comfortable and well-informed visit. Truly appreciate her professionalism and care. Highly recommend Dr. Shazia to anyone seeking expert medical attention!', date: '03/01/2025' },
//   { name: 'Deepak Bhai', initial: 'D', text: 'Dr. Shazia is not only an exceptional surgeon but also a compassionate and caring doctor. She made us feel comfortable and supported throughout the entire process. Her expertise was evident in the way she handled our case, and we are so pleased with the results. We would recommend her to anyone seeking a skilled and compassionate surgeon.Regards,Ningshungphy', date: '03/01/2025' },
//  { name: 'Raziya Rngari', initial: 'R', text: 'Dr shaziya is extremely talented. She has done my daughter laparoscopic cholecystectomy surgery.she is caring, kind n takes care of patient till they heal completely. I would highly recommend her.', date: '18/12/2025' },
//  { name: 'Iram khan', initial: 'I', text: 'Dr shazia is really a great doctor she is so friendly and attentive Highly recommended', date: '26/11/2024' },
//  { name: 'Bhusan kadam', initial: 'B', text: 'Dr. Shazia waghoo saved my mummy life with her prompt diagnosis and treatment. Forever grateful', date: '25/10/2024' },

// ];

// const Review = () => {
//   return (
//     <div className="py-4 bg-[#f8f8fc]">
//       <h2 className="text-3xl font-bold text-center text-blue-900 mb-6">Reviews on Google</h2>

//       {/* Outer container with padding bottom for margin */}
//       <div className="overflow-hidden pb-6">

//         {/* Scrolling container */}
//         <div className="flex w-max scroll-animation space-x-6 px-6">
//           {reviews.concat(reviews).map((review, index) => ( // Duplicate list for infinite effect
//             <div key={index} className="relative w-[240px] h-[350px] shrink-0 box-border">

//               {/* Yellow Header */}
//               <div className="relative bg-[#FFD54F] h-20 border-b border-gray-300">
//                 <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-b from-black/30 to-transparent rounded-t-md"></div>
//               </div>

//               {/* White Box */}
//               <div className="bg-white rounded-t-[2rem] shadow-md p-4 pt-8 -mt-8 relative z-10 h-[310px] border border-gray-300 border-t-0 flex flex-col justify-between box-border">
//                 <div>
//                   <h3 className="font-semibold text-gray-800 text-center text-sm">{review.name}</h3>
//                   <p className="text-xs text-gray-700 mt-2 line-clamp-11 overflow-hidden">
//                     {review.text}
//                   </p>
//                 </div>

//                 {/* Stars, Blue tick, Date aligned right */}
//                 <div className="flex flex-col items-end mt-4">
//                   <div className="flex items-center space-x-2">
//                     <img src="/fivestar.png" alt="Stars" className="w-16 h-auto" />
//                     <img src="bluetick.png" alt="Blue Tick" className="w-5 h-5" />
//                   </div>
//                   <div className="text-xs text-gray-500 mt-1">{review.date}</div>
//                 </div>
//               </div>

//               {/* Circular Initial */}
//               <div className="absolute top-5 left-1/2 transform -translate-x-1/2 z-20">
//                 <div className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-full text-sm font-bold">
//                   {review.initial}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// };

// export default Review;



import React from 'react';

const reviews = [
  { name: 'Priyanka Rathod', initial: 'P', text: 'Dr. Shazia has been treating my mother for the past 1 year and she has been exceptionally supportive and patient in guiding the direction for my mother’s diagnosis. She is extremely knowledgeable and has explained everything empathetically which is very appreciated. Will not be judgmental and I will continue to consult with her for future treatments!', date: '10/01/2025' },
  { name: 'Asma Khan', initial: 'A', text: 'I had a wonderful experience with Dr. Shazia. She is not only highly skilled but also compassionate and attentive to her patients’ needs. She took the time to explain everything thoroughly, making it a very comfortable and well-informed visit. Truly appreciate her professionalism and care. Highly recommend Dr. Shazia to anyone seeking expert medical attention!', date: '03/01/2025' },
  { name: 'Deepak Bhai', initial: 'D', text: 'Dr. Shazia is not only an exceptional surgeon but also a compassionate and caring doctor. She made us feel comfortable and supported throughout the entire process. Her expertise was evident in the way she handled our case, and we are so pleased with the results. We would recommend her to anyone seeking a skilled and compassionate surgeon.Regards,Ningshungphy', date: '03/01/2025' },
  { name: 'Raziya Rngari', initial: 'R', text: 'Dr shaziya is extremely talented. She has done my daughter laparoscopic cholecystectomy surgery.she is caring, kind n takes care of patient till they heal completely. I would highly recommend her.', date: '18/12/2025' },
  { name: 'Iram khan', initial: 'I', text: 'Dr shazia is really a great doctor she is so friendly and attentive Highly recommended', date: '26/11/2024' },
  { name: 'Bhusan kadam', initial: 'B', text: 'Dr. Shazia waghoo saved my mummy life with her prompt diagnosis and treatment. Forever grateful', date: '25/10/2024' },
];

const colors = [
  'bg-red-300',
  'bg-orange-500',
  'bg-red-500',
  'bg-purple-500',
  'bg-pink-500',
  'bg-green-500',
  'bg-green-500',
  'bg-emerald-500',
];

const Review = () => {
  return (
    <div className="py-4 bg-[#F8F9FE] ">
      <h2 className="text-[44px] font-bold text-center text-[#004979] mb-6 ">Reviews on Google</h2>

      <div className="overflow-hidden pb-6">
        <div className="flex w-max scroll-animation space-x-6 px-6 mt-9">
          {reviews.concat(reviews).map((review, index) => {
            const colorClass = colors[index % colors.length]; // Assign color based on index
            return (
              <div key={index} className="relative w-[240px] h-[380px] shrink-0 box-border">
                {/* YELLOW TOP CARD: slightly taller and enhanced */}
                <div className="relative bg-[#FFD54F] h-24 border-b border-gray-300 overflow-hidden shadow-[inset_0_8px_10px_-4px_rgba(0,0,0,0.1),inset_4px_0_6px_-2px_rgba(0,0,0,0.08),inset_-4px_0_6px_-5px_rgba(0,0,0,0.08)]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-b from-black/10 to-transparent"></div>
                </div>

                <div className="bg-white rounded-t-[2rem] shadow-md p-4 pt-12 -mt-8 relative z-10 h-[310px] border border-gray-300 border-t-0 flex flex-col justify-between box-border">
                  <div>
                    <h3 className="font-semibold text-gray-800 text-center text-sm">{review.name}</h3>
                    <p className="text-xs text-gray-700 mt-2 line-clamp-11 overflow-hidden">
                      {review.text}
                    </p>
                  </div>

                  <div className="flex flex-col items-end mt-4">
                    <div className="flex items-center space-x-2">
                      <img src="/fivestar.png" alt="Stars" className="w-16 h-auto" />
                      <img src="bluetick.png" alt="Blue Tick" className="w-5 h-5" />
                    </div>
                    <div className="text-xs text-gray-500 mt-1">{review.date}</div>
                  </div>
                </div>

                {/* Circular Initial */}
                <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20">
                  <div className={`w-14 h-14 ${colorClass} text-white flex items-center justify-center rounded-full text-sm font-bold`}>
                    {review.initial}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Review;
