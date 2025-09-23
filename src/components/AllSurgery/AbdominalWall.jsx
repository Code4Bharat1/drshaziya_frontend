import React from 'react';
import Image from 'next/image';
import Head from "next/head";
const abdominalWallContent = [
  {
    section: 'Header',
    title: 'Abdominal Wall Reconstruction Surgery',
    image: {
      src: '/abdominalwall.jpg',
      alt: 'Abdominal Wall Reconstruction Surgery',
      width: 1200,
      height: 300,
    },
  },
  {
    section: 'Introduction',
    heading: 'Abdominal Wall Reconstruction Surgery',
    content: [
      'Abdominal Wall Reconstruction Surgery is a complex procedure aimed at repairing and strengthening the abdominal wall. It involves the use of surgical techniques to reconstruct areas weakened by hernias, infections, or prior surgeries. The surgery helps restore core strength and stability.',
      'By combining hernia surgery with cosmetic techniques, this surgery allows better closure of the abdominal site, reducing tension and improving the patient’s quality of life.',
    ],
  },
  {
    section: 'When Doctors Advise',
    heading: 'When do Doctors Advise Abdominal Wall Reconstruction Surgery?',
    description:
      'Abdominal wall reconstruction is often indicated for several conditions, including:',
    list: [
      {
        title: 'Recurrent Hernias',
        detail: 'When hernias reappear after a previous surgery.',
      },
      {
        title: 'Infected Mesh',
        detail: 'In cases where mesh used in a prior repair gets infected or fails.',
      },
      {
        title: 'Ventral Incisional Hernias',
        detail: 'Weakness or bulging at the site of a surgical incision.',
      },
      {
        title: 'Trauma Cases',
        detail: 'Injury to the abdominal wall from accidents or wounds.',
      },
      {
        title: 'Complex Hernias',
        detail: 'Large, multiple, or complicated hernias that need extensive reconstruction.',
      },
    ],
  },
  {
    section: 'Conditions Treated',
    heading:
      'What are some Conditions Treated with Abdominal Wall Reconstruction Surgery?',
    description:
      'Abdominal wall reconstruction surgery treats conditions like large or recurrent hernias as well as structural defects. It’s also beneficial in cases of:',
    list: [
      'Hernia mesh complications',
      'Infection in previous surgical repairs',
      'Weakened abdominal muscles',
      'Chronic abdominal wall separation (diastasis recti)',
      'Trauma from accidents or repeated surgeries',
    ],
  },
];

const AbdominalWall = () => {
  return (
    <> <Head>
        <title>Abdominal Wall Reconstruction Surgery | VLSR Clinic Mumbai</title>
        <meta
          name="description"
          content="Learn about Abdominal Wall Reconstruction Surgery: treatment for complex hernias, abdominal trauma, infected mesh, and more. Performed by specialists in Mumbai at VLSR Clinic."
        />
        <meta
          name="keywords"
          content="Abdominal Wall Reconstruction, Hernia repair Mumbai, Recurrent hernia surgery, Abdominal trauma treatment, Infected mesh removal, VLSR clinic Mumbai, Complex hernia surgery"
        />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="VLSR Clinic" />
        <meta property="og:title" content="Abdominal Wall Reconstruction Surgery in Mumbai | VLSR" />
        <meta
          property="og:description"
          content="Expert abdominal wall reconstruction surgery in Mumbai. Treat hernia mesh failure, trauma, and recurrent hernias with advanced care at VLSR."
        />
        <meta property="og:image" content="/abdominalwall.jpg" />
        <meta property="og:url" content="https://drshaziawaghoo.com/abdominal-wall-reconstruction" />
        <link rel="canonical" href="https://drshaziawaghoo.com/abdominal-wall-reconstruction" />
      </Head>
     <div className=" md:mt-14 mt-24 bg-white">
    <div className="bg-white p-6 md:p-10 max-w-6xl mx-auto font-sans text-gray-800">
      {/* Header Image */}
      <div className="relative  overflow-hidden shadow-md">
        <Image
          src={abdominalWallContent[0].image.src}
          alt={abdominalWallContent[0].image.alt}
          width={abdominalWallContent[0].image.width}
          height={abdominalWallContent[0].image.height}
          className="w-full h-60 object-cover"
        />
        <div className="absolute top-7 left-4 text-white text-4xl font-semibold bg-opacity-50 px-4 py-2 rounded">
          {abdominalWallContent[0].title}
        </div>
      </div>

      {/* Other Sections */}
      {abdominalWallContent.slice(1).map((section, index) => (
        <div key={index} className="mt-6">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">
            {section.heading}
          </h2>

          {section.content &&
            section.content.map((para, idx) => (
              <p key={idx} className="text-xl md:text-base leading-relaxed mb-2">
                {para}
              </p>
            ))}

          {section.description && (
            <p className="text-xl md:text-base leading-relaxed mb-2">
              {section.description}
            </p>
          )}

          {section.list && Array.isArray(section.list) && typeof section.list[0] === 'object' ? (
            <ul className="list-disc list-inside text-xl md:text-base leading-relaxed space-y-1">
              {section.list.map((item, i) => (
                <li key={i}>
                  <strong>{item.title}:</strong> {item.detail}
                </li>
              ))}
            </ul>
          ) : section.list ? (
            <ul className="list-disc list-inside text-xl md:text-base leading-relaxed space-y-1 mt-2">
              {section.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </div>
    </div></>
  );
};

export default AbdominalWall;
