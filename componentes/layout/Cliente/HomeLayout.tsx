import ClienteLayout from "./ClienteLayout"
import Hero from "componentes/organismo/Home/Hero"
import ProductosDestacados from "componentes/organismo/Home/ProductosDestacados"
import Informativa from "componentes/organismo/Home/Informativa"

const ImgBgHero = "assets/home/banner-home.jpg"

const HomeLayout = () => {
    return (
        <ClienteLayout>
            <Hero 
                titulo="Descubre la frescura del campo con HuertoHogar"
                subtitulo="Productos frescos y sostenibles directamente del campo chileno a tu mesa"
                backgroundImage={ImgBgHero}
                mostrarBotones={true}
            />
            <ProductosDestacados/>
            <Informativa/>
        </ClienteLayout>
    )
}

export default HomeLayout