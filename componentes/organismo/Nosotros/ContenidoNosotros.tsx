import React from "react";
import HeroNosotros from "./HeroNosotros";
import Proposito from "./Proposito";
import GaleriaImagenes from "./GaleriaImagenes";
import Equipo from "./Equipo";

const ContenidoNosotros = () => {
    return (
        <div style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>

            <div style={{ width: "100%" }}>
                <HeroNosotros />
            </div>


            <div style={{
                width: "100%",
                maxWidth: 1200,
                margin: "0 auto",
                padding: "0px 20px",
                display: "flex",
                flexDirection: "column",
                gap: 60,
                marginBottom: 80
            }}>
                <Proposito />
                <GaleriaImagenes />
                <Equipo />
            </div>
        </div>
    );
};

export default ContenidoNosotros;