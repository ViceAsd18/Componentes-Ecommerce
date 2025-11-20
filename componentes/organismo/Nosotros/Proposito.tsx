import React from "react";
import { SafetyCertificateOutlined, HeartOutlined, GlobalOutlined } from "@ant-design/icons";

import ContenedorSeccion from "componentes/atomos/General/ContenedorSeccion";
import TextGroup from "../../moleculas/General/TextGroup";
import InfoCard from "../../moleculas/General/InfoCard";


const gridStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 30,
    width: '100%',
    maxWidth: 1200
};

const PropositoSection = () => {
    return (
        <ContenedorSeccion variante="seccion">
            <TextGroup
                titulo="Nuestro Propósito"
                parrafo=""
            />

            <div style={gridStyle}>
                <InfoCard
                    icono={<SafetyCertificateOutlined />}
                    titulo="Frescura Garantizada"
                    parrafo="Productos cosechados y entregados en su punto óptimo de frescura, directo del campo."
                />

                <InfoCard
                    icono={<HeartOutlined />}
                    titulo="Apoyo Local"
                    parrafo="Comprometidos con el desarrollo y el comercio justo para los pequeños agricultores de Chile."
                />

                <InfoCard
                    icono={<GlobalOutlined />}
                    titulo="Sostenibilidad"
                    parrafo="Prácticas agrícolas responsables que cuidan nuestra tierra para las futuras generaciones."
                />
            </div>
        </ContenedorSeccion>
    );
};

export default PropositoSection;