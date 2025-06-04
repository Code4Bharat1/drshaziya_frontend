"use client";
import React from 'react';
import Link from 'next/link';


const expertiseData = [
  {
    title: 'Laparoscopic Surgeries',
    description:
      'Laparoscopic surgery is a minimally invasive procedure using small incisions, specialized instruments and a camera to operate inside the body.',
    image: 'offer1.png',
     path: '/allartical/lepocrasy',
  },
  {
    title: 'Hernia Surgeries',
    description:
      'Hernia surgery is a procedure to repair a bulge or protrusion caused by an organ pushing through a weak spot in muscle or tissue.',
    image: 'offer2.png',
     path: '/allartical/harnia',
  },
  {
    title: 'Breast Surgeries',
    description:
      'Breast surgery involves procedures for treating breast conditions; benign and malignant, or cosmetic procedures including reconstruction.',
    image: 'offer3.png',
     path: '/allartical/breastcancer',
  },
  {
    title: 'Colorectal Anorectal Surgeries',
    description:
      'Colorectal surgery treats disorders of the rectum, anus, and colon including polyps, tumors, and inflammatory bowel diseases.',
    image: 'offer5.png',
     path: '/allartical/colorectalsurgery',
  },
  {
    title: 'Laser Surgeries',
  description:
  'Laser surgery uses focused light to treat or remove abnormal tissues with precision and minimal damage to surrounding areas.',

    image: 'offer6.png',
     path: '/allartical/leasersurgary',
  },
  {
    title: 'Abdominal wall Reconstruction ',
    description:
  'Abdominal wall reconstruction is a surgical procedure to repair complex hernias and restore abdominal strength.',
    image: 'offer7.png',
     path: '/allartical/abdonomial',
  },
  {
    title: 'Gastrointestinal Surgeries',
    description:
     'Gastrointestinal surgeries involve procedures on the digestive tract, such as operations on the stomach, and gallbladder to treat conditions like ulcers.',
    image: '/offer9.png',
     path: '/allartical/gisurgery',
  },
     {
    title: 'Thyroid Surgeries',
    description:
           'Thyroid surgery is performed to treat thyroid nodules, cancer, or hyperthyroidism by removing part or all of the thyroid gland.',
    image: 'offer8.png',
     path: '/allartical/gisurgery',
  },

];

const OfferExpertise = () => {
  return (
    <div className="bg-[#F9F8FE] py-10 mt-9">
      <h2 className="text-center text-2xl md:text-[32px] font-semibold text-[#004979] mt-16 mb-14">
         Dr. Shazia Waghoo offers Expertise in the following Surgeries
      </h2>

      {/* Scrollable Row with Hidden Scrollbar */}
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-16 w-max pb-4">
          {expertiseData.map((item, index) => (
            <div
              key={index}
              className={`bg-white shadow-[0_3px_2px_rgba(0,0,0,0.3)] border border-[#C3C3C3] rounded-xl w-80 h-[310px] flex-shrink-0 flex flex-col justify-between p-6 text-center ${
                index === 0 ? 'ml-4' : ''
              }`}
            >
              <div>
                <div className="w-16 h-16 rounded-full bg-[#74C4F9] mx-auto mb-4 flex items-center justify-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-10 h-10 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-[#000000] mb-2">
                  {item.title}
                </h3>
                <p className="text-[#000000] text-sm font-roboto">{item.description}</p>
              </div>
              <Link href={item.path}>
              <button className=" shadow-[0_3px_2px_rgba(0,0,0,0.3)] bg-[#0085DC] text-white text-xs px-7 py-3 rounded-md hover:bg-blue-500 mt-5 mx-auto block">
                KNOW MORE
              </button>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Hide scrollbar using Tailwind plugin or manual styles */}
      <style jsx>{`
        .scrollbar-hide {
          scrollbar-width: none; /* Firefox */
          -ms-overflow-style: none; /* IE 10+ */
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }
      `}</style>
    </div>
  );
};

export default OfferExpertise;



