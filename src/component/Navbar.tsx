import React, { useEffect, useState } from 'react';
import useScreenSize from '../hooks/useScreenSize';

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
         <div>
            <div className='nav-container'>
               <img className='logo' src='./src/utils/logo.png' alt='Logo Here'></img>
               {(screenSize.width < 768) ? <button className='list-button' onClick={openNav}><div>&#9776;</div></button> : <div className='link-container'>
                  <a href='/topic'>Topics</a>
                  <a href='/about'>About</a>
                  <a href='/login'>Login</a>
                  <a href='/signup'>Signup</a>
               </div>
               }
            </div>
         </div>
         <div>
            <div id="myNav" className={`overlay${(isOpen) ? ' open' : ''}`}>
               <button className="closebtn" onClick={closeNav}>&times;</button>
               <div className="overlay-content">
                  <a href='/topic'>Topics</a>
                  <a href='/about'>About</a>
                  <a href='/login'>Login</a>
                  <a href='/signup'>Signup</a>
               </div>

            </div>
         </div >
      </>
   )
}

export default Navbar
