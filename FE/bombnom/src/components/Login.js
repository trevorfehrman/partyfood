import React, { useState, createContext } from 'react';
import auth from '../auth/service';
import Homepage from './Homepage';

export const UserContext = createContext(null);

const Login = props => {
  const [loggedIn, setLoggedIn] = useState(false);

  const [userData, setUserData] = useState({ name: '', email: '', accessToken: '' });

  const handleLoggedOut = () => {
    setLoggedIn(false);
  };

  auth.loginCallback = setUserData;
  auth.loginToggleCallback = setLoggedIn;
  auth.logoutCallback = handleLoggedOut;

  return (
    <UserContext.Provider value={userData}>
      <div>
        {loggedIn ? <Homepage /> : <div>Ya not logged in. Ya fired. CHINNAAA.</div>}
        {loggedIn ? (
          <button onClick={() => auth.logout()} className='log-in'>
            Log Out
          </button>
        ) : (
          <button onClick={() => auth.login()} className='log-in'>
            Log In
          </button>
        )}
        {userData.name ? <div>yup</div> : <div>nope</div>}
        {userData.email ? <div>yup</div> : <div>nope</div>}
        {userData.accessToken ? <div>{userData.accessToken}</div> : <div>nope</div>}
      </div>
    </UserContext.Provider>
  );
};

export default Login;
