import { Button } from "antd";
import { useNavigate } from "react-router";
import { ShoppingCartOutlined } from "@ant-design/icons";


interface Props {
    children : React.ReactNode;
    onClick? : (e: React.MouseEvent<HTMLButtonElement>) => void;
    to? : string;
    variante? : 'primario' | 'secundario' | 'carrito';
    style? : React.CSSProperties;
}

const baseStyle : React.CSSProperties = {
    fontFamily: 'Montserrat, sans-serif',
    fontSize : '1.1rem',
    padding : '12px 25px',
    borderRadius : '8px',
    letterSpacing : '0.015em',
    cursor : 'pointer',
    color : '#FFFFFF',
}

const variantes : Record<string, React.CSSProperties> = {
    
    primario : {
        backgroundColor : '#2E8B57',
        border : 'none'
    },

    secundario : {
        backgroundColor : 'transparent',
        border : '1px solid #FFFFFF',        
    },

    carrito : {
        backgroundColor : '#2E8B57',
        border : 'none',
        display : 'flex',
        alignItems : 'center',
        gap : 8,
        fontSize : '1rem',
        padding : '10px 20px',
        color : '#FFFFFF',
        width : '100%',
    }
}

const Boton = ({ children, onClick, to, variante = 'primario', style } : Props) => {
    
    const navigate = useNavigate();
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) onClick(e);
        if (to) navigate(to);
    }

    const estiloFinal = {...baseStyle, ...variantes[variante], ...style};

    return (
        <Button 
            type={variante === 'primario' ? "primary" : 'default'}
            size="large"
            onClick={handleClick}
            icon={variante === 'carrito' ? <ShoppingCartOutlined /> : undefined}
            style={estiloFinal}
        >
            {children}
        </Button>
    )
}

export default Boton