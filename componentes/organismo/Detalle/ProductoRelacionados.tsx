import CardProducto from "componentes/moleculas/Productos/CardProducto";
import Titulo from "componentes/atomos/General/Titulo";
import ContenedorSeccion from "componentes/atomos/General/ContenedorSeccion";
import type { Producto } from "models/Producto";
import axios from "axios";
import { useEffect, useState } from "react";

interface Props {
    productoId: string;
    categoria: number
}

const ProductosRelacionados = ({ categoria, productoId }: Props) => {

    const [productos, setProductos] = useState<Producto[]>([]);

    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const res = await axios.get("http://localhost:3000/api/v1/productos");
                setProductos(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        obtenerProductos();
    }, []);


    //La wea no funciona
    const relacionados = productos.filter((p => p.categoria === categoria));



    return (


        <ContenedorSeccion variante="seccion" align="start" style={{ padding : 0, marginTop : 50}}>
            <Titulo variante = 'seccion'>
                También te podría interesar
            </Titulo>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                    gap: 24,
                    width : '100%',
                    marginTop : 20
                }}
            >
                {relacionados.map((p) => (
                    <CardProducto key={p.id} producto={p} />
                ))}
            </div>
        </ContenedorSeccion>
    );
};

export default ProductosRelacionados;
