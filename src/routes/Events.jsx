import React from 'react'
import Calendar from 'react-calendar';
import { useState } from 'react';


const Events = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div className='justify-center flex'>
      <div className='h-[100vh] w-8/12 '>
        <div className='flex'> 
           

        </div>
      </div>
    </div>
  )
}

export default Events
