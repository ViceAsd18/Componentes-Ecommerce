import { Image } from "antd";

interface Props {
    src : string;
    alt : string;
    style? : React.CSSProperties;
    preview?: boolean;
}

const baseStyle : React.CSSProperties = {
    width : '100%',
    height : '100%',
    objectFit : "cover",
    borderRadius : 0
}

const Imagen = ({ src, alt, style, preview = false } : Props) => {
    return (
        <Image
            src={src}
            alt={alt}    
            preview={preview}   
            style={{ ...baseStyle, ...style }}
        />
    )
}

export default Imagen;