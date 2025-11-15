import Icono from "componentes/atomos/General/Icono"
import Parrafo from "componentes/atomos/General/Parrafo";
import Titulo from "componentes/atomos/General/Titulo";

interface Props {
    icono: React.ReactElement<any>;    
    titulo : string;
    parrafo : string;
}

const contenedorStyle : React.CSSProperties = {
    backgroundColor: '#FFFFFF',
    borderRadius : 12,
    boxShadow : '0px 6px 12px rgba(0,0,0,0.08)',
    padding : "40px 30px",
    textAlign : 'center',
    display : 'flex',
    flexDirection : 'column',
    alignItems : 'center',
    flex : '1 1 280px',
    maxWidth : 350,
}



const InfoCard = ({icono, titulo, parrafo} : Props) => {
    return (
        <div style={contenedorStyle}>
            <Icono icon={icono} size={40} />

            <Titulo variante="item">{titulo}</Titulo>
            <Parrafo variante="item">{parrafo}</Parrafo>
        </div>
    )
}

export default InfoCard;