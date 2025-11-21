import ClienteLayout from "./ClienteLayout";
import EstadoPedido from "../../organismo/Pedidos/EstadoPedido";

const PedidoLayout = () => {
    return (
        <ClienteLayout>
            {/* Contenedor para centrar */}
            <div style={{ width: "100%", maxWidth: 1200, margin: "0 auto", padding: "0 20px" }}>
                <EstadoPedido />
            </div>
        </ClienteLayout>
    );
};

export default PedidoLayout;