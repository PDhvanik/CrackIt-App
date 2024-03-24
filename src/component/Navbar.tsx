import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useScreenSize from '../hooks/useScreenSize';
import userName from '../variables';
import isloggedIn from '../variables';
const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);
   const username = userName;
   const openNav = () => {
      setIsOpen(true);
   };

   const closeNav = () => {
      setIsOpen(false);
   };
   const handleLogOut = () => {
      isloggedIn.isloggedIn = false;
   };
   const screenSize = useScreenSize();
   useEffect(() => {
      if (screenSize.width > 768) {
         closeNav();
      }
   }, [screenSize.width]);

   return (
      <>
         <div className='nav-container'>
            <a href='/'>
               <img className='logo' src='./src/utils/logo.png' alt='Logo Here'></img>
            </a>
            {(screenSize.width < 768) ? <button className='list-button' onClick={openNav}><div>&#9776;</div></button> : <div className='link-container'>
               <NavLink to='/chatbot' style={({ isActive }) =>
                  (isActive ? { textDecoration: 'underline' } : { color: '#edebeb' })}>Ask our AI bot!</NavLink>
               <NavLink to='/questions' style={({ isActive }) =>
                  (isActive ? { textDecoration: 'underline' } : { color: '#edebeb' })}>Questions</NavLink>
               <NavLink to='/about' style={({ isActive }) =>
                  (isActive ? { textDecoration: 'underline' } : { color: '#edebeb' })}>About</NavLink>
               {(isloggedIn.isloggedIn) ? <div>
                  <div className='logout-container'>
                     <NavLink to='/profile'><div className='profile-name'>{username.userName}</div></NavLink>
                     <NavLink to='/login' onClick={handleLogOut}><i className="ri-logout-circle-line"></i>LogOut</NavLink>
                  </div>
               </div> :
                  <div className="collab">
                     <NavLink to='/login' style={({ isActive }) =>
                        (isActive ? { textDecoration: 'underline' } : { color: '#edebeb' })}>Login</NavLink>
                     <NavLink to='/signup' style={({ isActive }) =>
                        (isActive ? { textDecoration: 'underline' } : { color: '#edebeb' })}>Signup</NavLink>
                  </div>}
            </div>
            }
         </div>
         <div>
            <div id="myNav" className={`overlay${(isOpen) ? ' open' : ''}`}>
               <button className="closebtn" onClick={closeNav}>&times;</button>
               <div className="overlay-content">
                  <NavLink to='/' style={({ isActive }) =>
                     (isActive ? { textDecoration: 'underline' } : { color: '#edebeb' })}>Ask our AI bot!</NavLink>
                  <NavLink to='/about' style={({ isActive }) =>
                     (isActive ? { textDecoration: 'underline' } : { color: '#edebeb' })}>About</NavLink>
                  {(isloggedIn.isloggedIn) ? <div>
                     <div className='logout-container'>
                        <NavLink to='/profile'><div className='profile-name'>{username.userName}</div></NavLink>
                        <NavLink to='/login' onClick={handleLogOut}><i className="ri-logout-circle-line"></i>LogOut</NavLink>
                     </div>
                  </div> :
                     <div className="collab">
                        <NavLink to='/login' style={({ isActive }) =>
                           (isActive ? { textDecoration: 'underline' } : { color: '#edebeb' })}>Login</NavLink>
                        <NavLink to='/signup' style={({ isActive }) =>
                           (isActive ? { textDecoration: 'underline' } : { color: '#edebeb' })}>Signup</NavLink>
                     </div>}
               </div>

            </div>
         </div >
      </>
   )
}

export default Navbar
