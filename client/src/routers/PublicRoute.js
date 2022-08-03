import React from 'react'
import {Navigate} from 'react-router-dom';
import useAuth from '../auth/useAuth';


const PublicRoute = ({ children }) => {
    //const user = {id:1, role: 'regular'};
    //const user = false;

    const {user} = useAuth();

    if (user) return <Navigate to="/account" />;
    return children;
  };
  
  
  
  export default PublicRoute;
