import { Button } from "antd";

interface Props {
    children : React.ReactNode;
    onClick? : () => void;
}

const btnStyle : React.CSSProperties = {
    backgroundColor : '#2E8B57',
    color : '#FFFFFF',
    fontFamily : 'Montserrat, sans-serif',
    fontSize : '1.3em',
    padding : '12px 25px',
    borderRadius : 8,
    border : 'none',
    cursor : 'pointer',
    textDecoration : 'none',
    fontWeight : 'bold',
    letterSpacing : '0.015em',

}

const BotonPrimario = ({ children, onClick } : Props) => {
    return (
        <Button className="btn-primary"
            type="primary"
            size="large"
            onClick={onClick}
            style={btnStyle}
        >
            {children}
        </Button>
    )
}

export default BotonPrimario