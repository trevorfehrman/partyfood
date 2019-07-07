import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Typography from '@material-ui/core/Typography';

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
        '& div': {
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
      fontStyle: need.defined ? null : 'italic'
    }
  })
});

const Need = ({ need, fulfilled }) => {
  const classes = useStyles({ need, fulfilled });

  return (
    <div key={need.id} className={classes.need}>
      <div className={classes.needContent}>
        <div className={classes.needName}>
          <Typography gutterBottom={true} variant='h5'>
            {need.need}
          </Typography>
          <Typography gutterBottom={true} variant='h6'>
            {need.quantity - need.quantity_fulfilled > 0
              ? need.quantity - need.quantity_fulfilled
              : '✔'}{' '}
            {need.quantity - need.quantity_fulfilled > 0 ? need.quantity_unit : null}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Need;
