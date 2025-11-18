import CarruselProducto from "componentes/moleculas/Detalle/CarruselProducto.tsx"
import InfoProducto from "componentes/moleculas/Detalle/InfoProducto"
import DetalleAcciones from "componentes/moleculas/Detalle/DetalleAcciones"

import img1 from "assets/img/productos/manzana-fuji/manzana-fuji-1.jpg";
import img2 from "assets/img/productos/manzana-fuji/manzana-fuji-2.jpg";
import img3 from "assets/img/productos/manzana-fuji/manzana-fuji-3.jpg";

const imagenes = [img1, img2, img3];

const FichaProducto = () => {
    return (
        <div style={{display : 'grid', gridTemplateColumns : '55% 45%', gap : 32, alignItems : 'start', width : '100%'}}>
            <CarruselProducto imagenes={imagenes}/>
            
            <div style={{display : 'flex', flexDirection : 'column', gap : 24}}>
                <InfoProducto
                    nombre="Manzana Fuji"
                    precio={2042}
                    unidad="kg"
                    descripcion="descripcion de la manza sklsjksljsklasjaklsdsankldsakl"

                />
                <DetalleAcciones />
            </div>

        </div>
    )
}

export default FichaProducto