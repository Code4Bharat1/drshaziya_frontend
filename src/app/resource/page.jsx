import Artical from '@/components/Homepage/Artcal'
import WhatsAppButton from '@/components/Layout/whatsappbutton'
import Awareness1 from '@/components/Resource/Awareness1'

import Awareness3 from '@/components/Resource/Awareness3'
import MobileArtical from '@/components/Resource/MobileArtical'
import MobileAwareness1 from '@/components/Resource/MobileAwareness1'
import MobileAwareness3 from '@/components/Resource/MobileAwareness3'
import MobileResource from '@/components/Resource/MobileResource'
import MobileSocialwork from '@/components/Resource/MobileSocialwork'
import OfferExpertise from '@/components/Resource/OfferExpertise'
import Resource from '@/components/Resource/Resourcec'
import SocialWork from '@/components/Resource/SocialWork'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='hidden md:block'>
    <WhatsAppButton/>
    <Resource/>
    <SocialWork/>
    <Awareness1/>
  
    <Awareness3/>
    <Artical/>
    <OfferExpertise/>
    </div>
    <div className='block md:hidden'>

        <MobileResource/>
        <MobileSocialwork/>
        <MobileAwareness1/>
        <MobileAwareness3/>
        <MobileArtical/>

    </div>
    </>
  )
}

export default page