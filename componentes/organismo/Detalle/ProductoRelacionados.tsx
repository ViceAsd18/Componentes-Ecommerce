import CardProducto from "componentes/moleculas/Productos/CardProducto";
import Titulo from "componentes/atomos/General/Titulo";
import { productos } from "data/productos";
import ContenedorSeccion from "componentes/atomos/General/ContenedorSeccion";

interface Props {
    categoria: string;
    productoId: string;
}

const ProductosRelacionados = ({ categoria, productoId }: Props) => {

    //Filtra productos de la misma categoría, excluye el actual y toma 4
    //Combiar por el endpoint mas adelante
    const relacionados = productos
        .filter((p) => p.categoria === categoria && p.id !== productoId)
        .slice(0, 4);

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
