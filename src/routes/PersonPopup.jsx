import React from 'react'
import { catf, catm } from '../assets'
import { useLoaderData } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const committe_members = [
  {
      name: 'dana',
      data: {
            name: 'Dana Abu Qamar',
            picture: catf,
            title: 'President',
            description: 'Dictator of Palestine Society, rules with an iron fist',
      }
  },
  {
    name: 'Reean',
    data: {
      name: 'Reean Khan',
      picture: catm,
          title: 'Tech Lead',
          description: 'Head of technology division, keeps zionist hackers out.'
    }
  },
]

export async function loader( {params} ) {
  const obj = committe_members.filter((obj) => obj.name === params.name)[0]
  return obj.data
}

const PersonPopup = () => {
  const navigate = useNavigate()
  const person = useLoaderData()

  return (
    <div className= {`w-full h-full absolute flex justify-center`}>
        <div className='fixed bg-black opacity-90 w-full h-full z-1 '></div>
        <div className='absolute translate-y-1/3 mx-auto p-4 bg-white z-auto '>
        <img src={person.picture} className='h-[400px]' onClick={() => navigate(-1)}/>
        <h2>{person.name}</h2>
        <p>{person.description}</p>
      </div>
    </div>
  )
}

export default PersonPopup
