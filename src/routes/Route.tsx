import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from '../component/About';
import HomePage from '../component/HomePage';
import Loading from '../component/Loading';
import LogIn from '../component/Login';
import Navbar from '../component/Navbar';
import SignUp from '../component/SignUp';
import Profile from '../component/Profile';
const route = () => {
   return (
      <>
         <Router>
            <Routes>
               <Route path='/' element={<HomePage />} />
               <Route path='/login' element={<LogIn />} />
               <Route path='/signup' element={<SignUp />} />
               <Route path='/about' element={<About />} />
               <Route path='/loading' element={<Loading />} />
               <Route path='/profile' element={<Profile/>} />
            </Routes>
         </Router>
      </>
   )
}

export default route
