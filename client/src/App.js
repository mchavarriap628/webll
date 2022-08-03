import AppRouter from './routers/AppRouter';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './auth/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  );
}

export default App;
