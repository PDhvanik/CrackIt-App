import React, { Suspense } from 'react'
import Loading from './Loading';
import Video from './Video';
import GetStarted from './GetStarted';
const Navbar = React.lazy(() => import('./Navbar'));
const Content = React.lazy(() => import('./Content'));
const Footer = React.lazy(() => import('./Footer'));
const HomePage = () => {
   return (
      <Suspense fallback={<Loading />}>
         <div className="video-bg-container">
            <video id="bubble-bg" className="video-bg" src='./src/utils/video/bg-video.mp4' loop autoPlay muted ></video>
         </div>
         <Navbar/>
         <GetStarted/>
      </Suspense>
   )
}

export default HomePage
