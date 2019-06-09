import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from './Login';

import server from '../utils/server';

const Homepage = () => {
  const userData = useContext(UserContext);
  const [parties, setParties] = useState([]);

  useEffect(() => {
    server
      .get('/parties', { params: { email: 'trevorfehrman@gmail.com' } })
      .then(response => {
        console.log({ response });
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {console.log(parties)}
      hi
      <div>{userData.name}</div>
    </div>
  );
};

export default Homepage;
