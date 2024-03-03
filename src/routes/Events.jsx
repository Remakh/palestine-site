import React from 'react'
import Calendar from 'react-calendar';
import { useEffect } from 'react';
import EventBox from '../components/EventBox';
import { logo2, s1, s2, s3 } from '../assets';
import { getEvents } from '../event';
import { useLoaderData, Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export async function loader() {
  return getEvents()
}

const Events = () => {

  useEffect(() => {
    window.scrollTo(0, 0)}, [])
  const { isAuthenticated } = useAuth()
  const events = useLoaderData()

  return (
    <div className='justify-center flex bg-cream pb-52'>
      <div className='w-8/12 '>
        <div className='flex flex-col pt-10 align-center'> 
        <div className='text-font text-center flex-col space-y-3'>

          {isAuthenticated ? <h2 className='font-semi-bold'>Events</h2>: <h2 className='font-semi-bold'>Upcoming Events</h2> }
          {isAuthenticated ? <></>: <h4 > Come support Palestine! </h4>}
          {isAuthenticated ? <Link to='/Create-Event'>Add Event</Link> : ''}
        </div>
        
        <div className='flex justify-center'>
          <ul className='flex mt-24 sm:flex-col md:flex-row space-x-10'>
            {events.map((e, index) => {
              return <li key={e.id}><EventBox id={e.id} title={e.title} image={e.image} date={e.date} description={e.description} location={e.location} time={e.time} /></li>
            })}
          </ul>
        </div>

        </div>
      </div>
    </div>
  )
}

export default Events
