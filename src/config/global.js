export default {
  global: {
    componenteFormativo: 'Exhibición de los productos farmacéuticos',
    descripcionCurso:
      'En este componente formativo se abordan los conocimientos de la competencia "Lanzar la promoción comercial según objetivos y herramientas promocionales" para que los aprendices conozcan las herramientas necesarias para diseñar las estrategias de mercadeo y venta de los productos farmacéuticos teniendo presentes las características de estos y la normatividad legal vigente.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Productos y servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Prestación de servicios en la farmacia',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'El entorno exterior del establecimiento',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Promoción de productos y servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Lectores de código de barras',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Estibas',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Sistemas de información',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Utilidad de los sistemas de información de marketing',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Tipos de datos en el SIM',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Productos y servicios',
      referencia:
        'De la fuente, L. (2012). De la A a la Z- <em>En la gestión de la oficina de farmacia</em>.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo1_CF030_De_la_A_a_la_Z.pdf',
    },
    {
      tema: 'Promoción de productos y servicios',
      referencia:
        'Farmaniacos, C. (2021). <em>Promoción y Publicidad Farmacéutica con Elvis Chuco _ Parte 1</em> (Video). YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=w_9jyk2ALrE&ab_channel=ComunidadFarmaniacoso',
    },
    {
      tema: 'Promoción de productos y servicios',
      referencia:
        'Depot, M. (2020). <em>¡Aumenta las ventas de tu farmacia con estas estrategias!</em> (Video). YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=1_XluuaS18s&ab_channel=MedicineDepot',
    },
  ],
  glosario: [
    {
      termino: 'Competitivo',
      significado:
        'que es capaz de competir con otros que aspiran a un mismo objetivo o a la superioridad en algo.',
    },
    {
      termino: 'Inversión fracasada',
      significado:
        'emplear una cantidad de dinero en un proyecto o negocio para conseguir ganancias y no obtener el resultado deseado o previsto.',
    },
    {
      termino: '<em>Marketing</em>',
      significado:
        'conjunto de técnicas y estudios que tienen como objeto mejorar la comercialización de un producto.',
    },
    {
      termino: 'Nutrición balanceada',
      significado:
        'llevar una dieta sana, variada y equilibrada, es decir, consumir alimentos de calidad en las cantidades adecuadas.',
    },
    {
      termino: '<em>Off line</em>',
      significado:
        'término empleado para hacer referencia a todo aquello que tiene lugar fuera de Internet, cuando no se está conectado a la red.',
    },
    {
      termino: '<em>Online</em>',
      significado:
        'que se realiza a través de internet o de otra red de datos.',
    },
    {
      termino: 'Patologías crónicas',
      significado:
        'son enfermedades de larga duración y por lo general de progresión lenta.',
    },
    {
      termino: 'Productos OTC',
      significado:
        'productos que para su venta no requieren de prescripción médica.',
    },
    {
      termino: 'SIM',
      significado: ' Sistema de Información de <em>Marketing</em>.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arras, F. (2018). <em>Exposición de productos en la oficina de farmacia</em>.',
      link: 'https://www.arrasfarma.com/blog/exposicion-productos-farmacia/',
    },
    {
      referencia:
        'De la Fuente, L., (2021). <em>Importancia del desarrollo de servicios para la farmacia</em>. Elsevier.',
      link:
        'https://www.elsevier.es/es-revista-farmacia-profesional-3-articulo-importancia-del-desarrollo-servicios-farmacia-X0213932417620568',
    },
    {
      referencia:
        'Tecnologías información. (s. f.). <em>Sistemas de información de mercadotecnia</em>.',
      link: 'https://www.tecnologias-informacion.com/mercadotecnia.html',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Lina Marcela Ayala Pardo',
          cargo: 'Experta temática',
          centro: 'Regional Antioquia – Centro de Servicios de Salud',
        },
        {
          nombre: 'Gustavo Santis Mancipe',
          cargo: 'Diseñador instruccional',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Revisora metodológica y pedagógica',
          centro:
            'Regional Distrito Capital – Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura – Regional Santander',
        },
        {
          nombre:
            'Centro Industrial del Diseño y la Manufactura – Regional Santander',
          cargo: 'Corrector de estilo',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Adecuación instruccional - 2023',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'José Gabriel Ortíz Abella',
          cargo: 'Corrector de estilo',
          centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Adriana Marcela Suárez Eljure',
          cargo: 'Diseño web-2023',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Luis Jesús Pérez Madariaga',
          cargo: 'Desarrollo Fullstack-2023',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y Producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo:
            'Validación de recursos educativos digitales y vinculación al LMS',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
