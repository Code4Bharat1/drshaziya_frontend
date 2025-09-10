export const metadata = {
  title: "Hernia Surgery | Dr. Shaziya Waghoo",
  description: "Safe and advanced hernia surgery treatments by Dr. Shaziya Waghoo in Mumbai, ensuring effective recovery.",
  openGraph: {
    url: "https://drshaziawaghoo.com/allartical/harniasurgery",
    title: "Hernia Surgery | Dr. Shaziya Waghoo",
    description: "Safe and advanced hernia surgery treatments by Dr. Shaziya Waghoo in Mumbai, ensuring effective recovery.",
    siteName: "Dr. Shaziya Waghoo",
  },
};



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
