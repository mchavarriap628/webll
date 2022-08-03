import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Admin from '../components/Admin';
import Home from '../components/Home';
import Info from '../components/Info';
import MainLayout from '../components/layouts/MainLayout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import roles from '../helpers/roles';
import routes from './routes';

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
        <Switch>
          <PublicRoute exact path={routes.home} component={Home}/>
          <PrivateRoute hasRole={roles.admin} exact path={routes.admin.admin} component={Admin} />
          <Route exact path={routes.info} component={Info} />
          <PublicRoute exact path={routes.login} component={Login} />
          <PrivateRoute exact path={routes.account} component={Account}/>
          <Route exact path={routes.help} component={Help}/>

          <PrivateRoute hasRole={roles.admin} exact path={routes.admin.restaurantes} component={Restaurantes}/>
          <PrivateRoute hasRole={roles.admin} exact path={routes.admin.usuarios} component={Usuarios}/>
          <PrivateRoute hasRole={roles.admin} exact path={routes.admin.adminReportes} component={ReportesAdmin}/>

          <PrivateRoute hasRole={roles.manager} exact path={routes.empleados()} component={Empleados}/>
          
          <PrivateRoute hasRole={roles.supervisor} exact path={routes.proveedores()} component={Proveedores}/>
          <PrivateRoute hasRole={roles.supervisor} exact path={routes.productos()} component={Productos}/>
          <PrivateRoute hasRole={roles.supervisor} exact path={routes.reportes()} component={Reportes}/>

          <PrivateRoute hasRole={roles.employee} exact path={routes.clientes()} component={Clientes}/>
          <PrivateRoute hasRole={roles.employee} exact path={routes.facturacion()} component={Facturacion}/>


          <Route exact path="*" component={NotFound} />
        </Switch>
      </MainLayout>
    </BrowserRouter>
  )
}
