'use client';

import React from 'react';

const MobileSocialwork = () => {
  const events = [
    {
      image: '/social1.png',
      title: 'Free Surgical Camp At Sehat NGO, Kurla West',
    },
    {
      image: '/social2.png',
      title: 'Health Camp At Criticare Asia Hospital',
    },
  ];

  return (
    <div className="bg-white py-12 px-4 text-center">
      <h2 className="text-4xl font-bold text-[#004979] mb-10">SOCIAL WORK</h2>

      <div className="grid  gap-16 max-w-3xl mx-auto">
        {events.map((event, index) => (
          <div key={index}>
            <img
              src={event.image}
              alt={event.title}
              className="w-full h-64 object-cover mb-2 "
            />
            <h2 className="text-[27px] font-semibold text-black text-center">{event.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileSocialwork;

