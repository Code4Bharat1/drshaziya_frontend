import BreastCancer from "@/components/AllSurgery/BreastCancer";
import Contact from "@/components/Homepage/Contact";
import ContactMobile from "@/components/Homepage/mobilecontact";
import WhatsAppButton from "@/components/Layout/whatsappbutton";
import React from "react";

const page = () => {
  return (
    <>
      <div className="hidden md:block">
        <WhatsAppButton />
        <BreastCancer />
        <Contact />
      </div>
      <div className="block md:hidden">
        <WhatsAppButton />

        <BreastCancer />
        <ContactMobile />
      </div>
    </>
  );
};

export default page;
