import { ShoppingCartOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { useNavigate } from "react-router";

const contenedorStlye : React.CSSProperties = {
    backgroundColor: "rgba(46, 139, 87, 0.1)", 
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
}



const CarritoIcono = () => {

    const navigate = useNavigate();

    const irAlCarrito = () => {
        navigate("/carrito");
    }

    return (
        <Tooltip title="Ver Carrito de Compras">
            <div style = {contenedorStlye} onClick={irAlCarrito}>
                <ShoppingCartOutlined 
                    style={{
                        fontSize: 24,
                        color: "#2E8B57",
                        
                    }}
                />
            </div>
        </Tooltip>

    );
};

export default CarritoIcono;
