import { Button } from "antd";
import { useNavigate } from "react-router";

interface Props {
    children : React.ReactNode;
    onClick? : () => void;
    to? : string;
    variante? : 'primario' | 'secundario';
    style? : React.CSSProperties;
}

const baseStyle : React.CSSProperties = {
    fontFamily: 'Montserrat, sans-serif',
    fontSize : '1.1rem',
    padding : '12px 25px',
    borderRadius : '8px',
    fontWeight : 'bold',
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
    }
}

const Boton = ({ children, onClick, to, variante = 'primario' } : Props) => {
    
    const navigate = useNavigate();
    
    const handleClick = () => {
        if (onClick) onClick();
        if (to) navigate(to);
    }

    const estiloFinal = {...baseStyle, ...variantes[variante]};

    return (
        <Button 
            type={variante === 'primario' ? "primary" : 'default'}
            size="large"
            onClick={handleClick}
            style={estiloFinal}
        >
            {children}
        </Button>
    )
}

export default Boton