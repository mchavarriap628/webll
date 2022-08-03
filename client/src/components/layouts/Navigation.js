import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'
import useAuth from '../../auth/useAuth';
import routes from '../../routers/routes';

export default function Navigation() {

    const {logout} = useAuth();

    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" className='px-5'>
            <Navbar.Brand className='text-warning' as={NavLink} to={routes.home}>Royal Resta</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to={routes.info}>Información</Nav.Link>
                    <NavDropdown title="Admin">
                        <NavDropdown.Item as={NavLink} to={routes.admin.restaurantes}>Restaurantes</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to={routes.admin.usuarios}>Usuarios</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to={routes.admin.adminReportes}>Reportes- Admin</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Gerencia">
                        <NavDropdown.Item as={NavLink} to={routes.empleados()}>Empleados</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to={routes.proveedores()}>Proveedores</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to={routes.productos()}>Productos</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to={routes.reportes()}>Reportes- Gerencia</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Supervision">
                        <NavDropdown.Item as={NavLink} to={routes.proveedores()}>Proveedores</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to={routes.productos()}>Productos</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to={routes.reportes()}>Reportes- Supervisión</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Trabajo">
                        <NavDropdown.Item as={NavLink} to={routes.clientes()}>Clientes</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to={routes.facturacion()}>Facturación</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to={routes.help}>Ayuda</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.login}>Login</Nav.Link>
                    <Nav.Link className='btn btn-warning text-dark' to={routes.login} onClick={logout}>Cerrar Sesión</Nav.Link>
                    <Nav.Link as={NavLink} to={routes.account}>Mi Cuenta</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}
