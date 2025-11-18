import React, { useState } from "react";
import CantidadSelector from "componentes/atomos/DetalleProducto/CantidadSelector";
import Boton from "componentes/atomos/General/Boton";
import { Typography } from "antd";

const { Text } = Typography;

interface Props {
    stock? : number
    onAgregar? : (cantidad : number) => void;
    style? : React.CSSProperties;
}

const DetalleAcciones = ({ stock = 20, onAgregar, style } : Props) => {

    const [cantidad, setCantidad] = useState(1);

    const handleAgregar = () => {
        if (onAgregar) onAgregar(cantidad);
    }

    return (
        <div style={{ display : 'flex', flexDirection : 'column', gap : 16, ...style}}>
            <div style={{display : 'flex', alignItems : 'center', gap : 12}}>
                <CantidadSelector
                    value={cantidad}
                    min={1}
                    max={stock}
                    onChange={(v) => setCantidad(v)}
                />

                <Text type="secondary">Stock: {stock}</Text>
            </div>

            <Boton onClick={handleAgregar} variante="carrito">Agregar</Boton>
        </div>
    )

}

export default DetalleAcciones