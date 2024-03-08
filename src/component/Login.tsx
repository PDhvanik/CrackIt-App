import axios from 'axios';
import React, { useState } from 'react';
import Navbar from './Navbar';
import Video from './Video';
import { useNavigate } from 'react-router-dom';
import userName from '../variables';
import isloggedIn from '../variables';

const Login = () => {
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const navigate = useNavigate();
   const username = userName;
   const handleEmailChange = (e) => {
      setEmail(e.target.value);
   };

   const handlePasswordChange = (e) => {
      setPassword(e.target.value);
   };

   const handleSubmit = async (e) => {
      e.preventDefault();
      console.log('Logging in with:', { email, password });
      const data = {
         email: email,
         password: password
      }
      await axios.post('/api/login', data).then((response) => {
         username.userName = response.data.user.username;
         isloggedIn.isloggedIn = true;
         console.log(response);
         alert("Logged in successfully!");
         navigate('/');
      }).catch((error) => { 
         alert(`Error occured: ${error.response.data.error}`);
         console.log(error);
      })
   };

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
         </div>
      </>
   );
};

export default Login;
