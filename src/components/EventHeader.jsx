import React from 'react'
import { getEvent } from '../event'
import { useLoaderData } from 'react-router-dom'
import events from '../event'
import { Link, NavLink } from 'react-router-dom'
import { s1 } from '../assets'
import { VscCalendar } from "react-icons/vsc";
import { FaClock } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import google_key from "../key.js"


export async function loader( {params} ) {
    const event = await getEvent(params.id)
    return { event }  
}

const EventHeader = () => {
    const { event } = useLoaderData()
    console.log(event)
    return (
        <div className='flex flex-col space-y-5 p-5 '>
            <div className='flex h-[400px]  mt-10 '>
                <img src={event.image} className='object-cover flex-grow-1 w-full rounded-lg'/>
            </div>  
            <div className='mt-10 flex flex-col space-y-3'>
                <h1>{event.title}</h1>
                <p className='pt-5'>{event.description}</p>
                <div className='flex pt-5'>
                    <VscCalendar className='size-7 my-auto mr-2'/><h3>Date and Time</h3>
                </div>
                <p className='font-semibold pb-5'>{`${event.date}, ${event.time}`}</p>
                <div className=''>
                    <h3>Event Location</h3>
                    <div className='flex'>
                        <FaSearchLocation /><p>{event.location}</p>
                    </div>
                    <iframe
                        width="600"
                        height="450"
                        loading="lazy"
                        allowfullscreen
                        referrerpolicy="no-referrer-when-downgrade"
                        src={`https://www.google.com/maps/embed/v1/place?key=${google_key}
                            &q=${event.location}`}>
                    </iframe>
                </div>
                </div>
        </div>
        

  )
}

export default EventHeader
