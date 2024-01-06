import React, { useState, useEffect } from 'react'

const Hero = ( { position } ) => {
  const text1 = 'From the River to the Sea'
  const text2 = 'Palestine will be Free'
  const text3 = 'Friends of Palestine Society'
  const [text, setText] = useState(text1)
  const [cls, setCls] = useState('animation')



  
  
  return (
    <div>
      <div className={`flex w-[100vw] min-h-[600px] bg-cream relative align-middle ${position} transition-transform duration-1000 ease-out text-center border-b border-gray-100 shadow-lg` }>
        <div className='w-min m-auto relative'>          
          <h1 className={`${cls}  font-semibold font-Open-sans text-title w-min h-min text-red-500 title-font whitespace-nowrap `} onAnimationIteration={() => setText(text2)}  onAnimationEnd={() => { setCls('animationEnd'); setText(text3)}}> {text}</h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
