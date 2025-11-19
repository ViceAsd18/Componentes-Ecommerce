import { Tabs } from "antd";
import Parrafo from "componentes/atomos/General/Parrafo";

interface Props {
    descripcionLarga: string;
}
//Agregar Info Nutricional y Recetas en el futuro
const TabsDetalleProducto = ({ descripcionLarga }: Props) => {
    return (
        <div style={{ marginTop: 24, width: "100%" }}>
            <Tabs defaultActiveKey="1">
                <Tabs.TabPane tab="Descripción" key="1">
                    <Parrafo variante="detalleSecundario">
                        {descripcionLarga}
                    </Parrafo>
                </Tabs.TabPane>
            </Tabs>
        </div>
    );
};

export default TabsDetalleProducto;
