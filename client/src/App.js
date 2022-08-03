import AppRouter from './routers/AppRouter';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './auth/AuthProvider';
import { BrowserRouter } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <MainLayout>
          <AppRouter />
        </MainLayout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
