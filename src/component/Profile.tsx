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
            <h2>User Profile</h2>
            <p>Username: {(userData) ? userData.username : ''}</p>
            <p>Email: {userData ? userData.email : ''}</p>
            <p>Problem Solved: {(userData) ? `${userData.problemSolved}` : ''}</p>
            {(!isUpdatePassword) ? <div>
               <button onClick={handleResetPassword}>Reset Password</button>
            </div> :
               <div>
                  <p>Old Password:</p>
                  <input type="password" value={oldPassword} onChange={e => setOldPassword(e.target.value)} />
                  <p>New Password:</p>
                  <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} />
                  <button onClick={handleUpdatePassword}>Update Password</button>
                  <button onClick={handleCancel}>Cancel</button>
               </div>}
         </div>
      </>
   )
}

export default Profile
