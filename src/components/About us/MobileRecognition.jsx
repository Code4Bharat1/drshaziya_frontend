import React from 'react';
import Image from 'next/image';

const MobileRecognitions = () => {
  const recognitions = [
    {
      title: 'Membership',
      image: '/membership-logo.png',
      description: (
        <>
          Member of Association of Surgeons <br />
          of India and Maharashtra Surgical <br />
          Society
        </>
      ),
    },
    {
      title: 'Membership',
      image: '/membership-logo.png',
      description: (
        <>
          Member of Asia-Pacific Hernia <br />
          Society, & Hernia Society of <br />
          India
        </>
      ),
    },
    {
      title: 'Membership',
      image: '/membership-logo.png',
      description: (
        <>
          Member of Minimal Access <br />
          Surgeons of India
        </>
      ),
    },
  ];

  return (
    <section className="bg-[#F9F8FE] py-8 px-4 block md:hidden">
      <h2 className="text-3xl font-bold text-center text-[#004979] mb-6">
        RECOGNITIONS
      </h2>

      <div className="flex flex-col mx-4 items-center space-y-8">
        {recognitions.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-[280px] h-auto min-h-[200px] bg-white rounded-xl p-4 flex flex-col items-center text-center space-y-2"
           style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.4)' }}

          >
            <Image src={item.image} alt="Recognition Icon" width={40} height={40} />
            <h3 className="font-bold text-xl text-black">{item.title}</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MobileRecognitions;