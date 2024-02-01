import React from 'react'
import { getEvent } from '../event'
import { useLoaderData } from 'react-router-dom'
import events from '../event'
import { Link, NavLink } from 'react-router-dom'
import { s1 } from '../assets'



export async function loader( {params} ) {
    const event = await getEvent(params.id)
    return { event }  
}

const EventHeader = () => {
    const { event } = useLoaderData()
    console.log(event)
    return (
        <div className='flex flex-col'>
            <div className='flex h-[400px]  mt-10 '>
                <img src={event.image} className='object-cover flex-grow-1 w-full rounded-lg'/>
            </div>  
            <div className='mt-10 flex flex-col space-y-3'>
                <h1>{event.title}</h1>
                <h3>Date and Time</h3>
                <p className='font-semibold'>{event.date}</p>
                <h3>Description</h3>
                <p>{event.description}</p>
            </div>
        </div>
        

  )
}

export default EventHeader
