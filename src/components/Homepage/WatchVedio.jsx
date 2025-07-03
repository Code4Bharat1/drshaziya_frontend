import React from 'react';
import Head from 'next/head';
const WatchVedio = () => {
  return (
     
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Watch Videos - Dr. Shazia Waghoo</title>
        <meta name="description" content="Watch informative videos featuring Dr. Shazia Waghoo to learn more about her expertise and contributions." />
        <meta name="keywords" content="Dr. Shazia Waghoo, health expert, video, wellness, medical guidance, educational video ,Best surgeon in Santacruz, Lady surgeon Santacruz Mumbai, Laparoscopic surgeon Santacruz, General surgeon Santacruz West, Piles treatment Santacruz, Gallbladder stone surgery Santacruz, Hernia specialist in Santacruz, Fissure doctor Santacruz, Fistula specialist Santacruz, Laser piles surgery Mumbai, Breast lump surgery in Santacruz, Appendix surgery in Mumbai, Female surgeon for daycare surgery Santacruz, Dr Shazia Waghoo surgeon Mumbai, Expert laparoscopic surgeon Santacruz, Proctologist near Santacruz" />
        <meta name="author" content="Dr. Shazia Waghoo" />
        <meta property="og:title" content="Watch Videos - Dr. Shazia Waghoo" />
        <meta property="og:description" content="Discover insightful videos about Dr. Shazia Waghoo's work and expertise." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/shazia-thumbnail.jpg" /> {/* Replace with actual image if available */}
        <meta property="og:url" content="https://yourwebsite.com/watch-vedio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    <div className="relative bg-[#F8F9FE] pt-16 pb-16 px-4 md:px-20 overflow-hidden">
      {/* Half Circle Background - curved at top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3/4 w-[2100px] h-[2200px] bg-sky-100 rounded-full z-0"></div>

      {/* Heading */}
      <h2 className="relative z-10 text-xl md:text-3xl font-semibold text-blue-900 mb-7 text-center leading-relaxed">
       Watch these videos to get more information about 
 <br /> Dr. Shazia Waghoo.
      </h2>

      {/* Video Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Left Video (Local) */}
        <div className="w-full aspect-video shadow-lg rounded-md overflow-hidden">
          <video className="w-full h-full object-cover" controls autoPlay muted loop>
            <source src="/vedio1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Center Square Video (Local) */}
        <div className="w-full aspect-square shadow-lg rounded-md overflow-hidden">
          <video className="w-full h-full object-cover" controls autoPlay muted loop>
            <source src="/vedio2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Right Video (YouTube) */}
        <div className="w-full aspect-video shadow-lg rounded-md overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/nEp0H0pcKFE"
            title="YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div></>
  );
};

export default WatchVedio;
