import React from 'react';
import { gapi } from 'gapi-script'
const Signout = () => {
   function signOut() {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
         console.log('User signed out.');
      });
   }
   return (
      <div>
         <a href="#" onClick={signOut}>Sign out</a>
      </div>
   )
}

export default Signout
