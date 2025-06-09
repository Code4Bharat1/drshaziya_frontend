

import BookAppointment from "@/components/About us/bookapoinment";
import BookAppointmentMobile from "@/components/About us/MobileBookapoinment";
import ClinicCard from "@/components/Contactus/ClinicCard";

import Maincontactus from "@/components/Contactus/Maincontactus";
import MobileClinicCard from "@/components/Contactus/MobileClinicCard";
import Mobilemaincontatcus from "@/components/Contactus/Mobilemaincontatcus";
import WhatsAppButton from "@/components/Layout/whatsappbutton";
import React from "react";

const page = () => {
  return (
  <>
    <div className="hidden md:block">
      <WhatsAppButton />
    <Maincontactus/>
    <ClinicCard/>
    <BookAppointment/>
    </div>
    <div className="block md:hidden">
      <WhatsAppButton/>
      <Mobilemaincontatcus/>
      <MobileClinicCard/>
      <BookAppointmentMobile/>
      
    </div>
  </>

  );
};

export default page;
