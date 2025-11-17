import { useParams } from "react-router";
import ClienteLayout from "./ClienteLayout";

import { productos } from "data/productos";

const DetalleProducto = () => {

    const { id } = useParams();;


    return (
        <ClienteLayout>
            <div>
                <h1>Detalle Del Producto</h1>
                <p>Producto ID: {id}</p>
            </div>
        </ClienteLayout>
    )

}

export default DetalleProducto;