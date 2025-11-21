import SearchBar from "componentes/moleculas/Productos/SearchBar";
import TextGroup from "componentes/moleculas/General/TextGroup";
import FiltrosCategorias from "componentes/moleculas/Productos/FiltrosCategorias";
import CardProducto from "componentes/moleculas/Productos/CardProducto";
import { Pagination } from "antd";
import { useState } from "react";
import { categorias } from "data/categoria"; //TEMPORAL HASTA CONEXION API
import axios from "axios";
import { useNavigate } from "react-router";
import { useEffect } from "react";

import type { Producto } from "models/Producto";


const CatalogoProductos = () => {
    const navigate = useNavigate();

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState<string | null>(null);
    const [busqueda, setBusqueda] = useState("");
    const [orden, setOrden] = useState<string | null>(null);
    const [page, setPage] = useState(1);
    const pageSize = 8;

    const [productosData, setProductos] = useState<Producto[]>([]);
    useEffect(() => {
        const obtenerProductos = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/productos');
            setProductos(response.data);
        } catch (error) {
            console.error("Error al obtener los productos:", error);
        }
    };
    obtenerProductos();
    }, []); 




    const handleCategoriaSeleccionada = (categoria: string | null) => {
        setCategoriaSeleccionada(categoria);
        setPage(1);
    };

    /*
    const filtradosPorCategoria = categoriaSeleccionada
        ? productosData.filter(p => p.categoria === Number(categoriaSeleccionada))
        : productosData;

    //Filtrar por búsqueda
    const filtradosPorBusqueda = filtradosPorCategoria.filter(p =>
        p.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );
    */



    /*
    const productosOrdenados = [...filtradosPorBusqueda].sort((a, b) => {
        switch (orden) {
            case "az":
                return a.nombre.localeCompare(b.nombre);
            case "za":
                return b.nombre.localeCompare(a.nombre);
            case "precioAsc":
                return a.precio - b.precio;
            case "precioDesc":
                return b.precio - a.precio;
            default:
                return 0;
        }
    });
    */

    //Paginación
    const startIndex = (page - 1) * pageSize;
    const productosPagina = productosData.slice(startIndex, startIndex + pageSize);

    return (
        <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto", padding: "0px 20px" }}>
            <TextGroup 
                align="left" 
                titulo="Nuestros Productos Frescos"
                parrafo="Directo del Huerto a tu Hogar"
            />

            <SearchBar
                onBuscar={valor => { setBusqueda(valor); setPage(1); }}
                onOrdenar={valor => setOrden(valor)}
            />

            <FiltrosCategorias 
                categorias={categorias}
                categoriaActiva={categoriaSeleccionada}
                onCategoriaSeleccionada={handleCategoriaSeleccionada}
            />



            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20 }}>
                {productosPagina.map((producto) => (
                    <CardProducto
                        key={producto.id}
                        producto={producto}
                        onClick={() => navigate(`/detalle_producto/${producto.id}`)}
                        imagenes={["1.jpg", "2.jpg", "3.jpg"]} 

                    />
                ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: 30 }}>
                <Pagination
                    current={page}
                    total={productosData.length}
                    pageSize={pageSize}
                    onChange={(p) => setPage(p)}
                    showSizeChanger={false}
                />
            </div>
        </div>
    );
};

export default CatalogoProductos;
