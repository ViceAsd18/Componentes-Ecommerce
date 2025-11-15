import Informativa from "componentes/organismo/Home/Informativa";

interface Props {
    style? : React.CSSProperties;
    children: React.ReactNode;
    backgroundImage? : string;
    variante : 'banner' | 'seccion';
}   

const baseStyle : React.CSSProperties = {
    width : '100%',
    borderRadius : 12,
    position : 'relative',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    overflow : 'hidden',
    marginBottom : 80
}

const variantes : Record<string, React.CSSProperties> = {
    banner : {
        minHeight : 500,
        height : '70vh',
        backgroundSize: 'cover',
        backgroundPosition : 'center',
        justifyContent : 'center'
    },

    seccion : {
        padding : '100px 0',
        backgroundImage : 'none',
        justifyContent : 'center',
        gap : 60 
    }
}

const overlayStyle : React.CSSProperties = {
    position: 'absolute',
    top : 0,
    left : 0,
    width : '100%', 
    height : '100%',
    backgroundColor : 'rgba(0, 0, 0, 0.5)',
    zIndex : 2  
}

const contenidoStlye : React.CSSProperties = {
    position : 'relative',
    zIndex : 3,
    width : '100%',
    height : '100%',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    justifyContent : 'center',
    padding : '0 24px',
}


const ContenedorSeccion = ({ style, children, backgroundImage, variante } : Props) => {

    const styleFinal = {
        ...baseStyle,
        ...variantes[variante],
        ...(backgroundImage && variante === "banner"
            ? { backgroundImage: `url(${backgroundImage})` }
            : {}),        
        ...style
        
    }

    return (
        <div style={styleFinal}>
            {variante === "banner" && <div style={overlayStyle}></div>}

            <div style={contenidoStlye}>
                {children}
            </div>

        </div>
    )
}

export default ContenedorSeccion;