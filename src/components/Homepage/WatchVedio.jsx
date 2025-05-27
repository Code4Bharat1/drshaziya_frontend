import React from 'react';

const WatchVedio = () => {
  return (
    <div className="relative bg-blue-50 pt-16 pb-16 px-4 md:px-20 overflow-hidden">
      {/* Half Circle Background - curved at top */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-3/4 w-[2100px] h-[2200px] bg-sky-100 rounded-full z-0"></div>

      {/* Heading */}
      <h2 className="relative z-10 text-xl md:text-3xl font-semibold text-blue-900 mb-3 text-center leading-relaxed">
        Watch these videos to get a better idea about latest <br /> healthcare modalities:
      </h2>

      {/* Video Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
    </div>
  );
};

export default WatchVedio;
