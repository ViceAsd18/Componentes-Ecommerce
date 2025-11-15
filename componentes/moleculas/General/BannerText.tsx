import Titulo from "componentes/atomos/General/Titulo";
import Parrafo from "componentes/atomos/General/Parrafo";

interface Props {
    titulo: string;
    subtitulo: string;
}

const contenedorStyle : React.CSSProperties = {
    maxWidth : '1400px',
    textAlign : 'center',
}


const BannerText = ({ titulo, subtitulo }: Props) => {
    return (
        <div style={contenedorStyle}>
            <Titulo variante="banner">{titulo}</Titulo>
            <Parrafo variante="banner">{subtitulo}</Parrafo>
        </div>
    );
};

export default BannerText;
    