import React, { useEffect } from 'react'
import { s2, catf, catm } from '../assets'
import CommitteeBox from '../components/CommitteeBox'
import { Link, Outlet } from 'react-router-dom'

const Committee = () => {
  useEffect(() => {
    window.scrollTo(0, 0),
    []
  }
  )
  return (
    <div className='min-h-[100vh] flex justify-center bg-cream'>
      <Outlet />
      <div className='flex flex-col align-bottom text-center'>
        <h2 className='pt-5 text-5xl font-bold'>Meet our Committee</h2>
        <div className='flex flex-col pt-5 align-middle justify-center'>
          <h3 id='Board' className=' font-semibold'>Board of Directors</h3>
          <div id='Board' className='committee-group'>
            <CommitteeBox image={catm} title={'Ex-Officio'} name={'Adnan Kassad'}  />
            <CommitteeBox image={catm} title={'Treasurer'} name={'Mahmoud Wahbeh'}  />
            <CommitteeBox image={catm} title={'General Secretary'} name={'Amro Sulaiman'}  />
            <Link to='dana'>
              <CommitteeBox image={catf} title={'President'} name={'Dana Abu Qamar'}  />
            </Link>
            <CommitteeBox image={catf} title={'Vice President'} name={'Shyemah El-Azzabi'}  />
          </div>
        </div>
        
        <h3 className='font-semibold'>Politics Team</h3>
        <div id='Politics' className='committee-group'>
          <CommitteeBox image={catf} title={'Politics Lead'} name={'Deema Ashiq'}  />
          <CommitteeBox image={catm} title={'Politics Member'} name={'William Salhab'}  />
          <CommitteeBox image={catm} title={'Politics Member'} name={'Jousef Bakir'}  />
        </div>
        <h3 className='font-semibold'>Socials Team</h3>
        <div id='Socials' className='committee-group'>
          <CommitteeBox image={catf} title={'Socials Member'} name={'Farkunda Raheemi'}  />
          <CommitteeBox image={catf} title={'Socials Member'} name={'Hafsa Al-Wandawi'}  />
          <CommitteeBox image={catf} title={'Socials Member'} name={'Aayah El-Turk'}  />
          <CommitteeBox image={catf} title={'Socials Lead'} name={'Raheema Zia'}  />
        </div>
        <h3 className='font-semibold'>Cultural Team</h3>
        <div id='Culture' className='committee-group'>
          <CommitteeBox image={catf} title={'Cultural Member'} name={'Mira Afifi'}  />
          <CommitteeBox image={catm} title={'Cultural Member'} name={'Reem Al-Zuhairi'}  />
          <CommitteeBox image={catm} title={'Cultural Member'} name={'Qais Attallah'}  />
          <CommitteeBox image={catf} title={'Cultural Lead'} name={'Tala Salameh'}  />
        </div>
        <h3 className='font-semibold'>Publicity Team</h3>
        <div id='Publicity' className='committee-group'>
          <CommitteeBox image={catf} title={'Publicity Member'} name={'Adam Rayhaan'}  />
          <CommitteeBox image={catf} title={'Publicity Member'} name={'Leena Shandala'}  />
          <CommitteeBox image={catm} title={'Publicity Member'} name={'Shiza Vistro'}  />
          <CommitteeBox image={catm} title={'Publicity Member'} name={'Reean Khan'}  />
        </div>


      </div>
    </div>
  )
}

export default Committee
