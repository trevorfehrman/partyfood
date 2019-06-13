import React, { useState, useEffect } from 'react';
import server from '../utils/server';

import { makeStyles } from '@material-ui/styles';
import { useTheme } from '@material-ui/styles';
import clsx from 'clsx';

import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridTemplateAreas: `
    'picture picture picture picture header header'
    'picture picture picture picture host host'
    'picture picture picture picture host host'
    `,
    '& section': {
      overflow: 'scroll'
    },
    '& article': {
      gridRow: '1 / -1',
      gridColumn: '1 / -1',
      position: 'relative'
    },
    '& ul': {
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    '& li': {
      position: 'relative'
    }
  },
  picture: {
    gridArea: 'picture',
    maxWidth: '100%'
  },
  header: theme => ({
    gridArea: 'header',
    padding: '2rem',
    border: `6px solid ${theme.palette.primary.main}`
  }),
  grid: theme => ({
    gridArea: 'host',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(17rem, 1fr))'
  }),
  anotherContainer: theme => ({
    gridArea: 'host',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(17rem, 1fr))'
  }),
  aspectRatio: {
    paddingTop: '100%'
  },
  absoluteFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  }
});

const Party = ({
  match: {
    params: { id }
  }
}) => {
  const [party, setParty] = useState({});
  useEffect(() => {
    server
      .get(`/parties/${id}`)
      .then(response => {
        setParty(response.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <div className={classes.gridContainer}>
      {console.log(party)}
      <img className={classes.picture} alt={party.name} src={party.image} />
      <div className={classes.header}>
        <Typography gutterBottom={true} variant='h3' color='primary'>
          {party.name}
        </Typography>
        <Divider style={{ marginBottom: '1rem' }} />
        <Typography display='inline' variant='h6' color='secondary'>
          Host:
        </Typography>
        <Typography
          style={{ margin: '0 1rem 0 1rem' }}
          display='inline'
          variant='h6'
          color='primary'
        >
          {party.host}
        </Typography>
        <Typography display='inline' variant='h6' color='secondary'>
          | {party.email}
        </Typography>
        <br />
        <Typography display='inline' variant='h6' color='secondary'>
          Location:
        </Typography>
        <Typography
          style={{ margin: '0 1rem 0 1rem' }}
          display='inline'
          variant='h6'
          color='primary'
        >
          {party.location}
        </Typography>
        <br />
        <Typography display='inline' variant='h6' color='secondary'>
          Date:
        </Typography>
        <Typography
          style={{ margin: '0 1rem 0 1rem' }}
          display='inline'
          variant='h6'
          color='primary'
        >
          {party.date}
        </Typography>
        <br />
        <Typography display='inline' variant='h6' color='secondary'>
          Time:
        </Typography>
        <Typography
          style={{ margin: '0 1rem 0 1rem' }}
          display='inline'
          variant='h6'
          color='primary'
        >
          {party.time}
        </Typography>

        <Divider style={{ marginBottom: '1rem' }} />
        <Typography display='inline' variant='h6' color='secondary'>
          {party.description}
        </Typography>
      </div>

      <section className={classes.grid}>
        <aside className={classes.aspectRatio} />
        <article>
          <ul className={clsx(classes.anotherContainer, classes.absoluteFill)}>
            {party.attendees &&
              party.attendees.map(attendee => (
                <li className={classes.aspectRatio}>
                  <img
                    className={classes.absoluteFill}
                    key={attendee.id}
                    alt={attendee.name}
                    src={attendee.img_url}
                  />
                </li>
              ))}
          </ul>
        </article>
      </section>
    </div>
  );
};

export default Party;
