import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import ClienteLayout from "./ClienteLayout";
import FichaProducto from "componentes/organismo/Detalle/FichaProducto";
import ProductosRelacionados from "componentes/organismo/Detalle/ProductoRelacionados";
import type { Producto } from "models/Producto";


const DetalleProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState<Producto | null>(null);

    useEffect(() => {
        const obterProductoId = async () => {
            try {
                const res = await axios.get(`http://localhost:3000/api/v1/productos/${id}`);
                setProducto(res.data);
            } catch (error) {
                console.error(error);
            }
        }; obterProductoId();
    },[id]);   
    if (!producto) {
        return <p>Producto No Encontrado</p>
    }

    return (
        <ClienteLayout>
            <FichaProducto  producto={producto} />
            <ProductosRelacionados categoria={producto.categoria} productoId={producto.id} />
        </ClienteLayout>
    );
};

export default DetalleProducto;