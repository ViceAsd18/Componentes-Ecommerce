import BarraNavegacion from "componentes/organismo/BarraNavegacion"
import { Layout } from "antd"

const { Content, Footer} = Layout


const ClienteLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <Layout style={{height: "auto", minHeight: "100vh", overflow: "auto"}}>
            <BarraNavegacion/>

            <Content style={{
                padding: "24px 5%",
                minHeight: "calc(100vh - 128px)", //Resta header + footer
                backgroundColor: "#f9f9f9",
                flexGrow:1,
                overflow:"visible"
            }}>
                {children}
            </Content>
            <Footer style={{textAlign: "center", padding: 24, background: "#fff"}}>
                © 2025 HuertoHogar
            </Footer>

        </Layout>
    )
}

export default ClienteLayout