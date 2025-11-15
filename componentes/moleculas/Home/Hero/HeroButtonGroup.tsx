import { Space } from "antd"
import BotonPrimario from "componentes/atomos/General/BotonPrimario"
import BotonSecundario from "componentes/atomos/General/BotonSecundario"



const HeroButtonGroup = () => {
    return (
        <Space size={"middle"}>
            <BotonPrimario>Comprar ahora</BotonPrimario>
            <BotonSecundario>Ver más</BotonSecundario>
        </Space>
    )
}

export default HeroButtonGroup