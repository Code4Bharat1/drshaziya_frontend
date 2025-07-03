"use client";

import Image from "next/image";
import Head from "next/head";


const Artical1 = () => {
  return (
    <>
    <Head>
  {/* ✅ Basic SEO */}
  <title>Article 1: Training & Development in Healthcare – Dr. Shazia Waghoo</title>
  <meta
    name="description"
    content="Explore a scoping review highlighting key factors influencing the quality of training and development (T&D) for non-physician healthcare professionals."
  />
  <meta
    name="keywords"
    content="Minimally invasive surgery in Vashi/Santacruz/Khar Best laparoscopic gallbladder surgeon near me Laser surgery for piles in Mumbai suburbs Female gastrointestinal surgeon in Mumbai ,Best surgeon in Santacruz, Lady surgeon Santacruz Mumbai, Laparoscopic surgeon Santacruz, General surgeon Santacruz West, Piles treatment Santacruz, Gallbladder stone surgery Santacruz, Hernia specialist in Santacruz, Fissure doctor Santacruz, Fistula specialist Santacruz, Laser piles surgery Mumbai, Breast lump surgery in Santacruz, Appendix surgery in Mumbai, Female surgeon for daycare surgery Santacruz, Dr Shazia Waghoo surgeon Mumbai, Expert laparoscopic surgeon Santacruz, Proctologist near Santacruz"
  />
  <meta name="author" content="Dr. Shazia Waghoo" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="canonical" href="https://drshaziawaghoosurgery.com" />

  {/* ✅ Open Graph (Facebook, LinkedIn) */}
  <meta property="og:title" content="Article 1: Training & Development in Healthcare – Dr. Shazia Waghoo" />
  <meta
    property="og:description"
    content="Read this in-depth article on the key elements affecting the quality of training provided to non-physician healthcare professionals."
  />
  <meta property="og:url" content="https://drshaziawaghoosurgery.com/articles/article-1" />
  <meta property="og:type" content="article" />
  <meta property="og:image" content="https://drshaziawaghoosurgery.com/images/lasersurgary-og.jpg" />

  {/* ✅ Twitter Card */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Article 1: Training & Development in Healthcare – Dr. Shazia Waghoo" />
  <meta
    name="twitter:description"
    content="Scoping review insights on T&D process, system, environment, and healthcare professional factors."
  />
  <meta name="twitter:image" content="https://drshaziawaghoosurgery.com/images/lasersurgary-og.jpg" />

  {/* ✅ Schema.org Article Markup */}
  <script type="application/ld+json">
    {`
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Training & Development in Healthcare",
      "description": "A comprehensive review of the quality factors affecting training and development for non-physician healthcare professionals.",
      "image": "https://drshaziawaghoosurgery.com/images/lasersurgary-og.jpg",
      "author": {
        "@type": "Person",
        "name": "Dr. Shazia Waghoo"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Dr. Shazia Waghoo's Surgery Clinic",
        "logo": {
          "@type": "ImageObject",
          "url": "https://drshaziawaghoosurgery.com/logo.png"
        }
      },
      "datePublished": "2025-06-18"
    }
    `}
  </script>
</Head>

    {/* main code start from here */}
    <div className="mt-20 bg-white">
      <div className="bg-white p-6 md:p-10 max-w-6xl mx-auto font-sans text-gray-800 ">

        {/* Header Image with Label */}
        <div className="relative rounded-lg overflow-hidden shadow-md h-60 md:h-72">
          <Image
            src="/lasersurgary.jpg" // 🔁 Replace with your image path
            alt="Article"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute top-11 left-4 text-white text-xl md:text-5xl font-semibold px-4 py-2 rounded">
            Article-1
          </div>
        </div>

        {/* Paragraphs Section */}
        <div className="mt-10 space-y-6 text-gray-900 text-base md:text-lg leading-relaxed text-justify">
          <h2 className="text-2xl font-bold mb-4">Background :</h2>

          <p>
            Human resources are regarded as one of healthcare systems’ most valuable assets and an essential building block.
            The availability of well-trained and competent healthcare professionals is critical, strategic, and tightly
            linked to training and development (T&D). Meanwhile, quality T&D has been, and remains, a fundamental aspect
            of the health workforce development and growth, which aids institutions in running effectively and efficiently,
            according to the highest standards. This review sought to identify the key factors and elements that affect
            the quality of T&D provided to non-physician healthcare professionals.
          </p>

          <p>
            <strong>Methods:</strong> A scoping review using the updated Joanna Briggs Institute (JBI) methodological framework
            was conducted to identify and synthesize the published research and gray literature. A holistic search was performed
            using ScienceDirect, MEDLINE, CINAHL, and Google Scholar. Evidence sources in any geographical area, in English,
            full-text, and published between 1990–2022 were included.
          </p>

          <p>
            <strong>Results:</strong> Forty sources were included, exploring various factors and elements that affect the quality
            of T&D provided to non-physician healthcare professionals. Twenty-one empirical sources, twelve reviews, and seven
            gray literature sources were identified. Quality factors were categorized into: (I) T&D process factors; (II) T&D
            system factors; (III) work environment factors; and (IV) healthcare professional factors.
          </p>

          <p>
            <strong>Conclusions:</strong> In the current changing environment, healthcare institutions need to invest in and nurture
            their healthcare professionals' knowledge, skills, and abilities through high-quality T&D. This review highlights
            several process, system, organizational, and personal factors that affect T&D quality and provides insight to optimize outcomes.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Artical1;
