

import BookAppointment from "@/components/About us/bookapoinment";
import ClinicCard from "@/components/Contactus/ClinicCard";
import ContactInfo from "@/components/Contactus/contactinfo";
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
    </div>
    <div className="block md:hidden">
      <WhatsAppButton/>
      <Mobilemaincontatcus/>
      <MobileClinicCard/>
      
    </div>
  </>

  );
};

export default page;
