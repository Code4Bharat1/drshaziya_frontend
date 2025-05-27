import React from 'react';
import Image from 'next/image'; // For optimized images

const Recognitions = () => {
  const recognitions = [
    {
      title: 'Membership',
      image: '/membership-logo.png', // ✅ Replace with your actual image path in the public folder
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
    <section className="bg-[#ffffff] py-12 px-4">
      <h2 className="text-4xl font-bold text-center text-[#004979] mb-10">
        RECOGNITIONS
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recognitions.map((item, index) => (
          <div
            key={index}
            className="w-[350px] h-[240px] bg-white rounded-lg border border-gray-200 shadow-lg p-6 flex flex-col items-center text-center space-y-2 mx-auto"
          >
            {/* ✅ Custom image */}
            <Image src={item.image} alt="Recognition Icon" width={40} height={40} />

            {/* Title */}
            <h3 className="font-bold text-2xl">{item.title}</h3>

            {/* ✅ Description with customized text size */}
            <p className="text-gray-700 text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Recognitions;
