import React from 'react'
import EventHeader from '../components/EventHeader'
import { s1 } from '../assets'



const EventPage = () => {
  return (
    <div className='flex min-h-[100vh] justify-center'>
        <div className='w-8/12'>
            <EventHeader picture={s1}/>
        </div>
    </div>
  )
}

export default EventPage
