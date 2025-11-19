const rutaImg = '/assets/img/productos/';

const productos = [
    {
        id: 'FR001',
        nombre: 'Manzanas Fuji',
        precio: 1200,
        imagen: [
            `${rutaImg}manzana-fuji/5.jpg`,
            `${rutaImg}manzana-fuji/4.png`,
            `${rutaImg}manzana-fuji/10.webp`
        ],
        descripcionCorta: 'Manzanas Fuji frescas, firmes y naturalmente dulces, cosechadas en huertos familiares del Valle del Maule. Su pulpa crujiente y jugosa las convierte en la opción perfecta para colaciones, jugos, ensaladas y postres caseros. Cada pieza es seleccionada a mano para garantizar frescura, sabor y calidad premium en cada compra.',

        descripcionLarga:
            'En Huerto-Hogar trabajamos directamente con productores locales del Valle del Maule, donde las Manzanas Fuji se cultivan bajo prácticas agrícolas responsables que respetan los ciclos naturales del suelo. Los árboles se riegan con aguas limpias de cordillera y cada fruto madura lentamente para alcanzar su característico sabor dulce con ligeras notas ácidas. Durante la cosecha, las manzanas se seleccionan una a una para asegurar su firmeza, color y frescura. Luego pasan por un proceso de lavado y clasificación que mantiene intactas sus propiedades nutritivas, como fibra, antioxidantes y vitamina C. Gracias a su textura crocante y aroma delicado, son ideales para consumir frescas, preparar tartas caseras, compotas o complementar recetas saludables del día a día. Nuestro compromiso es entregar siempre un producto de alta calidad, fresco y directo del campo a tu mesa.',
        stock: 150,
        categoria: 'Frutas Frescas'
    },

    {
        id: 'FR002',
        nombre: 'Naranjas Valencia',
        precio: 1000,
        imagen: [
            `${rutaImg}naranja-valencia/naranja-valencia-1.png`,
            `${rutaImg}naranja-valencia/naranja-valencia-2.png`,
            `${rutaImg}naranja-valencia/naranja-valencia-3.jpg`
        ],
        descripcionCorta: 'Naranjas Valencia jugosas y aromáticas, cosechadas en huertos de clima cálido que favorecen su dulzura natural. Ideales para preparar jugos frescos, postres caseros o consumir directamente gracias a su sabor equilibrado y refrescante.',
        descripcionLarga:
            'Nuestras Naranjas Valencia provienen de productores locales que trabajan con prácticas sustentables para asegurar un fruto dulce, jugoso y de excelente calidad. Cada naranja se selecciona en su punto óptimo de madurez, lo que garantiza un aroma vibrante y un sabor naturalmente refrescante. En HuertoHogar promovemos el cultivo responsable, evitando el uso excesivo de químicos y respetando los ciclos naturales del huerto. Esto nos permite ofrecer una fruta fresca, nutritiva y perfecta para disfrutar en jugos, ensaladas o preparaciones dulces.',
        stock: 200,
        categoria: 'Frutas Frescas'
    },

    {
        id: 'FR003',
        nombre: 'Plátanos Cavendish',
        precio: 800,
        imagen: [
            `${rutaImg}platanos-cavendish/platanos-cavendish-1.jpg`,
            `${rutaImg}platanos-cavendish/platanos-cavendish-2.jpeg`,
            `${rutaImg}platanos-cavendish/platanos-cavendish-3.jpg`
        ],
        descripcionCorta: 'Plátanos Cavendish dulces y de textura suave, perfectos para desayunos, batidos o snacks energéticos. Su sabor natural y cremoso los convierte en una opción indispensable para quienes buscan una colación práctica y saludable.',
        descripcionLarga:
            'Los Plátanos Cavendish de HuertoHogar son seleccionados cuidadosamente desde plantaciones que priorizan prácticas agrícolas responsables y un manejo adecuado del suelo. Gracias al clima óptimo y el proceso de maduración natural, obtenemos plátanos firmes, dulces y ricos en potasio. Todo el proceso, desde la cosecha hasta el transporte, se realiza con especial atención para conservar su frescura y textura característica. Son ideales para preparaciones nutritivas, desde batidos hasta repostería, o simplemente para disfrutar como snack diario.',
        stock: 250,
        categoria: 'Frutas Frescas'
    },

    {
        id: 'VR001',
        nombre: 'Zanahorias Orgánicas',
        precio: 900,
        imagen: [
            `${rutaImg}zanahoria-organica/zanahoria-organica-1.jpg`,
            `${rutaImg}zanahoria-organica/zanahoria-organica-2.jpg`,
            `${rutaImg}zanahoria-organica/zanahoria-organica-3.jpg`
        ],
        descripcionCorta: 'Zanahorias orgánicas frescas y crujientes, cultivadas sin pesticidas y llenas de sabor natural. Perfectas para ensaladas, jugos, guisos o como snack saludable a cualquier hora del día.',
        descripcionLarga:
            'Nuestras Zanahorias Orgánicas provienen de pequeños agricultores comprometidos con el cultivo limpio y la conservación del suelo. Se siembran y cosechan siguiendo prácticas totalmente libres de químicos, lo que permite obtener un vegetal fresco, dulce y lleno de nutrientes. En HuertoHogar apoyamos la agricultura local y priorizamos procesos que respetan la tierra, asegurando un producto de alta calidad desde el huerto hasta tu mesa. Su textura crocante y su sabor intenso las hacen ideales para todo tipo de preparaciones saludables.',
        stock: 100,
        categoria: 'Verduras Orgánicas'
    },

    {
        id: 'VR002',
        nombre: 'Espinacas Frescas',
        precio: 700,
        imagen: [
            `${rutaImg}espinacas-frescas/espinacas-frescas-1.jpg`,
            `${rutaImg}espinacas-frescas/espinacas-frescas-2.png`,
            `${rutaImg}espinacas-frescas/espinacas-frescas-3.png`
        ],
        descripcionCorta: 'Espinacas frescas de color intenso y sabor suave, cosechadas a diario para garantizar su máxima calidad. Son ideales para ensaladas, salteados, tortillas y batidos verdes cargados de nutrientes.',
        descripcionLarga:
            'Las Espinacas Frescas de HuertoHogar se cultivan bajo técnicas agrícolas que protegen la humedad del suelo, evitando químicos y asegurando una hoja tierna, limpia y llena de vitaminas. Su cosecha se realiza tempranamente cada mañana para preservar su textura y valor nutricional. Gracias a la cercanía con productores locales, llegan a tu mesa en perfectas condiciones de frescura. Son un ingrediente versátil que aporta sabor, color y equilibrio a una amplia variedad de recetas caseras.',
        stock: 80,
        categoria: 'Verduras Orgánicas'
    },

    {
        id: 'VR003',
        nombre: 'Pimientos Tricolores',
        precio: 1500,
        imagen: [
            `${rutaImg}pimiento-tricolor/pimiento-tricolor-1.jpg`,
            `${rutaImg}pimiento-tricolor/pimiento-tricolor-2.jpg`,
            `${rutaImg}pimiento-tricolor/pimiento-tricolor-3.jpg`
        ],
        descripcionCorta: 'Pimientos tricolores frescos y vibrantes que aportan dulzura, aroma y color a cualquier plato. Ideales para salteados, ensaladas, asados o recetas que necesiten un toque saludable y llamativo.',
        descripcionLarga:
            'Nuestros Pimientos Tricolores provienen de invernaderos locales que priorizan un manejo sustentable y un control natural de plagas. Cada pimiento se cosecha a mano cuando alcanza el punto perfecto de madurez, garantizando una pulpa firme y un sabor dulce característico. En HuertoHogar apoyamos procesos agrícolas que respetan la biodiversidad, lo que permite obtener vegetales de alta calidad, libres de pesticidas y con colores intensos. Su versatilidad los convierte en un ingrediente ideal para preparaciones saludables y llenas de sabor.',
        stock: 120,
        categoria: 'Verduras Orgánicas'
    },

    {
        id: 'PO001',
        nombre: 'Miel Orgánica',
        precio: 5000,
        imagen: [
            `${rutaImg}miel-organica/miel-organica-1.jpg`,
            `${rutaImg}miel-organica/miel-organica-2.png`,
            `${rutaImg}miel-organica/miel-organica-3.png`
        ],
        descripcionCorta: 'Miel orgánica pura elaborada por apicultores locales, con un aroma floral suave y un dulzor natural perfecto para bebidas, postres y recetas caseras. Un endulzante noble y saludable.',
        descripcionLarga:
            'La Miel Orgánica de HuertoHogar es producida por apicultores comprometidos con el bienestar de las abejas y la protección de los ecosistemas donde trabajan. Cada cosecha se obtiene mediante métodos artesanales que evitan procesos agresivos y preservan todas sus propiedades naturales. Su aroma floral proviene de la flora nativa que rodea los apiarios, lo que otorga un sabor único y equilibrado. Gracias a nuestro enfoque sustentable, garantizamos una miel pura, sin aditivos y llena de beneficios nutricionales para un consumo saludable.',
        stock: 50,
        categoria: 'Productos Orgánicos'
    },

    {
        id: 'PO003',
        nombre: 'Quinua Orgánica',
        precio: 4500,
        imagen: [
            `${rutaImg}quinoa-organica/quinoa-organica-1.png`,
            `${rutaImg}quinoa-organica/quinoa-organica-2.png`,
            `${rutaImg}quinoa-organica/quinoa-organica-3.png`
        ],
        descripcionCorta: 'Quinua orgánica andina, ligera y nutritiva, perfecta para ensaladas, guisos o como acompañamiento saludable. Rica en proteínas y fibra, es un grano esencial para una alimentación equilibrada.',
        descripcionLarga:
            'Nuestra Quinua Orgánica proviene de cultivos en zonas altiplánicas donde se conserva la tradición agrícola ancestral. Los productores locales aplican prácticas de cultivo limpias y un proceso de selección minucioso para asegurar un grano puro, homogéneo y lleno de nutrientes. En HuertoHogar fomentamos el comercio justo y la producción sustentable, lo que permite obtener una quinua de calidad premium. Su textura esponjosa y su sabor suave la vuelven ideal para platos saludables y versátiles en el día a día.',
        stock: 60,
        categoria: 'Productos Orgánicos'
    },

    {
        id: 'PL001',
        nombre: 'Leche Entera',
        precio: 1200,
        imagen: [
            `${rutaImg}leche-entera/leche-entera-1.png`,
            `${rutaImg}leche-entera/leche-entera-2.png`,
            `${rutaImg}leche-entera/leche-entera-3.png`
        ],
        descripcionCorta: 'Leche entera fresca proveniente de ganaderías locales, con un sabor suave y cremoso ideal para desayunos, postres y recetas caseras. Rica en calcio y nutrientes esenciales para el día a día.',
        descripcionLarga:
            'La Leche Entera de HuertoHogar es obtenida de pequeñas granjas familiares que mantienen prácticas responsables de alimentación y bienestar animal. Cada lote es sometido a estrictos controles de calidad para asegurar una leche pura, nutritiva y con su sabor natural intacto. Gracias a procesos de pasteurización cuidadosos y un manejo cercano con los productores, garantizamos una frescura excepcional. Es perfecta para acompañar desayunos, preparar batidos, postres o cualquier receta que requiera un lácteo confiable y de calidad.',
        stock: 90,
        categoria: 'Productos Lácteos'
    }
];

export { productos };
