import React, { useState } from 'react'
import { catf } from '../assets'

const CommitteeBox = ( {image, title, name, color} ) => {

    return (
        <div>
            <div className='flex '>
                <div className={`flex flex-col text-center align-middle ${color}  p-5`}>
                    <img src={image} className='rounded-full h-[150px] w-[150px]  '/>      
                    <p className='font-bold text-green-800 text-xl'>{title}</p>
                    <p>{name}</p>
                </div>
            </div>
        </div>
    )
}

export default CommitteeBox
