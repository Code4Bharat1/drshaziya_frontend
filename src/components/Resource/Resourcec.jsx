'use client';

import React from 'react';

const Resource = () => {
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
    <div className="bg-[#f8faff] py-12 px-4 text-center">
      <h2 className="text-4xl font-bold text-blue-900 mb-10">RESOURCES</h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {resources.map((res, index) => (
          <div key={index}>
            <img
              src={res.image}
              alt={res.title}
              className="w-full h-64 object-cover mb-4"
            />
            <h3 className="text-2xl font-bold text-black mb-1">{res.title}</h3>
            <p className="text-gray-900 mt-4 font-bold">{res.journal}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resource;

