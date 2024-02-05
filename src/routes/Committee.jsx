import React from 'react'
import { s2, catf, catm } from '../assets'
import CommitteeBox from '../components/committeeBox'

const Committee = () => {
  return (
    <div className='min-h-[100vh] flex justify-center'>
      <div className='w-8/12 flex justify-center'>
        <CommitteeBox image={catf} title={'President'} name={'Dana Abu Qamar'} color={'bg-slate-200'} />
        <CommitteeBox image={catf} title={'President'} name={'Dana Abu Qamar'} color={'bg-slate-200'}/>
        <CommitteeBox image={catf} title={'President'} name={'Dana Abu Qamar'} color={'bg-slate-200'}/>

      </div>
    </div>
  )
}

export default Committee
