import React from 'react';

const Conference = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-[#ffffff]">
      <h1 className="text-4xl font-bold text-[#004979] text-center mb-10">
        Conference Presentations
      </h1>
      
      <div className="flex gap-25">
       
        <div className="flex-1 space-y-8">
         
          <div>
  <h2 className="text-2xl font-bold text-[#004979] mb-5">
    COVID 19 pandemic induced Nominal training <br />
    Deskilling in the specialty of General <br />
    Surgery
  </h2>

  <p className="text-gray-700 mb-10 text-2xl ">
    Free Paper at ASI Virtual ASICON 2020.
  </p>
</div>


          {/* Second Presentation */}
          <div>
  <h2 className="text-2xl font-bold text-[#004979] mb-5">
    Extent of Peritoneal disease in lower <br />
    abdomen and its relation to nodal disease in <br />
    Stage 3c Epithelial Ovarian Cancer
  </h2>
  <p className="text-gray-700 mb-10 text-2xl ">
    Poster Presentation at 11th International <br />
    Workshop on Peritoneal Malignancy – PSOGI <br />
    2018, Paris, September 2018.
  </p>
</div>

          {/* Third Presentation */}
          <div>
  <h2 className="text-2xl font-bold text-[#004979] mb-5">
    Utility of BiPAP (Biphasic Positive Airway <br />
    Pressure) ventilation in CRS+HIPEC <br />
    (Cytoreductive Surgery +Hyperthermic <br />
    Intraperitoneal Chemotherapy)
  </h2>
  <p className="text-gray-700 text-2xl ">
    Poster Presentation in 11th International <br />
    Workshop on Peritoneal Malignancy – PSOGI <br />
    2018, Paris, September 2018.
  </p>
</div>
</div>
        {/* Right side - Images stacked vertically */}
        <div className="w-110 border-2 border-[#004979] p-4 bg-gray-50">
          <div className="space-y-4">
            <div className="w-80 h-48 bg-gray-200 ">
              <img 
                src="/conference-1.jpg" 
                alt="Surgery team in operating room"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="w-80 h-48 bg-gray-200 ">
              <img 
                src="/conference-2.jpg" 
                alt="Medical professional with equipment in hallway"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="w-80 h-48 bg-gray-200 ">
              <img 
                src="/conference-3.jpg" 
                alt="Medical professional in green scrubs working"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conference;