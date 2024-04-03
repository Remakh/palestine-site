import React, { useEffect, useState } from 'react'
import EventBox from './EventBox'
import AOS from 'aos';
import 'aos/dist/aos.css'; // 

import { getEvents } from '../apiUtils'

const data = async () => {
  const response = await getEvents()
  return response.data
}

const  EventboxFront =  () => {
  AOS.init()
  const [events, setEvents] = useState([])
  useEffect(  () => {
    async function fetchData() {
      setEvents(await data())
    }
    fetchData()
  }, [] )
  
  return (
    <div data-aos="fade-right" className='text-center  bg-green-800  p-4'>
    <h1 className='text-white font-normal text-font font-Open-sans pt-10'>Upcoming Events</h1>
      <div className='mt-10' >
              <ul className="flex md:flex-row align-middle items-center md:space-y-0 space-y-7 mx-auto justify-center md:space-x-28 pb-28 flex-col ">    
                {events.slice(0, 2).map((e) => (
                    <li className="" key={e.id}>
                      <EventBox id={e.id} title={e.name} description={e.description} image={e.imagePath} location={e.location} date={e.date} time={e.time} />
                </li>
              ))}        
          </ul>
      </div>
    </div>
  )
}

export default EventboxFront
