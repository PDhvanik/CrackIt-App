import React, { Suspense } from 'react'
import Loading from './Loading';
const Navbar=React.lazy(()=>import('./Navbar'));
const Content=React.lazy(()=>import( './Content'));
const Footer=React.lazy(()=>import('./Footer'));
const HomePage = () => {
   return (
      <Suspense fallback={<Loading/>}>
         <Navbar/>
         {/* <Content/> */}
         {/* <Footer/> */}
      </Suspense>
   )
}

export default HomePage
