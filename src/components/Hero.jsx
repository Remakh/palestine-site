import React from 'react'

const Hero = ( { position } ) => {
  return (
    <div>
      <div className={`flex w-[100vw] min-h-[600px] bg-gradient-to-b from-black via-black to-green-200 relative align-middle -translate-x-[${position}vw] transition-transform duration-1000 ease-out`}>
        <h1 className='text-white font-semibold font-Open-sans text-title relative pt-[250px] '> From the River to the Sea </h1>
      </div>
    </div>
  )
}

export default Hero
