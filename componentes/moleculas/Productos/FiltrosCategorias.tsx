import { Button } from "antd";

interface Props {
    categorias: string[];
    onCategoriaSeleccionada: (categoria: string | null) => void;
    categoriaActiva?: string | null;
}

const FiltrosCategorias = ({ categorias, onCategoriaSeleccionada, categoriaActiva }: Props) => {
    return (
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", margin: "20px 0" }}>
            <Button
                type={!categoriaActiva ? "primary" : "default"}
                onClick={() => onCategoriaSeleccionada(null)}
            >
                Todos
            </Button>

            {categorias.map((cat) => (
                <Button
                    key={cat}
                    type={categoriaActiva === cat ? "primary" : "default"}
                    onClick={() => onCategoriaSeleccionada(cat)}
                >
                    {cat}
                </Button>
            ))}
        </div>
    );
};

export default FiltrosCategorias;
