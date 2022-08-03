import React from 'react'
import {Navigate} from 'react-router-dom';
import useAuth from '../auth/useAuth';


const PrivateRoute = ({hasRole: acceso, children }) => {
    const {user} = useAuth();

    if (!user) return <Navigate to="/login" />;
    return(
      children
    );
  };
export default PrivateRoute;
