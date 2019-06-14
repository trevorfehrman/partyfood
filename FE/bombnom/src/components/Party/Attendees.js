import React from 'react';
import { makeStyles } from '@material-ui/styles';
import clsx from 'clsx';

const useStyles = makeStyles({
  grid: {
    gridArea: 'host',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(13rem, 1fr))'
  },
  aspectRatio: {
    paddingTop: '100%'
  },
  absoluteFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  },
  attendee: {
    height: '30%',
    width: '100%',
    position: 'absolute',
    backgroundColor: 'black',
    bottom: 0,
    left: 0
  }
});

const Attendees = ({ party }) => {
  const classes = useStyles();
  return (
    <section className={classes.grid}>
      <aside className={classes.aspectRatio} />
      <article>
        <ul className={clsx(classes.grid, classes.absoluteFill)}>
          {party.attendees &&
            party.attendees.map(attendee => (
              <li key={attendee.id} className={classes.aspectRatio}>
                <img className={classes.absoluteFill} alt={attendee.name} src={attendee.img_url} />
              </li>
            ))}
        </ul>
      </article>
    </section>
  );
};

export default Attendees;
