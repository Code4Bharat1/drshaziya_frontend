export const metadata = {
  title: "Laparoscopy Surgery | Dr. Shaziya Waghoo",
  description: "Minimally invasive laparoscopy procedures by Dr. Shaziya Waghoo in Kurla, Mumbai with quick recovery and expert care.",
  openGraph: {
    url: "https://drshaziawaghoo.com/allartical/laparoscopicsurgery",
    title: "Laparoscopy Surgery | Dr. Shaziya Waghoo",
    description: "Minimally invasive laparoscopy procedures by Dr. Shaziya Waghoo in Kurla, Mumbai with quick recovery and expert care.",
    siteName: "Dr. Shaziya Waghoo",
  },
};



import Lepocrasy from "@/components/AllSurgery/Lepocrasy";
import Contact from "@/components/Homepage/Contact";
import ContactMobile from "@/components/Homepage/mobilecontact";
import WhatsAppButton from "@/components/Layout/whatsappbutton";
import React from "react";

const page = () => {
  return (
    <>
      <div className="hidden md:block">
        <WhatsAppButton />
        <Lepocrasy />
        <Contact />
      </div>
      <div className="block md:hidden">
        <WhatsAppButton />

        <Lepocrasy />
        <ContactMobile />
      </div>
    </>
  );
};

export default page;
