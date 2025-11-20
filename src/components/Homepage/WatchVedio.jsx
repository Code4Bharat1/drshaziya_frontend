"use client"
import React, { useRef } from "react";
import Head from "next/head";

const WatchVedio = () => {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  const handleMouseEnter = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.muted = false; // ✅ unmute on hover
      videoRef.current.play();
    }
  };

  const handleMouseLeave = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // reset to start
    }
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>Watch Videos - Dr. Shazia Waghoo</title>
        <meta
          name="description"
          content="Watch informative videos featuring Dr. Shazia Waghoo to learn more about her expertise and contributions."
        />
        <meta
          name="keywords"
          content="Dr. Shazia Waghoo, health expert, video, wellness, medical guidance, educational video ,Best surgeon in Santacruz, Lady surgeon Santacruz Mumbai, Laparoscopic surgeon Santacruz, General surgeon Santacruz West, Piles treatment Santacruz, Gallbladder stone surgery Santacruz, Hernia specialist in Santacruz, Fissure doctor Santacruz, Fistula specialist Santacruz, Laser piles surgery Mumbai, Breast lump surgery in Santacruz, Appendix surgery in Mumbai, Female surgeon for daycare surgery Santacruz, Dr Shazia Waghoo surgeon Mumbai, Expert laparoscopic surgeon Santacruz, Proctologist near Santacruz"
        />
        <meta name="author" content="Dr. Shazia Waghoo" />
        <meta property="og:title" content="Watch Videos - Dr. Shazia Waghoo" />
        <meta
          property="og:description"
          content="Discover insightful videos about Dr. Shazia Waghoo's work and expertise."
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/shazia-thumbnail.jpg" />
        <meta property="og:url" content="https://yourwebsite.com/watch-vedio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="relative bg-[#F8F9FE] pt-16 pb-16 px-4 md:px-20 overflow-hidden mt-[120px]">
       
        {/* Latest from Instagram */}
      <div className="mb-12">
        <div className="flex items-center justify-center mb-6">
          <img
            src="/latest.svg"
            alt="Latest from Instagram"
            className="w-80 h-auto object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 px-8 gap-6">
          {/* Post 1 */}
          <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
            {/* Post Image */}
            <div className="relative">
              <img
                src="/post_1.webp"
                alt="Instagram Post 1"
                className="w-full h-64 object-cover"
              />
              <a
                href="https://www.instagram.com/she_the_surgeon/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 bg-blue-500 text-xs px-2 py-1 rounded"
              >
                <span style={{ color: "#FFD54F" }}>View Profile</span>
              </a>
            </div>

            {/* Post Footer */}
            <div className="p-3">
              <a
                href="https://www.instagram.com/p/DOWFoq6CoBh/?igsh=MTR4OWp1NGJib2Zydg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm mb-2 cursor-pointer hover:underline block"
              >
                View more on Instagram
              </a>
              <div className="flex items-center text-gray-700 text-xs mb-2 space-x-3">
                {/* Action Icons */}
                <img
                  src="/like.svg"
                  alt="Like"
                  className="w-6 h-6 cursor-pointer"
                />
                <img
                  src="/comment.svg"
                  alt="Comment"
                  className="w-6 h-6 cursor-pointer"
                />
                <img
                  src="/send.svg"
                  alt="Send"
                  className="w-6 h-6 cursor-pointer"
                />
                <img
                  src="/save.svg"
                  alt="Save"
                  className="w-6 h-6 cursor-pointer ml-auto"
                />
              </div>
              <p className="text-gray-700 text-sm font-medium">15 likes</p>
              <p className="text-gray-600 text-xs">Add a comment...</p>
            </div>
          </div>

         


          {/* Post 2 */}
          <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
            {/* Post Image */}
            <div className="relative">
              <img
                src="/post_2.webp"
                alt="Instagram Post 2"
                className="w-full h-64 object-cover"
              />
              <a
                href="https://www.instagram.com/she_the_surgeon/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 bg-blue-500 text-xs px-2 py-1 rounded"
              >
                <span style={{ color: "#FFD54F" }}>View Profile</span>
              </a>
            </div>

            {/* Post Footer */}
            <div className="p-3">
              <a
                href="https://www.instagram.com/p/DO_J-1LiqKr/?igsh=MWEwOHN1MWZjbWxxYQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm mb-2 cursor-pointer hover:underline block"
              >
                View more on Instagram
              </a>
              <div className="flex items-center text-gray-700 text-xs mb-2 space-x-3">
                <img
                  src="/like.svg"
                  alt="Like"
                  className="w-6 h-6 cursor-pointer"
                />
                <img
                  src="/comment.svg"
                  alt="Comment"
                  className="w-6 h-6 cursor-pointer"
                />
                <img
                  src="/send.svg"
                  alt="Send"
                  className="w-6 h-6 cursor-pointer"
                />
                <img
                  src="/save.svg"
                  alt="Save"
                  className="w-6 h-6 cursor-pointer ml-auto"
                />
              </div>
              <p className="text-gray-700 text-sm font-medium">50 likes</p>
              <p className="text-gray-600 text-xs">Add a comment...</p>
            </div>
          </div>
          {/* Post 3 */}
          <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
            {/* Post Image */}
            <div className="relative">
              <img
                src="/post.webp"
                alt="Instagram Post 2"
                className="w-full h-64 object-cover"
              />
              <a
                href="https://www.instagram.com/she_the_surgeon/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-2 right-2 bg-blue-500 text-xs px-2 py-1 rounded"
              >
                <span style={{ color: "#FFD54F" }}>View Profile</span>
              </a>
            </div>

            {/* Post Footer */}
            <div className="p-3">
              <a
                href=" https://www.instagram.com/p/DNk5HivKOqd/?igsh=MTBiZTM5eW1ybDVuNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-sm mb-2 cursor-pointer hover:underline block"
              >
                View more on Instagram
              </a>
              <div className="flex items-center text-gray-700 text-xs mb-2 space-x-3">
                <img
                  src="/like.svg"
                  alt="Like"
                  className="w-6 h-6 cursor-pointer"
                />
                <img
                  src="/comment.svg"
                  alt="Comment"
                  className="w-6 h-6 cursor-pointer"
                />
                <img
                  src="/send.svg"
                  alt="Send"
                  className="w-6 h-6 cursor-pointer"
                />
                <img
                  src="/save.svg"
                  alt="Save"
                  className="w-6 h-6 cursor-pointer ml-auto"
                />
              </div>
              <p className="text-gray-700 text-sm font-medium">48 likes</p>
              <p className="text-gray-600 text-xs">Add a comment...</p>
            </div>
          </div>
          {/* Post 4 */}
<div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
  {/* Post Video */}
  <div className="relative">
    <video
      src="/post_4.mp4"
      className="w-full h-[500px] object-contain bg-black" // full video visible
      controls
      muted
    />
    <a
      href="https://www.instagram.com/she_the_surgeon/"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-2 right-2 bg-blue-500 text-xs px-2 py-1 rounded"
    >
      <span style={{ color: "#FFD54F" }}>View Profile</span>
    </a>
  </div>

  {/* Post Footer */}
  <div className="p-3">
    <a
      href="https://www.instagram.com/reel/DIJHW48prDI/?igsh=dnRoNGN1MGEyM3A3"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 text-sm mb-2 cursor-pointer hover:underline block"
    >
      View more on Instagram
    </a>
    <div className="flex items-center text-gray-700 text-xs mb-2 space-x-3">
      <img src="/like.svg" alt="Like" className="w-6 h-6 cursor-pointer" />
      <img src="/comment.svg" alt="Comment" className="w-6 h-6 cursor-pointer" />
      <img src="/send.svg" alt="Send" className="w-6 h-6 cursor-pointer" />
      <img
        src="/save.svg"
        alt="Save"
        className="w-6 h-6 cursor-pointer ml-auto"
      />
    </div>
    <p className="text-gray-700 text-sm font-medium">50 likes</p>
    <p className="text-gray-600 text-xs">Add a comment...</p>
  </div>
</div>


         {/* Post 5 */}
<div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
  {/* Post Video */}
  <div className="relative">
    <video
      src="/post_5.mp4"
      className="w-full h-[500px] object-contain bg-black" // full video visible & larger
      controls
      muted
    />
    <a
      href="https://www.instagram.com/she_the_surgeon/"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-2 right-2 bg-blue-500 text-xs px-2 py-1 rounded"
    >
      <span style={{ color: "#FFD54F" }}>View Profile</span>
    </a>
  </div>

  {/* Post Footer */}
  <div className="p-3">
    <a
      href="https://www.instagram.com/reel/DPV-ds0Ck7i/?igsh=MWpxZTM2aG4wN3RpZA=="
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 text-sm mb-2 cursor-pointer hover:underline block"
    >
      View more on Instagram
    </a>
    <div className="flex items-center text-gray-700 text-xs mb-2 space-x-3">
      <img src="/like.svg" alt="Like" className="w-6 h-6 cursor-pointer" />
      <img src="/comment.svg" alt="Comment" className="w-6 h-6 cursor-pointer" />
      <img src="/send.svg" alt="Send" className="w-6 h-6 cursor-pointer" />
      <img
        src="/save.svg"
        alt="Save"
        className="w-6 h-6 cursor-pointer ml-auto"
      />
    </div>
    <p className="text-gray-700 text-sm font-medium">120 likes</p>
    <p className="text-gray-600 text-xs">Add a comment...</p>
  </div>
</div>


           {/* Post 6*/}
          <div className="bg-white rounded-lg border border-gray-300 overflow-hidden">
  {/* Post Video */}
  <div className="relative">
    <video
      src="/hello.mp4"
      className="w-full h-[500px] object-contain bg-black" // increased height
      controls
      muted
    />

    <a
      href="https://www.instagram.com/she_the_surgeon/"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-2 right-2 bg-blue-500 text-xs px-2 py-1 rounded"
    >
      <span style={{ color: "#FFD54F" }}>View Profile</span>
    </a>
  </div>

  {/* Post Footer */}
  <div className="p-3">
    <a
      href="https://www.instagram.com/reel/DPI88L7Ck_3/?igsh=MTdyMDhxZG1vODc2cg=="
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 text-sm mb-2 cursor-pointer hover:underline block"
    >
      View more on Instagram
    </a>

    <div className="flex items-center text-gray-700 text-xs mb-2 space-x-3">
      <img src="/like.svg" alt="Like" className="w-6 h-6 cursor-pointer" />
      <img src="/comment.svg" alt="Comment" className="w-6 h-6 cursor-pointer" />
      <img src="/send.svg" alt="Send" className="w-6 h-6 cursor-pointer" />
      <img
        src="/save.svg"
        alt="Save"
        className="w-6 h-6 cursor-pointer ml-auto"
      />
    </div>

    <p className="text-gray-700 text-sm font-medium">34 likes</p>
    <p className="text-gray-600 text-xs">Add a comment...</p>
  </div>
</div>
        </div>
      </div>
       

        {/* Heading */}
        <h2 className="relative z-10 text-xl md:text-3xl font-semibold text-blue-900 mb-7 text-center leading-relaxed">
          Watch these videos to get more information about
          <br /> Dr. Shazia Waghoo.
        </h2>
        {/* Half Circle Background */}
        {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3/4 w-[2100px] h-[2200px] bg-sky-100 rounded-full z-0"></div> */}

        {/* Video Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Left Video */}
          <div className="w-full aspect-video shadow-lg rounded-md overflow-hidden">
            <video
              ref={video1Ref}
              className="w-full h-full object-cover"
              loop
              controls
              onMouseEnter={() => handleMouseEnter(video1Ref)}
              onMouseLeave={() => handleMouseLeave(video1Ref)}
            >
              <source src="/vedio1.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Center Square Video */}
          <div className="w-full aspect-square shadow-lg rounded-md overflow-hidden">
            <video
              ref={video2Ref}
              className="w-full h-full object-cover"
              loop
              controls
              onMouseEnter={() => handleMouseEnter(video2Ref)}
              onMouseLeave={() => handleMouseLeave(video2Ref)}
            >
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
      </div>
    </>
  );
};

export default WatchVedio;