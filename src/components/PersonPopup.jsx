import React from 'react'
import { catf } from '../assets'
import { LoaderFunction } from 'react-router-dom'
import { useLoaderData } from 'react-router-dom'
import committee_members from '../committee'


const committe_members = [
  {
      name: 'Dana',
      data: {
            name: 'Dana Abu Qamar',
            picture: catf,
            title: 'President',
            description: 'Dictator of Palestine Society, rules with an iron fist',
      }
  },
  {
    name: 'Reean Khan',
    data: {
      name: 'Reean Khan',
      picture: catm,
          title: 'Tech Lead',
          description: 'Head of technology division, keeps zionist hackers out.'
    }
  },
]

export async function loader( {params} ) {
  return committe_members[params]
}

const PersonPopup = () => {

  const person = useLoaderData()
  
  return (
    <div className= {`w-full h-full absolute flex justify-center`}>
        <div className='fixed bg-black opacity-90 w-full h-full z-1 '></div>
        <div className='absolute translate-y-1/3 mx-auto p-4 bg-white z-auto '>
        <img src={person.picture} className='h-[400px]' />
        <h2>{person.name}</h2>
      </div>
    </div>
  )
}

export default PersonPopup
