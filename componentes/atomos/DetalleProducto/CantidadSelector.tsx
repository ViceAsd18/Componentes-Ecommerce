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
                onChange && onChange(v as number);
            }}
            style={{width : 100, border : 12, ...style}}
        >
        
        </InputNumber>
    )
}

export default CantidadSelector;