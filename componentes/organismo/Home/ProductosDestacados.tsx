import ContenedorSeccion from 'componentes/atomos/General/ContenedorSeccion'
import Titulo from 'componentes/atomos/General/Titulo'
import CardProductoDestacado from 'componentes/moleculas/Home/ProductosDestacados/CardProductoDestacado'

const contenedorProductosStyle : React.CSSProperties = {
    display : 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap : 50,
    maxWidth : '100%',
    margin : '0 auto',

}

const tomate = 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6bbEBXfG_g6xvR5mr9-sT0vyT8jvpZMk8zE4uHX-qY2OU3oYeAaWzizYibRX4gWrxdboAgd-c_6nX1vuwFJtvtT-K7tcHEIuw2y5yk8IK4bwIrOCr0UR5Mh3ypN0ohaejDBfGXSaeRqOfLYwSwjyl1CkG7Bff_I6_jhlb4_EoAWTAttQGz_slnPyIbqI4i76QYVmbeOxgNB87B2WyQVdeUX8YrV_cvN8xC-l67rBMYEYUphnOwkfarmIkhcnPW9RycvtsKU5UXak'

const ProductosDestacados = () => {
    return (
        <ContenedorSeccion variante='seccion'>
            <Titulo variante='seccion'>Productos Destacados</Titulo>
            <div style={contenedorProductosStyle}>
                <CardProductoDestacado imagenSrc={tomate} nombreProducto='Tomates limachinos' precioProducto='$1.990 / kg'/>
                <CardProductoDestacado imagenSrc={tomate} nombreProducto='Tomates limachinos' precioProducto='$1.990 / kg'/>
                <CardProductoDestacado imagenSrc={tomate} nombreProducto='Tomates limachinos' precioProducto='$1.990 / kg'/>
                <CardProductoDestacado imagenSrc={tomate} nombreProducto='Tomates limachinos' precioProducto='$1.990 / kg'/>
            </div>
        </ContenedorSeccion>

    )
}

export default ProductosDestacados;