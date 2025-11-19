import React, { useState } from "react";
import CantidadSelector from "componentes/atomos/DetalleProducto/CantidadSelector";
import Boton from "componentes/atomos/General/Boton";
import Parrafo from "componentes/atomos/General/Parrafo";

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
            
            <Parrafo variante='detalleSecundario'>Stock: {stock} kg disponible</Parrafo>
            <div style={{display : 'flex', alignItems : 'center', gap : 40}}>
                <CantidadSelector
                    value={cantidad}
                    min={1}
                    max={stock}
                    onChange={(v) => setCantidad(v)}
                />
                <Boton onClick={handleAgregar} variante="carrito">Agregar</Boton>

            </div>

        </div>
    )

}

export default DetalleAcciones