import TextGroup from "componentes/moleculas/General/TextGroup";
import InfoCard from "componentes/moleculas/General/InfoCard";

import { TeamOutlined } from "@ant-design/icons";
import { AppleOutlined } from "@ant-design/icons";
import { CloudSyncOutlined } from "@ant-design/icons";
import ContenedorSeccion from "componentes/atomos/General/ContenedorSeccion";

const contenedorCards: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "stretch",
    gap: 25,
    flexWrap: "wrap",
    width: "100%",
};

const Informativa = () => {
    return (
        
        <ContenedorSeccion variante="seccion" style={{background : '#FFFFFF'}}>
            <TextGroup
            titulo="Conectamos a las familias chilenas con el campo"
            parrafo="Nuestra misión es llevar la autenticidad y el sabor de los productos locales a tu hogar, 
            apoyando a los agricultores de Chile y promoviendo un estilo de vida saludable y sostenible."
            />

            <div style={contenedorCards}>
                <InfoCard 
                    icono={<AppleOutlined />}
                    titulo="100% Fresco"
                    parrafo="Cosechado y entregado en su punto óptimo de madurez"
                />

                <InfoCard 
                    icono={<CloudSyncOutlined />}
                    titulo="Sostenible"
                    parrafo="Prácticas agricolas que cuidan nuestro medio ambiente"
                />

                <InfoCard 
                    icono={<TeamOutlined />}
                    titulo="Apoyo Local"
                    parrafo="Comercio justo que beneficia a las comunidades agrícolas"
                />
            </div>
        </ContenedorSeccion>

    );
};

export default Informativa;
