import {  Image } from "antd"
import MiniImagen from "componentes/atomos/DetalleProducto/MiniImagen"
import { useState } from "react"
import Imagen from "componentes/atomos/General/Imagen"

interface Props {
    imagenes : string[]
}

const contenedorStyle : React.CSSProperties = {
    display : 'flex',
    flexDirection : 'column',
    gap : 12,
    minWidth : 0,
}

const imagenStyle : React.CSSProperties = {
    width : '100%',
    height : 'auto',
    maxHeight : 550,
    objectFit : 'cover',
    borderRadius : 12    

}   

const contenedorMiniaturas : React.CSSProperties = {
    display : 'flex',
    overflow : 'auto',
    gap : 12,
    minHeight : 100,
    maxWidth : '100%',
}

const GaleriaProducto = ({imagenes} : Props) => {
    
    const [actual, setActual] = useState(0);

    const handleMiniClick = (index : number) => {
        setActual(index);
    }

    return (
        <div style={contenedorStyle}>
                <Imagen
                    src={imagenes[actual]}
                    alt="Imagen del producto"
                    preview={false}
                    style={imagenStyle}
                >

                </Imagen>


            <div style={contenedorMiniaturas}>
                {imagenes.map((img, index) => (
                    <MiniImagen
                        key={img}
                        src={img}
                        size={85}
                        onClick={() => handleMiniClick(index)}
                        style={{
                        border:
                            index === actual
                            ? "2px solid #52c41a"
                            : "2px solid transparent",
                        }}
                    />
                    ))}
            </div>
        </div>
    )
}

export default GaleriaProducto