import React, { useContext, useState, useEffect, Fragment } from 'react';
import { UserContext } from './Login';

import server from '../utils/server';
import clsx from 'clsx';

import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  logo: {
    fontFamily: "'Bungee Shade', cursive",
    display: 'flex',
    letterSpacing: '1.4rem',
    placeItems: 'center',
    placeContent: 'center',
    '@media (max-width: 40rem)': {
      flexDirection: 'column',
      fontSize: '7rem'
    }
  },
  icon: {
    fontSize: '9.6rem',
    '@media (max-width: 40rem)': {
      fontSize: '7rem'
    }
  },
  substring: {
    display: 'flex'
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(30rem, 1fr))',
    padding: '3rem',
    gridGap: '1rem',

    '@media (max-width: 40rem)': {
      padding: 0
    }
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    placeItems: 'center'
  },
  nameAndHost: {
    padding: '1rem 2rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },

  picture: {
    height: '50rem'
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
      <div className={classes.logo}>
        <Typography
          classes={{ root: classes.logo }}
          gutterBottom={true}
          color='primary'
          variant='h1'
        >
          <span className={classes.substring}>
            B<Icon color='secondary' className={clsx(classes.icon, 'fas fa-bomb')} />
            mb
          </span>
          <span className={classes.substring}>
            -N
            <Icon color='secondary' className={clsx(classes.icon, 'fas fa-bomb')} />m
          </span>
        </Typography>
      </div>

      <div className={classes.cardContainer}>
        {parties.map(party => {
          return (
            <Card className={classes.card} key={party.id}>
              <div className={classes.cardHeader}>
                <CardHeader
                  title={party.location}
                  subheader={party.date + '   |   ' + party.time}
                  subheaderTypographyProps={{ color: 'primary' }}
                  avatar={<Avatar alt={userData.name} src={userData.picture} />}
                />
                <div className={classes.nameAndHost}>
                  <Typography color='secondary' variant='h4'>
                    {party.name}
                  </Typography>
                  <Typography color='primary' variant='h6'>
                    <Typography variant='h6' display='inline' color='secondary'>
                      Hosted By:   
                    </Typography>
                    {"   " + party.host}
                  </Typography>
                </div>
              </div>
              <CardMedia className={classes.picture} image={party.image} />
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Homepage;
