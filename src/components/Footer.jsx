import React from 'react'
import { instagram, spotify } from '../assets'

const Footer = () => {
  return (
    <div className=' bg-cream flex justify-center items-center w-full relative bottom-0'>
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
    {/* <div className='float-end relative'>
        <p className="pt-2 text-black text-base">Hello</p>
    </div> */}
    </div>
  )
}

export default Footer
