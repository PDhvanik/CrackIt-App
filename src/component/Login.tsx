import React, { useState } from 'react';
import Navbar from './Navbar';

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

   return (
      <>
         <Navbar />
         <div className='login-container'>
            <h2>Login</h2>
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
         </div>
      </>
   );
};

export default Login;
