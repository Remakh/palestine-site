import React, { useEffect } from 'react'
import { useState } from 'react'
import { s1, s2, s3, arrow } from '../assets'
import Hero from '../components/Hero'
import Subhero from '../components/Subhero'
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css'

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0)}, [])

  const [display, setDisplay] = useState(0)
  const imcount = 200
  
  const handleClickRight = () => {
    if (display !== imcount) {
      setDisplay(display+100)
  } else {
    setDisplay(imcount)
  }
}

  const handleClickLeft = () => {
  if (display !== 0) {
      setDisplay(display - 100)
    } else {
      setDisplay(0)
    }
  }
  const slides = [
                  <img src={s1} className={`min-w-full h-full object-cover -translate-x-[${display.toString()}%] transition-all ease-out duration-1000  }  `}/>, 
                  <img src={s2} className={`min-w-full h-full object-cover -translate-x-[${display.toString()}%] transition-all ease-out duration-1000  }  `}/>
                ]
                const images = [
                  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
                  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
                  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
              ];
  return (
    <div className='w-full overflow-hidden'>
      <Slide autoplay={false}> 
        <div className="">
          <div className='background-front flex text-center justify-center items-center md:h-[800px] h-[300px]'>
            <h1 className={`animation font-semibold font-Open-sans md:text-title text-white medula-one-regular text-medium`}>Friends of Palestine</h1>
          </div>
        </div>
        <div className="">
            <div className='flex justify-center bg-cover items-center md:h-[800px] h-[300px] ' style={{backgroundImage: 'url(https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80)'}}>
            
            </div>
        </div>
        <div className="">
            <div className='flex justify-center bg-cover items-center md:h-[800px] h-[300px]' style={{backgroundImage: 'url(https://images.unsplash.com/photo-1444525873963-75d329ef9e1b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80)'}}>
              
            </div>
        </div>
    </Slide>
    <Subhero />
    </div>
  )

}

export default Index
