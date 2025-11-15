import BannerText from "componentes/moleculas/General/BannerText";
import HeroButtonsGroup from "componentes/moleculas/Home/Hero/HeroButtonGroup";
import ContenedorSeccion from "componentes/atomos/General/ContenedorSeccion";


interface Props {
    titulo : string;
    subtitulo : string;
    backgroundImage? : string;
    mostrarBotones? : boolean;
}

const Hero = ({ titulo, subtitulo, backgroundImage, mostrarBotones = false } : Props) => {
    return (
        <ContenedorSeccion backgroundImage={backgroundImage} variante="banner">
            <BannerText
                titulo={titulo}
                subtitulo={subtitulo}
            ></BannerText>
            {mostrarBotones && <HeroButtonsGroup></HeroButtonsGroup>}
        </ContenedorSeccion>

    );
};

export default Hero;    
