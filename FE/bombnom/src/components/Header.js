import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import { useScrollTrigger } from '@material-ui/core';
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
  }
});

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.logo}>
      <Typography classes={{ root: classes.logo }} gutterBottom={true} color='primary' variant='h1'>
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
  );
};

export default Header;
