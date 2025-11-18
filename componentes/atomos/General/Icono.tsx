import React from "react";
import { Tooltip } from "antd";

interface Props {
    icon : React.ReactElement<any>
    size? : number
    color? : string
    style? : React.CSSProperties
    tooltip? : string
    onClick?: () => void;
}



const Icono = ({icon, size = 24, color = '#FFD700', style, tooltip, onClick}: Props) => {

    const TooltipStyle : React.CSSProperties = {
        display : 'inline-flex',
        alignItems : 'center',
        justifyContent : 'center',
        cursor : onClick? "pointer" : "default",
        ...style
    }

    const iconElemento = React.cloneElement(icon, {
        style : {fontSize : size, color: color, ...icon.props.style},
        onClick: onClick
    })

    return (
        <span style={TooltipStyle}>
            {tooltip ? <Tooltip title={tooltip}>{iconElemento}</Tooltip> : iconElemento}
        </span>
    )
}

export default Icono;