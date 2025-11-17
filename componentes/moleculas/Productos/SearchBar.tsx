import { Input, Select } from "antd";

interface Props {
    onBuscar?: (valor: string) => void;
    onOrdenar?: (valor: string) => void;
}

const contenedorStyle: React.CSSProperties = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16,
    width: '100%',
    maxWidth: '100%',
    margin: '20px 0',
};

const searchStyle: React.CSSProperties = {
    flex: '1 1 300px',
    borderRadius: 12,
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    border: '1px solid #ccc',
    transition: 'all 0.3s ease',
    backgroundColor: '#fff',
    fontSize: '16px',
};

const selectStyle: React.CSSProperties = {
    flex: '0 0 180px',
    borderRadius: 12,
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    border: '1px solid #ccc',
    transition: 'all 0.3s ease',
    backgroundColor: '#fff',
    fontSize: '16px',
};

const opcionesOrden = [
    { label: "A - Z", value: "az" },
    { label: "Z - A", value: "za" },
    { label: "Menor precio", value: "precioAsc" },
    { label: "Mayor precio", value: "precioDesc" },
];

const SearchBar = ({ onBuscar, onOrdenar }: Props) => {
    return (
        <div style={contenedorStyle}>
            <Input.Search
                placeholder="Buscar productos..."
                allowClear
                enterButton="Buscar"
                onSearch={onBuscar}
                style={searchStyle}
            />

            <Select
                placeholder="Ordenar"
                options={opcionesOrden}
                onChange={onOrdenar}
                style={selectStyle}
            />
        </div>
    )
}

export default SearchBar;
