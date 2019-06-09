import React, { useContext, useState, useEffect, Fragment } from 'react';
import { UserContext } from './Login';

import server from '../utils/server';

const Homepage = () => {
  const userData = useContext(UserContext);
  const [parties, setParties] = useState([]);

  useEffect(() => {
    server
      .get('/parties', { params: { email: userData.email } })
      .then(response => {
        setParties(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      {console.log(parties)}
      hi
      {parties.map(party => {
        return (
          <Fragment>
            <div>{party.name}</div>
            <div>{party.date}</div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Homepage;
