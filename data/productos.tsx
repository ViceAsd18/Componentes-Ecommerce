const rutaImg = 'assets/img/productos/';
const productos = [
    { id:'FR001', 
      nombre:'Manzanas Fuji', 
      precio:1200, 
      imagen:[`${rutaImg}manzana-fuji/manzana-fuji-1.png`,`${rutaImg}manzana-fuji/manzana-fuji-2.png`,`${rutaImg}manzana-fuji/manzana-fuji-3.png`], 
      desc:'Descripción: Manzanas Fuji crujientes y dulces, cultivadas en el Valle del Maule.Perfectas para meriendas saludables o como ingrediente en postres. Estas manzanasson conocidas por su textura firme y su sabor equilibrado entre dulce y ácido.', 
      stock:150, categoria:'Frutas Frescas'},

    { id:'FR002', nombre:'Naranjas Valencia',
      precio:1000,
      imagen:[`${rutaImg}naranja-valencia/naranja-valencia-1.png`, `${rutaImg}naranja-valencia/naranja-valencia-2.png`, `${rutaImg}naranja-valencia/naranja-valencia-3.jpg`], desc:'Jugosas y ricas en vitamina C, estas naranjas Valencia son ideales parazumos frescos y refrescantes. Cultivadas en condiciones climáticas óptimas que aseguran su dulzura y jugosidad.', stock:200, categoria:'Frutas Frescas'},

    { id:'FR003',
      nombre:'Plátanos Cavendish',
      precio:800,
      imagen:[`${rutaImg}platanos-cavendish/platanos-cavendish-1.jpg`,`${rutaImg}platanos-cavendish/platanos-cavendish-2.jpeg`,`${rutaImg}platanos-cavendish/platanos-cavendish-3.jpg`], desc:'Plátanos maduros y dulces, perfectos para el desayuno o como snack energético. Estos plátanos son ricos en potasio y vitaminas, ideales para mantener una dieta equilibrada.', stock:250, categoria:'Frutas Frescas'},

    { id:'VR001',
      nombre:'Zanahorias Orgánicas',
      precio:900,
      imagen:[`${rutaImg}zanahoria-organica/zanahoria-organica-1.jpg`,`${rutaImg}zanahoria-organica/zanahoria-organica-2.jpg`,`${rutaImg}zanahoria-organica/zanahoria-organica-3.jpg`], desc:'Zanahorias crujientes cultivadas sin pesticidas en la Región de OHiggins. Excelente fuente de vitamina A y fibra, ideales para ensaladas, jugos o como snack saludable.', stock:100, categoria:'Verduras Orgánicas' },

    { id:'VR002',
      nombre:'Espinacas Frescas',
      precio:700 ,
      imagen:[`${rutaImg}espinacas-frescas/espinacas-frescas-1.jpg`,`${rutaImg}espinacas-frescas/espinacas-frescas-2.png`,`${rutaImg}espinacas-frescas/espinacas-frescas-3.png`], desc:'Espinacas frescas y nutritivas, perfectas para ensaladas y batidos verdes. Estas espinacas son cultivadas bajo prácticas orgánicas que garantizan su calidad y valor nutricional.', stock:80, categoria:'Verduras Orgánicas'},

    { id:'VR003',
      nombre:'Pimientos Tricolores',
      precio:1500 ,
      imagen:[`${rutaImg}pimiento-tricolor/pimiento-tricolor-1.jpg`,`${rutaImg}pimiento-tricolor/pimiento-tricolor-2.jpg`,`${rutaImg}pimiento-tricolor/pimiento-tricolor-3.jpg`], desc:'Pimientos rojos, amarillos y verdes, ideales para salteados y platos coloridos. Ricos en antioxidantes y vitaminas, estos pimientos añaden un toque vibrante y saludable a cualquier receta.', stock:120, categoria:'Verduras Orgánicas'},

    { id:'PO001',
      nombre:'Miel Orgánica',
      precio:5000 ,
      imagen:[`${rutaImg}miel-organica/miel-organica-1.jpg`,`${rutaImg}miel-organica/miel-organica-2.png`,`${rutaImg}miel-organica/miel-organica-3.png`], desc:'Miel pura y orgánica producida por apicultores locales. Rica en antioxidantes y con un sabor inigualable, perfecta para endulzar de manera natural tus comidas y bebidas.', stock: 50, categoria:'Productos Orgánicos'},

    {id:'PO003',
      nombre:'Quinua Orgánica',
      precio:4500, imagen:[`${rutaImg}quinoa-organica/quinoa-organica-1.png`,`${rutaImg}quinoa-organica/quinoa-organica-2.png`,`${rutaImg}quinoa-organica/quinoa-organica-3.png`], desc:'Grano andino 100% orgánico, cultivado en tierras altas sin pesticidas. Rica en proteínas, fibra y minerales, ideal para ensaladas, sopas o como acompañamiento nutritivo en tus comidas.', stock:60, categoria:'Productos Orgánicos'},
    
    {id:'PL001',
      nombre:'Leche Entera',
      precio:1200, imagen:[`${rutaImg}leche-entera/leche-entera-1.png`,`${rutaImg}leche-entera/leche-entera-2.png`,`${rutaImg}leche-entera/leche-entera-3.png`], desc:'Leche entera fresca proveniente de granjas locales. Rica en calcio y nutrientes esenciales, perfecta para el desayuno, preparar postres o acompañar tus comidas diarias.', stock:90, categoria:'Productos Lácteos'}
  ];
export { productos };