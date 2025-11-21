import React from "react";
import { useParams, useNavigate } from "react-router";
import Imagen from "../../componentes/atomos/General/Imagen";
import ClienteLayout from "../../componentes/layout/Cliente/ClienteLayout";
import Titulo from "../../componentes/atomos/General/Titulo";
import Boton from "../../componentes/atomos/General/Boton";
import DetalleBlog from "../../componentes/organismo/Blog/DetalleBlog";



const noticiasData = [
    {
        id: 1,
        titulo: "5 Consejos Esenciales del Riego",
        categoria: "Guías",
        fecha: "22 Oct, 2025",
        autor: "Juan Pérez (Ing. Agrónomo)",
        imagen: "/assets/img/blog/cuidaagua.jpg",
        contenido: (
            <>
                <p style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '30px', lineHeight: 1.6, color: '#168B8D' }}>
                    El agua es el alma de tu huerto, pero más no siempre es mejor. Aprender a regar correctamente es la habilidad número uno que diferenciará un cultivo sobreviviente de uno abundante.
                </p>
                <p style={{ marginBottom: '25px' }}>
                    Muchos problemas comunes, como hongos, raíces podridas o frutos con poco sabor, provienen de un mal manejo hídrico. Aquí te dejamos los 5 pilares para dominar el arte del riego.
                </p>

                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#111', marginTop: '40px', marginBottom: '20px' }}>
                    1. La hora dorada: Riega temprano
                </h2>
                <p style={{ marginBottom: '25px' }}>
                    El mejor momento es al amanecer. El agua tiene tiempo de filtrarse antes de que el sol la evapore. Si riegas de noche, la humedad se queda en las hojas y atrae hongos; si riegas a mediodía, el sol quemará las plantas ("efecto lupa") y perderás agua por evaporación.
                </p>

                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#111', marginTop: '30px', marginBottom: '20px' }}>
                    2. A la raíz, no a la hoja
                </h2>
                <p style={{ marginBottom: '25px' }}>
                    A menos que sean helechos, las plantas beben por las raíces. Evita mojar el follaje, ya que esto promueve enfermedades como el oídio. Riega directo sobre la tierra.
                </p>

                <blockquote style={{ borderLeft: '5px solid #168B8D', paddingLeft: '25px', margin: '40px 0', fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1.5rem', color: '#444', backgroundColor: '#f4fbfb', padding: '40px', borderRadius: '0 12px 12px 0' }}>
                    "El mayor error del principiante es regar un poco todos los días. Es mejor regar profundo y espaciado para que las raíces crezcan buscando el agua."
                </blockquote>

                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#111', marginTop: '30px', marginBottom: '20px' }}>
                    3. La prueba del dedo
                </h2>
                <p style={{ marginBottom: '25px' }}>
                    Antes de abrir la manguera, hunde tu dedo en la tierra unos 3-4 cm. Si la superficie está seca pero abajo está húmedo, <strong>no riegues</strong>. Las raíces necesitan respirar oxígeno, y un suelo encharcado las ahoga.
                </p>

                <div style={{ width: '100%', height: '450px', marginBottom: '40px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                    <Imagen src="/assets/img/blog/hombreregando.jpg" alt="Regando huerto" />
                </div>

                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#111', marginTop: '30px', marginBottom: '20px' }}>
                    4. Mulching o Acolchado
                </h2>
                <p style={{ marginBottom: '25px' }}>
                    Cubre el suelo alrededor de tus plantas con paja, hojas secas o corteza. Esto retiene la humedad hasta un 50% más, evita que crezcan malezas y protege la vida microbiana del sol directo.
                </p>

                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#111', marginTop: '30px', marginBottom: '20px' }}>
                    5. Observa tus plantas
                </h2>
                <p style={{ marginBottom: '25px' }}>
                    Ellas te hablan. Hojas marchitas al atardecer que se recuperan en la mañana es normal; marchitas en la mañana significa "dame agua". Hojas amarillas y caídas suelen significar exceso de riego.
                </p>
            </>
        )
    },

    {
        id: 2,
        titulo: "El Arte de Cosechar Tomates: Guía Completa",
        categoria: "Cosecha",
        fecha: "20 Oct, 2025",
        autor: "María González",
        imagen: "/assets/img/blog/mujertomate.jpg",
        contenido: (
            <>
                <p style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '30px', lineHeight: 1.6, color: '#168B8D' }}>
                    Has cuidado la planta por meses, has podado los chupones y vigilado el riego. Ahora llega el momento de la verdad: la cosecha. ¿Sabías que el sabor del tomate cambia drásticamente según el momento exacto en que lo cortas?
                </p>
                <p style={{ marginBottom: '25px' }}>
                    Cosechar parece intuitivo, pero hacerlo en el punto justo garantiza la máxima concentración de azúcares y la mejor textura. Aquí te enseñamos cómo hacerlo como un experto.
                </p>

                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#111', marginTop: '40px', marginBottom: '20px' }}>
                    El Punto de "Quiebre"
                </h2>
                <p style={{ marginBottom: '25px' }}>
                    No esperes a que el tomate esté rojo intenso y blando en la mata (a menos que lo vayas a comer en los próximos 10 minutos). El momento ideal es cuando cambia de color anaranjado a rojo (el estado de "quiebre"). En este punto, el tomate ya tiene todos los azúcares necesarios y terminará de madurar perfectamente en tu cocina, a salvo de pájaros e insectos.
                </p>

                <div style={{ width: '100%', height: '400px', marginBottom: '40px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                    <Imagen src="/assets/img/blog/tomate2.jpg" alt="Cosecha de tomates" />
                </div>

                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#111', marginTop: '30px', marginBottom: '20px' }}>
                    La Técnica del Giro
                </h2>
                <p style={{ marginBottom: '25px' }}>
                    No tires del tomate hacia abajo, podrías romper la rama. Sostén el fruto con la mano y presiona con el pulgar sobre el "codo" (la articulación pequeña en el tallo). Gira suavemente hacia arriba. Debería soltarse solo. Si tienes que forcejear, usa tijeras de poda limpias.
                </p>

                <blockquote style={{ borderLeft: '5px solid #168B8D', paddingLeft: '25px', margin: '40px 0', fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1.4rem', color: '#444', backgroundColor: '#f4fbfb', padding: '30px', borderRadius: '0 12px 12px 0' }}>
                    "Regla de Oro: NUNCA guardes tus tomates en el refrigerador. El frío por debajo de 10°C rompe las membranas celulares y mata el sabor, volviéndolos harinosos."
                </blockquote>

                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#111', marginTop: '30px', marginBottom: '20px' }}>
                    Almacenamiento Correcto
                </h2>
                <p style={{ marginBottom: '25px' }}>
                    Guárdalos en un frutero a temperatura ambiente, lejos de la luz directa del sol y con el tallo hacia abajo (esto evita que entre aire y humedad por la cicatriz).
                </p>
            </>
        )
    },

    {
        id: 3,
        titulo: "Taller de Huerto Urbano: Tu Balcón es un Bosque",
        categoria: "Eventos",
        fecha: "18 Oct, 2025",
        autor: "Comunidad HuertoHogar",
        imagen: "/assets/img/blog/tallercultivar.jpg",
        contenido: (
            <>
                <p style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '30px', lineHeight: 1.6, color: '#168B8D' }}>
                    ¿Piensas que necesitas una parcela en el campo para cultivar tu propia comida? ¡Error! Este sábado derribaremos ese mito y te enseñaremos a transformar tu departamento en un oasis productivo.
                </p>
                <p style={{ marginBottom: '25px' }}>
                    La agricultura urbana no solo te provee de alimentos frescos; es una terapia comprobada para reducir el estrés. No importa si solo tienes una ventana soleada, siempre se puede cultivar algo.
                </p>

                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#111', marginTop: '40px', marginBottom: '20px' }}>
                    ¿Qué aprenderás?
                </h2>
                <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '30px' }}>
                    <li style={{ padding: '15px 0', borderBottom: '1px solid #eee' }}><strong>🌱 Sustratos Vivos:</strong> Mezclas de fibra de coco y humus.</li>
                    <li style={{ padding: '15px 0', borderBottom: '1px solid #eee' }}><strong>☀️ Luz y Orientación:</strong> Qué cultivar según tu ubicación.</li>
                    <li style={{ padding: '15px 0', borderBottom: '1px solid #eee' }}><strong>🐛 Control de Plagas:</strong> Repelentes naturales.</li>
                </ul>

                <div style={{ width: '100%', height: '450px', marginBottom: '40px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                    <Imagen src="/assets/img/blog/sembrandoplantita.jpg" alt="Plantando en macetas" />
                </div>

                <p style={{ fontWeight: 'bold', marginBottom: 10 }}>Coordenadas:</p>
                <p>📅 Sábado 25 de Octubre<br/>🕒 10:00 - 13:00 hrs<br/>📍 Casa Matriz HuertoHogar, Santiago.</p>
            </>
        )
    },

    {
        id: 4,
        titulo: "Receta: Salsa de Tomate Casera",
        categoria: "Recetas",
        fecha: "15 Oct, 2025",
        autor: "Cocina HuertoHogar",
        imagen: "/assets/img/blog/cocinasalsa.jpg",
        contenido: (
            <>
                <p style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '30px', lineHeight: 1.6, color: '#168B8D' }}>
                    Olvida los frascos del supermercado llenos de sodio y conservantes impronunciables. Hacer tu propia salsa de tomate no solo es terapéutico, sino que es la mejor forma de conservar la abundancia del verano para los meses fríos de invierno.
                </p>
                <p style={{ marginBottom: '25px' }}>
                    La clave de una salsa espectacular no es la técnica compleja, sino la paciencia y, por supuesto, la calidad del tomate. Aquí te enseñamos la receta "de la abuela" infalible.
                </p>

                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#111', marginTop: '40px', marginBottom: '20px' }}>
                    Ingredientes Esenciales
                </h2>
                <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '30px', backgroundColor: '#f9f9f9', padding: '25px', borderRadius: '12px' }}>
                    <li style={{ paddingBottom: 10, borderBottom: '1px solid #eee', marginBottom: 10 }}>🍅 <strong>2 kg de tomates:</strong> Deben estar muy maduros (rojos y blandos). Los tipo "pera" o limachinos son ideales.</li>
                    <li style={{ paddingBottom: 10, borderBottom: '1px solid #eee', marginBottom: 10 }}>🧅 <strong>1 cebolla grande</strong> y 2 dientes de ajo.</li>
                    <li style={{ paddingBottom: 10, borderBottom: '1px solid #eee', marginBottom: 10 }}>🌿 <strong>Albahaca fresca</strong> y orégano seco.</li>
                    <li>🥕 <strong>Tip del Chef:</strong> 1 zanahoria rallada (para neutralizar la acidez sin usar azúcar).</li>
                </ul>

                <div style={{ width: '100%', height: '400px', marginBottom: '40px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                    <Imagen src="/assets/img/blog/ingredientes.jpg" alt="Ingredientes frescos" />
                </div>

                <h2 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.8rem', color: '#111', marginTop: '30px', marginBottom: '20px' }}>
                    Paso a Paso
                </h2>

                <h3 style={{ fontSize: '1.3rem', color: '#168B8D', marginTop: '20px' }}>1. Preparar los tomates</h3>
                <p style={{ marginBottom: '15px' }}>
                    Lávalos bien. Si te molesta la piel, hazles un corte en cruz en la base y sumérgelos 30 segundos en agua hirviendo; la piel saldrá sola. Córtalos en cubos grandes.
                </p>

                <h3 style={{ fontSize: '1.3rem', color: '#168B8D', marginTop: '20px' }}>2. El Sofrito Base</h3>
                <p style={{ marginBottom: '15px' }}>
                    En una olla de fondo grueso, calienta un buen chorro de aceite de oliva. Sofrie la cebolla picada fina y la zanahoria rallada por 10 minutos a fuego medio hasta que estén blandas. Agrega el ajo al final para que no se queme.
                </p>

                <h3 style={{ fontSize: '1.3rem', color: '#168B8D', marginTop: '20px' }}>3. Cocción Lenta (El Secreto)</h3>
                <p style={{ marginBottom: '15px' }}>
                    Agrega los tomates y las hierbas. Tapa y deja cocinar a fuego <strong>muy bajo</strong> por al menos 45 minutos. El tomate soltará su agua y luego empezará a reducir y concentrar su sabor.
                </p>

                <blockquote style={{ borderLeft: '5px solid #168B8D', paddingLeft: '25px', margin: '40px 0', fontFamily: 'Playfair Display, serif', fontStyle: 'italic', fontSize: '1.4rem', color: '#444', backgroundColor: '#f4fbfb', padding: '30px', borderRadius: '0 12px 12px 0' }}>
                    "Si quieres una textura rústica, usa un pasapuré manual. Si la prefieres sedosa, usa la licuadora, pero espera a que enfríe un poco antes de procesar."
                </blockquote>

                <p>
                    ¡Y listo! Guárdala en frascos de vidrio esterilizados y tendrás el sabor del verano disponible en tu despensa durante todo el año. Perfecta para pastas, pizzas o como base de guisos.
                </p>
            </>
        )
    }
];

export default function BlogDetalle() {
    const params = useParams();
    const navigate = useNavigate();

    const idNoticia = Number(params.id);
    const noticia = noticiasData.find(n => n.id === idNoticia);

    if (!noticia) {
        return (
            <ClienteLayout>
                <div style={{ textAlign: 'center', padding: '100px 20px', maxWidth: 600, margin: '0 auto' }}>
                    <Titulo variante="seccion" style={{color: '#d9534f'}}>Noticia no encontrada</Titulo>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: 20}}>
                        <Boton onClick={() => navigate('/blogs')} variante="primario">Volver al Blog</Boton>
                    </div>
                </div>
            </ClienteLayout>
        );
    }

    const noticiasSimilares = noticiasData
        .filter(n => n.id !== idNoticia)
        .slice(0, 2);

    return (
        <ClienteLayout>
            <DetalleBlog
                titulo={noticia.titulo}
                imagen={noticia.imagen}
                categoria={noticia.categoria}
                fecha={noticia.fecha}
                autor={noticia.autor}
                contenidoHTML={noticia.contenido}
                noticiasSimilares={noticiasSimilares}
            />
        </ClienteLayout>
    );
}