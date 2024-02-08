import React from 'react'



      

const Slideshow = ( slides ) => {
    const [display, setDisplay] = useState("-translate-x-[0%]")
    const imcount = slides.length*100
    
    const handleClickRight = () => {
      if (display === "-translate-x-[0%]") {
        setDisplay("-translate-x-[100%]")
      }  else {
        setDisplay("-translate-x-[200%]")
      }
    }
  
    const handleClickLeft = () => {
      if (display === "-translate-x-[200%]") {
        setDisplay("-translate-x-[100%]")
      }  else {
        setDisplay("-translate-x-[0%]")
      }
    }
    const images = [s1, s2]
  
  
    return (
        <div className={`flex w-[${imcount*100}%] relative`}>
          {slides.map((slide) => (
            <img src={image} className={`min-w-[100%] max-h-[600px] object-cover ${display} transition-all ease-out duration-1000  }  `}/>
          ))}
          <button onClick={handleClickRight} className = 'opacity-30 hover:opacity-70 text-3xl absolute font-serif right-0 top-1/2 mr-10 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full'>{'⮞'}</button>
          <button onClick={handleClickLeft} className = 'opacity-30 hover:opacity-70 absolute text-3xl font-serif top-1/2 left-0 ml-10 -translate-y-1/2 bg-black text-white px-4 py-2 rounded-full'>{'⮜'}</button>
        
        </div>
    )
}

export default Slideshow
