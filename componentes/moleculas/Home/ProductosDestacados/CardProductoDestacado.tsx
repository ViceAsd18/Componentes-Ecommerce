import Titulo from "componentes/atomos/General/Titulo"
import Parrafo from "componentes/atomos/General/Parrafo";
import Imagen from "componentes/atomos/General/Imagen";

interface Props {
    imagenSrc: string;
    nombreProducto: string;
    precioProducto: string;
}

const contenedorStyle: React.CSSProperties = {
    borderRadius: 12,
    paddingBottom: 20,
    textAlign: 'left',
    overflow: 'hidden',
};

const imagenContainerStyle: React.CSSProperties = {
    width: '100%',
    aspectRatio: '1 / 1',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    overflow: 'hidden',
    marginBottom: 10
};

const imagenStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
};

const tituloProductoStyle: React.CSSProperties = {
    fontFamily: 'Playfair Display, serif',
    fontSize: '1.2em',
    fontWeight: 'bold',
    marginBottom: 5,
    paddingLeft: 15,
    paddingRight: 15,
};

const precioStyle: React.CSSProperties = {
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '0.9em', 
    color: 'rgba(0, 0, 0, 0.6)',
    fontWeight: 'normal',
    paddingLeft: 15,
    paddingRight: 15,
};

const CardProductoDestacado = ({ imagenSrc, nombreProducto, precioProducto } : Props) => {
    return (
        <div style={contenedorStyle}>
            <div style={imagenContainerStyle}>
                <Imagen src={imagenSrc} alt={nombreProducto} style={imagenStyle}></Imagen>
            </div>
            <Titulo style={tituloProductoStyle}>{nombreProducto}</Titulo>
            <Parrafo style={precioStyle}>{precioProducto}</Parrafo>
        </div>
    )
}

export default CardProductoDestacado;
