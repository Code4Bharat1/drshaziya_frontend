import Artical from '@/components/Homepage/Artcal'
import Awareness1 from '@/components/Resource/Awareness1'

import Awareness3 from '@/components/Resource/Awareness3'
import OfferExpertise from '@/components/Resource/OfferExpertise'
import Resource from '@/components/Resource/Resourcec'
import SocialWork from '@/components/Resource/SocialWork'
import React from 'react'

const page = () => {
  return (
    <>
    <Resource/>
    <SocialWork/>
    <Awareness1/>
  
    <Awareness3/>
    <Artical/>
    <OfferExpertise/>
    </>
  )
}

export default page