import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import HomePage from '../component/HomePage';
import LogIn from '../component/Login';
import SignUp from '../component/SignUp';
import About from '../component/About';
import Loading from '../component/Loading';

const route = () => {
   return (
      <Router>
         <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/about' element={<About />} />
            <Route path='/loading' element={<Loading />} />
         </Routes>
      </Router>
   )
}

export default route
