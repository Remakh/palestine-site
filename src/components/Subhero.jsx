import React from 'react'
import { logo2 } from '../assets'

const Subhero = () => {
  return (
    <div className='text-center bg-gradient-to-b from-black via-black to-black'>
      <h1 className='text-white font-semibold font-Open-sans pt-5'>Upcoming Events</h1>
        <div className='mt-10'>
                <ul className="flex flex-row justify-items-center justify-center space-x-28 pb-28">            
                <li className="col-span-1 max-w-[350px] flex flex-col text-center justify-center bg-white rounded-lg shadow ">
                    <div className=''>
                        <img src={logo2} className='mx-auto p-3' /> 
                        <p> Event 1</p>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                    </div>
                </li>
                <li className="col-span-1 max-w-[350px] flex flex-col text-center bg-white rounded-lg shadow">
                    <div>
                        <img src={logo2} className='mx-auto p-3' /> 
                        <p> Event 2</p>
                        <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>
                    </div>
                </li>
            </ul>
        </div>
      </div>
  )
}

export default Subhero
