import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from '../components/Admin';
import Home from '../components/Home';
import Info from '../components/Info';
import MainLayout from '../components/layouts/MainLayout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import roles from '../helpers/roles';

import Login from '../components/Login';
import Account from '../components/Account';
import Help from '../components/Help';
import NotFound from '../components/NotFound';

import Usuarios from '../components/Admin/Usuarios';
import Restaurantes from '../components/Admin/Restaurantes';
import ReportesAdmin from '../components/Admin/ReportesAdmin';

import Empleados from '../components/Restaurante/Empleados'
import Proveedores from '../components/Restaurante/Proveedores';
import Productos from '../components/Restaurante/Productos';
import Reportes from '../components/Restaurante/Reportes';
import Clientes from '../components/Restaurante/Clientes';
import Facturacion from '../components/Restaurante/Facturacion';


export default function AppRouter() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route exact path="/" element={<PublicRoute><Home /></PublicRoute>} />
          <Route hasRole="admin" exact path="/admin" element={<PrivateRoute><Admin /></PrivateRoute>} />
          <Route exact path="/info" element={<Info />} />
          <Route exact path="/login" element={<PublicRoute><Login /></PublicRoute>} />
          <Route exact path="/account" element={<PrivateRoute><Account /></PrivateRoute>}/>
          <Route exact path="/help" element={<Help />}/>

          <Route exact path="/admin/restaurantes" element={<PrivateRoute><Restaurantes/></PrivateRoute>}/>
          <Route exact path="/admin/usuarios" element={<PrivateRoute><Usuarios/></PrivateRoute>}/>
          <Route exact path="/admin/reportes" element={<PrivateRoute><ReportesAdmin/></PrivateRoute>}/>

          <Route exact path="/empleados/:restauranteId" element={<PrivateRoute><Empleados/></PrivateRoute>}/>
          <Route exact path="/proveedores/:restauranteId" element={<PrivateRoute><Proveedores/></PrivateRoute>}/>
          <Route exact path="/productos/:restauranteId" element={<PrivateRoute><Productos/></PrivateRoute>}/>
          <Route exact path="/reportes/:restauranteId" element={<PrivateRoute><Reportes/></PrivateRoute>}/>

          <Route hasRole={roles.employee} exact path="/clientes/:restauranteId" element={<PrivateRoute><Clientes/></PrivateRoute>}/>
          <Route hasRole={roles.employee} exact path="/facturacion/:restauranteId" element={<PrivateRoute><Facturacion/></PrivateRoute>}/>


          <Route exact path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  )
}
