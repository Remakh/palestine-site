import React, { useEffect } from 'react'
import SocialsBox from '../components/SocialsBox'


const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)}, [])
    
  return (
    <div className='flex flex-col items-center bg-cream border-b shadow-lg min-h-[100vh]'>
      <div className=' flex-grow-1 flex flex-col align-top w-8/12 h-full bg-cream p-10'>
        <div className='flex flex-col'>
          <div className='flex items-center justify-center space-x-10'>
            <h2 className='font-semibold lg'>About Us.</h2>
          </div>
            <div className='flex'>
          <p className='text-font p-5'>
          The Palestinian Society at University of Manchester serves as a dynamic and inclusive hub for students who share a common connection to Palestinian heritage. Committed to fostering a sense of community and promoting awareness about Palestinian culture, history, and current affairs, our society creates a welcoming space for both Palestinian and non-Palestinian students alike. Through a variety of engaging events, including cultural celebrations, educational seminars, and social gatherings, we aim to cultivate a deeper understanding of our rich traditions and the challenges faced by the Palestinian people. Our society encourages open dialogue, creating a platform for discussions on the Palestinian identity, social justice, and global solidarity. By organizing activities that range from traditional dance performances to film screenings and humanitarian initiatives, we strive to create a vibrant and supportive community that embraces diversity while celebrating the unique aspects of Palestinian heritage. Join us in building bridges, fostering understanding, and contributing to the multicultural fabric of University of Manchester.
          </p>
          </div>
        </div>
      </div>
      <SocialsBox />            
    </div>
  )
}

export default About
