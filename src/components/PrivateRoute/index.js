import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const isAuth = useSelector((state) => state.Auth.isAuth);

  console.tron.log('passou por aqui');

  return (
    <Route
      {...rest}
      render={(prop) => (isAuth ? (
        <Component {...prop} />
      ) : (
        <Redirect to={{
          pathname: '/login',
          state: { from: prop.location }
        }}
        />
      ))}
    />
  );
}

export default PrivateRoute;
