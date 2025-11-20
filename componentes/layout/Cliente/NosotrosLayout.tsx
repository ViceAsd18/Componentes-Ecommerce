import ClienteLayout from "./ClienteLayout"
import Hero from "componentes/organismo/Home/Hero";
import HeroNosotros from "../../organismo/Nosotros/HeroNosotros";
import Proposito from "../../organismo/Nosotros/Proposito";
import GaleriaImagenes from "../../organismo/Nosotros/GaleriaImagenes";
import Equipo from "../../organismo/Nosotros/Equipo";
import Mapa from "../../organismo/Nosotros/Mapa";
const ImgBGHeroNosotros = "assets/home/banner-nosotros.jpg"

const NosotrosLayout = () => {
    return (
        <ClienteLayout>
            <Hero
                titulo="Nuestra historia: Del campo a tu Hogar"
                subtitulo="Conectamos a las familias chilenas con la frescura y autenticidad de los productos de nuestros agricultores locales"
                backgroundImage={ImgBGHeroNosotros}
            />
            <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
                <Proposito />
                <GaleriaImagenes />
                <Mapa />
                <Equipo />
            </div>

        </ClienteLayout>
    )
}

export default NosotrosLayout;