
import Harnia from '@/components/AllSurgery/Harnia'
import MobileHarnia from '@/components/AllSurgery/MobileHarnia'

import Contact from '@/components/Homepage/Contact'
import React from 'react'

const page = () => {
  return (
    <div>
     <div className="hidden md:block">
    <Harnia/>
    <Contact/>
    </div>
    
    <div className="block md:hidden">
      <MobileHarnia/>
    </div>
    </div>
    
  )
}

export default page