import React from 'react';

const cardData = [
  {
    title: 'Experienced Doctor in Minimally -Invasive Surgery',
    description:
      'Our brand is well-regarded in the medical community for its accurate diagnosis and precise surgical care, specializing in advanced laser and laparoscopic treatments.',
  },
  {
    title: 'Approachable & Available to Consult at Multiple Locations',
    description:
      'We offer advanced surgical care across multiple locations with follow-up consultations. Our approach ensures optimal treatment plans and full post-op support for a fast recovery.',
  },
  {
    title: 'Cashless Facilities &\nRehabilitation Services Available',
    description:
      'We support you through your entire surgical journey—from pre-surgery onboarding and insurance to scheduling and post-op care. Our goal is to ensure a smooth, stress-free experience and full recovery.',
  },
];

const Consult = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32">
      <h2 className="text-3xl font-semibold text-center text-[#004979] mb-12">
        Why you should Consult Dr. Shazia Waghoo
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
        {cardData.map((card, index) => (
          <div
            key={index}
            className="bg-white border rounded-xl shadow p-7 w-full max-w-[350px] min-h-[280px] flex flex-col transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <h3 className="text-lg font-semibold text-[#000000] mb-4 whitespace-pre-line">
              {card.title}
            </h3>
            <p className="text-md text-[#000000] leading-relaxed flex-grow font-roboto">
              {card.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Consult;
