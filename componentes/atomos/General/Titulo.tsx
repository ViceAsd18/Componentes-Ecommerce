import { Typography } from "antd"
const { Title } = Typography

interface Props {
    children : React.ReactNode,
    variante? : 'banner' | 'seccion' | 'item'
    style? : React.CSSProperties
}

const variantes: Record<string, { level: 1 | 2 | 3 | 4 | 5; style: React.CSSProperties }> = {

    banner: {
        level: 1,
        style : {
            color : '#FFFFFF',
            fontFamily : 'Playfair Display, serif',
            fontSize : 'calc(2em + 2vw)',
            fontWeight : 'bold',
            lineHeight : 1.2,
            marginBottom : 0
        },
    },

    seccion : {
        level: 2,
        style : {
            fontFamily : 'Playfair Display, serif',
            fontSize : 'calc(1.5em + 1.5vw)',
            color : '#8B4513',
            marginBottom : 40,
            fontWeight : 'bold',
        },
    },

    item : {
        level: 3,
        style : {
            fontSize : '1.3rem',
            marginBottom : 10,
            marginTop : 10,
            color : '#222',
            fontWeight : 600
        }
    }
}


const Titulo = ({children, style, variante = 'item'} : Props) => {
    
    const varianteSeleccionada = variantes[variante]
    
    return (
        <Title level={varianteSeleccionada.level} style={{...varianteSeleccionada.style, ...style}}>
            {children}
        </Title>
    )
}

export default Titulo