import BarraNavegacion from "componentes/organismo/BarraNavegacion"
import { Layout } from "antd"

const { Content, Footer} = Layout


const ClienteLayout = ({children} : {children : React.ReactNode}) => {
    return (
        <Layout style={{minHeight : 100}}>
            <BarraNavegacion/>

            <Content style={{
                padding: "24px 5%",
                minHeight: "calc(100vh - 128px)", //Resta header + footer
                backgroundColor: "#f9f9f9",
            }}>
                {children}
            </Content>
            <Footer>

            </Footer>

        </Layout>
    )
}

export default ClienteLayout