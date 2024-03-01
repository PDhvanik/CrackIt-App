import React, { useEffect, useState } from 'react';
import useScreenSize from '../hooks/useScreenSize';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
   const [isOpen, setIsOpen] = useState(false);

   const openNav = () => {
      setIsOpen(true);
   };

   const closeNav = () => {
      setIsOpen(false);
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
               <NavLink to='/topic' style={({ isActive }) =>
                  (isActive ? { textDecoration: 'underline' } : { color: '#edebeb' })}>Topics</NavLink>
               <NavLink to='/about' style={({ isActive }) =>
                  (isActive ? { textDecoration: 'underline' } : { color: '#edebeb' })}>About</NavLink>
               <div className="collab">
                  <NavLink to='/login' style={({ isActive }) =>
                     (isActive ? { textDecoration: 'underline' } : { color: '#edebeb' })}>Login</NavLink>
                  <NavLink to='/signup' style={({ isActive }) =>
                     (isActive ? { textDecoration: 'underline' } : { color: '#edebeb' })}>Signup</NavLink>
               </div>
            </div>
            }
         </div>
         <div>
            <div id="myNav" className={`overlay${(isOpen) ? ' open' : ''}`}>
               <button className="closebtn" onClick={closeNav}>&times;</button>
               <div className="overlay-content">
                  <NavLink to='/topic' style={({ isActive }) =>
                     (isActive ? { textDecoration: 'underline' } : { color: '#edebeb' })}>Topics</NavLink>
                  <NavLink to='/about' style={({ isActive }) =>
                     (isActive ? { textDecoration: 'underline' } : { color: '#edebeb' })}>About</NavLink>
                  <NavLink to='/login' style={({ isActive }) =>
                     (isActive ? { textDecoration: 'underline' } : { color: '#edebeb' })}>Login</NavLink>
                  <NavLink to='/signup' style={({ isActive }) =>
                     (isActive ? { textDecoration: 'underline' } : { color: '#edebeb' })}>Signup</NavLink>
               </div>

            </div>
         </div >
      </>
   )
}

export default Navbar
