
import Harnia from "@/components/AllSurgery/Harnia";
import MobileHarnia from "@/components/AllSurgery/MobileHarnia";
import Contact from "@/components/Homepage/Contact";
import ContactMobile from "@/components/Homepage/mobilecontact";
import WhatsAppButton from "@/components/Layout/whatsappbutton";
import React from "react";

const page = () => {
  return (
    <>
      <div className="hidden md:block">
        <WhatsAppButton />
        <Harnia />
        <Contact />
      </div>
      <div className="block md:hidden">
        <WhatsAppButton />

        <MobileHarnia />
        <ContactMobile />
      </div>
    </>
  );
};

export default page;
