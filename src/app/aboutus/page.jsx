
import BookAppointment from "@/components/About us/bookapoinment";
import Conference from "@/components/About us/Conference";
import Hernia from "@/components/About us/Hernia";
import MobileBookAppointment from "@/components/About us/MobileBookapoinment";
import MobileConference from "@/components/About us/MobileConference";
import MobileHernia from "@/components/About us/MobileHernia";
import MobileRecognitions from "@/components/About us/MobileRecognition";

import Recognitions from "@/components/About us/Recognitions";
import Footer from "@/components/Layout/Footer";
import WhatsAppButton from "@/components/Layout/whatsappbutton";
import React from "react";

const page = () => {
  return (
     <div>
     <div className="hidden md:block">
      <WhatsAppButton />
      <Hernia />
      <Conference/>
      <Recognitions/>
    <BookAppointment />
   </div>
    <div className="block md:hidden">
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
