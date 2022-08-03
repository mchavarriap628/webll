import React from 'react'
import { Redirect, Route, useLocation } from 'react-router-dom';
import useAuth from '../auth/useAuth';
import routes from './routes';


export default function PrivateRoute({ hasRole: role, ...rest }) {
  const location = useLocation();
  const { hasRole, isLogged } = useAuth();

  if (role && !hasRole(role)) return <Redirect to="/*" />

  if (!isLogged()) return <Redirect to={{pathname: routes.login, state:{from: location}}} />

  return (
    <Route {...rest} />
  )
}
