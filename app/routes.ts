import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("productos", "routes/productos.tsx"), 
    route("nosotros", "routes/nosotros.tsx"),
    route("blogs", "routes/blogs.tsx"),
    route("contacto", "routes/contacto.tsx"),
    route("carrito", "routes/carrito.tsx"),
    route("detalle_producto/:id", "routes/detalle_producto.tsx"),
    route("blog/:id", "routes/blog.$id.tsx"),
    route("mis-pedidos", "routes/mis-pedidos.tsx"),
] satisfies RouteConfig;
