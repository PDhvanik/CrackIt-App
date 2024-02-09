import React, { useState } from 'react';
import GoogleSignIn from './GoogleSignIn';
import Navbar from './Navbar';
const Signup = () => {
   const [formData, setFormData] = useState({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      if (!formData.username || !formData.email || !formData.password || !formData.confirmPassword) {
         alert('Please fill in all fields');
         return;
      }
      if (formData.password !== formData.confirmPassword) {
         alert('Passwords do not match');
         return;
      }
      console.log('Signup form submitted:', formData);
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
         <div className="signup-container">
            <h2>SignUp</h2>
            <hr />
            <form className="signup-form" onSubmit={handleSubmit}>
               <div className="form-group">
                  <label>Username:</label>
                  <input type="text" name="username" value={formData.username} onChange={handleChange} />
               </div>
               <div className="form-group">
                  <label>Email:</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} />
               </div>
               <div className="form-group">
                  <label>Password:</label>
                  <input type="password" name="password" value={formData.password} onChange={handleChange} />
               </div>
               <div className="form-group">
                  <label>Confirm Password:</label>
                  <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
               </div>
               <button type="submit" className="submit-btn">SignUp</button>
            </form>
            <GoogleSignIn />
         </div>
      </>
   );
};

export default Signup;
