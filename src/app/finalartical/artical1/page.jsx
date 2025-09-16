export const metadata = {
  title: "Final Article | Dr. Shazia Waghoo",
  description:
    "Read the final article by Dr. Shazia Waghoo – expert insights on advanced surgical treatments, healthcare tips, and patient awareness.",
  openGraph: {
    url: "https://drShaziawaghoo.com/finalartical",
    title: "Final Article | Dr. Shazia Waghoo",
    description:
      "Explore Dr. Shazia Waghoo’s final article covering surgical expertise, healthcare updates, and patient-focused insights.",
    siteName: "Dr. Shazia Waghoo",
  },
};


import Artical1 from "@/components/AllArtical/Artical1";
import Artical from "@/components/Homepage/Artcal";
import Contact from "@/components/Homepage/Contact";
import ContactMobile from "@/components/Homepage/mobilecontact";
import WhatsAppButton from "@/components/Layout/whatsappbutton";
import React from "react";

const page = () => {
  return (
    <>
      <div className="hidden md:block">
        <WhatsAppButton />
        <Artical1 />
        <Artical />
        <Contact />
      </div>
      <div className="block md:hidden">
        <WhatsAppButton />

        <Artical1 />
        <Artical />
        <ContactMobile />
      </div>
    </>
  );
};

export default page;
