import React, { useState, useEffect } from 'react'

const Hero = (  ) => {
  const text3 = 'Friends of Palestine'  
  return (
    <div className='flex-grow-1 min-w-[100%] '>
      <div className={` object-fill w-full flex transition-transform duration-1000 ease-out border-b border-gray-100 shadow-lg background-front`}>
        <div className=' m-auto p-10 rounded-3xl flex justify-center overflow-hidden -translate-y-full '>          
          <h1 className={`animation font-semibold font-Open-sans md:text-title text-white medula-one-regular text-medium`}> {text3}</h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
