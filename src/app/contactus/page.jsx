

import BookAppointment from "@/components/About us/bookapoinment";
import ContactInfo from "@/components/Contactus/contactinfo";
import WhatsAppButton from "@/components/Layout/whatsappbutton";
import React from "react";

const page = () => {
  return (
    <div>
      <WhatsAppButton />
      <ContactInfo />
      <BookAppointment />
    </div>
  );
};

export default page;
