import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

import Typography from '@material-ui/core/Typography';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  cardHeaderContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    placeItems: 'center'
  },
  avatar: {
    width: '6.4rem',
    height: '6.4rem'
  },
  nameAndHost: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },

  picture: {
    height: '30rem'
  }
});

const PartyCard = ({ party, userData }) => {
  const classes = useStyles();
  return (
    <Fragment>
      <Card className={classes.card} key={party.id}>
        <Link to={`/parties/${party.id}`}>
          <div className={classes.cardHeaderContainer}>
            <CardHeader
              title={party.name}
              titleTypographyProps={{ variant: 'h5' }}
              subheader={
                <div>
                  <Typography variant='h6' display='inline' color='secondary'>
                    Host:
                  </Typography>
                  <Typography style={{marginLeft: '1rem'}}color='primary' variant='h6' display='inline'>
                    {party.host}
                  </Typography>
                </div>
              }
              avatar={
                <Avatar
                  classes={{ root: classes.avatar }}
                  alt={userData.name}
                  src={party.host_pic}
                />
              }
            />
            <div className={classes.nameAndHost}>
              <CardHeader
                title={
                  <Typography color='secondary' variant='h5'>
                    {party.location}
                  </Typography>
                }
                subheader={party.date + '   |   ' + party.time}
                subheaderTypographyProps={{ color: 'primary', variant: 'h6' }}
                classes={{ content: classes.nameAndHost }}
              />
            </div>
          </div>
          <CardMedia className={classes.picture} image={party.image} />
        </Link>
        <CardContent>
          <Typography variant='body1'>{party.description}</Typography>
        </CardContent>
      </Card>
    </Fragment>
  );
};

export default PartyCard;
