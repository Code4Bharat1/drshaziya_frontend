import React from "react";
import Head from 'next/head';

const MobileWatchVideo = () => {
  return (
    <>
    {/* SEO Start from here */}
     <Head>
        {/* ✅ Basic SEO */}
        <title>Dr. Shazia Waghoo Laparoscopic Surgeon in Andheri and Santacruz</title>
        <meta
          name="description"
          content="Watch informative videos to learn more about Dr. Shazia Waghoo’s surgical expertise, patient approach, and healthcare services in Mumbai."
        />
        <meta
          name="keywords"
          content=" Hernia specialist in Andheri Laparoscopic surgeon in Santacruz Breast surgery doctor in Andheri Dr Shazia Waghoo,Dr Shazia Waghoo Santacruz, Dr Shazia Waghoo Andheri, Best laparoscopic surgeon in Santacruz,Hernia surgery doctor in Andheri, Hernia, Laparoscopy, Breast Surgery, Surgical Experience"
        />
        <meta name="author" content="Dr. Shazia Waghoo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://drshaziawaghoo.com/" />

        {/* ✅ Open Graph (Facebook, LinkedIn) */}
        <meta property="og:title" content="Watch Videos | Dr. Shazia Waghoo’s Surgical Journey" />
        <meta
          property="og:description"
          content="Get insights into surgeries, patient care, and expertise by watching videos of Dr. Shazia Waghoo’s clinical work and patient education."
        />
        <meta property="og:url" content="https://drshaziawaghoo.com/" />
        <meta property="og:type" content="video.other" />
        <meta property="og:image" content="https://drshaziawaghoosurgery.com/cover-video.jpg" />
        <meta property="og:video" content="https://drshaziawaghoosurgery.com/vedio1.mp4" />
        <meta property="og:locale" content="en_IN" />

        {/* ✅ Twitter Cards */}
        <meta name="twitter:card" content="player" />
        <meta name="twitter:title" content="Watch Dr. Shazia Waghoo's Surgical Insights" />
        <meta
          name="twitter:description"
          content="Explore educational videos on laparoscopic, hernia, and other surgeries by Dr. Shazia Waghoo."
        />
        <meta name="twitter:image" content="https://drshaziawaghoosurgery.com/cover-video.jpg" />
        <meta name="twitter:player" content="https://www.youtube.com/embed/nEp0H0pcKFE" />
        <meta name="twitter:player:width" content="640" />
        <meta name="twitter:player:height" content="360" />

        {/* ✅ Schema Markup */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "Dr. Shazia Waghoo - Surgical Expertise",
            "description": "Watch informative videos about Dr. Shazia Waghoo’s surgical practice, patient care, and specialized treatments.",
            "thumbnailUrl": [
              "https://drshaziawaghoosurgery.com/cover-video.jpg"
            ],
            "uploadDate": "2024-06-10",
            "contentUrl": "https://drshaziawaghoosurgery.com/vedio1.mp4",
            "embedUrl": "https://www.youtube.com/embed/nEp0H0pcKFE",
            "publisher": {
              "@type": "Organization",
              "name": "Dr. Shazia Waghoo Surgery",
              "logo": {
                "@type": "ImageObject",
                "url": "https://drshaziawaghoosurgery.com/logo.png"
              }
            }
          }
          `}
        </script>
      </Head>


{/* main code start from here */}
    <div className="relative bg-[#F8F9FE] pt-12 pb-12 px-2 overflow-hidden max-w-md ">
      {/* Heading */}
<div className="flex justify-center items-center px-2">
  <h2 className="relative text-[18px] font-bold text-[#004979] mb-8 text-center leading-relaxed">
    Watch these videos to get more information{" "}
    <span>about <br /> Dr. Shazia Waghoo.</span>
  </h2>
</div>


      {/* Videos Container */}
      <div className="space-y-4 w-full px-10">
        {/* First Video (Local) - Square */}
        <div className="w-full aspect-square shadow-lg rounded-lg overflow-hidden mx-auto">
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            loop
          >
            <source src="/vedio1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Second Video (Local) - Square */}
        <div className="w-full aspect-square shadow-lg rounded-lg overflow-hidden mx-auto">
          <video
            className="w-full h-full object-cover"
            controls
            autoPlay
            muted
            loop
          >
            <source src="/vedio2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Third Video (YouTube) - Square */}
        <div className="w-full aspect-square shadow-lg rounded-lg overflow-hidden bg-gray-100 mx-auto">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/nEp0H0pcKFE?rel=0&modestbranding=1"
            title="Dr. Shazia Waghoo - YouTube Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>

     

    
    </div>
    </>
  );
};

export default MobileWatchVideo;
