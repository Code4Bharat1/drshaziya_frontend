'use client';

import React from 'react';
import Image from 'next/image';

const giContent = [
  {
    heading: "What is Gastrointestinal (GI) surgery?",
    text: `Gastrointestinal (GI) surgery encompasses a range of procedures aimed at treating conditions affecting the digestive tract. This includes the esophagus, stomach, intestines, liver, pancreas, and gallbladder. GI surgery can be performed using traditional open surgery or minimally invasive techniques like laparoscopy.`,
  },
  {
    heading: "When do Doctors Advise Gastrointestinal (GI) surgery?",
    text: `Doctors typically advise surgery when non-surgical treatments fail to alleviate symptoms of severe gastrointestinal and digestive disorders which include chronic acid reflux, gallstones, hernias, and gastrointestinal bleeding. Surgery may also be necessary for diagnosing or treating cancers of the digestive tract. The decision is based on a thorough evaluation of the patient’s medical history, symptoms, and diagnostic test results.`,
  },
  {
    heading: "What are some Conditions Treated with Gastrointestinal (GI) surgery?",
    text: `Gastrointestinal (GI) surgery addresses various conditions affecting the digestive tract. Commonly treated conditions include gastroesophageal reflux disease (GERD), which causes chronic heartburn and acid reflux. Gallbladder disease, such as gallstones, often requires surgical intervention. Hernias – all types, intestinal obstructions, and perforations, and gastrointestinal cancers, including those affecting the esophagus, stomach, and intestines. These surgeries often utilize minimally invasive techniques to reduce recovery time and improve outcomes.`,
  },
];

const GIsurgery = () => {
  return (
    <div className="md:mt-14 mt-24 bg-white">
      <div className="bg-white p-6 md:p-10 max-w-6xl mx-auto font-sans text-gray-800">

       
        <div className="relative  overflow-hidden shadow-md h-60 md:h-72">
          <Image
            src="/gisurgery.jpg"
            alt="Gastrointestinal Surgery"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute top-11 left-4 text-white text-3xl md:text-5xl font-semibold px-4 py-2 rounded">
            Gastrointestinal (GI) Surgery
          </div>
        </div>

        
        <div className="mt-10 space-y-10 text-gray-900">
          {giContent.map((section, index) => (
            <div key={index}>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{section.heading}</h2>
              <p className="text-xl md:text-xl leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GIsurgery;
