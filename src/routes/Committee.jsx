import React from 'react'
import { s2, catf, catm } from '../assets'
import CommitteeBox from '../components/committeeBox'

const Committee = () => {
  return (
    <div className='min-h-[100vh] flex justify-center bg-cream'>
      <div className='flex flex-col align-bottom text-center'>
        <h1 className='pt-5'>Meet our Committee!</h1>
        <div className='flex flex-col pt-5 align-middle justify-center'>
          <h3 id='Board' className='underline'>Board of Directors</h3>
          <div id='Board' className='committee-group'>
            <CommitteeBox image={catf} title={'President'} name={'Dana Abu Qamar'}  />
            <CommitteeBox image={catf} title={'Vice President'} name={'Shyemah El-Azzabi'}  />
            <CommitteeBox image={catm} title={'Ex-Officio'} name={'Adnan Kassad'}  />
            <CommitteeBox image={catm} title={'Treasurer'} name={'Mahmoud Wahbeh'}  />
            <CommitteeBox image={catm} title={'General Secretary'} name={'Amro Sulaiman'}  />
          </div>
        </div>
        
        <h3 className='underline'>Politics Team</h3>
        <div id='Politics' className='committee-group'>
          <CommitteeBox image={catf} title={'Politics Lead'} name={'Deema Ashiq'}  />
          <CommitteeBox image={catf} title={'Politics Member'} name={'William Salhab'}  />
          <CommitteeBox image={catm} title={'Politics Member'} name={'Jousef Bakir'}  />
        </div>
        <h3>Socials Team</h3>
        <div id='Socials' className='committee-group'>
          <CommitteeBox image={catf} title={'Socials Lead'} name={'Raheema Zia'}  />
          <CommitteeBox image={catf} title={'Socials Member'} name={'Farkunda Raheemi'}  />
          <CommitteeBox image={catm} title={'Socials Member'} name={'Hafsa Al-Wandawi'}  />
          <CommitteeBox image={catm} title={'Socials Member'} name={'Aayah El-Turk'}  />
        </div>
        <h3>Cultural Team</h3>
        <div id='Culture' className='committee-group'>
          <CommitteeBox image={catf} title={'Cultural Lead'} name={'Tala Salameh'}  />
          <CommitteeBox image={catf} title={'Cultural Member'} name={'Mira Afifi'}  />
          <CommitteeBox image={catm} title={'Cultural Member'} name={'Reem Al-Zuhairi'}  />
          <CommitteeBox image={catm} title={'Cultural Member'} name={'Qais Attallah'}  />
        </div>
        <h3>Publicity Team</h3>
        <div id='Publicity' className='committee-group'>
          <CommitteeBox image={catf} title={'Publicity Lead'} name={'Adam Rayhaan'}  />
          <CommitteeBox image={catf} title={'Publicity Member'} name={'Leena Shandala'}  />
          <CommitteeBox image={catm} title={'Publicity Member'} name={'Shiza Vistro'}  />
          <CommitteeBox image={catm} title={'Publicity Member'} name={'Reean Khan'}  />
        </div>


      </div>
    </div>
  )
}

export default Committee
