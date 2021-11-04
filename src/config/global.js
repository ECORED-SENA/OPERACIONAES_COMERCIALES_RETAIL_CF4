export default {
  global: {
    componenteFormativo: 'Ventas en el formato comercial',
    descripcionCurso:
      'Las ventas comerciales radican principalmente en el desarrollo de unas estrategias y acciones promocionales diseñadas por la empresa que son muy comunes en las ventas al por mayor de productos que poseen unos mercados ya establecidos, y que en especial se trabajan en áreas como los alimentos y los textiles.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Publicidad en el punto de venta',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Objetivos y funciones',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Características de la publicidad en el punto de venta',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Promoción',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Evento promocional',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'El <i>stand</i>',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Productos y servicios',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Portafolio de productos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Los servicios como valor agregado',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'La estrategia comercial de ventas',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Las ventas',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Buenas prácticas de manufactura',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Las demostraciones',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Las degustaciones',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'La comunicación comercial',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Niveles de la comunicación comercial',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'El asesor comercial',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Medios de comunicación impresos',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Muestra comercial',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Material publicitario en el punto de venta',
            hash: 't_3_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.6',
            titulo: 'Omnicanalidad',
            hash: 't_3_6',
          },
        ],
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
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
  referencias: [
    {
      referencia:
        'Amagua, R., Coronel, M., Quintana, T., y Reyes, C. (2016). Guía BPM. ',
      link: 'https://www.academia.edu/36734745/GU%C3%8DA_BPM',
    },
    {
      referencia: 'Burin, D. (2017). Publicidad y promoción. ',
      link:
        'http://repositorio.iica.int/bitstream/handle/11324/3153/BVE17089159e.pdf;jsessionid=203714C3464FFE6D583764D067D04602?sequence=15',
    },
    {
      referencia:
        'Chávez, L. M. (2016). Marketing en productos y servicios. IDI Instituto de Investigación - Escuela Superior Politécnica de Chimborazo.',
      link: '',
    },
    {
      referencia:
        'Costa, J. (2007). Señalética corporativa. Costa Punto Com Editor (CPC).',
      link: '',
    },
    {
      referencia: 'Florido, M. (2021). MK@ Marketing and web. ',
      link: 'https://www.marketingandweb.es/marketing/muestras-gratis/',
    },
    {
      referencia:
        'García, M. J. (2015).  Publicidad en el punto de venta. IC Editorial.',
      link: '',
    },
    {
      referencia:
        'Navarro, M. E. (2012). Técnicas de venta. Red Tercer Milenio S.C.',
      link: '',
    },
    {
      referencia:
        'Romero, M. J., Maldonado, C., y Núñez, L. (2021). El nuevo paradigma de la omnicanalidad.',
      link:
        'https://www.minsait.com/sites/default/files/newsroom_documents/elnuevoparadigmadelaomnicanalidad.pdf',
    },
    {
      referencia: 'Silva, D. D. (2020). Estrategia comercial.',
      link: 'https://www.zendesk.com.mx/blog/estrategia-comercial/',
    },
    {
      referencia:
        'Universidad América Latina - UAL. (2021). Promoción de ventas.',
      link:
        'http://ual.dyndns.org/biblioteca/Promocion_de_Ventas/Pdf/Unidad_20.pdf',
    },
    {
      referencia:
        'Vigaray, M. D. (2005). Comercialización y retailing: distribución comercial aplicada. Pearson Educación.',
      link: '',
    },
    {
      referencia:
        'Wetto, M. (20 de Septiembre de 2017). Funciones del asesor comercial. Obtenido de Lifeder: ',
      link: 'https://www.lifeder.com/funciones-asesor-comercial/',
    },
    {
      referencia: 'Wolters Kluwer N.V. (2021). Comunicación comercial. ',
      link:
        'https://guiasjuridicas.wolterskluwer.es/Content/Documento.aspx?params=H4sIAAAAAAAEAMtMSbF1jTAAASMjc0sLtbLUouLM_DxbIwMDS0NDA1OQQGZapUt-ckhlQaptWmJOcSoA2UBwSDUAAAA=WKE',
    },
    {
      referencia:
        'Yate, A. (2021). Material P.O.P. Publicidad en punto de venta. Ecoe Ediciones.',
      link: '',
    },
    {
      referencia: 'Zambrano, F. (2021). Marketing promoción.',
      link: 'https://es.calameo.com/books/006559089cc12d9b80dfb',
    },
  ],
  glosario: [
    {
      termino: 'BPM',
      significado:
        'sigla para el término “Buenas Prácticas de Manufactura”. Hace referencia a la manera en que se deben administrar los productos para una buena higiene, desde su manipulación hasta su preparación, elaboración, envasado, almacenamiento, transporte y distribución, para que finalmente pueda ser consumido.',
    },
    {
      termino: 'Degustación',
      significado:
        'pruebas que se le regalan a los clientes dentro de un establecimiento de uno o varios productos para que lo(s) conozcan, lo(s) experimenten en carne propia y luego puedan tomar una decisión de compra.',
    },
    {
      termino: 'Demostración',
      significado:
        'forma en que se promociona un producto, poniéndolo a prueba con los clientes dentro de un establecimiento para que puedan percibir su funcionamiento.',
    },
    {
      termino: 'Omnicanalidad',
      significado:
        'integración de los medios o canales que existen en un mercado y la capacidad que tiene la empresa para comunicar, vender y fidelizar a sus clientes usándolos a su favor. El primer contacto con el cliente puede continuar en otro canal diferente sin perder calidad ni coherencia en la comunicación. ',
    },
    {
      termino: 'PLV',
      significado:
        'sigla de “Publicidad en el Punto de Venta”. Es lo mismo que el término PPV (Publicidad en el Punto de Venta). ',
    },
    {
      termino: 'Promoción',
      significado:
        'acciones publicitarias que sirven para sensibilizar a los clientes con el objetivo de que tomen decisiones de compra, para mejorar las ventas y crear fidelización de marca.',
    },
    {
      termino: 'Promoción de venta',
      significado:
        'acciones publicitarias y de mercadeo que incentivan a los clientes a tomar una decisión de compra en corto plazo, a través de técnicas promocionales como rebajas en el precio de un producto o servicio, descuentos, ofertas, cupones o el tradicional 2x1, entre otras.',
    },
    {
      termino: 'Sampling',
      terminoHtml: '<i>Sampling</i>',
      significado:
        'distribución de muestras de producto gratis que se regalan a los clientes con el fin de llamar su atención y captarlos.',
    },
    {
      termino: 'Stand',
      terminoHtml: '<i>Stand</i>',
      significado:
        'mueble que ocupa un espacio, principalmente en el interior de una exposición o una feria, en la que una marca puede exponer los productos y servicios.',
    },
  ],
  complementario: [
    {
      texto:
        'Isaza, O., J. (2017). Análisis del impacto del material P. O. P. En los puntos de Venta de los distribuidores de los productos de la empresa Compañía de empaques. Universidad EAFIT. ',
      tipo: 'Trabajo de grado',
      descarga: '/downloads/documento_1.pdf',
    },
    {
      texto:
        'Guzmán, L. (2020). ¿Qué son las BPM? Conoce todo sobre las buenas prácticas de manufactura. [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=FbVh7DK03vk',
    },
    {
      texto:
        'Navarro, E. (2016). E-commerce: ¿Qué es la omnicanalidad? [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=IpPxFTJrZps',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Samuel Pinilla Hurtado',
        cargo: 'Contratista',
        centro: 'Centro de Comercio – Regional Antioquia',
      },
      {
        nombre: 'Zvi Daniel Grosman',
        cargo: 'Diseñador Instruccional',
        centro: 'Centro Agropecuario “La Granja” – Regional Tolima',
      },
      {
        nombre: 'Carolina Coca Salazar',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital ',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo Lopez ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Felipe Herrera Roldan',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Veimar Celis Melendez',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
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
