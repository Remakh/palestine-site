import React from 'react'
import { logo2 } from '../assets'
import events from '../event'
import EventBox from './EventBox'

const Subhero = () => {
  return (
    <div className='text-center bg-green-800 p-4'>
      <h1 className='text-white font-normal text-font font-Open-sans pt-10'>Upcoming Events</h1>
        <div className='mt-10'>
                <ul className="flex flex-row justify-items-center justify-center space-x-28 pb-28">    
                  {events.slice(0, 2).map((e) => (
                      <li className="">
                        <EventBox title={e.title} description={e.description} image={e.image} location={e.location} date={e.date} time={e.time} />
                  </li>
                ))}        
            </ul>
        </div>
      </div>
  )
}

export default Subhero
