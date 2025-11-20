import ClienteLayout from "./ClienteLayout";
import Destacados from "../../organismo/Blog/Destacados";

const BlogLayout = () => {
    return (
        <ClienteLayout>
            <div style={{
                width: "100%",
                maxWidth: 1200,
                margin: "0 auto",
                padding: "40px 20px", // Un poco de aire arriba y a los lados
                display: "flex",
                flexDirection: "column",
                gap: 60 // Espacio si agregas más secciones abajo después
            }}>

                {/* Sección de Mosaico (Bento Grid) */}
                <Destacados />

                {/* AQUI podrías poner otro organismo en el futuro,
                    ej: <ListaArticulos /> para el resto de noticias */}

            </div>
        </ClienteLayout>
    )
}

export default BlogLayout;