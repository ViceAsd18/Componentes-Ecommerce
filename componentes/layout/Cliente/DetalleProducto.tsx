import { useParams } from "react-router";
import ClienteLayout from "./ClienteLayout";
import FichaProducto from "componentes/organismo/Detalle/FichaProducto";

const DetalleProducto = () => {

    const { id } = useParams();;


    return (
        <ClienteLayout>
            <div>
                <h1>ID Producto: {id}</h1>
            </div>
            <div>
                <FichaProducto/>
            </div>
        </ClienteLayout>
    )

}

export default DetalleProducto;