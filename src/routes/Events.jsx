import React from 'react'
import Calendar from 'react-calendar';
import { useEffect } from 'react';
import EventBox from '../components/EventBox';
import { logo2, s1, s2, s3 } from '../assets';
import { useLoaderData, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { getEvents } from '../apiUtils';

export async function loader() {
  const e = await getEvents()
  return e.data
}

const Events = () => {
  const api = 'http://127.0.0.1:8000'
  useEffect(() => {
    window.scrollTo(0, 0)}, [])
  const events = useLoaderData()
  console.log(events)

  return (
    <div className='justify-center flex bg-cream pb-52'>
      <div className='w-8/12 '>
        <div className='flex flex-col pt-10 align-center'> 
        <div className='text-font text-center flex-col space-y-3'>

          {<h2 className='font-semi-bold'>Upcoming Events</h2> }
          {<h4 > Come support Palestine! </h4>}
        </div>
        
        <div className='flex justify-center'>
          <ul className='flex mt-24 sm:flex-col md:flex-row space-x-10'>
            {events.map((e, index) => {
              return <li key={e.id}><EventBox id={e.id} title={e.name} image={`${api}/${e.imagePath}`} date={e.date} description={e.description} location={e.location} time={e.time} /></li>
            })}
          </ul>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Events
