import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'

export default function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark" className='px-5'>
            <Navbar.Brand as={NavLink} to="/">Royal Resta</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={NavLink} to="/info">Información</Nav.Link>
                    <NavDropdown title="Admin">
                        <NavDropdown.Item as={NavLink} to="/admin/restaurantes">Restaurantes</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/admin/usuarios">Usuarios</NavDropdown.Item>
                        <NavDropdown.Item as={NavLink} to="/admin/reportes">Reportes- Admin</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Gerencia">
                        <NavDropdown.Item>Proveedores</NavDropdown.Item>
                        <NavDropdown.Item>Productos</NavDropdown.Item>
                        <NavDropdown.Item>Empleados</NavDropdown.Item>
                        <NavDropdown.Item>Reportes- Gerencia</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Supervision">
                        <NavDropdown.Item>Proveedores</NavDropdown.Item>
                        <NavDropdown.Item>Productos</NavDropdown.Item>
                        <NavDropdown.Item>Reportes- Supervision</NavDropdown.Item>
                    </NavDropdown>
                    <NavDropdown title="Trabajo">
                        <NavDropdown.Item>Clientes</NavDropdown.Item>
                        <NavDropdown.Item>Facturación</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link as={NavLink} to="/help">Ayuda</Nav.Link>
                    <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
                    <Nav.Link as={NavLink} to="/account">Mi Cuenta</Nav.Link>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    )
}
