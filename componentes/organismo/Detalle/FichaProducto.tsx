import GaleriaProducto from "componentes/moleculas/Detalle/GaleriaProducto"
import InfoProducto from "componentes/moleculas/Detalle/InfoProducto"
import DetalleAcciones from "componentes/moleculas/Detalle/DetalleAcciones"
import TabsDetalleProducto from "componentes/moleculas/Detalle/TabsDetalleProducto"

import type { Producto } from "models/Producto"

interface Props {
    producto: Producto;
}
    
const FichaProducto = ({producto}: Props) => {
    
    const baseUrlImagen = "/assets/img/productos/";
    const nombreCarpeta = producto.nombre.toLowerCase().replace(/\s+/g, '-');

    const img1 = `${baseUrlImagen}${nombreCarpeta}/1.jpg`;
    const img2 = `${baseUrlImagen}${nombreCarpeta}/2.jpg`;
    const img3 = `${baseUrlImagen}${nombreCarpeta}/3.jpg`;

    const imagenes = [img1, img2, img3];

    return (
       <>
        <div style={{display : 'grid', gridTemplateColumns : "repeat(auto-fit, minmax(280px, 1fr))", gap : 32, alignItems : 'start'}}>
            <GaleriaProducto imagenes={imagenes}/>
            
            <div style={{display : 'flex', flexDirection : 'column'}}>
                <InfoProducto
                    nombre={producto.nombre}
                    precio={producto.precio}
                    unidad="kg"
                    descripcion={producto.descripcionCorta || ''}

                />
                <DetalleAcciones />
            </div>
        </div>
        <TabsDetalleProducto descripcionLarga={producto.descripcionLarga || ''}/>
       </>  


        
    )
}

export default FichaProducto


