export const metadata = {
  title: "Contact Dr. Shazia Waghoo | Santacruz, Mumbai ,Santacruz West, Khar West",
  description: "Get in touch with Dr. Shazia Waghoo for appointments, consultations, or medical inquiries in Santacruz, Mumbai.",
  openGraph: {
    url: "https://drshaziawaghoo.com/contactus",
    title: "Contact Dr. Shazia Waghoo",
    description: "Get in touch with Dr. Shazia Waghoo for appointments, consultations, or medical inquiries in Santacruz, Mumbai.",
    siteName: "Dr. Shazia Waghoo",
  },
};

import BookAppointment from "@/components/Aboutus/bookapoinment";
import BookAppointmentMobile from "@/components/Aboutus/MobileBookapoinment";
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
        
        <ClinicCard />
        <Maincontactus />
        <BookAppointment />
        
      </div>
      <div className="block md:hidden">
        <WhatsAppButton />
        
        <MobileClinicCard />
        <Mobilemaincontatcus />
        <BookAppointmentMobile />
        
      </div>
    </>
  );
};

export default page;
