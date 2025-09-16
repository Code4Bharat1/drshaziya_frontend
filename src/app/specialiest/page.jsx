export const metadata = {
  title: "Meet the Specialist | Dr. Shazia Waghoo",
  description:
    "Learn more about Dr. Shazia Waghoo, a specialist surgeon in Kurla, Mumbai. Trusted expertise in advanced and minimally invasive surgeries.",
  openGraph: {
    url: "https://drshaziawaghoo.com/specialiest",
    title: "Meet the Specialist | Dr. Shazia Waghoo",
    description:
      "Know your surgeon: Dr. Shazia Waghoo, a leading surgical specialist in Mumbai providing expert care and advanced treatment.",
    siteName: "Dr. Shazia Waghoo",
  },
};

import BookAppointment from '@/components/Aboutus/bookapoinment'
import BookAppointmentMobile from '@/components/Aboutus/MobileBookapoinment'

import WhatsAppButton from '@/components/Layout/whatsappbutton'
import MobileOfferExpert from '@/components/Specialiest/Mobileofferexpert'
import MobilePatientcare from '@/components/Specialiest/MobilePatientCare'
import OfferExpertise from '@/components/Specialiest/offerExpertise'
import PatientCare from '@/components/Specialiest/PatientCare'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="hidden md:block">
    
    <WhatsAppButton/>
  <OfferExpertise/>
    <PatientCare/>
    <BookAppointment/>
    </div>
      <div className="block md:hidden">
        <WhatsAppButton/>
      <MobileOfferExpert/>       
      <MobilePatientcare/>
     <BookAppointmentMobile/>
        </div>
        </div>

  )
}

export default page