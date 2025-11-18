import Titulo from "componentes/atomos/General/Titulo";
import PrecioProducto from "componentes/atomos/DetalleProducto/PrecioProducto";
import Parrafo from "componentes/atomos/General/Parrafo";

interface Props {
    nombre : string;
    precio : number;
    unidad? : string;
    descripcion : string;
    etiquetas? : string[];
    style? : React.CSSProperties;
}

const InfoProducto = ({nombre, precio, unidad, descripcion, etiquetas, style} : Props) => {
    return (
        <div style={{display : 'flex', flexDirection : 'column', gap : 20, ...style}}>
            <Titulo variante="seccion">{nombre}</Titulo>

            <PrecioProducto precio={precio} unidad={unidad}/>


            <Parrafo variante='detalle'>{descripcion}</Parrafo>

        </div>
    )
}

export default InfoProducto