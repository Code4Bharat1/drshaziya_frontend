import React from 'react';
import Image from 'next/image';
import Head from 'next/head';


const content = [
  {
    title: "Thyroid Surgery",
    text: [
      `Thyroid surgery, or thyroidectomy, involves removing all or part of the thyroid gland to treat conditions like nodules, goitre, hyperthyroidism, or thyroid cancer. Depending on the condition, either a total or partial thyroidectomy is performed. The surgery can be done through a traditional large incision or using minimally invasive and laser techniques. These advanced methods help ensure precision and quicker recovery.`,
    ],
  },
  {
    title: "When do Doctors Advise Thyroid surgery?",
    text: [
      `Doctors recommend thyroid surgery for various reasons, with suspicious nodules being a common indication due to potential cancer risk. It is also performed to treat confirmed thyroid cancer and prevent its spread. Large goiters causing breathing or swallowing issues may need removal. Surgery is considered for hyperthyroidism when medications fail or aren’t suitable. The decision depends on individual patient needs and medical evaluation.`,
    ],
  },
  {
    title: "What are some Conditions Treated with Thyroid surgery?",
    text: [
      `Thyroid nodules that are suspicious for cancer or causing discomfort may also necessitate surgery.`,
      `Large goiters obstructing breathing or swallowing, requiring surgical intervention.`,
      `In cases of hyperthyroidism, particularly when medications are ineffective or undesired, surgery may be recommended to reduce hormone production.`,
      `Special cases like thyroglossal cyst also require surgery.`,
    ],
  },
];

const Thyroid = () => {
  return (
    <>
<Head>
  {/* ✅ Basic Meta Tags */}
  <title>Thyroid Surgery in Mumbai – Dr. Shazia Waghoo</title>
  <meta
    name="description"
    content="Learn about thyroid surgery performed by Dr. Shazia Waghoo in Mumbai. Treatment for thyroid nodules, goitre, hyperthyroidism, and thyroid cancer with advanced techniques."
  />
  <meta
    name="keywords"
    content="Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo surgeon Dr Shazia Waghoo Santacruz  Dr Shazia Waghoo Andheri Dr Shazia laparoscopic surgeon Best laparoscopic surgeon in Santacruz"
  />
  <meta name="author" content="Dr. Shazia Waghoo" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://drshaziawaghoosurgery.com/allartical/thyroid" />

  {/* ✅ Open Graph (OG) for Social Sharing */}
  <meta property="og:title" content="Thyroid Surgery in Mumbai – Dr. Shazia Waghoo" />
  <meta
    property="og:description"
    content="Understand when thyroid surgery is advised, conditions treated, and advanced methods used by Dr. Shazia Waghoo for treating thyroid disorders in Mumbai."
  />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://drshaziawaghoosurgery.com/allartical/thyroid" />
  <meta property="og:image" content="https://drshaziawaghoosurgery.com/images/thyroid-surgery-og.jpg" />

  {/* ✅ Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Thyroid Surgery in Mumbai – Dr. Shazia Waghoo" />
  <meta
    name="twitter:description"
    content="Explore how Dr. Shazia Waghoo treats thyroid nodules, goitre, and cancer using minimally invasive techniques. Book consultation in Mumbai."
  />
  <meta name="twitter:image" content="https://drshaziawaghoosurgery.com/images/thyroid-surgery-og.jpg" />

  {/* ✅ Structured Data */}
  <script type="application/ld+json">
    {`
      {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": "Thyroid Surgery",
        "url": "https://drshaziawaghoosurgery.com/allartical/thyroid",
        "description": "Thyroidectomy for nodules, goitre, and thyroid cancer by Dr. Shazia Waghoo, expert in minimally invasive and laser thyroid surgery in Mumbai.",
        "author": {
          "@type": "Person",
          "name": "Dr. Shazia Waghoo"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Dr. Shazia Waghoo Surgical Clinic",
          "logo": {
            "@type": "ImageObject",
            "url": "https://drshaziawaghoosurgery.com/images/logo.png"
          }
        },
        "mainEntity": {
          "@type": "MedicalProcedure",
          "name": "Thyroidectomy",
          "howPerformed": "Performed via traditional incision, minimally invasive, or laser techniques",
          "bodyLocation": "Thyroid gland",
          "procedureType": "Surgical"
        }
      }
    `}
  </script>
</Head>

{/* Main code start from here */}
     <div className="md:mt-14 mt-24 bg-white">
    <div className="bg-white p-6 md:p-10 max-w-6xl mx-auto font-sans text-gray-800">
      
     <div className="relative  overflow-hidden shadow-md h-60">
                    <Image
                      src="/thyroidsurgary.jpg" 
                      alt=" Thyroid Surgery"
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                    <div className="absolute top-7 left-4 text-white text-4xl font-semibold bg-opacity-50 px-4 py-2 rounded">
                     Thyroid Surgery
                    </div>
                  </div>
     
      {content.map(({ title, text }, idx) => (
        <div className="mt-6" key={idx}>
          <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-2">{title}</h2>
          {text.map((para, i) => (
            <p className="text-xl md:text-base leading-relaxed mb-2" key={i}>
              {para}
            </p>
          ))}
        </div>
      ))}
    </div>
    </div>
      
    </>
  );
};

export default Thyroid;
