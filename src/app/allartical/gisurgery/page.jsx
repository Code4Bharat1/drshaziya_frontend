
import GIsurgery from "@/components/AllSurgery/GIsurgery";
import Contact from "@/components/Homepage/Contact";
import ContactMobile from "@/components/Homepage/mobilecontact";
import WhatsAppButton from "@/components/Layout/whatsappbutton";
import React from "react";

const page = () => {
  return (
    <>
      <div className="hidden md:block">
        <WhatsAppButton />
        <GIsurgery />
        <Contact />
      </div>
      <div className="block md:hidden">
        <WhatsAppButton />

        <GIsurgery />
        <ContactMobile />
      </div>
    </>
  );
};

export default page;
