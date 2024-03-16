import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from '../component/About';
import HomePage from '../component/HomePage';
import Loading from '../component/Loading';
import LogIn from '../component/Login';
import SignUp from '../component/SignUp';
import Profile from '../component/Profile';
import ChatBot from '../component/ChatBot';
import Questions from '../component/Questions';
import SolveQuestion from '../component/SolveQuestion';
import Footer from '../component/Footer';
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
               <Route path='/profile' element={<Profile />} />
               <Route path='/chatbot' element={<ChatBot />} />
               <Route path='/questions' element={<Questions />} />
               <Route path='/solvequestion' element={<SolveQuestion />} />
            </Routes>
         </Router>
         <Footer />
      </>
   )
}

export default route
