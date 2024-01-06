import React from 'react'
import { logo2 } from '../assets'
import events from '../event'
import EventBox from './eventBox'

const Subhero = () => {
  return (
    <div className='text-center bg-red-100 p-4'>
      <h1 className='text-green-800 font-normal font-Nunito font-Open-sans pt-5'>Upcoming Events</h1>
        <div className='mt-10'>
                <ul className="flex flex-row justify-items-center justify-center space-x-28 pb-28">    

                {events.map((e) => (
                    <li className="col-span-1 max-w-[350px] flex flex-col text-center justify-center bg-white rounded-lg shadow-lg p-4 ">
                    <EventBox title={e.title} description={e.description} image={e.image} />
                </li>
                ))}        
            </ul>
        </div>
      </div>
  )
}

export default Subhero
