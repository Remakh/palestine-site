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
  <div className='flex flex-col bg-cover' style={{backgroundImage: 'url(https://i.etsystatic.com/41443557/r/il/01d663/5556658928/il_fullxfull.5556658928_szm4.jpg)'}} >
      <div data-aos="fade-up" className='flex md:justify-center md:space-x-10 py-10 md:py-28 md:flex-row flex-col items-center md:items-start px-5 '>
        <h2 className='font-semibold md:hidden pb-5 underline '>Lecture on Palestine</h2>
        <VideoBox />
        <div  className='hidden md:block border-l-4  border-black border-r-4 h-32'></div>
        <div className='md:w-1/3 px:15'>
          <h2 className='hidden md:block font-semibold '>Lecture on Palestine</h2>
          <hr className='my-7 border-t-2 border-solid border-black md:hidden'/>
          <p >Some random text explaining the value of Palestine to the world and the fight for justice against an evil ethno-nationalist cult</p>
        </div>
      </div>
      <EventboxFront />
      <div data-aos='fade-left' className=''>
        <SocialsBox />
      </div>
      </div>
  )
}

export default Subhero
