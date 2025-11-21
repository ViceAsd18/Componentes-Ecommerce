import React from 'react';
import ContenedorSeccion from "../../atomos/General/ContenedorSeccion";
import TextGroup from "../../moleculas/General/TextGroup";
import BlogCard from "../../atomos/Blog/BlogCard";

const noticias = [
    {
        id: 1,
        titulo: "5 Consejos Esenciales del Riego",
        categoria: "Tendencias",
        fecha: "02 Oct, 2025",
        descripcion: "Aprende la frecuencia ideal y las técnicas clave para mantener tus plantas sanas sin desperdiciar agua.",
        imagen: "assets/img/blog/regando.jpg"
    },
    {
        id: 2,
        titulo: "El Arte de Cosechar Tomates: Guía Completa",
        categoria: "Novedades",
        fecha: "20 Oct, 2025",
        imagen: "assets/img/blog/tomate.jpg"
    },
    {
        id: 3,
        titulo: "Taller de Huerto Urbano",
        categoria: "Eventos",
        fecha: "18 Oct, 2025",
        imagen: "assets/img/blog/huertourbano.jpg"
    },
    {
        id: 4,
        titulo: "Receta: Salsa de Tomate Casera",
        categoria: "Novedades",
        fecha: "15 Oct, 2025",
        imagen: "assets/img/blog/salsatomate.jpg"
    }
];

const Destacados = () => {
    const principal = noticias[0];
    const superior = noticias[1];
    const inferior1 = noticias[2];
    const inferior2 = noticias[3];


    const layoutGrid: React.CSSProperties = {
        display: 'grid',
        gridTemplateColumns: '1.4fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        gap: '20px',
        height: '600px',
        marginTop: 30
    };

    return (
        <ContenedorSeccion variante="seccion">
            <TextGroup
                titulo="Actualidad HuertoHogar"
                parrafo="Novedades, recetas y eventos de nuestra comunidad."
            />

            <div style={layoutGrid}>


                <div style={{ gridColumn: '1 / 2', gridRow: '1 / 3' }}>
                    <BlogCard
                        esPrincipal={true}
                        {...principal}
                        linkTo={`/blog/${principal.id}`}
                    />
                </div>


                <div style={{ gridColumn: '2 / 4', gridRow: '1 / 2' }}>
                    <BlogCard
                        {...superior}
                        linkTo={`/blog/${superior.id}`}
                    />
                </div>


                <div style={{ gridColumn: '2 / 3', gridRow: '2 / 3' }}>
                    <BlogCard
                        {...inferior1}
                        linkTo={`/blog/${inferior1.id}`}
                    />
                </div>


                <div style={{ gridColumn: '3 / 4', gridRow: '2 / 3' }}>
                    <BlogCard
                        {...inferior2}
                        linkTo={`/blog/${inferior2.id}`}
                    />
                </div>

            </div>
        </ContenedorSeccion>
    );
};

export default Destacados;