import React, { useState } from 'react';
import { CalendarOutlined, ArrowRightOutlined } from '@ant-design/icons';

interface Props {
    imagen: string;
    categoria: string;
    titulo: string;
    fecha: string;
    onClick: () => void;
}

const CardRelacionada = ({ imagen, categoria, titulo, fecha, onClick }: Props) => {
    const [hover, setHover] = useState(false);

    const cardStyle: React.CSSProperties = {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        overflow: 'hidden',
        boxShadow: hover ? '0 10px 25px rgba(0,0,0,0.1)' : '0 4px 15px rgba(0,0,0,0.05)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        transform: hover ? 'translateY(-5px)' : 'translateY(0)',
        border: '1px solid #f0f0f0',
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
    };

    const imageContainerStyle: React.CSSProperties = {
        width: '100%',
        height: '200px',
        overflow: 'hidden',
        position: 'relative'
    };

    const imgStyle: React.CSSProperties = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        transition: 'transform 0.5s ease',
        transform: hover ? 'scale(1.1)' : 'scale(1)'
    };

    const contentStyle: React.CSSProperties = {
        padding: '25px',
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        justifyContent: 'space-between'
    };

    return (
        <div
            style={cardStyle}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={onClick}
        >
            <div style={imageContainerStyle}>
                <img src={imagen} alt={titulo} style={imgStyle} />
                <span style={{
                    position: 'absolute',
                    top: 15,
                    left: 15,
                    backgroundColor: '#168B8D',
                    color: '#fff',
                    padding: '4px 12px',
                    borderRadius: 4,
                    fontSize: '0.7rem',
                    fontWeight: 'bold',
                    textTransform: 'uppercase'
                }}>
                    {categoria}
                </span>
            </div>

            <div style={contentStyle}>
                <div>
                    <div style={{ fontSize: '0.8rem', color: '#888', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
                        <CalendarOutlined /> {fecha}
                    </div>

                    <h3 style={{
                        fontFamily: 'Playfair Display, serif',
                        fontSize: '1.2rem',
                        color: '#222',
                        lineHeight: 1.4,
                        marginBottom: 15,
                        fontWeight: 700
                    }}>
                        {titulo}
                    </h3>
                </div>

                <div style={{
                    color: '#168B8D',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    marginTop: 'auto'
                }}>
                    Leer artículo <ArrowRightOutlined />
                </div>
            </div>
        </div>
    );
};

export default CardRelacionada;