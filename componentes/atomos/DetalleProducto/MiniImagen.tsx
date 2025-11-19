import { Image } from "antd";

interface Props {
    src : string;
    alt? : string;
    size? : number;
    onClick? : () => void;
    style? : React.CSSProperties;
}



const MiniImagen = ({ src, alt, size = 80, onClick, style } : Props) => {
    
    const contenedorStyle : React.CSSProperties = {
        width : size,
        height : size,
        borderRadius : 8,
        overflow : 'hidden',
        cursor : onClick ? 'pointer' : 'default',
        ...style
    }
    return (
        <div style={contenedorStyle} onClick={onClick}>
            <Image src={src} alt={alt} preview={false} style={{ objectFit : 'cover', width : '100%', height : '100%'}}></Image>
        </div>
    )
}

export default  MiniImagen