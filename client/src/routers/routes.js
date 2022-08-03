const routes = {
    home: "/",
    login: "/login",
    info: "/info",
    help: "/help",
    account: "/account",
    admin: {
        admin: "/admin",
        restaurantes: "/admin/restaurantes",
        usuarios: "/admin/usuarios",
        adminReportes: "/admin/reportes",
    },

    empleados: (restauranteId) => restauranteId ? `/empleados/:${restauranteId}` : '/empleados/:restauranteId',
    
    proveedores: (restauranteId) => restauranteId ? `/proveedores/:${restauranteId}` : '/proveedores/:restauranteId',
    productos: (restauranteId) => restauranteId ? `/productos/:${restauranteId}` : '/productos/:restauranteId',
    reportes: (restauranteId) => restauranteId ? `/reportes/:${restauranteId}` : '/reportes/:restauranteId',

    clientes: (restauranteId) => restauranteId ? `/clientes/:${restauranteId}` : '/clientes/:restauranteId',
    facturacion: (restauranteId) => restauranteId ? `/facturacion/:${restauranteId}` : '/facturacion/:restauranteId',

};

export default routes;