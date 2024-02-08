import React from 'react'
import { instagram, spotify } from '../assets'
import { Link } from 'react-router-dom'
import { FOPLogo, title } from '../assets'


const Footer = () => {
  return (
    <div className=' bg-beige flex justify-center bottom-0 w-full h-full' id='footer'>
      <div className='w-8/12 flex flex-col'>
      <div className='flex justify-evenly w-full mb-0 bottom-0 mx-auto border-b border-black'>
            <div className='py-10'>
              <h4 className='text-red-300 font-semibold'>Useful Links</h4>
              <ul className='pt-4 space-y-2 text-green-800'>
                <li>Friends of Al-Aqsa</li>
                <li>Stop the War Coallition</li>
                <li>Youth front for Palestine</li>

              </ul>
            </div>
            <div className='pt-10'>
              <h4 className='text-red-300 font-semibold'>Shortcuts</h4>
              <ul className='pt-4 space-y-2 text-green-800'>
                <li><Link to={'/Committee'}>Committee</Link></li>
                <li><Link to={'/Events'}>Upcoming Events</Link></li>
                <li><Link to={'/Statements'}>Statements</Link></li>

              </ul>
            </div>
            <img src={title} className='w-1/3 h-1/3 my-auto'/>
      </div>
      <div>
      <p className='my-4 text-right'> © 2024 Unversity of Manchseter Friends of Palestine Society </p>
      </div>

      </div>
    </div>
  )
}

export default Footer
