import { Space } from "antd"
import BtnLink from "componentes/atomos/BarraNavegacion/BtnLink"

interface Props {
    direction?: "horizontal" | "vertical";
}

const ButtonGrupoLinks = ({ direction = "horizontal" }: Props) => {
    return (
        <Space direction={direction} size={direction === "horizontal" ? 'large' : 'middle'} style={{ width: direction === "vertical" ? "100%" : "auto" }}>
            <BtnLink texto="Home" ruta="/"/>
            <BtnLink texto="Productos" ruta="/productos"/>
            <BtnLink texto="Nosotros" ruta="/nosotros"/>
            <BtnLink texto="Blogs" ruta="/blogs"/>
            <BtnLink texto="Contacto" ruta="/contacto"/>
        </Space>
    )
}

export default ButtonGrupoLinks
