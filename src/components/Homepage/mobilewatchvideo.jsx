"use client"
import React, { useRef } from "react";
import Head from "next/head";

const MobileWatchVideo = () => {
  const video1Ref = useRef(null);
  const video2Ref = useRef(null);

  const handleMouseEnter = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.muted = false; // ✅ ensure audio is ON
      videoRef.current.play();
    }
  };

  const handleMouseLeave = (videoRef) => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <>
      <Head>
        <title>Dr. Shazia Waghoo Laparoscopic Surgeon in Andheri and Santacruz</title>
        <meta
          name="description"
          content="Watch informative videos to learn more about Dr. Shazia Waghoo’s surgical expertise, patient approach, and healthcare services in Mumbai."
        />
      </Head>

      <div className="relative bg-[#F8F9FE] pt-12 pb-12 px-2 overflow-hidden max-w-md ">
        <div className="flex justify-center items-center px-2">
          <h2 className="relative text-[18px] font-bold text-[#004979] mb-8 text-center leading-relaxed">
            Watch these videos to get more information{" "}
            <span>
              about <br /> Dr. Shazia Waghoo.
            </span>
          </h2>
        </div>

        <div className="space-y-4 w-full px-10">
          {/* First Video */}
          <div className="w-full aspect-square shadow-lg rounded-lg overflow-hidden mx-auto">
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

          {/* Second Video */}
          <div className="w-full aspect-square shadow-lg rounded-lg overflow-hidden mx-auto">
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

          {/* YouTube (unchanged, no hover audio possible without API) */}
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
