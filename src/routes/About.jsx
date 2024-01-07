import React from 'react'
import { logo2, s2 } from '../assets'

const Home = () => {
  return (
    <div className='flex justify-center h-[100%] bg-red-100 border-b shadow-lg '>
      <div className=' flex-grow-1 flex flex-col align-top w-8/12 h-full bg-red-100 p-10'>
        <h1 className=''>Who are we?</h1>
        <div className='flex'>
          <p className='text-font p-5'>
          The Palestinian Society at University of Manchester serves as a dynamic and inclusive hub for students who share a common connection to Palestinian heritage. Committed to fostering a sense of community and promoting awareness about Palestinian culture, history, and current affairs, our society creates a welcoming space for both Palestinian and non-Palestinian students alike. Through a variety of engaging events, including cultural celebrations, educational seminars, and social gatherings, we aim to cultivate a deeper understanding of our rich traditions and the challenges faced by the Palestinian people. Our society encourages open dialogue, creating a platform for discussions on the Palestinian identity, social justice, and global solidarity. By organizing activities that range from traditional dance performances to film screenings and humanitarian initiatives, we strive to create a vibrant and supportive community that embraces diversity while celebrating the unique aspects of Palestinian heritage. Join us in building bridges, fostering understanding, and contributing to the multicultural fabric of University of Manchester.
          </p>
          <img src={logo2} className='rounded-full' />
        </div>
          <p className='text-font p-5'>
          The Palestinian Society at University of Manchester serves as a dynamic and inclusive hub for students who share a common connection to Palestinian heritage. Committed to fostering a sense of community and promoting awareness about Palestinian culture, history, and current affairs, our society creates a welcoming space for both Palestinian and non-Palestinian students alike. Through a variety of engaging events, including cultural celebrations, educational seminars, and social gatherings, we aim to cultivate a deeper understanding of our rich traditions and the challenges faced by the Palestinian people. Our society encourages open dialogue, creating a platform for discussions on the Palestinian identity, social justice, and global solidarity. By organizing activities that range from traditional dance performances to film screenings and humanitarian initiatives, we strive to create a vibrant and supportive community that embraces diversity while celebrating the unique aspects of Palestinian heritage. Join us in building bridges, fostering understanding, and contributing to the multicultural fabric of University of Manchester.
          </p>
          <div className='block'>
          <img src={s2} className='m-3 float-left rounded-full h-[100px] w-[100px]' />
          <p className='text-font p-5'>
          The Palestinian Society at University of Manchester serves as a dynamic and inclusive hub for students who share a common connection to Palestinian heritage. Committed to fostering a sense of community and promoting awareness about Palestinian culture, history, and current affairs, our society creates a welcoming space for both Palestinian and non-Palestinian students alike. Through a variety of engaging events, including cultural celebrations, educational seminars, and social gatherings, we aim to cultivate a deeper understanding of our rich traditions and the challenges faced by the Palestinian people. Our society encourages open dialogue, creating a platform for discussions on the Palestinian identity, social justice, and global solidarity. By organizing activities that range from traditional dance performances to film screenings and humanitarian initiatives, we strive to create a vibrant and supportive community that embraces diversity while celebrating the unique aspects of Palestinian heritage. Join us in building bridges, fostering understanding, and contributing to the multicultural fabric of University of Manchester.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
