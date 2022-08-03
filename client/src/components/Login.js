import React from 'react'
import { useLocation } from 'react-router-dom';
import useAuth from '../auth/useAuth'

const userCredentials = {};

export default function Login() {

  const location = useLocation();
  const {login} = useAuth();

  return (
    <div>
        <h1>Login</h1>
        <button onClick={() => login(userCredentials, location.state?.from)}>Iniciar Sesión</button>
    </div>
  )
}
