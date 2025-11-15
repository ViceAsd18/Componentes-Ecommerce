import Parrafo from "componentes/atomos/General/Parrafo";
import Titulo from "componentes/atomos/General/Titulo";

interface Props {
    titulo : string;
    parrafo : string;
}

const contenedorStyle : React.CSSProperties = {
    maxWidth : '1200px',
    textAlign : 'center',
    margin : '0px auto',
    padding : '0px 20px'
}

const parrafoStyle : React.CSSProperties = {
    fontSize : '1.2em',
    color : 'rgba(0,0,0,0.75)',
    lineHeight : '1.8em',
    marginTop : 20,
    marginBottom : 40,
    maxWidth : '900px',
    marginLeft: "auto",
    marginRight: "auto",
}

const TextGroup = ({ titulo, parrafo} : Props) => {
    return (
        <div style={contenedorStyle}>
            <Titulo variante="seccion">{titulo}</Titulo>
            <Parrafo style={parrafoStyle}>{parrafo}</Parrafo>
        </div>
    )
}   
export default TextGroup;
