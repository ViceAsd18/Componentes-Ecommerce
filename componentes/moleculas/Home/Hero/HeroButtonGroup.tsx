import { Space } from "antd"
import Boton from "componentes/atomos/General/Boton"



const HeroButtonGroup = () => {
    return (
        <Space size={"middle"}>
            <Boton variante="primario" to="/productos">Comprar ahora</Boton>
            <Boton variante="secundario" to="/nosotros">Conócenos</Boton>
        </Space>
    )
}

export default HeroButtonGroup