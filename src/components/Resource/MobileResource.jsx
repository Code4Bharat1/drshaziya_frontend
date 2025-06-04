'use client';

import React from 'react';

const MobileResource = () => {
  const resources = [
    {
      image: '/resource1.png',
      title: 'Delayed Management of Chemoport Complication',
      journal: 'Indian Journal of Surgical Oncology, September 20',
    },
    {
      image: '/resource2.png',
      title:
        '"Can Intraoperative Pelvic Peritoneal Disease Predict Nodal Metastasis in Advanced Ovarian Cancer and Guide Systematic Nodal Dissection?"',
      journal: 'Indian Journal of Surgical Oncology, February 2019',
    },
    {
      image: '/resource3.png',
      title: 'Aberrant Renal Vessels',
      journal: 'Annals of Case Reports and Images, 2019',
    },
  ];

  return (
    <div className="bg-[#F8F9FE] py-12 px-4 text-center mt-14">
      <h2 className="text-4xl font-bold text-[#004979] mb-4 mt-5">RESOURCES</h2>

      <div className="grid md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        {resources.map((res, index) => (
          <div key={index}>
            <img
              src={res.image}
              alt={res.title}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-[25px] font-bold text-black mb-1">{res.title}</h3>
            <p className="text-black text-[20px] mt-3 font-medium">{res.journal}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileResource;

