
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