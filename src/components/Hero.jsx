import React, { useState, useEffect } from 'react'

const Hero = ( { position } ) => {
  const text3 = 'Friends of Palestine Society'  
  return (
    <div className='w-full flex-grow-1 min-w-[100%] '>
      <div className={`flex h-full   ${position} transition-transform duration-1000 ease-out border-b border-gray-100 shadow-lg background-front`}>
        <div className=' m-auto p-10 bg-inherit rounded-3xl flex justify-center overflow-hidden -translate-y-full '>          
          <h1 className={`animation font-semibold font-Open-sans text-title text-green-700 title-font whitespace-nowrap`}> {text3}</h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
