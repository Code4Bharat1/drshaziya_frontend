



'use client'
import React, { useEffect, useRef, useState } from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Head from 'next/head';

const testimonials = [
  `“I cannot express enough gratitude for the exceptional care my mother received from Dr. Shazia Waghoo. From the very first consultation to the successful operation, Dr. Shazia demonstrated unparalleled professionalism and genuine compassion. Her expertise and attention to detail put me at ease, and the operation was a resounding success. We felt well-informed and supported throughout the entire process. Even the post op procedures were smooth as ever. I highly recommend Dr. Shazia for anyone seeking a skilled, caring and a dedicated surgeon. Thank you for everything you’ve done for us!”`,
  `Dr. Shazia as the name rightly suggests an extraordinary doctor – a surgeon blessed with magical hands epitome of patience and understanding -totally patient centric thought process – thank you for taking good care of my aunt Sudha – we are extremely grateful.`,
  `Google has only 5star that’s why doctor I gave you that much, but you and your team deserve this whole galaxy. Dr.Shazia gave her whole heart and soul in my Abba’s case. She with her confidence and Allah’s blessings brought my Abba back. Best doctor in laparoscopic cholecystectomy surgery. I have no words to describe her work. Dynamic personality. Thanks and stay blessed`,
  `I had an exceptional experience with Dr. Shazia Waghoo during my uncles laparoscopic umbilical hernia surgery. Her expertise, compassion, and attention to detail instilled confidence in me. The procedure went smoothly, and her postoperative care was thorough. I highly recommend Dr. Waghoo for her skillful and compassionate approach to hernia surgery.`
];

const MobileTestimonial = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const startRotation = () => {
    intervalRef.current = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);
  };

  const stopRotation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    startRotation();
    return () => stopRotation();
  }, []);

  return (
    <>
    {/* SEO start from here */}
    <Head>
  {/* ✅ Basic SEO */}
  <title>Patient Testimonials – Dr. Shazia Waghoo</title>
  <meta
    name="description"
    content="Read heartfelt reviews and testimonials from patients who received exceptional care from Dr. Shazia Waghoo, a leading hernia and laparoscopic surgeon."
  />
  <meta
    name="keywords"
    content="Dr. Shazia Waghoo reviews, patient testimonials, hernia surgery, laparoscopic surgeon, Google reviews, Mumbai surgeon, best surgeon"
  />
  <meta name="author" content="Dr. Shazia Waghoo" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://drshaziawaghoosurgery.com/testimonials" />

  {/* ✅ Open Graph for Facebook & LinkedIn */}
  <meta property="og:title" content="Patient Testimonials – Dr. Shazia Waghoo" />
  <meta
    property="og:description"
    content="Discover what patients are saying about their experience with Dr. Shazia Waghoo – from successful surgeries to compassionate care."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://drshaziawaghoosurgery.com/testimonials" />
  <meta property="og:image" content="https://drshaziawaghoosurgery.com/images/testimonials-og.jpg" />

  {/* ✅ Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Patient Testimonials – Dr. Shazia Waghoo" />
  <meta
    name="twitter:description"
    content="Read reviews from real patients who received expert surgical care from Dr. Shazia Waghoo in Mumbai."
  />
  <meta name="twitter:image" content="https://drshaziawaghoosurgery.com/images/testimonials-og.jpg" />

  {/* ✅ Schema.org Structured Data for Testimonials Page */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Patient Testimonials – Dr. Shazia Waghoo",
        "description": "Patient reviews and feedback on Dr. Shazia Waghoo’s surgical expertise and care.",
        "url": "https://drshaziawaghoosurgery.com/testimonials",
        "publisher": {
          "@type": "Organization",
          "name": "Dr. Shazia Waghoo Clinic",
          "logo": {
            "@type": "ImageObject",
            "url": "https://drshaziawaghoosurgery.com/logo.png"
          }
        }
      }
    `}
  </script>
</Head>


{/* main code start from here */}
    <div className="bg-[#F8F9FE] px-4 pt-10 sm:pt-8">
      {/* Heading */}
      <h2 className="text-3xl  font-semibold text-[#004979] text-center mt-20 ">
        TESTIMONIALS
      </h2>

      {/* Card section */}
      <div className="flex justify-center items-start mt-11">
        <div
          className="relative w-full max-w-md sm:max-w-lg lg:max-w-2xl"
          onMouseEnter={stopRotation}
          onMouseLeave={startRotation}
        >
          {/* Yellow rotated background card */}
          <div className=" ml-8 absolute inset-0  bg-[#FFD54F] rounded-3xl transform rotate-[-11deg] -translate-x-6 z-0 shadow-[0_3px_2px_rgba(0,0,0,0.2)]"></div>

          {/* White main card with fixed height */}
          <div className="relative z-10 bg-white rounded-3xl p-8 sm:p-8 text-gray-800 min-h-[220px] transition duration-500 ease-in-out">
            {/* Top-left quote icon */}
            <div className="absolute -top-5 left-6 sm:left-9 bg-[#0085DC] p-3 sm:p-4 rounded-full shadow-md">
              <FaQuoteLeft className="text-white text-lg sm:text-xl" />
            </div>

            <p className="text-xs leading-relaxed mt-4">
              {testimonials[index]}
            </p>

            {/* Bottom-right quote icon */}
            <div className="absolute -bottom-5 right-6 sm:right-9 bg-[#0085DC] p-3 sm:p-4 rounded-full shadow-md">
              <FaQuoteRight className="text-white text-lg sm:text-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Button below the card */}
      <div className="flex justify-center mt-16 mb-0">
        <a
          href="https://www.google.com/maps/place/Dr+Shazia+Waghoo+%7C+Hernia,+Breast+and+Laparoscopic+Surgeon/@19.0809349,72.8522963,3328m/data=!3m1!1e3!4m8!3m7!1s0x3be7c91cb4d42d09:0x995febb2a757d44!8m2!3d19.0809349!4d72.8522963!9m1!1b1!16s%2Fg%2F11qh1gn93v?hl=en-IN&entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0085DC] hover:bg-[#006fb6] text-white font-medium px-9 py-3 rounded-md  transition duration-300 mb-6 shadow-[0_3px_5px_rgba(0,0,0,0.4)]"
        >
          VIEW GOOGLE REVIEW
        </a>
      </div>
    </div>
    </>
  );
};

export default MobileTestimonial;


