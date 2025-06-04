"use client";
import React, { useState, useRef, useEffect } from "react";

const reviews = [
  {
    name: "Priyanka Rathod",
    initial: "P",
    text: "Dr. Shazia has been treating my mother for the past 1 year and she has been exceptionally supportive and patient in guiding the direction for my mother's diagnosis. She is extremely knowledgeable and has explained everything empathetically which is very appreciated. Will not be judgmental and I will continue to consult with her for future treatments!",
    date: "10/01/2025",
  },
  {
    name: "Asma Khan",
    initial: "A",
    text: "I had a wonderful experience with Dr. Shazia. She is not only highly skilled but also compassionate and attentive to her patients' needs. She took the time to explain everything thoroughly, making it a very comfortable and well-informed visit. Truly appreciate her professionalism and care. Highly recommend Dr. Shazia to anyone seeking expert medical attention!",
    date: "03/01/2025",
  },
  {
    name: "Deepak Bhai",
    initial: "D",
    text: "Dr. Shazia is not only an exceptional surgeon but also a compassionate and caring doctor. She made us feel comfortable and supported throughout the entire process. Her expertise was evident in the way she handled our case, and we are so pleased with the results. We would recommend her to anyone seeking a skilled and compassionate surgeon.Regards,Ningshungphy",
    date: "03/01/2025",
  },
];

const colors = ["bg-red-300", "bg-orange-500", "bg-red-500"];

const MobileReviewsSwiper = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const containerRef = useRef(null);

  // Handle touch start
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  // Handle touch move
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  // Handle touch end - determine swipe direction
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < reviews.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Auto-scroll functionality (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  // Navigate to specific slide
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="py-6 bg-[#F8F9FE] ">
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#004979] mb-6 px-4">
        Reviews on Google
      </h2>

      {/* Mobile Swiper Container */}
      <div className="relative overflow-hidden">
        <div
          ref={containerRef}
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {reviews.map((review, index) => {
            const colorClass = colors[index % colors.length];
            return (
              <div key={index} className="w-full flex-shrink-0 px-6">
                <div className="relative w-full max-w-sm mx-auto h-[420px]">
                  {/* YELLOW TOP CARD */}
                  <div className="relative bg-[#FFD54F] h-20 border-b border-gray-300 overflow-hidden shadow-[inset_0_8px_10px_-4px_rgba(0,0,0,0.1),inset_4px_0_6px_-2px_rgba(0,0,0,0.08),inset_-4px_0_6px_-5px_rgba(0,0,0,0.08)] rounded-t-lg">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-b from-black/10 to-transparent"></div>
                  </div>

                  {/* WHITE CONTENT CARD */}
                  <div className="bg-white rounded-t-[2rem] shadow-lg p-6 pt-14 -mt-8 relative z-10 h-[380px] border border-gray-300 border-t-0 flex flex-col justify-between rounded-b-lg">
                    <div className="flex-1">
                      <h3 className="font-semibold text-black text-center text-lg mb-4">
                        {review.name}
                      </h3>
                      <p className="text-sm text-black leading-relaxed overflow-hidden">
                        {review.text}
                      </p>
                    </div>

                    <div className="flex flex-col items-end mt-6">
                      <div className="flex items-center space-x-2 mb-2">
                        {/* Star Rating - using text as fallback for images */}
                        <div className="flex text-yellow-400 text-lg">
                          {"★".repeat(5)}
                        </div>
                        <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      </div>
                      <div className="text-xs text-gray-500">{review.date}</div>
                    </div>
                  </div>

                  {/* Circular Initial */}
                  <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-20">
                    <div
                      className={`w-16 h-16 ${colorClass} text-white flex items-center justify-center rounded-full text-2xl font-bold shadow-lg`}
                    >
                      {review.initial}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center space-x-2 mt-6">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? "bg-[#004979] scale-110"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to review ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows (visible on larger screens) */}
      <div className="hidden sm:flex justify-between items-center absolute top-1/2 left-4 right-4 transform -translate-y-1/2 pointer-events-none">
        <button
          className={`pointer-events-auto w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transition-opacity ${
            currentIndex === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-50"
          }`}
          onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
          disabled={currentIndex === 0}
        >
          <span className="text-[#004979] text-lg">‹</span>
        </button>
        <button
          className={`pointer-events-auto w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center transition-opacity ${
            currentIndex === reviews.length - 1
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-gray-50"
          }`}
          onClick={() =>
            currentIndex < reviews.length - 1 &&
            setCurrentIndex(currentIndex + 1)
          }
          disabled={currentIndex === reviews.length - 1}
        >
          <span className="text-[#004979] text-lg">›</span>
        </button>
      </div>

 
    </div>
  );
};

export default MobileReviewsSwiper;
