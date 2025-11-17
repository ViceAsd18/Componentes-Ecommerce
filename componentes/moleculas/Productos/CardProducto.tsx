import { Card, Tag, Button } from "antd";
import { ShoppingCartOutlined, WarningOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";

interface Producto {
    id: string;
    nombre: string;
    precio: number;
    stock: number;
    stockCritico?: number;
    imagen?: string[];
}

interface Props {
    producto: Producto;
    onClick?: (producto: Producto) => void;
}



const CardProducto = ({ producto, onClick }: Props) => {
    const { nombre, precio, stock, imagen } = producto;

    const navigate = useNavigate();


    const handleClick = () => {
        navigate(`/detalle_producto/${producto.id}`);
    };


    return (
        <Card
            hoverable
            cover={
                <img
                    alt={nombre}
                    src={imagen && imagen.length > 0 ? imagen[0] : "https://via.placeholder.com/250x200?text=Producto"}
                    style={{ objectFit: "cover", height: 200, borderTopLeftRadius: 12, borderTopRightRadius: 12 }}
                    onClick={handleClick}
                />
            }
            style={{
                borderRadius: 12,
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                width: 250,
                margin: 10,
                transition: "all 0.3s ease",
            }}
            onClick={() => onClick && onClick(producto)}
        >
            <Card.Meta
                title={nombre}
                description={
                    <div style={{ marginTop: 8 }}>
                        <p style={{ margin: 0, fontWeight: 600 }}>Precio: ${precio.toFixed(2)}</p>
                        <p style={{ margin: 0 }}>
                            Stock: {stock}{" "}
                        </p>
                    </div>
                }
            />
            <Button
                type="primary"
                icon={<ShoppingCartOutlined />}
                style={{ marginTop: 10, width: "100%", borderRadius: 8 }}
            >
                Agregar
            </Button>
        </Card>
    );
};

export default CardProducto;
