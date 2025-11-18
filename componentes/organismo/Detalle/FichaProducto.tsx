import CarruselProducto from "componentes/moleculas/Detalle/CarruselProducto.tsx"
import InfoProducto from "componentes/moleculas/Detalle/InfoProducto"
import DetalleAcciones from "componentes/moleculas/Detalle/DetalleAcciones"



const imagenes = [
  "https://picsum.photos/id/1015/800/800",
  "https://picsum.photos/id/1016/800/800",
  "https://picsum.photos/id/1018/800/800"
];


const FichaProducto = () => {
    return (
        <div style={{display : 'grid', gridTemplateColumns : '55% 45%', gap : 32, alignItems : 'start'}}>
            <CarruselProducto imagenes={imagenes}/>
            
            <div style={{display : 'flex', flexDirection : 'column', gap : 24}}>
                <InfoProducto
                    nombre="Manzana Fuji"
                    precio={2042}
                    unidad="kg"
                    descripcion="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, assumenda praesentium corrupti nulla unde eligendi soluta quibusdam officiis animi illum pariatur nisi magnam iste id voluptas omnis voluptatum perspiciatis repellendus iure inventore tempore ducimus, saepe excepturi? Ad doloremque rem voluptatum! Libero impedit iusto pariatur blanditiis temporibus odit possimus quis dignissimos totam quasi quod, inventore deserunt ipsum modi magni. Commodi minima voluptatum, illo nesciunt aperiam enim quidem asperiores in et quod labore. Libero quisquam officia nam exercitationem possimus! Corporis sequi quam iusto vel cumque, architecto repellat"

                />
                <DetalleAcciones />
            </div>

        </div>
    )
}

export default FichaProducto


