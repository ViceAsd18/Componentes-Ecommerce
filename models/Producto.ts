export interface Producto {
    id: string;
    codigo : string;
    nombre: string;
    descripcionCorta? : string;
    descripcionLarga? : string;
    precio: number;
    stock: number;
    activo: boolean;
    categoria: number;
}

