'use client';

import React from 'react';
import Image from 'next/image';

const colorectalContent = [
  {
    heading: 'Colorectal Surgery',
    text: `Colorectal surgery focuses on treating conditions of the colon, rectum, and anus, such as cancer, inflammatory bowel disease, and diverticulitis. It may involve removing diseased sections and reconnecting healthy parts. Minimally invasive techniques like laparoscopy and robotic surgery allow better visualization in these narrow areas. Endoscopy is also used for diagnosis and treatment. These advanced methods help improve recovery and reduce complications.`,
  },
  {
    heading: 'When do Doctors Advise Colorectal surgery?',
    text: `Doctors advise surgery when non-surgical treatments fail to alleviate symptoms of colorectal problems like blood in stool, mucus in stool, cramping pain on left side of abdomen, absolute constipation, rectal pain, anal pain, anal fistula and haemorrhoids. The decision is based on a thorough evaluation of the patient’s medical history, symptoms, and diagnostic test results.`,
  },
  {
    heading: 'What are some Conditions Treated with Colorectal surgery?',
    text: `Doctors typically advise surgery when patients experience significant disorders affecting the colon, rectum, or anus. Common indications include Diverticulitis, colorectal cancer, severe inflammatory bowel diseases (like Crohn’s disease and ulcerative colitis), colovesical or vaginal fistulae, conditions such as rectal bleeding, rectal prolapse, hemorrhoids, anal fistula and anal fissures.`,
  },
];

const ColorectalSurgery = () => {
  return (
    <div className="mt-24">
      <div className="bg-white p-6 md:p-10 max-w-6xl mx-auto font-sans text-gray-800">

       
        <div className="relative rounded-lg overflow-hidden shadow-md h-60 md:h-72">
          <Image
            src="/colorectalsurgery.jpg"
            alt="Colorectal Surgery"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute top-11 left-4 text-white text-xl md:text-5xl font-semibold px-4 py-2 rounded">
            Colorectal Surgery
          </div>
        </div>

       
        <div className="mt-10 space-y-10 text-gray-900">
          {colorectalContent.map((section, index) => (
            <div key={index}>
              <h2 className="text-3xl md:text-3xl font-bold mb-2">{section.heading}</h2>
              <p className="text-base md:text-xl leading-relaxed">{section.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ColorectalSurgery;
