import { useState } from "react"
import { Layout, Row, Col } from "antd"

import ButtonGrupoLinks from "componentes/moleculas/BarraNavegacion/BotonGrupoLinks"
import CarritoIcono from "componentes/atomos/BarraNavegacion/CarritoIcono"
import BtnHamburguesa from "componentes/atomos/BarraNavegacion/BtnHamburguesa"
import Imagen from "componentes/atomos/General/Imagen"

const { Header } = Layout

import LogoHuerto from 'assets/logo-huerto-hogar.png'

const BarraNavegacion = () => {
    const [open, setOpen] = useState(false)

    return (
        <Header
            style={{
                backgroundColor: "#fff",
                borderBottom: "2px solid #E5E7EB",
                position: "sticky",
                top: 0,
                zIndex: 1000,
                height: "auto",
                padding: "10px 30px",
                lineHeight: "normal",
            }}
        >
            <Row align="middle" justify="space-between" wrap={false}>
                <Col flex="none">
                    <Imagen src={LogoHuerto} alt="Logo Huerto Hogar" style={{ width: 120, height: 'auto' }} preview={true}/>
                </Col>

                <Col flex="auto" style={{ textAlign: "center" }}>
                    <div className="navbar-links-desktop">
                        <ButtonGrupoLinks />
                    </div>
                </Col>

                <Col flex="none" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                    <CarritoIcono />
                </Col>
            </Row>

        </Header>
    )
}

export default BarraNavegacion
