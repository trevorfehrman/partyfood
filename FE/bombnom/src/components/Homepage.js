import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from './Login';
import PartyCard from './PartyCard';
import Header from './Header';

import server from '../utils/server';

import { makeStyles } from '@material-ui/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))',
    padding: '3rem',
    gridGap: '1rem',
    width: '85%',
    margin: '0 auto',

    '@media (max-width: 80rem)': {
      padding: 0,
      width: '100%'
    },
    '@media (max-width: 40rem)': {
      padding: 0,
      width: '100%'
    }
  },
  add: {
    position: 'fixed',
    bottom: '3rem',
    right: '3rem'
  }
});

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
  }, [userData.email]);

  const classes = useStyles();

  return (
    <div>
      <Header />
      <div className={classes.cardContainer}>
        {parties.map(party => {
          return <PartyCard key={party.id} userData={userData} party={party} />;
        })}
      </div>
      <Fab className={classes.add} color='primary' aria-label='Add'>
        <AddIcon />
      </Fab>
    </div>
  );
};

export default Homepage;
