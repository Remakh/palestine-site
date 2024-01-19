import React from 'react'
import { VscCalendar } from "react-icons/vsc";
import { FaClock } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";

const EventBox = ( {title, image, date, time, location, description} ) => {

  return (
      <div className='bg-slate-50 rounded-xl w-80 flex flex-col border-slate-50 shadow-lg'>
        <img src={image} className=' mb-2 h-32 object-cover w-full min-w-[100%] rounded-t-xl' /> 
        <div className=' px-4 whitespace-normal text-left border-b border-slate-200'>
            <h4 className='text-font py-3 font-semi-bold'> {title}</h4> 
        </div>
        <ul className='mt-4 space-y-5 p-3'>
          <li className='flex space-x-3 my-auto'>
            <VscCalendar className=' size-7'/> 
            <p class='eventText'>{date}</p>
          </li>
          <li className='flex space-x-3 my-auto'>
            <FaClock className=' size-7'/> 
            <p class='eventText'>{time}</p>
          </li>
          <li className='flex space-x-3 my-auto'>
            <FaSearchLocation className=' size-7'/> 
            <p class='eventText'>{location}</p>
          </li>
        </ul>
        <div className=' px-4 justify-center flex'>
            <button className='text-font m-5 p-2 w-full font-semi-bold text-center bg-gold rounded-xl hover:opacity-60  transition-all '>More Info</button> 
        </div>
      </div>
  )
}

export default EventBox
