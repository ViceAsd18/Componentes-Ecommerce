import React from "react";
import ContenedorSeccion from "componentes/atomos/General/ContenedorSeccion";
import TextGroup from "../../moleculas/General/TextGroup";
import TeamCard from "../../moleculas/Nosotros/TeamCard";


const teamGridStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    gap: 60,
    flexWrap: 'wrap',
    marginTop: 20
};

const EquipoSection = () => {
    return (
        <ContenedorSeccion variante="seccion">
            <TextGroup
                titulo="El equipo detrás del proyecto"
                parrafo=""
            />

            <div style={teamGridStyle}>
                <TeamCard
                    src="https://i.pravatar.cc/300?img=11"
                    nombre="Vicente Ramírez Garay"
                    rol="Frontend"
                />
                <TeamCard
                    src="https://i.pravatar.cc/300?img=5"
                    nombre="Camila Soto Rojas"
                    rol="Fullstack"
                />
                <TeamCard
                    src="https://i.pravatar.cc/300?img=3"
                    nombre="Joaquín Muñoz"
                    rol="Backend"
                />
            </div>
        </ContenedorSeccion>
    );
};

export default EquipoSection;