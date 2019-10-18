import React from 'react';
import Dashboard from '../../screens/Dashboard';
import PrivateRoute from '../PrivateRoute';

function DashboardRoute({ component: Component, ...rest }) {
  console.tron.log('passou pelo dashboard-route', rest);

  return (
    <PrivateRoute
      {...rest}
      component={(prop) => (
        <Dashboard>
          <Component {...prop} />
        </Dashboard>
      )}
    />
  );
}

export default DashboardRoute;
