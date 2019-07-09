import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import clsx from 'clsx';

const useStyles = makeStyles({
  need: ({ need, fulfilled }) => ({
    backgroundColor: fulfilled
      ? '#8f8f8f70'
      : need.priority === 1
      ? '#EF5350'
      : need.priority === 2
      ? '#4caf50'
      : need.priority === 3
      ? '#9c27b0'
      : need.priority === 4
      ? '#2196f3'
      : need.priority === 5
      ? '#009688'
      : '#607d8b',

    position: 'relative',
    transition: 'all .2s ease',
    cursor: 'pointer',

    '&:hover': {
      zIndex: 10,
      boxShadow: '0 1rem 1rem 1rem rgba(79, 79, 79, 0.5)',
      backgroundColor: fulfilled
        ? need.priority === 1
          ? '#EF5350aa'
          : need.priority === 2
          ? '#4caf50aa'
          : need.priority === 3
          ? '#9c27b0aa'
          : need.priority === 4
          ? '#2196f3aa'
          : need.priority === 5
          ? '#009688aa'
          : '#607d8baa'
        : null,

      '& > div': {
        '& strong': {
          backgroundColor: fulfilled
            ? need.priority === 1
              ? '#EF5350aa'
              : need.priority === 2
              ? '#4caf50aa'
              : need.priority === 3
              ? '#9c27b0aa'
              : need.priority === 4
              ? '#2196f3aa'
              : need.priority === 5
              ? '#009688aa'
              : '#607d8baa'
            : null
        }
      }
    }
  }),
  needContent: {
    backgroundColor: 'white',
    height: '95%',
    width: '95%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
  },
  needName: ({ need, fulfilled }) => ({
    backgroundColor: fulfilled
      ? '#8f8f8f70'
      : need.priority === 1
      ? '#EF5350'
      : need.priority === 2
      ? '#4caf50'
      : need.priority === 3
      ? '#9c27b0'
      : need.priority === 4
      ? '#2196f3'
      : need.priority === 5
      ? '#009688'
      : '#607d8b',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0px 5px',
    transition: 'all .2s ease-out',

    '& h5, h6': {
      transition: 'all .2s ease-out',
      color: 'white',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
      fontStyle: need.defined ? null : 'italic',
      position: 'relative',
      top: '8px'
    }
  }),
  notes: {
    '& h6': {
      padding: '1rem',
      backgroundColor: '#3b3b3b',
      color: 'white'
    }
  },
  bringer: ({ need, fulfilled }) => ({
    height: '17%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: '2rem',
    borderBottom: '1px solid #e6e6e6',
    transition: 'all .2s ease-out',
    '&:hover': {
      backgroundColor:
        need.priority === 1
          ? '#EF535088'
          : need.priority === 2
          ? '#4caf5088'
          : need.priority === 3
          ? '#9c27b088'
          : need.priority === 4
          ? '#2196f388'
          : need.priority === 5
          ? '#00968888'
          : '#607d8b88',
      borderBottom: 'none'
    },
    '& img': {
      height: '100%'
    }
  }),
  icon: {
    fontSize: '2.5rem'
  },
  stillNeed: {
    position: 'absolute',
    top: 0,
    right: '1rem',
    zIndex: 100,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.53)',
    // borderBottomRightRadius: '6px',
    // borderBottomLeftRadius: '6px',
    padding: '0 4px',
    fontWeight: 'bold',
    fontSize: '1rem'
  }
});

const Need = ({ need, fulfilled }) => {
  const classes = useStyles({ need, fulfilled });

  return (
    <div key={need.id} className={classes.need}>
      {need.quantity - need.quantity_fulfilled !== 0 && need.quantity_fulfilled ? (
        <Typography variant='caption' className={classes.stillNeed}>
          Still Need
        </Typography>
      ) : null}
      <div className={classes.needContent}>
        <strong className={classes.needName}>
          <Typography gutterBottom={true} variant='h5'>
            {need.need}
          </Typography>
          <Typography gutterBottom={true} variant='h6'>
            {need.quantity - need.quantity_fulfilled > 0 ? (
              need.quantity - need.quantity_fulfilled
            ) : (
              <Icon color='secondary' className={clsx(classes.icon, 'fas fa-bomb')} />
            )}{' '}
            {need.quantity - need.quantity_fulfilled > 0 ? need.quantity_unit : null}
          </Typography>
        </strong>
        {need.notes && (
          <span className={classes.notes}>
            <Typography variant='subtitle1'>{need.notes}</Typography>
          </span>
        )}
        {need.bringers.length > 0 &&
          need.bringers.map(bringer => {
            return (
              <div className={classes.bringer} key={bringer.email}>
                <img alt={bringer.username} src={bringer.img_url} />
                <Typography variant='body1'>{bringer.username}</Typography>
                <Typography variant='body1'>{bringer.quantity_fulfilled}</Typography>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Need;
