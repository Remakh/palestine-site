import React from 'react'
import { catf, catm } from '../assets'
import { useLoaderData } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { RxCross2 } from "react-icons/rx";

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
    name: 'Reean',
    data: {
      name: 'Reean Khan',
      picture: catm,
          title: 'Tech Lead',
          description: 'Head of technology division, keeps zionist hackers out.'
    }
  },
  {
    name: 'Adnan',
    data: {
      name: 'Adnan Kassad',
      picture: catm,
          title: 'Ex-Officio',
          description: 'Ex-officio officer. No one what ex-officio means, not even Adnan.'
    }
  },
  {
    name: 'Mahmoud',
    data: {
      name: 'Mahmoud Wahbeh',
      picture: catm,
          title: 'Treasurer',
          description: 'Secretly embezzles money to fund his olive tree farm.'
    }
  },
  {
    name: 'Amro',
    data: {
      name: 'Amro Sulaiman',
      picture: catm,
          title: 'General Secretary',
          description: "Got this role because we couldn't find anything for him."
    }
  },
  {
    name: 'Shyemah',
    data: {
      name: 'Shyemah El-Azzabi',
      picture: catf,
          title: 'Vice President',
          description: 'Does the actual work whilst Dana uses society money to buy kunnafah.'
    }
  },
  {
    name: 'Deema',
    data: {
      name: 'Deema Ashiq',
      picture: catf,
          title: 'Politics Lead',
          description: 'Not scared of Israel, but very scared of frogs.'
    }
  },
]

export async function loader( {params} ) {
  const obj = committe_members.filter((obj) => obj.name === params.name)[0]
  return obj.data
}

const PersonPopup = () => {

  useEffect(() => { window.scrollTo(0, 0)}, [])
      
  const navigate = useNavigate()
  const person = useLoaderData()

  return (
    <div className= {`w-full h-full absolute flex justify-center `}>
        <div className='fixed bg-black opacity-90 w-full h-full z-1 '></div>
        <div className='absolute translate-y-1/3 mx-auto p-4 pt-10 bg-white z-auto w-2/5 flex space-x-3 '>
          <RxCross2 className=' right-0 top-0 absolute bg-red-500 cursor-pointer' size={30} color='black' onClick={() =>{navigate(-1) }} />
          <img src={person.picture} className='h-[400px]'  />
          <div className='flex flex-col'>
            <h2>{person.name}</h2>
            <p className='flex-wrap pt-2'>{person.description}</p>
          </div>
      </div>
    </div>
  )
}

export default PersonPopup
