import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../auth/useAuth';
import routes from './routes';


export default function PrivateRoute({ hasRole: role, ...rest }) {
  const { hasRole, isLogged } = useAuth();

  if (role && !hasRole(role)) return <Redirect to="/*" />

  if (!isLogged()) return <Redirect to={routes.login} />

  return (
    <Route {...rest} />
  )
}
