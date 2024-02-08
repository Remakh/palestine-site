import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsappBox = () => {
  return (
    <div className='flex bg-green-500 w-1/2'>
        <a href='https://chat.whatsapp.com/BvFaukie9R81k6BSil5bzh' className='flex w-full' target='_blank'>
        <div>
            <FaWhatsapp className=' size-96 text-green-800'/>
        </div>
            <h2 className='my-auto pl-10 font-bold text-white'>Join our Chat!</h2>
            </a>
    </div>
  )
}

export default WhatsappBox
