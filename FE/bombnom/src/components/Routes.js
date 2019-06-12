import React, { Fragment } from 'react';
import Homepage from './Homepage';
import Party from './Party';
import { Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/parties/:id' render={props => <Party {...props} />} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
