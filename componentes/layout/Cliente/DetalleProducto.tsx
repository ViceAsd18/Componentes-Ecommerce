import { useParams } from "react-router";
import ClienteLayout from "./ClienteLayout";
import FichaProducto from "componentes/organismo/Detalle/FichaProducto";
import ProductosRelacionados from "componentes/organismo/Detalle/ProductoRelacionados";

import { productos } from "data/productos";

const DetalleProducto = () => {

    const { id } = useParams();;

    const productoEncontrado = productos.find(producto => producto.id === id);

    return (
        <ClienteLayout>
            <div>
                <h1>ID Producto: {id}</h1>
                <div>
                    <FichaProducto producto={productoEncontrado!}/>
                    <ProductosRelacionados categoria={productoEncontrado!.categoria} productoId={productoEncontrado!.id}></ProductosRelacionados>
                </div>
            </div>

        </ClienteLayout>
    )

}

export default DetalleProducto;