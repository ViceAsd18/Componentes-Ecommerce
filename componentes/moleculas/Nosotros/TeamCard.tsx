import Imagen from "componentes/atomos/General/Imagen";
import Titulo from "componentes/atomos/General/Titulo";
import Parrafo from "componentes/atomos/General/Parrafo";

interface Props {
    src: string;
    nombre: string;
    rol: string;
}

const cardStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: 200
};

const imageWrapperStyle: React.CSSProperties = {
    width: 120,
    height: 120,
    borderRadius: '50%',
    overflow: 'hidden',
    marginBottom: 15,
    border: '3px solid #f0f0f0'
};

const TeamCard = ({ src, nombre, rol }: Props) => {
    return (
        <div style={cardStyle}>
            <div style={imageWrapperStyle}>
                <Imagen src={src} alt={nombre} />
            </div>
            <Titulo variante="item" style={{ marginBottom: 5 }}>{nombre}</Titulo>
            <Parrafo variante="detalleSecundario" style={{ textAlign: 'center', margin: 0 }}>
                {rol}
            </Parrafo>
        </div>
    );
};

export default TeamCard;