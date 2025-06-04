import React from 'react';
import Image from 'next/image';


const MobilePatientCare = () => {
  const patientCareItems = [
    {
      id: 1,
      title: "Pre Operative Assessment",
      description: "Pre-operative assessment includes discussing the patient's complaints, a thorough physical examination, counseling on the factors and treatment options, and addressing any questions or concerns from the patient or relatives."
    },
    {
      id: 2,
      title: "Post Operative Care",
      description: "Post-operative care involves immediate hospital care after surgery, provided by a dedicated team of doctors and nurses. It includes pain management, wound care and dietary support following the surgeon's instructions."
    },
    {
      id: 3,
      title: "Diet & Lifestyle",
      description: "Diet and lifestyle consultations are vital in every clinical, pre-operative, and post-operative management. Specialized recommendations are provided and followed up to ensure effective treatment and proper care for the patient."
    },
    {
      id: 4,
      title: "Physiotherapy",
      description: "Physiotherapy plays a crucial role in preoperative optimization, enhancing surgical outcomes and speeding up post-operative recovery. Limb and chest physiotherapy work together to aid patients in recovering quickly from surgery."
    },
    {
      id: 5,
      title: "Follow Up Care",
      description: "Follow up care the surgery performed and patients requirement but done on a regular basis. Follow up care extends from post discharge up to the time patient has completely recovered physically. Good follow up care goes a long way in determining the success of the surgery as is preop preparation and postoperative care."
    },
    {
      id: 6,
      title: "Patients' Review",
      description: "One of the stellar patient reviews we have received on Google"
    }
  ];

  return (
    <div className="w-full mt-20 bg-white py-8 px-4">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold text-[#004979] text-center mb-8">
          Patient Care
        </h1>
        
        <div className="space-y-6">
          {patientCareItems.map((item) => (
            <div key={item.id} className="flex mx-4 items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <div className="w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
  <Image 
    src="/patientcare.png" 
    width={16} 
    height={16} 
    alt="Icon"
    className="w-4 h-4 object-contain"
  />
</div>
              </div>
              <div className="flex-1 mx-3">
                <h3 className="text-lg font-bold text-[#081D72] mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-black text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobilePatientCare;