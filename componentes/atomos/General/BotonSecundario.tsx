import { Button } from "antd";

interface Props {
    children : React.ReactNode;
    onClick?: () => void;
}

const btnStyle : React.CSSProperties = {
    backgroundColor : 'transparent',
    color : '#FFFFFF',
    border : '1px solid #FFFFFF',
}

const BotonSecundario = ({ children, onClick }: Props) => {
    return (
        <Button 
            type="default"
            size="large"
            onClick={onClick}
            style={{
                borderRadius : 8,
                fontWeight : 'bold',
                letterSpacing : '0.015em',
                ...btnStyle
            }}
        >
            {children}
        </Button>
    )
}

export default BotonSecundario;