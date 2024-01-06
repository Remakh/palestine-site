import React from 'react'

const EventBox = ( {title, image, description} ) => {
  return (
      <div className=''>
        <div className='border-b'>

                        <img src={image} className='mx-auto my-4 w-[150px]' /> 
        </div>
                        <p className='font-bold text-2xl py-3'> {title}</p>
                        <p> {description}</p>
                    </div>
  )
}

export default EventBox
