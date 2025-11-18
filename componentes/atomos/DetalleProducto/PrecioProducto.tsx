import { Typography } from "antd";
const { Text } = Typography;

interface Props {
    precio : number;
    unidad? : string;
    style? : React.CSSProperties;
}


const PrecioProducto = ({ precio , unidad = '', style} : Props) => {
 
    const contenedorStyle : React.CSSProperties = {
        display : 'flex',
        alignItems : 'baseline',
        gap : 8,
        ...style
    }
    
    return (
        <div style={contenedorStyle}>
            <Text strong style={{fontSize : '1.6rem'}}>
                ${precio.toLocaleString("es-CL")}
            </Text>
            { unidad && (
            <Text type="secondary" style={{ fontSize : 14}}>
                {unidad}
            </Text>
            )}
        </div>
    )
}

export default PrecioProducto;