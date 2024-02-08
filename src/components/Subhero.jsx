import React from 'react'
import { logo2 } from '../assets'
import events from '../event'
import EventBox from './EventBox'
import SocialsBox from './SocialsBox'
import WhatsappBox from './WhatsappBox'
import VideoBox from './VideoBox'
import EventboxFront from './EventboxFront'

const Subhero = () => {
  return (
    <div className='flex flex-col'>
      <div className='flex'>
        <WhatsappBox />
        <VideoBox />
      </div>
      <EventboxFront />
      <div className='pt-10'>
        <SocialsBox />
      </div>
      </div>
  )
}

export default Subhero
