import { Tag } from "antd";

interface Props {
    texto : string;
    color? : string;
}

const BadgeEtiqueta = ({ texto, color = 'green' } : Props) => {
    return (
        <Tag color={color} style={{fontSize : 14, padding : '4px 10px'}}>{texto}</Tag>
    )
} 

export default BadgeEtiqueta