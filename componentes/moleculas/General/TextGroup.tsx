import Parrafo from "componentes/atomos/General/Parrafo";
import Titulo from "componentes/atomos/General/Titulo";

interface Props {
    titulo : string;
    parrafo : string;
    align? : 'left' | 'center' | 'right';
}

const contenedorStyle : React.CSSProperties = {
    maxWidth : '1200px',
}


const TextGroup = ({ titulo, parrafo, align: alingn = 'center'} : Props) => {
    return (
        <div style={{...contenedorStyle, textAlign: alingn}}>
            <Titulo variante="seccion" style={{marginBottom : 15}}>{titulo}</Titulo>
            <Parrafo variante="item">{parrafo}</Parrafo>
        </div>
    )
}   
export default TextGroup;
