import React from 'react'
import useAuth from '../auth/useAuth'

const userCredentials = {};

export default function Login() {

  const {login} = useAuth();

  return (
    <div>
        <h1>Login</h1>
        <button onClick={() => login(userCredentials)}>Iniciar Sesión</button>
    </div>
  )
}
