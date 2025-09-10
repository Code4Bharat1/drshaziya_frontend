export const metadata = {
  title: "Colorectal Surgery | Dr. Shaziya Waghoo",
  description: "Advanced colorectal surgery procedures by Dr. Shaziya Waghoo, providing safe and effective treatments in Mumbai.",
  openGraph: {
    url: "https://drshaziawaghoo.com/allartical/colorectalsurgery",
    title: "Colorectal Surgery | Dr. Shaziya Waghoo",
    description: "Advanced colorectal surgery procedures by Dr. Shaziya Waghoo, providing safe and effective treatments in Mumbai.",
    siteName: "Dr. Shaziya Waghoo",
  },
};

import ColorectalSurgery from "@/components/AllSurgery/Colorectalsurgery";
import Contact from "@/components/Homepage/Contact";
import ContactMobile from "@/components/Homepage/mobilecontact";
import WhatsAppButton from "@/components/Layout/whatsappbutton";
import React from "react";

const page = () => {
  return (
    <>
      <div className="hidden md:block">
        <WhatsAppButton />
        <ColorectalSurgery />
        <Contact />
      </div>
      <div className="block md:hidden">
        <WhatsAppButton />

        <ColorectalSurgery />
        <ContactMobile />
      </div>
    </>
  );
};

export default page;
