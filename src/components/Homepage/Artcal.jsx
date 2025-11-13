import React from 'react';
import Head from 'next/head'; // ✅ SEO support
import Link from 'next/link';

const articles = [
  { title: 'Article-1', image: '/artical7.png', path: '/finalartical/artical1' },
  { title: 'Article-2', image: '/artical2.png', path: '/finalartical/artical1' },
  { title: 'Article-3', image: '/artical3.png', path: '/finalartical/artical1' },
  { title: 'Article-4', image: '/artical4.png', path: '/finalartical/artical1' },
  { title: 'Article-5', image: '/artical5.png', path: '/finalartical/artical1' },
  { title: 'Article-6', image: '/artical6.png', path: '/finalartical/artical1' },
];

const Artical = () => {
  return (
    <>
      {/* ✅ SEO Meta Tags for this page */}
      <Head>
        <title>Articles by Dr. Shazia Waghoo | Lady Surgeon in Santacruz Mumbai</title>
        <meta
          name="description"
          content="Read expert surgical articles by Dr. Shazia Waghoo, a leading lady surgeon in Santacruz Mumbai. Specializing in laparoscopic surgery, piles, hernia, gallbladder, and breast lump treatments."
        />
        <meta
          name="keywords"
          content="Lady surgeon in Santacruz, Best general surgeon Santacruz Mumbai, Laparoscopic surgeon Santacruz, Piles treatment Santacruz, Gallbladder stone surgery, Hernia repair Santacruz, Breast lump surgery Santacruz, Appendix surgery, Proctologist near Juhu, Surgery clinic near Santacruz West, Fissure treatment Santacruz, Fistula specialist in Santacruz, Laser piles surgery Santacruz Mumbai, Daycare surgery in Santacruz, Female doctor for surgery in Santacruz, Best laparoscopic surgeon near Santacruz"
        />
        <meta name="author" content="Dr. Shazia Waghoo" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Optional Open Graph for social sharing */}
        <meta property="og:title" content="Articles by Dr. Shazia Waghoo | Surgeon in Santacruz" />
        <meta
          property="og:description"
          content="Explore surgical insights from Dr. Shazia Waghoo – Lady laparoscopic & general surgeon in Santacruz, Mumbai."
        />
        <meta property="og:image" content="/artical7.png" />
        <meta property="og:type" content="website" />
      </Head>

      <div id="artical" className="py-6 bg-[#F8F9FE] flex flex-col items-center">
        <h2 className="text-[34px] font-bold text-center text-[#284578] mb-6">
          Articles by Dr. Shazia
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <Link href={article.path} key={index}>
              <div
                className="relative rounded overflow-hidden shadow-md cursor-pointer transition-transform hover:scale-105"
                style={{ width: '290px', height: '220px' }}
              >
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-white bg-opacity-10 flex items-center justify-center">
                  <h3 className="text-white text-lg font-semibold">
                    {article.title}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* ✅ SEO-rich visible section */}
        <section className="max-w-3xl text-center text-gray-700 mt-12 px-4">
          <h3 className="text-xl font-bold text-[#284578] mb-2 display-none">
            Looking for a Lady Surgeon in Vashi/Santacruz/Khar, Mumbai?
          </h3>
          <p className="text-base leading-7 ">
            Dr. Shazia Waghoo is a trusted <strong>lady surgeon in Santacruz</strong> offering expert care in <strong>laparoscopic surgery</strong>, <strong>piles treatment</strong>, <strong>breast lump surgery</strong>, <strong>hernia repair</strong>, and more. Patients from <strong>Santacruz East</strong>, <strong>Santacruz West</strong>, and nearby areas like <strong>Juhu</strong> visit for personalized surgical solutions. Conveniently located in Mumbai, her clinic provides compassionate care for every patient.
          </p>
        </section>

        {/* ✅ Hidden SEO Keywords (won't affect layout) */}
        <p style={{ display: "none" }}>
          Lady surgeon in Santacruz, Best general surgeon in Santacruz Mumbai, Laparoscopic surgeon Santacruz, Breast lump surgery in Santacruz, Hernia specialist Santacruz, Piles treatment in Santacruz Mumbai, Gallbladder stone surgery Santacruz, Fissure treatment Santacruz, Fistula specialist in Santacruz, Laser piles surgery Santacruz Mumbai, Appendix surgery in Santacruz, Daycare surgery in Santacruz, Female doctor for surgery in Santacruz, Proctologist in Santacruz, Best laparoscopic surgeon near Santacruz
        </p>
      </div>
    </>
  );
};

export default Artical;
