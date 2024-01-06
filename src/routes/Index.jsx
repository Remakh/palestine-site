import React, { useEffect } from 'react'
import { useState } from 'react'
import { s1, s2, s3, arrow } from '../assets'
import Hero from '../components/Hero'
import Subhero from '../components/Subhero'


const Index = () => {
  const [display, setDisplay] = useState("-translate-x-[0vw]")
  const imcount = 3*100
  const handleClickRight = () => {
    if (display === "-translate-x-[0vw]") {
      setDisplay("-translate-x-[100vw]")
    }  else {
      setDisplay("-translate-x-[200vw]")
    }
  }

  const handleClickLeft = () => {
    if (display === "-translate-x-[200vw]") {
      setDisplay("-translate-x-[100vw]")
    }  else {
      setDisplay("-translate-x-[0vw]")
    }
  }
  const images = [s1, s2]
  return (
    <div className='w-[100vw] overflow-hidden '>
      <div className={`flex w-[${imcount*100}vw] relative`}>
        <Hero position={display}/>
        {images.map((image) => (
          <img src={image} className={`min-w-[100vw] max-h-[600px] object-cover ${display} transition-all ease-out duration-1000  }  `}/>
        ))}
        
        <button onClick={handleClickRight} className = 'opacity-30 hover:opacity-70 absolute text-3xl font-serif top-1/2 right-0 mr-10 -translate-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full'>{'⮞'}</button>
        <button onClick={handleClickLeft} className = 'opacity-30 hover:opacity-70 absolute text-3xl font-serif top-1/2 left-0 ml-10 -translate-1/2 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full'>{'⮜'}</button>
        {images.map((_, index) => (
          <div className={`rounded-full h-10 w-10 bg-red-900 translate-y-${index*100}`}> </div>
        ))}
      </div>
      <Subhero />
    </div>
  )

}

export default Index
