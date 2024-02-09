import React from 'react'

const Loading = () => {
   return (
      <div className="loading-container">
         <video className="loading-video" autoPlay muted loop>
            <source className='source-display' src="./src/utils/video/logo-animation.mp4" type="video/mp4"/>
               Your browser does not support the video tag.
         </video>
      </div>
   )
}

export default Loading
