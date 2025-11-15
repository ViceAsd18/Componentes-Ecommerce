import { Button } from "antd";
import { useNavigate } from "react-router";

interface Props {
    texto: string;
    ruta: string;
}

const BtnLink = ({ texto, ruta }: Props) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(ruta);
    };

    return (
        <Button className="btn-navbar-cliente"
            onClick={handleClick}
            style={{
                backgroundColor: "#F3F8F5",
                color: "#2E8B57",
                borderRadius: "20px",
                fontWeight: 600,
                padding: "6px 16px",
                border: "1px solid #DDE9E3",
            }}
            >
            {texto}
        </Button>
    );
};

export default BtnLink;
