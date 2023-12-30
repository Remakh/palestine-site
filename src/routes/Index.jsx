import React, { useEffect } from 'react'
import { useState } from 'react'
import { s1, s2, s3 } from '../assets'
import Hero from '../components/Hero'
import Subhero from '../components/Subhero'


const Index = () => {
  const [display, setDisplay] = useState(0)
  const imcount = 3*100
  const handleClickRight = () => {
    setDisplay(Math.min(display + 100, (imcount-1 * 100)))
  }
  const handleClickLeft = () => {
    setDisplay(Math.max((display - 100), 0))
  }
  const images = [s1, s2]
  return (
    <div className='w-[100vw] '>
      <div className={`flex w-[${imcount*100}vw]`}>
        <Hero position={display}/>
        {images.map((image) => (
          <img src={image} className={`min-w-[100vw] max-h-[600px] object-cover -translate-x-[${display}vw] transition-all ease-out duration-1000  }  `}/>
        ) )}
        <button onClick={handleClickRight} className='absolute text-2xl top-1/2 right-0 mr-10 w-10 h-10 -translate-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full'>{'→'}</button>
        <button onClick={handleClickLeft} className='absolute text-2xl top-1/2 left-0 ml-10 w-10 h-10 -translate-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full'>{'←'}</button>
      </div>
      <Subhero />
    </div>
  )

}

export default Index
