import React, { useState } from 'react';
import GoogleSignIn from './GoogleSignIn';
import Navbar from './Navbar';
import Video from './Video';

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   const handleEmailChange = (e) => {
      setEmail(e.target.value);
   };

   const handlePasswordChange = (e) => {
      setPassword(e.target.value);
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Logging in with:', { email, password });
      setEmail('');
      setPassword('');
   };
   const handleGoogleSignup = () => {
      console.log('Google signup initiated');
   };
   function onSignIn(googleUser) {
      var profile = googleUser.getBasicProfile();
      console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      console.log('Name: ' + profile.getName());
      console.log('Image URL: ' + profile.getImageUrl());
      console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
   }

   return (
      <>
         <Navbar />
         <Video />
         <div className='login-container'>
            <h2>Login</h2>
            <hr />
            <form onSubmit={handleSubmit}>
               <div>
                  <label htmlFor="email">Email:</label>
                  <input
                     type="email"
                     id="email"
                     value={email}
                     onChange={handleEmailChange}
                     required
                  />
               </div>
               <div>
                  <label htmlFor="password">Password:</label>
                  <input
                     type="password"
                     id="password"
                     value={password}
                     onChange={handlePasswordChange}
                     required
                  />
               </div>
               <button type="submit">Login</button>
            </form>
            <GoogleSignIn />
         </div>
      </>
   );
};

export default Login;
