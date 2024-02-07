import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import HomePage from '../component/HomePage';
import LogIn from '../component/LogIn';
import SignUp from '../component/SignUp';
import About from '../component/About';

const route = () => {
   return (
      <Router>
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/about' element={<About />} />
         </Routes>
      </Router>
   )
}

export default route
