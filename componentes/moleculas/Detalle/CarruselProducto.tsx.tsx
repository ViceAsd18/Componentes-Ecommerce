import { Carousel, Image } from "antd"
import MiniImagen from "componentes/atomos/DetalleProducto/MiniImagen"
import { useRef } from "react"
import { useState } from "react"

interface Props {
    imagenes : string[]
}

const contenedorStyle : React.CSSProperties = {
    display : 'flex',
    flexDirection : 'column',
    gap : 16,
    maxWidth : '100%',
    height : '100%',
    overflow : 'hidden'
}

const styleCarrusel : React.CSSProperties = {
    borderRadius : 12,
    overflow : 'hidden',
    width : '100%',
    height : 500,
    border : '2px solid red'
}

const CarruselProducto = ({imagenes} : Props) => {
    
    const CarruselRef = useRef<any>(null);
    const [actual, setActual] = useState(0);

    const handleMiniClick = (index : number) => {
        CarruselRef.current.goTo(index);
        setActual(index);
    }

    return (
        <div style={contenedorStyle}>
            <Carousel
                ref={CarruselRef}
                afterChange={(current) => setActual(current)}
                style={styleCarrusel}
            >

                {imagenes.map(img => (
                    <Image 
                        key={img}
                        src={img}   
                        preview={false}
                        style={{width : '100%', height : '100%', objectFit : 'cover', borderRadius : 12}}                    
                    />
                ))}
            </Carousel>

            <div style={{display : 'flex', gap : 16, justifyContent : 'start', width : '100%'}}>
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