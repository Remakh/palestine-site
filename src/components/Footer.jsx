import React from 'react'
import { instagram, spotify } from '../assets'

const Footer = () => {
  return (
    <div className=' bg-beige flex justify-center bottom-0 w-full h-[170px]' id='footer'>
      <div className='w-8/12 flex flex-col'>
      <div className='flex justify-center w-full relative mb-0 bottom-0 mx-auto border-b border-black'>
      <ul className='flex flex-row fixedSpaces'>
          <li>
          <a href='https://www.instagram.com/manchesterfop/' target='_blank'>
              <img src={instagram} className='  opacity-50 hover:opacity-100 h-[50px] m-[20px] p-0' />
          </a>
          </li> 
          <li>
              <a href='https://podcasters.spotify.com/pod/show/manchesterfop' target='_blank'> 
                  <img src={spotify} className='opacity-50 hover:opacity-100 h-[50px] m-[20px] p-0'/> 
              </a>
          </li>  
      </ul>
      </div>
      <div>

      <p className='my-4 text-right'> © 2024 Unversity of Manchseter Friends of Palestine Society </p>
      </div>

      </div>
    </div>
  )
}

export default Footer
