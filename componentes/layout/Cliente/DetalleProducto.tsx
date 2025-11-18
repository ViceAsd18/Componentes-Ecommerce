import { useParams } from "react-router";
import ClienteLayout from "./ClienteLayout";
import FichaProducto from "componentes/organismo/Detalle/FichaProducto";
import DetalleAcciones from "componentes/moleculas/Detalle/DetalleAcciones";

const DetalleProducto = () => {

    const { id } = useParams();;


    return (
        <ClienteLayout>
            <div>
                <h1>IDProducto {id}</h1>
            </div>
            <div>
                <FichaProducto/>
            </div>
        </ClienteLayout>
    )

}

export default DetalleProducto;