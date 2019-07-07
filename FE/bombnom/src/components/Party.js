import React, { useState, useEffect } from 'react';
import server from '../utils/server';

import Need from './Party/Need';

import { makeStyles } from '@material-ui/styles';
import Header from './Party/Header';
import Attendees from './Party/Attendees';

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
  picture: party => ({
    gridArea: 'picture',
    maxWidth: '100%',
    backgroundImage: `url(${party.image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',

    '& img': {
      maxWidth: '100%',
      height: 'auto'
    }
  }),
  needsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(22rem, 1fr))',
    gridAutoRows: '1fr',

    '&::before': {
      content: '""',
      width: 0,
      paddingBottom: '100%',
      gridRow: '1/1',
      gridColumn: '1/1'
    },
    '& > *:first-child': {
      gridRow: '1/1',
      gridColumn: '1/1'
    }
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

  const classes = useStyles(party);

  return (
    <div>
      <div className={classes.gridContainer}>
        {console.log(party)}
        <div className={classes.picture} />

        <Header party={party} />
        <Attendees party={party} />
      </div>
      <div className={classes.needsGrid}>
        {party.needs &&
          party.needs.map(need => {
            return (
              <Need
                fulfilled={need.quantity === need.quantity_fulfilled ? true : false}
                key={need.id}
                need={need}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Party;
