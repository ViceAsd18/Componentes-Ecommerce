import { Typography } from "antd";
const { Paragraph } = Typography;

interface Props {
    children: React.ReactNode;
    style?: React.CSSProperties;
    variante? : 'banner' | 'seccion' | 'item'
}

const variantes: Record<string, React.CSSProperties> = {
    banner : {
        fontFamily : 'PlayFair Display, serif',
        fontSize : '1.5rem',
        color: "rgba(255, 255, 255, 0.7)",
        margin : 20,
        textAlign : 'center'
    },

    seccion : {
        color : 'rgba(0,0,0,0.75',
        fontSize : '1.2rem',
        lineHeight : 1.8,
        marginTop : 20,
        marginBottom : 40,
        maxWidth : 900,
        marginLeft : 'auto',
        marginRight : 'auto',
        textAlign : 'center'
    },

    item : {
        fontSize : '1rem',
        color : '#444',
        lineHeight : '1.6em',
        marginBottom : 10,
    }
}

const Parrafo = ({ children, style, variante = 'item' }: Props) => {
    return (
        <Paragraph style={{...variantes[variante], ...style}}>
            {children}  
        </Paragraph>
    )
}

export default Parrafo;