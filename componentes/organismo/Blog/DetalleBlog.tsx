import React from 'react';
import { CalendarOutlined, UserOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
import ContenedorSeccion from "../../atomos/General/ContenedorSeccion";
import CardRelacionada from "../../moleculas/Blog/CardSugeridos";
import Boton from "../../atomos/General/Boton";


interface NoticiaResumen {
    id: number;
    titulo: string;
    categoria: string;
    fecha: string;
    imagen: string;
}

interface Props {
    imagen: string;
    categoria: string;
    titulo: string;
    fecha: string;
    autor: string;
    contenidoHTML: React.ReactNode;
    noticiasSimilares: NoticiaResumen[];
}

const cuerpoArticuloStyle: React.CSSProperties = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '60px 20px 20px 20px',
    fontSize: '1.15rem',
    lineHeight: '1.8',
    color: '#2c3e50',
    fontFamily: 'Georgia, serif',
    textAlign: 'left'
};

const DetalleBlog = ({ imagen, categoria, titulo, fecha, autor, contenidoHTML, noticiasSimilares }: Props) => {
    const navigate = useNavigate();

    return (
        <div style={{ width: '100%', backgroundColor: '#fff' }}>

            {/* 1. HEADER (Sin cambios) */}
            <ContenedorSeccion variante="banner" backgroundImage={imagen} style={{ minHeight: '65vh' }}>
                <div style={{ maxWidth: 900, textAlign: 'center', color: '#fff', padding: 20 }}>
                    <div style={{ marginBottom: 30 }}>
                         <span onClick={() => navigate('/blogs')} style={{ cursor: 'pointer', fontSize: '0.9rem', opacity: 0.9, display: 'inline-flex', alignItems: 'center', gap: 8, borderBottom: '1px solid rgba(255,255,255,0.5)', paddingBottom: 3 }}>
                            <ArrowLeftOutlined /> VOLVER AL BLOG
                         </span>
                    </div>
                    <span style={{ backgroundColor: '#168B8D', padding: '6px 16px', borderRadius: 50, fontSize: '0.75rem', fontWeight: 800, letterSpacing: '1px', textTransform: 'uppercase', display: 'inline-block', marginBottom: 15, boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }}>
                        {categoria}
                    </span>
                    <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 'clamp(2.5rem, 5vw, 3.8rem)', margin: '10px 0 20px 0', lineHeight: 1.1, fontWeight: 700, textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>
                        {titulo}
                    </h1>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', fontSize: '0.95rem', fontWeight: 500, opacity: 0.95, fontFamily: 'Montserrat, sans-serif' }}>
                        <span><CalendarOutlined /> {fecha}</span>
                        <span><UserOutlined /> {autor}</span>
                    </div>
                </div>
            </ContenedorSeccion>

            <article style={cuerpoArticuloStyle}>
                {contenidoHTML}
            </article>

            <div style={{ backgroundColor: '#f9f9f9', padding: '80px 20px', marginTop: 60 }}>
                <div style={{ maxWidth: 1100, margin: '0 auto' }}>

                    <div style={{ textAlign: 'center', marginBottom: 50 }}>
                        <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '2.2rem', color: '#111', marginBottom: 10 }}>
                            Sigue leyendo
                        </h3>
                        <p style={{ color: '#666' }}>Más artículos seleccionados para ti</p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: 30
                    }}>
                        {noticiasSimilares.map((noticia) => (
                            <div key={noticia.id} style={{ height: 420 }}>
                                <CardRelacionada
                                    titulo={noticia.titulo}
                                    categoria={noticia.categoria}
                                    fecha={noticia.fecha}
                                    imagen={noticia.imagen}
                                    onClick={() => {
                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                        navigate(`/blog/${noticia.id}`);
                                    }}
                                />
                            </div>
                        ))}
                    </div>

                    <div style={{ textAlign: 'center', marginTop: 60 }}>
                        <Boton onClick={() => navigate('/blogs')} variante="secundario" style={{ borderColor: '#168B8D', color: '#168B8D', padding: '12px 30px' }}>
                            Ver todas las noticias
                        </Boton>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default DetalleBlog;