"use client";
import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";

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
    text: "I had a wonderful experience with Dr. Shazia. She is not only highly skilled but also compassionate and attentive to her patients needs. She took the time to explain everything thoroughly, making it a very comfortable and well-informed visit. Truly appreciate her professionalism and care. Highly recommend Dr. Shazia to anyone seeking expert medical attention!",
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

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <Head>
        <title>Dr. Shazia Waghoo Laparoscopic Surgeon in Andheri and Santacruz</title>
        <meta
          name="description"
          content="Read real patient reviews about Dr. Shazia Waghoo, a compassionate and skilled Laparoscopic, Hernia & Breast Surgeon in Mumbai. Trusted for over 10 years."
        />
        <meta
          name="keywords"
          content=" Laparoscopic Surgeon in Vashi Piles Doctor in Vashi Fissure Treatment in Vashi Fistula Specialist in Vashi Female Surgeon in Vashi Best General Surgeon in Vashi Hernia Surgery in Vashi Gallbladder Surgeon Vashi Proctologist in Vashi Women Surgeon near Vashi Navi Mumbai
 Minimally invasive surgery in Vashi/Santacruz/Khar Best laparoscopic gallbladder surgeon near me Laser surgery for piles in Mumbai suburbs Female gastrointestinal surgeon in Mumbai  Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo reviews,Dr Shazia Waghoo Santacruz,Dr Shazia Waghoo Andheri,Best laparoscopic surgeon in Santacruz Laparoscopic Surgeon Mumbai, Hernia Specialist, Breast Surgeon Mumbai ,Book appointment Dr Shazia Waghoo, Best surgeon in Santacruz, Lady surgeon Mumbai, Mobile consultation form, Piles treatment Santacruz, Gallbladder stone surgery Santacruz, Laparoscopic surgeon Santacruz, Hernia treatment, Fistula fissure doctor, Breast lump surgeon Santacruz"
        />
        <meta name="author" content="Dr. Shazia Waghoo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://drshaziawaghoo.com/" />
        <meta property="og:title" content="Real Patient Reviews - Dr. Shazia Waghoo" />
        <meta
          property="og:description"
          content="See what patients are saying about Dr. Shazia Waghoo. Honest reviews about her experience, empathy, and surgical care."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drshaziawaghoo.com/" />
        <meta
          property="og:image"
          content="https://drshaziawaghoosurgery.com/surgicalexellencedr.png"
        />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Patient Reviews - Dr. Shazia Waghoo" />
        <meta
          name="twitter:description"
          content="Discover what real patients say about their treatment experience with Dr. Shazia Waghoo in Mumbai."
        />
        <meta
          name="twitter:image"
          content="https://drshaziawaghoosurgery.com/surgicalexellencedr.png"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebPage",
              "name": "Patient Reviews - Dr. Shazia Waghoo",
              "url": "https://drshaziawaghoo.com/",
              "description": "Explore authentic testimonials from patients who were treated by Dr. Shazia Waghoo, a reputed Laparoscopic, Hernia & Breast Surgeon in Mumbai.",
              "mainEntity": {
                "@type": "Person",
                "name": "Dr. Shazia Waghoo",
                "jobTitle": "Laparoscopic, Hernia & Breast Surgeon",
                "image": "https://drshaziawaghoosurgery.com/surgicalexellencedr.png",
                "url": "https://drshaziawaghoo.com/",
                "worksFor": {
                  "@type": "MedicalOrganization",
                  "name": "Dr. Shazia Waghoo Surgery Clinic"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Mumbai",
                  "addressCountry": "IN"
                }
              }
            }
          `}
        </script>
      </Head>

      <div className="py-6 bg-[#F8F9FE]">
        <h2 className="text-[26px] sm:text-[30px] font-bold text-center text-[#004979] mb-6 px-4">
          Reviews on Google
        </h2>

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
                  <div className="relative w-full max-w-sm mx-auto min-h-[500px] m-2">
                    <div className="relative bg-[#FFD54F] h-20 border-b border-gray-300 overflow-hidden shadow-[inset_0_8px_10px_-4px_rgba(0,0,0,0.1),inset_4px_0_6px_-2px_rgba(0,0,0,0.08),inset_-4px_0_6px_-5px_rgba(0,0,0,0.08)] rounded-t-lg mx-4">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-b from-black/10 to-transparent"></div>
                    </div>

                    <div className="bg-white rounded-t-[2rem] shadow-lg p-6 pt-14 -mt-8 relative z-10 border border-gray-300 border-t-0 flex flex-col justify-between rounded-b-lg mx-4">
                      <div>
                        <h3 className="font-semibold text-black text-center text-lg mb-4">
                          {review.name}
                        </h3>
                        <p className="text-sm text-black leading-relaxed">
                          {review.text}
                        </p>
                      </div>

                      <div className="flex flex-col items-end mt-4">
                        <div className="flex items-center space-x-2 mb-1">
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
      </div>
    </>
  );
};

export default MobileReviewsSwiper;
