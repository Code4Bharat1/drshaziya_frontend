export const metadata = {
  title: "Resources | Dr. Shazia Waghoo",
  description:
    "Access trusted healthcare resources, guides, and articles by Dr. Shazia Waghoo to help patients make informed decisions about surgery and treatment.",
  openGraph: {
    url: "https://drshaziawaghoo.com/resource",
    title: "Resources | Dr. Shazia Waghoo",
    description:
      "Explore healthcare resources and expert guides by Dr. Shazia Waghoo for better understanding of surgical treatments.",
    siteName: "Dr. Shazia Waghoo",
  },
};

import BookAppointmentMobile from '@/components/Aboutus/MobileBookapoinment'
import Artical from '@/components/Homepage/Artcal'
import OfferExpertise from '@/components/Homepage/OfferExpertise'
import MobileOfferExpertise from '@/components/Homepage/mobileofferexpertise'
import WhatsAppButton from '@/components/Layout/whatsappbutton'
import Awareness1 from '@/components/Resource/Awareness1'

import Awareness3 from '@/components/Resource/Awareness3'
import MobileArtical from '@/components/Resource/MobileArtical'
import MobileAwareness1 from '@/components/Resource/MobileAwareness1'
import MobileAwareness3 from '@/components/Resource/MobileAwareness3'
import MobileResource from '@/components/Resource/MobileResource'
import MobileSocialwork from '@/components/Resource/MobileSocialwork'
import Resource from '@/components/Resource/Resourcec'
import SocialWork from '@/components/Resource/SocialWork'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='hidden md:block'>
    <WhatsAppButton/>
    <div id="blogs">
    <Resource/>
    </div>
    <div id="social-work">
    <SocialWork/>
    </div>
    <div id="awards">
     <Awareness3/>
    </div>
    {/* <Artical/> */}
    <OfferExpertise/>
    </div>


    <div className='block md:hidden'>
      <WhatsAppButton/>

        <div id="blogs">
          <MobileResource/>
          </div>
        <div id="social-work">
        <MobileSocialwork/>
        </div>
        <div id="awards">
          <MobileAwareness3/>
        </div>
        {/* <MobileArtical/> */}
        <MobileOfferExpertise/>
        <BookAppointmentMobile/>

    </div>
    </>
  )
}

export default page