
import BookAppointment from "@/components/About us/bookapoinment";
import Conference from "@/components/About us/Conference";
import Hernia from "@/components/About us/Hernia";
import Recognitions from "@/components/About us/Recognitions";
import WhatsAppButton from "@/components/Layout/whatsappbutton";
import React from "react";

const page = () => {
  return (
    <div>
      <WhatsAppButton />
       <div className="mt-20">
      <Hernia />
      </div>
      <Conference/>
      <Recognitions/>

      <div className="mb-5">
  <BookAppointment />
</div>

    </div>
  );
};

export default page;
