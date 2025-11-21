import { UserOutlined } from "@ant-design/icons";
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

const UsuarioIcono = () => {
    const navigate = useNavigate();

    const irALogin = () => {
        navigate("/login");
    };

    return (
        <Tooltip
            title="Iniciar Sesión"
            overlayInnerStyle={{ fontSize: "12px", padding: "4px 8px", minHeight: "auto" }}
        >
            <div style={contenedorStyle} onClick={irALogin}>
                <UserOutlined
                    style={{
                        fontSize: 20,
                        color: "#2E8B57",
                    }}
                />
            </div>
        </Tooltip>
    );
};

export default UsuarioIcono;