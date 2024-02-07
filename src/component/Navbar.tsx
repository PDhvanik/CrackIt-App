import React from 'react'

const Navbar = () => {
   return (
      <div className='nav-container'>
         <img className='logo' src='./src/utils/logo.png' alt='Logo Here'></img>
         <div className='link-container'>
            <a>Topics</a>
            <a>About</a>
            <a>Login</a>
            <a>Signup</a>
         </div>
      </div>
   )
}

export default Navbar
