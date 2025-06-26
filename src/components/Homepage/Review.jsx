



// import React from 'react';

// const reviews = [
//   { name: 'Priyanka Rathod', initial: 'P', text: 'Dr. Shazia has been treating my mother for the past 1 year and she has been exceptionally supportive and patient in guiding the direction for my mother’s diagnosis. She is extremely knowledgeable and has explained everything empathetically which is very appreciated. Will not be judgmental and I will continue to consult with her for future treatments!', date: '10/01/2025' },
//   { name: 'Asma Khan', initial: 'A', text: 'I had a wonderful experience with Dr. Shazia. She is not only highly skilled but also compassionate and attentive to her patients’ needs. She took the time to explain everything thoroughly, making it a very comfortable and well-informed visit. Truly appreciate her professionalism and care. Highly recommend Dr. Shazia to anyone seeking expert medical attention!', date: '03/01/2025' },
//   { name: 'Deepak Bhai', initial: 'D', text: 'Dr. Shazia is not only an exceptional surgeon but also a compassionate and caring doctor. She made us feel comfortable and supported throughout the entire process. Her expertise was evident in the way she handled our case, and we are so pleased with the results. We would recommend her to anyone seeking a skilled and compassionate surgeon.Regards,Ningshungphy', date: '03/01/2025' },
 
// ];

// const colors = [
//   'bg-red-300',
//   'bg-orange-500',
//   'bg-red-500',

// ];

// const Review = () => {
//   return (
//     <div className="py-4 bg-[#F8F9FE] ">
//       <h2 className="text-[44px] font-bold text-center text-[#004979] mb-6 ">Reviews on Google</h2>

//       <div className="overflow-hidden pb-6">
//         {/* Removed 'scroll-animation' class to stop rotation */}
//         <div className="flex w-max space-x-6 px-6 mt-9">
//           {reviews.slice(0, 3).map((review, index) => {
//             const colorClass = colors[index % colors.length]; // Assign color based on index
//             return (
//               <div key={index} className="relative w-[240px] h-[380px] shrink-0 box-border">
//                 {/* YELLOW TOP CARD: slightly taller and enhanced */}
//                 <div className="relative bg-[#FFD54F] h-24 border-b border-gray-300 overflow-hidden shadow-[inset_0_8px_10px_-4px_rgba(0,0,0,0.1),inset_4px_0_6px_-2px_rgba(0,0,0,0.08),inset_-4px_0_6px_-5px_rgba(0,0,0,0.08)]">
//                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-b from-black/10 to-transparent"></div>
//                 </div>

//                 <div className="bg-white rounded-t-[2rem] shadow-md p-4 pt-12 -mt-8 relative z-10 h-[310px] border border-gray-300 border-t-0 flex flex-col justify-between box-border">
//                   <div>
//                     <h3 className="font-semibold text-gray-800 text-center text-sm">{review.name}</h3>
//                     <p className="text-xs text-gray-700 mt-2 line-clamp-11 overflow-hidden">
//                       {review.text}
//                     </p>
//                   </div>

//                   <div className="flex flex-col items-end mt-4">
//                     <div className="flex items-center space-x-2">
//                       <img src="/fivestar.png" alt="Stars" className="w-16 h-auto" />
//                       <img src="bluetick.png" alt="Blue Tick" className="w-5 h-5" />
//                     </div>
//                     <div className="text-xs text-gray-500 mt-1">{review.date}</div>
//                   </div>
//                 </div>

//                 {/* Circular Initial */}
//                 <div className="absolute top-10 left-1/2 transform -translate-x-1/2 z-20">
//                   <div className={`w-14 h-14 ${colorClass} text-white flex items-center justify-center rounded-full text-[24px] font-bold`}>
//                     {review.initial}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Review;


import React from 'react';
import Head from 'next/head';

const reviews = [
  { name: 'Priyanka Rathod', initial: 'P', text: 'Dr. Shazia has been treating my mother for the past 1 year and she has been exceptionally supportive and patient in guiding the direction for my mother’s diagnosis. She is extremely knowledgeable and has explained everything empathetically which is very appreciated. Will not be judgmental and I will continue to consult with her for future treatments!', date: '10/01/2025' },
  { name: 'Asma Khan', initial: 'A', text: 'I had a wonderful experience with Dr. Shazia. She is not only highly skilled but also compassionate and attentive to her patients’ needs. She took the time to explain everything thoroughly, making it a very comfortable and well-informed visit. Truly appreciate her professionalism and care. Highly recommend Dr. Shazia to anyone seeking expert medical attention!', date: '03/01/2025' },
  { name: 'Deepak Bhai', initial: 'D', text: 'Dr. Shazia is not only an exceptional surgeon but also a compassionate and caring doctor. She made us feel comfortable and supported throughout the entire process. Her expertise was evident in the way she handled our case, and we are so pleased with the results. We would recommend her to anyone seeking a skilled and compassionate surgeon.Regards,Ningshungphy', date: '03/01/2025' },
];

const colors = [
  'bg-red-300',
  'bg-orange-500',
  'bg-red-500',
];

const Review = () => {
  return (
    <>
    {/* SEO from here */}
    <Head>
        {/* ✅ Basic SEO */}
        <title>Dr. Shazia Waghoo Laparoscopic Surgeon in Andheri and Santacruz</title>
        <meta
          name="description"
          content="Read verified patient reviews and testimonials for Dr. Shazia Waghoo, Mumbai-based Laparoscopic, Hernia, and Breast Surgeon. Trusted by many for compassionate care and expert surgery."
        />
        <meta
          name="keywords"
          content=" Minimally invasive surgery in Vashi/Santacruz/Khar Best laparoscopic gallbladder surgeon near me Laser surgery for piles in Mumbai suburbs Female gastrointestinal surgeon in Mumbai Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr. Shazia Waghoo Dr Shazia Waghoo Santacruz Dr Shazia Waghoo Andheri Dr Shazia laparoscopic hernia breast  surgeon "
        />
        <meta name="author" content="Dr.Shazia Waghoo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://drshaziawaghoo.com/" />

        {/* ✅ Open Graph */}
        <meta property="og:title" content="Patient Reviews for Dr. Shazia Waghoo" />
        <meta
          property="og:description"
          content=" Dr. Shazia Waghoo – Read their real experiences and recommendations on Google."
        />
        <meta property="og:image" content="https://drshaziawaghoosurgery.com/fivestar.png" />
        <meta property="og:url" content="https://drshaziawaghoo.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Verified Patient Testimonials | Dr. Shazia Waghoo" />
        <meta
          name="twitter:description"
          content="Explore honest reviews and feedback from patients treated by Dr. Shazia Waghoo – Expert Laparoscopic and Hernia Surgeon in Mumbai."
        />
        <meta name="twitter:image" content="https://drshaziawaghoosurgery.com/fivestar.png" />

        {/* ✅ Structured Data – Review Page */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "healthrealated",
              "name": " DrShazia Waghoo",
              "itemListElement": [
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Priyanka Rathod"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Dr. Shazia has been treating my mother... extremely knowledgeable and empathetic.",
                  "datePublished": "2025-01-10"
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Asma Khan"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "I had a wonderful experience with Dr. Shazia... compassionate and attentive.",
                  "datePublished": "2025-01-03"
                },
                {
                  "@type": "Review",
                  "author": {
                    "@type": "Person",
                    "name": "Deepak Bhai"
                  },
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5"
                  },
                  "reviewBody": "Dr. Shazia is an exceptional surgeon... supported throughout the process.",
                  "datePublished": "2025-01-03"
                }
              ]
            }
          `}
        </script>
      </Head>


    {/* main code start from herre */}
    <div className="py-4 bg-[#F8F9FE] ">
      <h2 className="text-[44px] font-bold text-center text-[#004979] mb-2 ">Reviews on Google</h2>

      <div className="overflow-hidden pb-6">
        {/* Center container and add spacing */}
        <div className="flex justify-center space-x-24 px-6 mt-9">
          {reviews.slice(0, 3).map((review, index) => {
            const colorClass = colors[index % colors.length]; // Assign color based on index
            return (
              <div key={index} className="relative w-[280px] h-[380px] shrink-0 box-border">
                {/* YELLOW TOP CARD: slightly taller and enhanced */}
                <div className="relative bg-[#FFD54F] h-24 border-b border-gray-300 overflow-hidden shadow-[inset_0_8px_10px_-4px_rgba(0,0,0,0.1),inset_4px_0_6px_-2px_rgba(0,0,0,0.08),inset_-4px_0_6px_-5px_rgba(0,0,0,0.08)]">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-b from-black/10 to-transparent"></div>
                </div>

                <div className="bg-white rounded-t-[2rem] shadow-md p-4 pt-12 -mt-8 relative z-10 h-[310px] border border-gray-300 border-t-0 flex flex-col justify-between box-border">
                  <div>
                    <h2 className="font-semibold text-black text-center text-md">{review.name}</h2>
                    <p className="text-xs text-black mt-2 line-clamp-11 overflow-hidden">
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
                  <div className={`w-14 h-14 ${colorClass} text-white flex items-center justify-center rounded-full text-[24px] font-bold`}>
                    {review.initial}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    </>
  );
};

export default Review;
