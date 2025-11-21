import { CarOutlined } from "@ant-design/icons";
import { Tooltip } from "antd";
import { useNavigate } from "react-router";

const contenedorStyle: React.CSSProperties = {
    backgroundColor: "rgba(46, 139, 87, 0.1)",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
};

const PedidosIcono = () => {
    const navigate = useNavigate();

    const irAPedidos = () => {
        navigate("/mis-pedidos");
    };

    return (
        <Tooltip
            title="Mis Pedidos"
            overlayInnerStyle={{ fontSize: "12px", padding: "4px 8px", minHeight: "auto" }}
        >
            <div style={contenedorStyle} onClick={irAPedidos}>
                <CarOutlined
                    style={{
                        fontSize: 20,
                        color: "#2E8B57",
                    }}
                />
            </div>
        </Tooltip>
    );
};

export default PedidosIcono;