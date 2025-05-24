import React from 'react';

const reviews = [
  { name: 'Priyanka Rathod', initial: 'P', text: 'Dr. Shazia has been treating my mother for the past 1 year and she has been exceptionally supportive and patient in guiding the direction for my mother’s diagnosis. She is extremely knowledgeable and has explained everything empathetically which is very appreciated. Will not be judgmental and I will continue to consult with her for future treatments!', date: '10 Oct 2023' },
  { name: 'Asma Khan', initial: 'A', text: 'I had a wonderful experience with Dr. Shazia. She is not only highly skilled but also compassionate and attentive to her patients’ needs. She took the time to explain everything thoroughly, making it a very comfortable and well-informed visit. Truly appreciate her professionalism and care. Highly recommend Dr. Shazia to anyone seeking expert medical attention!', date: '10 Oct 2023' },
  { name: 'Deepak Bhai', initial: 'D', text: 'Dr. Shazia is not only an exceptional surgeon but also a compassionate and caring doctor. She made me feel comfortable and supported throughout the entire process. Her expertise was evident, and the results were more than positive. We would recommend her to anyone seeking a skilled and compassionate surgeon.', date: '10 Oct 2023' },
  { name: 'Razia Rani', initial: 'R', text: 'Dr. Shazia’s experience and dedication truly stand out. She listens carefully and is very knowledgeable. I am grateful for the excellent care I received.', date: '10 Oct 2023' },
  { name: 'Meena Verma', initial: 'M', text: 'Very kind and helpful. Truly thankful for the guidance and treatment provided. Professional and compassionate.', date: '10 Oct 2023' },
  { name: 'Karan Patel', initial: 'K', text: 'Excellent service and care. Highly recommend her to anyone looking for expert consultation. Thank you Dr. Shazia!', date: '10 Oct 2023' },
];

const Review = () => {
  return (
    <div className="py-10 bg-white">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Reviews on Google</h2>

      {/* Horizontal scroll only */}
      <div
        className="overflow-x-auto overflow-y-hidden no-scrollbar"
        style={{ paddingBottom: '1rem' }} // padding bottom to show border properly
      >
        <div className="flex space-x-6 px-6 w-max">
          {reviews.map((review, index) => (
            <div key={index} className="relative w-[240px] h-[350px] shrink-0 box-border">

              {/* Yellow Header */}
              <div className="bg-[#FFD54F] h-20  border-b border-gray-300"></div>

              {/* White Box */}
              <div className="bg-white rounded-t-[2rem]  shadow-md p-4 pt-14 -mt-8 relative z-10 h-[260px] border border-gray-300 border-t-0 flex flex-col justify-between box-border">
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm">{review.name}</h3>
                  <p className="text-xs text-gray-700 mt-2 line-clamp-6 overflow-hidden">
                    {review.text}
                  </p>
                </div>

                {/* Stars, Blue tick, Date aligned right */}
                <div className="flex flex-col items-end mt-4">
                  <div className="flex items-center space-x-2">
                    <img src="/fivestar.png" alt="Stars" className="w-16 h-auto" />
                    <img src="bluetick.png" alt="Blue Tick" className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{review.date}</div>
                </div>
              </div>

              {/* Circular Initial */}
              <div className="absolute top-5 left-1/2 transform -translate-x-1/2 z-20">
                <div className="w-12 h-12 bg-orange-500 text-white flex items-center justify-center rounded-full text-sm font-bold   ">
                  {review.initial}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Review;
