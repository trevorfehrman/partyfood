import React, { useContext, useState, useEffect, Fragment } from 'react';
import { UserContext } from './Login';

import server from '../utils/server';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

const useStyles = makeStyles({
  root: {
    fontFamily: "'Bungee Shade', cursive",
    display: 'flex',
    letterSpacing: '1.4rem'
  },
  icon: {
    fontSize: '9.6rem'
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
      <Typography gutterBottom={true} color='primary' className={classes.root} variant='h1'>
        B<Icon color='secondary' className={clsx(classes.icon, 'fas fa-bomb')} />
        mb-N
        <Icon color='secondary' className={clsx(classes.icon, 'fas fa-bomb')} />m
      </Typography>
      <Typography variant='body1'>Sup</Typography>
      {parties.map(party => {
        return (
          <Fragment key={party.id}>
            <div>{party.name}</div>
            <div>{party.date}</div>
            <div>{party.time}</div>
            <div>{party.location}</div>
            <div>{party.host}</div>
            <img alt={party.name} src={party.image} />
          </Fragment>
        );
      })}
    </div>
  );
};

export default Homepage;
