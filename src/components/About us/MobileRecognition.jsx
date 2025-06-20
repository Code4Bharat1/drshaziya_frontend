import React from 'react';
import Image from 'next/image';
import Head from 'next/head';

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
    <>
    {/* SEo start from here */}
    <Head>
  {/* ✅ Basic SEO */}
  <title>Recognitions – Dr. Shazia Waghoo's Memberships & Affiliations</title>
  <meta
    name="description"
    content="Dr. Shazia Waghoo is affiliated with leading medical associations like the Association of Surgeons of India, Hernia Society of India, and Minimal Access Surgeons of India."
  />
  <meta
    name="keywords"
    content="Dr. Shazia Waghoo, surgeon memberships, surgical affiliations, hernia society, Asia-Pacific hernia, minimal access surgeons, India"
  />
  <meta name="author" content="Dr. Shazia Waghoo" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://drshaziawaghoosurgery.com/recognitions" />

  {/* ✅ Open Graph Tags */}
  <meta property="og:title" content="Recognitions – Dr. Shazia Waghoo's Affiliations" />
  <meta
    property="og:description"
    content="Explore professional affiliations of Dr. Shazia Waghoo with top surgical and medical societies in India and Asia."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://drshaziawaghoosurgery.com/recognitions" />
  <meta property="og:image" content="https://drshaziawaghoosurgery.com/images/drshazia-cover.jpg" />

  {/* ✅ Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Recognitions – Dr. Shazia Waghoo's Memberships" />
  <meta
    name="twitter:description"
    content="Recognized member of ASI, Minimal Access Surgeons of India, and more. Know more about Dr. Shazia Waghoo's credentials."
  />
  <meta name="twitter:image" content="https://drshaziawaghoosurgery.com/images/drshazia-cover.jpg" />

  {/* ✅ Schema Markup for Recognitions */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "Dr. Shazia Waghoo",
        "affiliation": [
          {
            "@type": "Organization",
            "name": "Association of Surgeons of India"
          },
          {
            "@type": "Organization",
            "name": "Maharashtra Surgical Society"
          },
          {
            "@type": "Organization",
            "name": "Asia-Pacific Hernia Society"
          },
          {
            "@type": "Organization",
            "name": "Hernia Society of India"
          },
          {
            "@type": "Organization",
            "name": "Minimal Access Surgeons of India"
          }
        ],
        "url": "https://drshaziawaghoosurgery.com/recognitions"
      }
    `}
  </script>
</Head>



    {/* main code start from here */}
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
    </>
  );
};

export default MobileRecognitions;