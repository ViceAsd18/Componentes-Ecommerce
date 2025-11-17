import ClienteLayout from "./ClienteLayout"
import Hero from "componentes/organismo/Home/Hero";
const ImgBGHeroNosotros = "assets/home/banner-nosotros.jpg"

const NosotrosLayout = () => {
    return (
        <ClienteLayout>
            <Hero
                titulo="Nuestra historia: Del campo a tu Hogar"
                subtitulo="Conectamos a las familias chilenas con la frescura y autenticidad de los productos de nuestros agricultores locales"
                backgroundImage={ImgBGHeroNosotros}
            />
        </ClienteLayout>
    )
}

export default NosotrosLayout;