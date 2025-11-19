import GaleriaProducto from "componentes/moleculas/Detalle/GaleriaProducto"
import InfoProducto from "componentes/moleculas/Detalle/InfoProducto"
import DetalleAcciones from "componentes/moleculas/Detalle/DetalleAcciones"
import TabsDetalleProducto from "componentes/moleculas/Detalle/TabsDetalleProducto"

interface Producto {
    id: string;
    nombre: string;
    precio: number;
    descripcionCorta: string;
    descripcionLarga: string;
    imagen: string[];
    stock: number;
    categoria: string;
}

interface Props {
    producto: Producto;
}
    
const FichaProducto = ({producto}: Props) => {
    return (
        
       <>
        <div style={{display : 'grid', gridTemplateColumns : "repeat(auto-fit, minmax(280px, 1fr))", gap : 32, alignItems : 'start'}}>
            <GaleriaProducto imagenes={producto.imagen}/>
            
            <div style={{display : 'flex', flexDirection : 'column'}}>
                <InfoProducto
                    nombre={producto.nombre}
                    precio={producto.precio}
                    unidad="kg"
                    descripcion={producto.descripcionCorta}

                />
                <DetalleAcciones />
            </div>
        </div>
        <TabsDetalleProducto descripcionLarga={producto.descripcionLarga}/>
       </>  


        
    )
}

export default FichaProducto


