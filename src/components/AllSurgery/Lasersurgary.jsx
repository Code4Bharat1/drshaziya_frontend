"use client";

import Image from "next/image";

const laserContent = [
  {
    heading: "Laser Surgery",
    text: `Laser surgery is a precise and minimally invasive technique that uses focused light beams to treat various medical conditions. It involves directing a laser to cut or destroy tissue, often resulting in less pain, less bleeding, and scarring compared to traditional surgery. The precision of lasers allows for targeted treatment, reducing damage to surrounding tissues. Additionally, laser surgeries are typically quicker, leading to shorter recovery times and lower risk of infection.`,
  },
  {
    heading: "When do Doctors Advise Laser surgery?",
    text: `Doctors advise Laser surgery for a variety of medical conditions due to its minimally invasive nature and precision. Common indications include the treatment of skin lesions, tumors, and abnormal tissue growths. Laser surgery is often recommended for removal of tumors in organs like the thyroid or prostate or anal area. Additionally, it is effective in treating anorectal conditions, varicose vein and can alleviate symptoms associated with kidney stones.`,
  },
  {
    heading: "What are some Conditions Treated with Laser surgery?",
    text: `Laser surgery is used to treat the following conditions here:\n\nAnorectal illness like Haemorrhoids, Anal Fissure, Anal Fistula and Pilonidal Sinus.\n\nVaricose Veins.\n\nBenign Thyroid Nodules.`,
  },
];

const LaserSurgery = () => {
  return (
    <div className="mt-24">
      <div className="bg-white p-6 md:p-10 max-w-6xl mx-auto font-sans text-gray-800">

        
        <div className="relative rounded-lg overflow-hidden shadow-md h-60 md:h-72">
          <Image
            src="/lasersurgary.jpg" 
            alt="Laser Surgery"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute top-11 left-4 text-white text-4xl md:text-5xl font-semibold px-4 py-2 rounded">
            Laser Surgery
          </div>
        </div>

       
        <div className="mt-10 space-y-10 text-gray-900">
          {laserContent.map((section, index) => (
            <div key={index}>
              <h2 className="text-3xl md:text-3xl font-bold mb-2">{section.heading}</h2>
              <p className="text-xl md:text-xl leading-relaxed whitespace-pre-line">
                {section.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LaserSurgery;
