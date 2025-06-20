// import React from 'react';
// import Image from 'next/image'; // For optimized images

// const Recognitions = () => {
//   const recognitions = [
//     {
//       title: 'Membership',
//       image: '/membership-logo.png', // ✅ Replace with your actual image path in the public folder
//       description: (
//         <>
//           Member of Association of Surgeons <br />
//           of India and Maharashtra Surgical <br />
//           Society
//         </>
//       ),
//     },
//     {
//       title: 'Membership',
//       image: '/membership-logo.png',
//       description: (
//         <>
//           Member of Asia-Pacific Hernia <br />
//           Society, & Hernia Society of <br />
//           India
//         </>
//       ),
//     },
//     {
//       title: 'Membership',
//       image: '/membership-logo.png',
//       description: (
//         <>
//           Member of Minimal Access <br />
//           Surgeons of India
//         </>
//       ),
//     },
//   ];

//   return (
//     <section className="bg-[#F9F8FE] py-12 px-4">
//       <h2 className="text-4xl font-bold text-center text-[#004979] mb-10">
//         RECOGNITIONS
//       </h2>

//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//         {recognitions.map((item, index) => (
//           <div
//             key={index}
//             className="w-[350px] h-[240px] bg-white rounded-lg border border-gray-200 shadow-lg p-6 flex flex-col items-center text-center space-y-2 mx-auto"
//           >
//             {/* ✅ Custom image */}
//             <Image src={item.image} alt="Recognition Icon" width={40} height={40} />

//             {/* Title */}
//             <h3 className="font-bold text-2xl">{item.title}</h3>

//             {/* ✅ Description with customized text size */}
//             <p className="text-gray-700 text-base leading-relaxed">
//               {item.description}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Recognitions;



import React from 'react';
import Image from 'next/image'; // For optimized images
import Head from "next/head";


const Recognitions = () => {
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
    {/* SEO start from here */}
    <Head>
  {/* ✅ Basic SEO */}
  <title>Recognitions – Dr. Shazia Waghoo's Professional Memberships</title>
  <meta
    name="description"
    content="Explore Dr. Shazia Waghoo’s professional memberships including Association of Surgeons of India, Asia-Pacific Hernia Society, and Minimal Access Surgeons of India."
  />
  <meta
    name="keywords"
    content="Dr. Shazia Waghoo, recognitions, memberships, surgeon association, Asia-Pacific Hernia Society, Minimal Access Surgeons of India, professional doctor associations"
  />
  <meta name="author" content="Dr. Shazia Waghoo" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://drshaziawaghoosurgery.com/recognitions" />

  {/* ✅ Open Graph Tags */}
  <meta property="og:title" content="Recognitions – Dr. Shazia Waghoo's Medical Memberships" />
  <meta
    property="og:description"
    content="Dr. Shazia Waghoo is a member of several reputed surgical and hernia societies across India and Asia-Pacific."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://drshaziawaghoosurgery.com/recognitions" />
  <meta property="og:image" content="https://drshaziawaghoosurgery.com/images/drshazia-cover.jpg" />

  {/* ✅ Twitter Tags */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Recognitions – Dr. Shazia Waghoo" />
  <meta
    name="twitter:description"
    content="Recognized member of surgical associations like ASI, Hernia Society of India, and Minimal Access Surgeons of India."
  />
  <meta name="twitter:image" content="https://drshaziawaghoosurgery.com/images/drshazia-cover.jpg" />

  {/* ✅ Structured Data */}
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


    {/* main code strt from here */}
    <section className="bg-[#F9F8FE] py-12 px-4">
      <h2 className="text-4xl font-bold text-center text-[#004979] mb-10">
        RECOGNITIONS
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {recognitions.map((item, index) => (
          <div
            key={index}
            className="w-[350px] h-[240px] bg-white rounded-xl border-4 border-[#0085DC] p-6 flex flex-col items-center text-center space-y-2 mx-auto"
            style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 255, 0.4)' }}
          >
            <Image src={item.image} alt="Recognition Icon" width={40} height={40} />

            <h3 className="font-bold text-2xl text-black">{item.title}</h3>

            <p className="text-gray-700 text-base leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
    </>
  );
};

export default Recognitions;
