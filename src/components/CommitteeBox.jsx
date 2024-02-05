import React, { useState } from 'react'
import { catf } from '../assets'

const CommitteeBox = ( {image, title, name, color} ) => {
    const [toggle, setToggle] = useState(false)

    return (
        <div>
            <div className='flex '>
                <div className={`flex flex-col text-center align-middle ${color} hover:bg-red-300 p-5`}>
                    <img src={image} className='rounded-full h-[200px] w-[200px]  border-gold border-solid border-8'/>      
                    <p>{title}</p>
                    <p>{name}</p>
                </div>
            </div>
        </div>
    )
}

export default CommitteeBox
