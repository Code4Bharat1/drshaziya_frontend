
import LaserSurgery from "@/components/AllSurgery/Lasersurgary";
import Contact from "@/components/Homepage/Contact";
import ContactMobile from "@/components/Homepage/mobilecontact";
import WhatsAppButton from "@/components/Layout/whatsappbutton";
import React from "react";

const page = () => {
  return (
    <>
      <div className="hidden md:block">
        <WhatsAppButton />
        <LaserSurgery />
        <Contact />
      </div>
      <div className="block md:hidden">
        <WhatsAppButton />

        <LaserSurgery />
        <ContactMobile />
      </div>
    </>
  );
};

export default page;
