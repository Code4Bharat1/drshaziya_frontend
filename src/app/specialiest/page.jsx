
import BookAppointment from '@/components/About us/bookapoinment'
import WhatsAppButton from '@/components/Layout/whatsappbutton'
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
        
<MobilePatientcare/>
        </div>
        </div>

  )
}

export default page