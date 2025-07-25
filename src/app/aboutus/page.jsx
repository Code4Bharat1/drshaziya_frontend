
import BookAppointment from "@/components/Aboutus/bookapoinment";
import Conference from "@/components/Aboutus/Conference";
import Hernia from "@/components/Aboutus/Hernia";
import MobileBookAppointment from "@/components/Aboutus/MobileBookapoinment";
import MobileConference from "@/components/Aboutus/MobileConference";
import MobileHernia from "@/components/Aboutus/MobileHernia";
import MobileRecognitions from "@/components/Aboutus/MobileRecognition";

import Recognitions from "@/components/Aboutus/Recognitions";
import Footer from "@/components/Layout/Footer";
import WhatsAppButton from "@/components/Layout/whatsappbutton";
import React from "react";

const page = () => {
  return (
     <div>
     <div className="hidden md:block ">
      <WhatsAppButton />
      <Hernia />
      <Conference/>
      <Recognitions/>
    <BookAppointment />
   </div>
    <div className="block md:hidden ">
      <WhatsAppButton/>
   <MobileHernia/>
   <MobileConference/>
   <MobileRecognitions/>
   <MobileBookAppointment/>
   
    </div>
    </div>
  );
};

export default page;
