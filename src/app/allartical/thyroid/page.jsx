
import Thyroid from "@/components/AllSurgery/Thyroid";
import Contact from "@/components/Homepage/Contact";
import ContactMobile from "@/components/Homepage/mobilecontact";
import WhatsAppButton from "@/components/Layout/whatsappbutton";
import React from "react";

const page = () => {
  return (
    <>
      <div className="hidden md:block">
        <WhatsAppButton />
        <Thyroid />
        <Contact />
      </div>
      <div className="block md:hidden">
        <WhatsAppButton />

        <Thyroid />
        <ContactMobile />
      </div>
    </>
  );
};

export default page;
