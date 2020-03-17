import React from 'react';
import { Route } from 'react-router-dom';
import PrivateLayout from '../layouts/PrivateLayout/PrivateLayout';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(matchProps) => (
      <PrivateLayout>
        <Component {...matchProps} />
      </PrivateLayout>
    )}
  />
);

export default PrivateRoute;
