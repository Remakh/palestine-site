import React from 'react'
import Navbar from './navbar'
import { logo, logo2 } from '../assets'

const Header = () => {
  return (
    <div className='text-white bg-black w-[100vw] flex flex-row sticky top-0 z-50'>
        <Navbar />
    </div>
  )
}

export default Header
