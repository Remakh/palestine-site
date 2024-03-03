import React, { useState, useEffect } from 'react'

const Hero = ( { position } ) => {
  const text3 = 'Friends of Palestine'  
  return (
    <div className='w-full flex-grow-1 min-w-[100%] h-[1000px] '>
      <div className={` object-fill flex h-[1000px] ${position} transition-transform duration-1000 ease-out border-b border-gray-100 shadow-lg background-front`}>
        <div className=' m-auto p-10 bg-inherit rounded-3xl flex justify-center overflow-hidden -translate-y-full '>          
          <h1 className={`animation font-semibold font-Open-sans text-title text-green-700 title-font `}> {text3}</h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
