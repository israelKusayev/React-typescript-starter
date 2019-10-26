import React from 'react';
import { Switch, Route } from 'react-router';
import Login from '../login/login';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <Login />
      </Route>
      <Route path='/login'>
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
