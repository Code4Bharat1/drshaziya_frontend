
import BookAppointment from '@/components/About us/bookapoinment'
import WhatsAppButton from '@/components/Layout/whatsappbutton'
import OfferExpertise from '@/components/Specialiest/offerExpertise'
import PatientCare from '@/components/Specialiest/PatientCare'
import React from 'react'

const page = () => {
  return (
    <>
    <WhatsAppButton/>
  <OfferExpertise/>
    <PatientCare/>
    <BookAppointment/>
    </>
  )
}

export default page