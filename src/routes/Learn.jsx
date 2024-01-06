import React from 'react'

const Learn = () => {
  return (
    <div>
    <div className="video-responsive">
    <embed
        width="853"
        height="480"
        src={`https://www.youtube.com/watch?v=4idQbwsvtUo&t=68s`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
/>
    </div>
    </div>
  )
}

export default Learn
