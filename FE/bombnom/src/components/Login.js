import React, { useState, useEffect } from 'react';
import auth from '../auth/service';

const Login = props => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({name: ''});

  const handleLoggedIn = authResult => {
    console.log(authResult.idTokenPayload.name);
    // setUserData({name: authResult.idTokenPayload.name});
    console.log(userData);
    setLoggedIn(true);
  };
  const handleLoggedOut = () => {
    setLoggedIn(false);
  };

  auth.loginCallback = handleLoggedIn;
  auth.logoutCallback = handleLoggedOut;

  return (
    <div>
      {loggedIn ? <div>Logged in babyyyy</div> : <div>Ya not logged in. Ya fired. CHINNAAA.</div>}
      {loggedIn ? (
        <button onClick={() => auth.logout()} className='log-in'>
          Log Out
        </button>
      ) : (
        <button onClick={() => auth.login()} className='log-in'>
          Log In
        </button>
      )}
    </div>
  );
};

export default Login;
