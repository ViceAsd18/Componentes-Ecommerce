import { Card } from "antd";
import { useNavigate } from "react-router";
import Boton from "componentes/atomos/General/Boton";




import type { Producto } from 'models/Producto';

interface Props {
    producto: Producto;
    onClick?: (producto: Producto) => void;
    imagenes? : string[];
}


const CardProducto = ({ producto, onClick }: Props) => {
    const { nombre, precio, stock} = producto;

    const navigate = useNavigate();


    const handleClick = () => {
        navigate(`/detalle_producto/${producto.id}`);
    };

    const baseUrlImagen = "/assets/img/productos/";
    const img1 = baseUrlImagen + producto.nombre.toLowerCase().replace(/\s+/g, '-') + "/" + '1.jpg';


    return (
        <Card
            hoverable
            cover={ 
                <img
                    alt={nombre}
                    src={img1}
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
                        <p style={{ margin: 0, fontWeight: 600 }}>
                            Precio: ${Number(precio).toFixed(2)}
                        </p>

                        <p style={{ margin: 0 }}>
                            Stock: {stock}{" "}
                        </p>
                    </div>
                }
            />
            <Boton
                variante="carrito" 
                onClick={(e) => {
                    e.stopPropagation();
                    console.log(`Agregar ${producto.nombre} al carrito`);
                }}
                style={{
                    background : "#1677ff",
                    marginTop : 10,
                    height : 35
                }}    
            >
                Agregar
            </Boton>


        </Card>
    );
};

export default CardProducto;
