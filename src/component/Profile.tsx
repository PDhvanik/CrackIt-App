import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Username from '../variables';
import Navbar from './Navbar';
interface UserData {
   username: string;
   email: string;
   problemSolved: Number;
   password: string;
}
const Profile = () => {
   const [userData, setUserData] = useState<UserData | null>(null);
   const [newPassword, setNewPassword] = useState('');
   const [oldPassword, setOldPassword] = useState('');
   const [isUpdatePassword, setIsUpdatePassword] = useState(false);
   async function fetchUserData() {
      try {
         const response = await axios.get(`/api/users/${Username.userName}`);
         setUserData(response.data.userData);
         console.log(userData);
      } catch (error) {
         console.error('Error fetching user data:', error);
      }
   };
   async function handleUpdatePassword() {
      try {
         await axios.put(`/api/users/${Username.userName}/password`, { newPassword });
         if (newPassword.length < 4 || newPassword.length > 10) {
            alert('Password must be at least 4 characters and not more than 10 characters!')
            setNewPassword('');
            return;
         }
         if (oldPassword === userData?.password) {
            console.log('Password updated successfully');
            alert('Password updated successfully');
            fetchUserData();
            setIsUpdatePassword(false);
            setNewPassword('');
            setOldPassword('');
         }
         else {
            alert('Old password is wrong!')
         }
      } catch (error) {
         console.error('Error updating password:', error);
      }
   }
   function handleResetPassword() {
      setIsUpdatePassword(true);
   }
   function handleCancel() {
      setIsUpdatePassword(false);
   }
   useEffect(() => {
      fetchUserData();
   }, []);

   useEffect(() => { }, [isUpdatePassword])

   return (
      <>
         <Navbar />
         <div>
            <h2 className='mt-2'>User Profile</h2>
            <hr />
            <div className="container">
               <p className='d-flex fs-6 text-black fw-bold'>Username: {(userData) ? userData.username : ''}</p>
               <p className='d-flex fs-6 text-black fw-bold'>Email: {userData ? userData.email : ''}</p>
               <p className='d-flex fs-6 text-black fw-bold'>Problem Solved: {(userData) ? `${userData.problemSolved}` : ''}</p>
               <hr />
               {(!isUpdatePassword) ? <div>
                  <button type='button' className='p-1 rounded-3 focus-ring' onClick={handleResetPassword}>Reset Password</button>
               </div> :
                  <div className='container border border-primary rounded-4 mt-2 pwd-container '>
                     <p className=' fs-5'>Old Password:</p>
                     <input type="password" className='border border-secondary' value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
                     <p className=' fs-5 '>New Password:</p>
                     <input type="password" className='border border-secondary' value={newPassword} onChange={e => setNewPassword(e.target.value)} />
                     <div className="user-btn">
                        <button className='p-1 rounded-3 focus-ring btn-update' onClick={handleUpdatePassword}>Update Password</button>
                        <button className='p-1 rounded-3 focus-ring btn-cancel' onClick={handleCancel}>Cancel</button>
                     </div>
                  </div>}
            </div>
         </div>
      </>
   )
}

export default Profile
