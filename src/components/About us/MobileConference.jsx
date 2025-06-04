import React from 'react';

const MobileConference = () => {
  const presentations = [
    {
      id: 1,
      title: "COVID 19 pandemic induced Nominal training and Deskilling in the specialty of General Surgery",
      description: "Free Paper at ASI Virtual ASICON 2020.",
      image: "/conference-1.jpg",
      alt: "Surgery team in operating room"
    },
    {
      id: 2,
      title: "Extent of Peritoneal disease in lower abdomen and its relation to nodal disease in Stage 3c Epithelial Ovarian Cancer",
      description: "Poster Presentation at 11th International Workshop on Peritoneal Malignancy – PSOGI 2018, Paris, September 2018.",
      image: "/conference-2.jpg",
      alt: "Medical professional with equipment in hallway"
    },
    {
      id: 3,
      title: "Utility of BiPAP (Biphasic Positive Airway Pressure) ventilation in CRS+HIPEC (Cytoreductive Surgery +Hyperthermic Intraperitoneal Chemotherapy)",
      description: "Poster Presentation in 11th International Workshop on Peritoneal Malignancy – PSOGI 2018, Paris, September 2018.",
      image: "/conference-3.jpg",
      alt: "Medical professional in green scrubs working"
    }
  ];

  return (
    <div className="w-full bg-[#F9F8FE] py-2 px-4">
      <div className="max-w-6xl mx-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#004979] text-center mb-4">
          Conference Presentations
        </h1>
        
        <div className="space-y-10">
          {presentations.map((presentation) => (
            <div key={presentation.id} className="flex flex-col">
              {/* Square Image Box */}
              <div className="w-full aspect-square bg-gray-100 overflow-hidden shadow-md">
                <img 
                  src={presentation.image} 
                  alt={presentation.alt}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Text Content - Outside the image box */}
              <div className="mt-4">
                <h2 className="text-lg sm:text-xl font-bold text-center text-[#004979] mb-2 leading-tight">
                  {presentation.title}
                </h2>
                <p className="text-gray-700 text-base text-center sm:text-lg">
                  {presentation.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default MobileConference;
