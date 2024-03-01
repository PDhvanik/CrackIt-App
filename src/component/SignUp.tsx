import React, { useState } from 'react';
import Navbar from './Navbar';
import Video from './Video';
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

   return (
      <>
         <Navbar />
         <Video/>
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
               <button type="submit" className="submit-btn">Create Account</button>
            </form>
         </div>
      </>
   );
};

export default Signup;
