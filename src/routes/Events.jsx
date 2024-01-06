import React from 'react'
import Calendar from 'react-calendar';
import { useState } from 'react';


const Events = () => {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Calendar onChange={onChange}/>
    </div>
  )
}

export default Events
