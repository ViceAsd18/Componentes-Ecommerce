import React, { useState } from 'react';
import { CalendarOutlined } from '@ant-design/icons';
import Boton from "../General/Boton";

interface Props {
    imagen: string;
    categoria: string;
    titulo: string;
    fecha: string;
    descripcion?: string;
    esPrincipal?: boolean;
    linkTo: string;
}

const BlogCard = ({ imagen, categoria, titulo, fecha, descripcion, esPrincipal = false, linkTo }: Props) => {
    const [hover, setHover] = useState(false);

    const cardStyle: React.CSSProperties = {
        position: 'relative',
        width: '100%',
        height: '100%',
        borderRadius: 16,
        overflow: 'hidden',

        boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        minHeight: esPrincipal ? 500 : 240,
    };

    const imagenBgStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundImage: `url(${imagen})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'transform 0.6s ease',
        transform: hover ? 'scale(1.05)' : 'scale(1)',
        zIndex: 1
    };

    const overlayStyle: React.CSSProperties = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'linear-gradient(to top, rgba(0,0,0,0.9) 10%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0) 100%)',
        zIndex: 2
    };

    const contenidoStyle: React.CSSProperties = {
        position: 'relative',
        zIndex: 3,
        padding: esPrincipal ? '40px' : '25px',
        color: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 10
    };

    const badgeStyle: React.CSSProperties = {
        backgroundColor: '#168B8D',
        color: '#fff',
        padding: '4px 12px',
        borderRadius: 4,
        fontSize: '0.75rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div style={imagenBgStyle}></div>
            <div style={overlayStyle}></div>

            <div style={contenidoStyle}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 15, marginBottom: 5 }}>
                    <span style={badgeStyle}>{categoria}</span>
                    <span style={{ fontSize: '0.85rem', opacity: 0.9, display: 'flex', alignItems: 'center', gap: 6 }}>
                        <CalendarOutlined /> {fecha}
                    </span>
                </div>

                <h3 style={{
                    fontFamily: 'Playfair Display, serif',
                    fontSize: esPrincipal ? '2.2rem' : '1.4rem',
                    margin: 0,
                    lineHeight: 1.2,
                    textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}>
                    {titulo}
                </h3>

                {esPrincipal && descripcion && (
                    <p style={{ fontSize: '1.1rem', opacity: 0.9, maxWidth: '85%', margin: '10px 0 20px 0' }}>
                        {descripcion}
                    </p>
                )}

                <div style={{
                    marginTop: esPrincipal ? 10 : 15,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <Boton
                        to={linkTo}
                        variante="secundario"
                        style={{
                            padding: esPrincipal ? '12px 30px' : '8px 20px',
                            fontSize: esPrincipal ? '1rem' : '0.9rem',
                            width:'50%'
                        }}
                    >
                        Ver más...
                    </Boton>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;