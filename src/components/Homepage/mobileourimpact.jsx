"use client";
import React from "react";

const MobileOurImpact = () => {
  const impactCards = [
    {
      image: "/heart.png",
      count: "2,000+",
      label: "Happy Patients",
    },
    {
      image: "/experience.png",
      count: "10+",
      label: "Years Of Experience",
    },
    {
      image: "/heart-hand.png",
      count: "1,000+",
      label: "Successful Surgeries",
    },
  ];

  const logos = [
    "/imp1.png",
    "/imp2.png",
    "/imp3.png",
    "/imp4.png",
    "/imp5.png",
    "/imp6.png",
    "/imp7.png",
    "/imp8.png",
  ];

  return (
    <div className="bg-[#F8F9FE] py-6 px-4 text-center block md:hidden">
      {/* Heading */}
      <h2 className="text-2xl font-bold text-[#004979] mx-2 mb-8">
        OUR IMPACT NUMBERS
      </h2>

      {/* Impact Cards */}
      <div className="flex flex-col items-center gap-8 mb-10">
        {impactCards.map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 w-[280px] min-w-[280px] max-w-[280px] border border-gray-300 text-center"
          >
            <img
              src={card.image}
              alt={card.label}
              className="w-14 h-14 object-contain mb-3 mx-auto"
            />
            <h3 className="text-3xl font-bold">{card.count}</h3>
            <p className="text-base text-gray-900 mt-1">{card.label}</p>
          </div>
        ))}
      </div>

      {/* Affiliation Section */}
      <h3 className="text-2xl font-bold text-[#004979] mb-3">
        Hospital Affiliations
      </h3>
      <p className="text-[#004979] font-semibold  text-base px-2">
        Affiliated with 7+ reputed Hospitals and Clinics in Mumbai
      </p>

      {/* Logo Scroll */}
      {/* <div className="overflow-hidden h-32 mt-10">
        <div className="flex whitespace-nowrap animate-scroll-horizontal items-center">
          {[...logos, ...logos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Hospital logo ${index + 1}`}
              className="w-24 h-24 object-contain rounded-full border p-2 bg-white shadow mx-3"
            />
          ))}
        </div>
      </div> */}

      {/* Animation CSS */}
      {/* <style jsx>{`
        @keyframes scroll-horizontal {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-horizontal {
          animation: scroll-horizontal 7s linear infinite;
        }
      `}</style> */}



      {/* Logo Scroll */}
<div className="overflow-hidden w-full mt-10">
  <div className="scroll-wrapper">
    {[...logos, ...logos].map((logo, index) => (
      <img
        key={index}
        src={logo}
        alt={`Hospital logo ${index + 1}`}
        className="w-20 h-20 object-contain rounded-full border p-2 bg-white shadow mx-4 inline-block"
      />
    ))}
  </div>

  {/* Animation CSS */}
  <style jsx>{`
    .scroll-wrapper {
      display: inline-block;
      white-space: nowrap;
      animation: scroll-horizontal 20s linear infinite;
    }

    @keyframes scroll-horizontal {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `}</style>
</div>

    </div>
  );
};

export default MobileOurImpact;
