import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import PrivateRoute from './components/PrivateRoute';
import DashboardRoute from './components/DashboardRoute';
import dashboardRoutes from './screens';


const routes = () => (
  <Switch>
    <PrivateRoute path="/" exact component={Dashboard} />
    <Route path="/login" exact component={Login} />
    {dashboardRoutes.map((route) => {
      console.tron.log(route);
      return (
        <DashboardRoute exact path={route.path} component={route.component} />
      );
    })}
  </Switch>
);

export default routes;
