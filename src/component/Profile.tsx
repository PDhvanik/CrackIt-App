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
         <div className='mx-3 my-2 p-2'>
            <h2 className='m-2 p-1 text-2xl'>User Profile</h2>
            <hr />
            <div className=" flex flex-col  p-4 my-3 text-xl border-2 border-black rounded-xl w-96 h-64 ">
               <p className='text-black '>Username: {(userData) ? userData.username : ''}</p>
               <p className='text-black '>Email: {userData ? userData.email : ''}</p>
               <p className='text-black mb-2'>Problem Solved: {(userData) ? `${userData.problemSolved}` : ''}</p>
               {/* <hr/> */}
               {(!isUpdatePassword) ? <div className='mt-4 flex justify-center items-center'>
                  <button type='button' className='p-1 rounded-md text-white mt-2 focus-ring bg-indigo-600 hover:bg-blue-800' onClick={handleResetPassword}>Reset Password</button>
               </div> :
                  <div className='mt-8 border-2 border-black rounded-xl mt-2 pwd-container p-3'>
                     <p className=''>Old Password:</p>
                     <input type="password" className='border-2 border-black' value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
                     <p className=''>New Password:</p>
                     <input type="password" className='border-2 border-black' value={newPassword} onChange={e => setNewPassword(e.target.value)} />
                     <div className="user-btn gap-8">
                        <button className='p-1 rounded-lg focus-ring border-2 border-black btn-update' onClick={handleUpdatePassword}>Update Password</button>
                        <button className='p-1 rounded-lg focus-ring border-2 border-black btn-cancel' onClick={handleCancel}>Cancel</button>
                     </div>
                  </div>}
            </div>
         </div>
      </>
   )
}

export default Profile
