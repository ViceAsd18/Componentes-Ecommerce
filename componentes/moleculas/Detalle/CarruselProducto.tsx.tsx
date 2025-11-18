import {  Image } from "antd"
import MiniImagen from "componentes/atomos/DetalleProducto/MiniImagen"
import { useState } from "react"

interface Props {
    imagenes : string[]
}

const contenedorStyle : React.CSSProperties = {
    display : 'flex',
    flexDirection : 'column',
    gap : 16,
    maxWidth : 800,
    height : 700,
    overflow : 'hidden',

}

const imagenStyle : React.CSSProperties = {
    display : 'flex',
    gap : 12,
    justifyContent : 'start',
    overflow : 'auto',
    //minHeight : 100,
    height : '80%'
}

const contenedorMiniaturas : React.CSSProperties = {
    display : 'flex',
    gap : 12,
    justifyContent : 'start',
    overflow : 'auto',
    height : '20%'
}

const CarruselProducto = ({imagenes} : Props) => {
    
    const [actual, setActual] = useState(0);

    const handleMiniClick = (index : number) => {
        setActual(index);
    }

    return (
        <div style={contenedorStyle}>
                <Image
                    src={imagenes[actual]}
                    preview={false}
                    style={imagenStyle}
                >
                </Image>


            <div style={contenedorMiniaturas}>
                {imagenes.map((img, index) => (
                    <MiniImagen
                        key={img}
                        src={img}
                        size={100}
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

export default CarruselProducto