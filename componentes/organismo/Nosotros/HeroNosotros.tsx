import ContenedorSeccion from "componentes/atomos/General/ContenedorSeccion";
import BannerText from "../../moleculas/General/BannerText";

const HeroSection = () => {
    return (
        <ContenedorSeccion
            variante="banner"
            backgroundImage="assets/img/nosotros/heronosotros.jpg"
        >
            <BannerText
                titulo="Nuestra Historia: Del Campo a tu Hogar"
                subtitulo="Conectamos a las familias chilenas con la frescura y autenticidad de los productos de nuestros agricultores locales."
            />
        </ContenedorSeccion>
    );
};

export default HeroSection;