import React from 'react'
import { logo2 } from '../assets'
import events from '../event'
import EventBox from './EventBox'
import SocialsBox from './SocialsBox'
import WhatsappBox from './WhatsappBox'
import VideoBox from './VideoBox'
import EventboxFront from './EventboxFront'
import { pattern } from '../assets'
import AOS from 'aos';
import { handala } from '../assets'
import 'aos/dist/aos.css'; // 

const Subhero = () => {

  AOS.init();

  return (
  <div className='flex flex-col bg-cover' >
      <EventboxFront />
      <div data-aos='fade-left' className=''>
        <SocialsBox />
      </div>
      </div>
  )
}

export default Subhero
