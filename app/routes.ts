import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("productos", "routes/productos.tsx"), 
    route("nosotros", "routes/nosotros.tsx"),
    route("blogs", "routes/blogs.tsx"),
    route("contacto", "routes/contacto.tsx"),
] satisfies RouteConfig;
