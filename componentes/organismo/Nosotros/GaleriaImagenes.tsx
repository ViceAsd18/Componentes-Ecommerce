import React from "react";
import ContenedorSeccion from "../../atomos/General/ContenedorSeccion";
import TextGroup from "../../moleculas/General/TextGroup";
import Imagen from "../../atomos/General/Imagen";


const collageStyle: React.CSSProperties = {

    display: "grid",
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: 20,
    width: '100%',
    maxWidth: 1200,
    padding: '0 20px',

};

const imgContainer: React.CSSProperties = {
    height: 226,
    borderRadius: 8,
    overflow: 'hidden',
    width: '100%'
};

const firstImageTallStyle: React.CSSProperties = {
    ...imgContainer,
    gridRowEnd: 'span 2',
    height: 'auto',
    minHeight: 420,
};

const GaleriaImagenes = () => {
    return (
        <ContenedorSeccion variante="seccion" style={{ backgroundColor: '#FAFAFA' }}>
            <TextGroup
                titulo="El Corazón de HuertoHogar"
                parrafo=""
            />

            <div style={collageStyle}>
                <div style={firstImageTallStyle}>
                    <Imagen src="assets/img/nosotros/agricultora.jpg" alt="Agricultora" />
                </div>

                <div style={imgContainer}><Imagen src="assets/img/nosotros/manosytierra.jpg" alt="Manos planta" /></div>
                <div style={imgContainer}><Imagen src="assets/img/nosotros/gentecosechando.jpg" alt="Cosecha" /></div>
                <div style={imgContainer}><Imagen src="assets/img/nosotros/familiafeliz.jpg" alt="Caja verduras" /></div>


                <div style={imgContainer}><Imagen src="assets/img/nosotros/plantacionparras.jpg" alt="plantacion" /></div>
                <div style={imgContainer}><Imagen src="assets/img/nosotros/cosecha.jpg" alt="Granja" /></div>
                <div style={imgContainer}><Imagen src="assets/img/nosotros/sembrando.jpg" alt="Hombre Sembrando" /></div>
            </div>
        </ContenedorSeccion>
    );
};

export default GaleriaImagenes;