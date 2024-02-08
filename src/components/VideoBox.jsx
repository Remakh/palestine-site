import React from 'react'

const VideoBox = () => {
  return (
    <div className='w-1/2 bg-red-300'>
      <iframe 
        className='my-auto w-full h-full'
        width="560" 
        height="315" 
        src="https://www.youtube.com/embed/1aqnwXKFD0k?si=PJLx-7bp1YXKGiH3" 
        title="YouTube video player" 
        frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" 
        >    
      </iframe>
    </div>
  )
}

export default VideoBox
