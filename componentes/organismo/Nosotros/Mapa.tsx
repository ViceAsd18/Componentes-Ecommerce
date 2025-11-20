import React from "react";
import ContenedorSeccion from "../../atomos/General/ContenedorSeccion";
import TextGroup from "../../moleculas/General/TextGroup";
import Imagen from "../../atomos/General/Imagen";
import {EnvironmentFilled} from "@ant-design/icons";



const mapaContainerStyle: React.CSSProperties = {
    backgroundColor: '#168B8D',
    borderRadius: 12,
    position: 'relative',
    width: '100%',
    height: 1000,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginTop: 40
};

const mapWrapperStyle: React.CSSProperties = {
    height: '95%',
    width: '100%',
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.9,
    filter: 'grayscale(1) brightness(0) invert(1)',
};

const ciudadesCardStyle: React.CSSProperties = {
    backgroundColor: 'rgba(255, 255, 255, 0.90)',
    borderRadius: 16,
    padding: '30px',
    position: 'absolute',
    top: '50%',
    right: '8%',
    transform: 'translateY(-50%)',
    boxShadow: '0 20px 40px rgba(0,0,0,0.15), 0 0 0 1px rgba(255,255,255,0.5) inset',
    backdropFilter: 'blur(12px)',
    zIndex: 10,
    minWidth: 280,
    maxWidth: 320
};

const listaCiudadesStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    marginTop: '15px'
};

const cardTitleStyle: React.CSSProperties = {
    fontFamily: 'Playfair Display, serif',
    color: '#168B8D',
    fontSize: '1.5rem',
    marginBottom: '10px',
    textAlign: 'center',
    borderBottom: '2px solid #e0e0e0',
    paddingBottom: '10px'
};

const itemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#444',
    fontSize: '1.05rem',
    fontWeight: 500,
    padding: '4px 8px',
    borderRadius: 6,
    backgroundColor: 'rgba(22, 139, 141, 0.05)',
    transition: 'all 0.3s ease'
};

const Mapa = () => {
    const ciudades = [
        "Santiago",
        "Valparaíso",
        "Viña del Mar",
        "Concepción",
        "Villarrica",
        "Puerto Montt"
    ];

    return (
        <ContenedorSeccion variante="seccion">
            <TextGroup
                titulo="Llegamos a tu ciudad"
                parrafo=""
            />

            <div style={mapaContainerStyle}>
                <div style={mapWrapperStyle}>
                    <Imagen
                        src="/assets/img/nosotros/mapachile.svg"
                        alt="Mapa de Chile"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            transform: 'translateX(-300px)'
                        }}
                    />
                </div>

                <div style={ciudadesCardStyle}>
                    <h3 style={cardTitleStyle}>Sucursales</h3>

                    <div style={listaCiudadesStyle}>
                        {ciudades.map((ciudad, index) => (
                            <div key={index} style={itemStyle}>
                                <EnvironmentFilled style={{ color: '#168B8D', fontSize: '1.2rem' }} />
                                <span>{ciudad}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </ContenedorSeccion>
    );
};

export default Mapa;