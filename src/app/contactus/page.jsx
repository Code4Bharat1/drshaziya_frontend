export const metadata = {
  title: "Contact Dr. Shazia Waghoo | Kurla, Mumbai",
  description: "Get in touch with Dr. Shazia Waghoo for appointments, consultations, or medical inquiries in Kurla, Mumbai.",
  openGraph: {
    url: "https://drshaziawaghoo.com/contactus",
    title: "Contact Dr. Shazia Waghoo",
    description: "Get in touch with Dr. Shazia Waghoo for appointments, consultations, or medical inquiries in Kurla, Mumbai.",
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
        <Maincontactus />
        <ClinicCard />
        <BookAppointment />
      </div>
      <div className="block md:hidden">
        <WhatsAppButton />
        <Mobilemaincontatcus />
        <MobileClinicCard />
        <BookAppointmentMobile />
      </div>
    </>
  );
};

export default page;
