import React from "react";

const MobileWatchVideo = () => {
  return (
    <div className="relative bg-[#F8F9FE] pt-12 pb-12 px-2 overflow-hidden max-w-md ">
      {/* Heading */}
      <h2 className="relative whitespace-nowrap z-10 text-md font-semibold text-[#004979] mb-8 text-center leading-relaxed px-2">
        Watch these videos to get more information about
        <br className="hidden sm:block" />
        <span className="block sm:inline"> Dr. Shazia Waghoo.</span>
      </h2>

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
  );
};

export default MobileWatchVideo;
