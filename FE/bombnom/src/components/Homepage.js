import React, { useContext } from 'react';
import { UserContext } from './Login';

const Homepage = () => {
  const userData = useContext(UserContext);

  return (
    <div>
      {console.log({ userData })}
      hi
      <div>{userData.name}</div>
    </div>
  );
};

export default Homepage;
