import React, { useState, useEffect, createContext } from 'react';
import auth from '../auth/service';
import Homepage from './Homepage';

export const UserContext = createContext(null);

const Login = props => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userData, setUserData] = useState({ name: '', email: '', accessToken: '', picture: '' });

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const user = JSON.parse(localStorage.getItem('user'));
    if (accessToken && user) {
      const { name, email, picture } = user;
      setLoggedIn(true);
      setUserData(state => ({ ...state, name, email, picture, accessToken }));
    }
  }, []);

  const handleLoggedOut = () => {
    setLoggedIn(false);
    localStorage.removeItem('accessToken');
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
      </div>
    </UserContext.Provider>
  );
};

export default Login;
