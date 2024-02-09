import React, { Suspense } from 'react';
import { GoogleLogin } from 'react-google-login';
const Loading=React.lazy(()=>import('./Loading'));

const GoogleSignIn = () => {
   const onSuccess = (response) => {
      console.log('Logged in as: ' + response.profileObj.name);
   };

   const onFailure = (error) => {
      console.log(error);
   };

   return (
      <Suspense fallback={<Loading/>}>
         <GoogleLogin
         clientId="561805484765-k3630hbdpjdlm7ci6rsdo2t0i7tepq31.apps.googleusercontent.com"
         onSuccess={onSuccess}
         onFailure={onFailure}
         cookiePolicy={'single_host_origin'}
         scope="profile email"
         render={renderProps => (
            <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
               Sign in with Google
            </button>
         )}
      />
      </Suspense>
   );
};

export default GoogleSignIn;
