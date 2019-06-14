import React from 'react';
import { makeStyles, useTheme } from '@material-ui/styles';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  header: theme => ({
    gridArea: 'header',
    padding: '2rem',
    border: `6px solid ${theme.palette.primary.main}`
  })
});
const Header = ({ party }) => {
  const theme = useTheme();
  const classes = useStyles(theme);
  return (
    <div className={classes.header}>
      <Typography gutterBottom={true} variant='h3' color='primary'>
        {party.name}
      </Typography>
      <Divider style={{ marginBottom: '1rem' }} />
      <Typography display='inline' variant='h6' color='secondary'>
        Host:
      </Typography>
      <Typography style={{ margin: '0 1rem 0 1rem' }} display='inline' variant='h6' color='primary'>
        {party.host}
      </Typography>
      <Typography display='inline' variant='h6' color='secondary'>
        | {party.email}
      </Typography>
      <br />
      <Typography display='inline' variant='h6' color='secondary'>
        Location:
      </Typography>
      <Typography style={{ margin: '0 1rem 0 1rem' }} display='inline' variant='h6' color='primary'>
        {party.location}
      </Typography>
      <br />
      <Typography display='inline' variant='h6' color='secondary'>
        Date:
      </Typography>
      <Typography style={{ margin: '0 1rem 0 1rem' }} display='inline' variant='h6' color='primary'>
        {party.date}
      </Typography>
      <br />
      <Typography display='inline' variant='h6' color='secondary'>
        Time:
      </Typography>
      <Typography style={{ margin: '0 1rem 0 1rem' }} display='inline' variant='h6' color='primary'>
        {party.time}
      </Typography>

      <Divider style={{ marginBottom: '1rem' }} />
      <Typography display='inline' variant='h6' color='secondary'>
        {party.description}
      </Typography>
    </div>
  );
};

export default Header;
