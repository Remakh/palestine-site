import React from 'react'
import Navbar from './Navbar'


const Header = () => {
  return (
    <div className='text-black bg-green-800 w-[100%] flex flex-row text-font sticky top-0 z-50 border-b border-green-900 shadow-lg'>
        <Navbar />
    </div>
  )
}

export default Header
