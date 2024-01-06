import React from 'react'
import Navbar from './Navbar'


const Header = () => {
  return (
    <div className='text-black bg-red-100 w-[100%] flex flex-row text-font sticky top-0 z-50 border-b shadow-lg'>
        <Navbar />
    </div>
  )
}

export default Header
