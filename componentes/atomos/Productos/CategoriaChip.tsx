import { Button } from "antd";

interface Props {
    label : string;
    activo? : boolean;
    onClick? : () => void;
}



const CategoriaChip = ({label, activo, onClick}: Props) => {

    const chipStyle : React.CSSProperties = {
        borderRadius : 20,
        padding : '4px 18px',
        border : activo ? 'none' : '1px solid rgba(0,0,0,0.25)',
        backgroundColor : activo ? '#2E8B57' : 'transparent',
        color : activo ? '#fff' : '#333',
        fontWeight : 600
    }

    return (
        <Button 
            onClick={onClick}
            size="middle"
            style={chipStyle}
        >
            {label}
        </Button>
    )
}

export default CategoriaChip;