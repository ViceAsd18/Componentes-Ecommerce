import { InputNumber } from "antd";

interface Props {
    value? : number;
    min? : number;
    max? : number;
    onChange? : (val : number) => void;
    style? : React.CSSProperties;
}

const CantidadSelector = ({ value = 1, min = 1, max, onChange, style } : Props) => {
    return (
        <InputNumber
            min={min}
            max={max}
            value={value}
            onChange={(v) => {
                // AntD InputNumber puede retornar null, por defecto tiene que ser un número
                const val = typeof v === "number" ? v : min;
                onChange && onChange(val);
            }}
            style={{width : 100, border : 8, ...style}}
        >
        
        </InputNumber>
    )
}

export default CantidadSelector;