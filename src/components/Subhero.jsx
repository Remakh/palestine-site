import React from 'react'
import { logo2 } from '../assets'
import events from '../event'
import EventBox from './EventBox'
import SocialsBox from './SocialsBox'
import WhatsappBox from './WhatsappBox'
import VideoBox from './VideoBox'
import EventboxFront from './EventboxFront'
import { pattern } from '../assets'

const Subhero = () => {
  return (
  <div className='flex flex-col' >
      <div className='flex justify-center space-x-10  py-28 '>
        <VideoBox />
        <div className='border-l-2 border-black border-r-2'></div>
        <div className='w-1/3'>
          <h2 className='font-semibold '>Lecture on Palestine</h2>
          <p>Some random text explaining the value of Palestine to the world and the fight for justice against an evil ethno-nationalist cult</p>
        </div>
      </div>
      <EventboxFront />
      <div className='pt-10'>
        <SocialsBox />
      </div>
      </div>
  )
}

export default Subhero
