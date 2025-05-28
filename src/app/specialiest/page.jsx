import OfferExpertise from '@/components/Homepage/OfferExpertise'
import WhatsAppButton from '@/components/Layout/whatsappbutton'
import PatientCare from '@/components/Specialiest/PatientCare'
import React from 'react'

const page = () => {
  return (
    <>
    <WhatsAppButton/>
    <OfferExpertise/>
    <PatientCare/>
    </>
  )
}

export default page