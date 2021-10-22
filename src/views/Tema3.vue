<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 La comunicación comercial
    .row.mb-5.justify-content-center
      .col-lg-8
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/112.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Es el grupo de instrumentos de comunicación que usa la empresa de forma masiva o personalizada para hacer promoción de una marca, producto o servicio, con el fin de llamar la atención del público objetivo al que van dirigidos (Wolters, 2021).
    p.mb-5 La comunicación es uno de los cuatro instrumentos básicos del mercadeo, que se clasifican tradicionalmente en publicidad, relaciones públicas, promoción de ventas y venta personal. En la actualidad se han sumado otras dos, el buzz marketing o el marketing experiencial. Por eso, hoy se suele hablar de comunicación 360º o Comunicación Integrada de Marketing (CIM). La idea es que ayude a lograr los objetivos de marketing a través de la comunicación, buscando la eficacia en las estrategias y su respectivo plan de acción, conociendo lo mejor posible al cliente objetivo e impactándolo a través de todos los medios que sean posibles (según el músculo financiero de la marca) y con una estrategia envolvente.
    #t_3_1.titulo-segundo(data-aos="fade-right")
      h2 3.1 Niveles de la comunicación comercial
    p.mb-5 Los instrumentos o herramientas de comunicación son aplicados a diferentes niveles dentro de la empresa, buscando diferentes objetivos según sea el nivel donde se aplique:
    .row.mb-5
      .col-lg-4
        .tarjeta.bg--1-claro.p-4.h-100.hover
          img(src='@/assets/curso/113.svg' style='width: 85px').m-auto.mb-3
          .text-center
            h4 Nivel corporativo
            p El objetivo de comunicación es construir, defender y mantener la reputación de la marca.
      .col-lg-4
        .tarjeta.bg--1-claro.p-4.h-100.hover
          img(src='@/assets/curso/114.svg' style='width: 85px').m-auto.mb-3
          .text-center
            h4 Nivel de marca
            p El propósito es facilitar la comercialización de productos y servicios, y construir imagen de marca. La imagen de marca es la percepción que el cliente tiene de la marca. 
      .col-lg-4
        .tarjeta.bg--1-claro.p-4.h-100.hover
          img(src='@/assets/curso/115.svg' style='width: 85px').m-auto.mb-3
          .text-center
            h4 Nivel interno
            p El fin es construir una identidad hacia el interior de la empresa en la que se estimule la satisfacción, la moral, el rendimiento y el talento de los empleados. Se le conoce como identidad interna compartida que ayuda emocionalmente a mantener unida la empresa. El responsable es el área de recursos humanos.
    h3(data-aos='fade-right') Etapas de un plan de comunicación comercial
    p.mb-5 Un plan de comunicación usado para cualquier nivel debe pasar por las siguientes etapas: 
    .row.justify-content-center.mb-5
      .col-lg-6
        PasosA.color-acento-contenido.mb-5(tipo="n")
          div
            p El plan arranca con el diagnóstico general de la empresa y la identificación del problema que esta tiene actualmente.
          div
            p Luego de desarrollar este análisis en la etapa inicial se pasa a la segunda etapa donde definen los objetivos: lo que se desea lograr con la comunicación. En tercer lugar, se debe detallar el público objetivo al que va dirigida la comunicación
          div
            p La tercera etapa es el establecimiento de la estrategia del mensaje (qué y cómo se desea comunicar) y la estrategia de medios (qué canales se emplearán). 
          div
            p Finalmente, se debe adjudicar un presupuesto que sirva para conseguir los objetivos trazados. Además de diseñar un cronograma donde se ordene bien la planeación, los objetivos, las estrategias, las acciones, los responsables y las fechas de realización de cada acción, de tal forma que el equipo de trabajo revise, semana tras semana, cuáles son las actividades para desarrollar.
    h3(data-aos='fade-right') Canales y tipos de contacto
    p.mb-5 Canal o medio de contacto es la ruta por la que un cliente interesado en una empresa puede entrar en contacto con ella. Algunos de ellos permiten un contacto bidireccional (redes sociales, chat, blog, teléfono, etc.) con el cliente, otros no como por ejemplo los medios masivos (televisión, prensa, revistas, etc.). Este apartado, canales y tipos de contacto, se refiere a aquellos medios en los que la empresa le da la oportunidad al cliente de tener una conversación o una interacción con ella. Así entonces, las empresas en la actualidad eligen preferiblemente diferentes canales en los que pueda existir ese contacto bidireccional con sus clientes y, estos son:
    LineaTiempoD.color-acento-contenido.mb-5
      .row.text-small(numero="1" titulo="Teléfono").p-4
        .col-lg-7
          p Es considerado el más tradicional por excelencia y sin importar la aparición de nuevas tecnologías continúa siendo uno de los medios más usados. Este medio entrega muchas ventajas, como, por ejemplo, es inmediato, rápido, permite un contacto bidireccional y una fluidez en la comunicación. Como desventaja, es que le falta de un contacto más en directo, persona a persona. La mayoría de las empresas lo tienen entre sus canales preferidos para contactar a sus clientes. 
        .col-lg-5: img(src='@/assets/curso/116.jpg')
      .row.text-small(numero="2" titulo="Correo electrónico").p-4
        .col-lg-7
          p Una de las vías que más adeptos ha recabado desde los inicios de la red.  Es muy versátil en cuanto al reparto de tiempos (se puede responder de inmediato, pero también dejar pasar un tiempo, si no se quiere hacerlo de inmediato). Tiene un componente de "formalidad" que otorga el formato por escrito y que se puede archivar con facilidad. El correo electrónico es, sin lugar a duda, uno de los favoritos tanto para clientes como para empresas.
        .col-lg-5: img(src='@/assets/curso/117.jpg')
      .row.text-small(numero="3" titulo="Formulario de contacto").p-4
        .col-lg-7
          p Es un medio bastante útil, porque es primordial para interactuar con los clientes y poderles ofrecerles una manera veloz y sin problemas de mantener un contacto directo con la empresa. Su función es la de recibir el primer contacto con un cliente potencial, que por lo general se encuentra ubicado en el sitio web, y que a partir de ahí comienza el embudo de ventas, por lo que es una pieza vital en el engranaje para entregar valor a la marca. 
        .col-lg-5: img(src='@/assets/curso/118.jpg')
      .row.text-small(numero="4" titulo="Redes sociales").p-4
        .col-lg-7
          p Estas plataformas se usan como medios de contacto personalizado y resultan bastante útiles. La empresa debe saber cuáles redes sociales usar. La sugerencia es tener pocas redes sociales y que sean aquellas donde el cliente potencial se encuentra presente.
        .col-lg-5: img(src='@/assets/curso/119.jpg')
      .row.text-small(numero="5" titulo="Chatbot ").p-4
        .col-lg-7
          p Herramienta de software que reemplaza las funciones de una persona y que a través de una interfaz tipo chat puede crear conversaciones en tiempo real con los clientes de la marca. Han ganado popularidad en los últimos años presentándose como una nueva forma para que las empresas se puedan comunicar con sus clientes, tanto potenciales como reales; además que aprovechan la progresiva popularidad de las aplicaciones de telefonía celular.
        .col-lg-5: img(src='@/assets/curso/120.jpg')
    #t_3_2.titulo-segundo(data-aos='fade-right')
      h2 3.2 El asesor comercial
    .row.mb-5
      .col-lg-6(data-aos='fade-right'): img(src='@/assets/curso/121.jpg')
      .col-lg-6(data-aos='fade-left'): p Profesional que tiene como función entregar la información suficiente y completa a los clientes potenciales o posibles compradores con el fin de lograr una acción de compra por parte de ellos. Otras funciones son, conocer los mercados y los productos y servicios, y hacer un seguimiento sobre esos clientes o posibles compradores (Wetto, 2017).
        br
        br
        |El asesor comercial, en general, es un vendedor, pero son personas que no se limitan a conseguir una venta, sino que intentan conseguir de los clientes la información que se necesita para ofrecerles el producto que mejor se ajuste a sus necesidades. Y en este sentido, entregan una atención antes, durante y después de la compra. Y en este sentido, cumple un rol de doble vía, porque además de asesorar y entregar información útil a los clientes, consigue de ellos datos importantes que luego los puede usar la empresa para mejorar en todo sentido, desde los productos y servicios, hasta las estrategias comerciales, el branding y el mercado objetivo. 
    h3(data-aos='fade-right') Funciones del asesor comercial
    p.mb-5 El asesor comercial cuenta con muchos elementos y herramientas para el logro de su objetivo, la venta, por lo cual es necesario conocer las funciones inherentes a su cargo, las que se verán a continuación:
    .tarjeta.bg--1-claro.p-5.mb-5
      LineaTiempoC.color-acento-contenido(text-small)
        .row(titulo="1")
          .col-md-6.mb-4.mb-md-0
            h4 Conocer ampliamente el mercado
            p Esta función abarca no solo poseer datos precisos sobre la esencia de la venta, sino también sobre desarrollar una investigación de las necesidades reales de los clientes, para ofrecerles el producto o servicio que mejor se adecúe a sus necesidades o deseos. También permite al asesor comercial descubrir potenciales clientes, conociendo en dónde se encuentran y cómo contactarlos.
          .col-md-6
            figure
              img(src='@/assets/curso/122.jpg', alt='Texto que describa la imagen')
        .row(titulo="2")
          .col-md-6.mb-4.mb-md-0
            h4 Conocer el producto o servicio que ofrece
            p Todo asesor comercial debe probar el producto o servicio que ofrece poniéndose por un instante en la piel del consumidor. Así es como el asesor puede estar en capacidad de dar respuesta a cualquier pregunta o duda que tenga el cliente, y llegar incluso a anticiparse, proporcionándole la información puntual que él está requiriendo.
          .col-md-6
            figure
              img(src='@/assets/curso/123.jpg', alt='Texto que describa la imagen')
        .row(titulo="3")
          .col-md-6.mb-4.mb-md-0
            h4 Ser un asesor activo
            p Esta función es la que hace la diferencia entre un vendedor de un asesor comercial. El asesor no se limita en responder preguntas del cliente, sino que intenta indagar sobre sus necesidades, escuchándolo con atención para ofrecerle la mejor opción, aunque esta pueda ser completamente distinta a la que en principio el cliente buscaba.
          .col-md-6
            figure
              img(src='@/assets/curso/124.jpg', alt='Texto que describa la imagen')
        .row(titulo="4")
          .col-md-6.mb-4.mb-md-0
            h4 Proporcionar información pertinente
            p Es una obligación tener consigo toda la información sobre el producto. Esto lo puede lograr leyendo los instructivos y datos de los productos, pero también probándolos, sintiendo en carne propia los atributos y carencias, usos y precauciones. El vendedor busca el producto que el cliente le pidió. En cambio, el asesor comercial averigua sobre la necesidad que el comprador desea satisfacer al adquirirlo y, si es del caso, le puede sugerir una mejor elección, o simplemente ratifica la buena selección del producto por parte del cliente. También debe estar enterado sobre competencia y sobre las características del mercado. Por ello, debe tener curiosidad, ser investigador y estar al día sobre tendencias, novedades, actualidad, lanzamiento de productos, artículos discontinuos, cambios en las políticas comerciales o de fabricación, leyes, normas y todo aquello que pueda incidir o comprometer la venta.
          .col-md-6
            figure
              img(src='@/assets/curso/125.jpg', alt='Texto que describa la imagen')
        .row(titulo="5")
          .col-md-6.mb-4.mb-md-0
            h4 Mantener una comunicación eficiente
            p También es obligatorio tener los instrumentos adecuados para tener una excelente comunicación, tanto oral como escrita, con el comprador. Además de entenderlo y escucharlo, debe aplicar la psicología para conseguir información relevante con el fin de ofrecerle la mejor elección o, si es necesario, hacerlo cambiar de opinión. Por eso, esta función también trae consigo el ser perceptivo y el ser comprensivo.
          .col-md-6
            figure
              img(src='@/assets/curso/126.jpg', alt='Texto que describa la imagen')
        .row(titulo="6")
          .col-md-6.mb-4.mb-md-0
            h4 Tener una actitud proactiva
            p Debe adelantarse a las necesidades del cliente, siempre pensando en su satisfacción y en la solución de sus problemas. Esto lo logra siempre y cuando lo conozca bien, sabiendo qué es lo que necesita y por qué lo busca, llevando un historial de sus compras y obteniendo datos relevantes como, por ejemplo, qué productos ha adquirido, cuál es el estilo de vida que tiene, cuáles son sus gustos e intereses, cómo se compone su núcleo familiar, y todos los datos que pueda obtener de él. Es así como el asesor comercial podrá estar en condiciones de anticiparse al cliente para poderle ofrecer beneficios o variedad de elecciones hasta que descubra lo que realmente requiere, como, por ejemplo, nuevos productos o nuevas versiones de artículos que ya tiene.
          .col-md-6
            figure
              img(src='@/assets/curso/127.jpg', alt='Texto que describa la imagen')
        .row(titulo="7")
          .col-md-6.mb-4.mb-md-0
            h4 Hacer seguimiento de los clientes
            p Una de las funciones más importantes porque implica, además de hacerle un seguimiento al cliente, conocer cuáles son los compradores insatisfechos, o sea, los que no pudieron encontrar en el mercado el producto para satisfacer su necesidad o deseo. Al cliente fiel hay que mantenerlo en un nivel de lealtad hacia la marca, y al cliente potencial hay que captarlo para que realice una acción de compra y conozca uno o varios productos de la marca. Para lograrlo es importante administrar una base de datos que le permita al asesor comercial tener actualizados los datos de los clientes para poderse contactar con ellos (tanto clientes reales y potenciales). Por ejemplo, los datos telefónicos o los correos electrónicos para poderles enviar información sobre noticias que podrían ser de su interés.
          .col-md-6
            figure
              img(src='@/assets/curso/128.jpg', alt='Texto que describa la imagen')
        .row(titulo="8")
          .col-md-6.mb-4.mb-md-0
            h4 Conjugar intereses
            p En una acción de compra interceden tres actores: cliente, vendedor y producto que se promociona. Y como en toda relación comercial la finalidad es que estos actores logren un beneficio: el comprador logra satisfacer su necesidad, el vendedor gana una comisión por la venta realizada, y el producto hace que la empresa sea rentable. Y para que esta relación comercial perdure En el tiempo se necesita que el asesor comercial, que es el puente entre empresa y cliente, mantenga satisfechos a ambos a través de una excelente atención. Cosa que se puede lograr cuando existe una buena comunicación, honesta y clara en ambas vías, entre los tres actores (Wetto, 2017).
          .col-md-6
            figure
              img(src='@/assets/curso/129.jpg', alt='Texto que describa la imagen')
    #t_3_3.titulo-segundo(data-aos="fade-right")
      h2 3.3 Medios de comunicación impresos
    .row.mb-5.align-items-center
      .col-lg-6(data-aos='fade-right'): img(src='@/assets/curso/130.jpg', alt='Texto que describa la imagen')
      .col-lg-6(data-aos='fade-left')
        .cajon-b.color-secundario.abajo-derecha.p-3
          p.mb-0.ps-4 Son aquellos que al producirse deben pasar por un proceso de impresión, siendo los periódicos, las revistas y los folletos algunos de los que más se destacan. Sin embargo, dentro de estos, y además de los nombrados anteriormente, se encuentran otras publicaciones en papel, como, por ejemplo, los libros, plegables, carteles, afiches, lonas y anuncios. Su finalidad es la información que deben entregar a los clientes meta sobre temas de su interés; además de motivar, educar, construir relaciones y generar una primera compra por parte del cliente. 
    p.mb-5 Estos medios dependen de un proceso de distribución que se debe planear de manera estratégica para hacer que el público tenga conocimiento de marca, apoyando al anunciante en la intención de persuadir al cliente a realizar una acción de compra. Algunos de estos medios impresos salen a la venta al público y se distribuyen en tiendas, papelerías, librerías, etc., pero también existen los son solamente institucionales, o sea que se distribuyen al interior de la empresa e incluso se pueden repartir entre sus clientes, tales como los folletos ilustrativos empresariales y los plegables, entre otros.
      br
      br
      |A pesar de las predicciones de que los medios electrónicos suplantarán a los medios impresos, estos aún continúan activos. Los medios impresos tienen excelentes resultados de impresión, y se puede decir que son los medios más tangibles, que ayudan a la promoción, recordación y posicionamiento de una marca y sus productos o servicios:
    AcordeonB.mb-5(tipo="b" clase-tarjeta="tarjeta")
      .row(titulo="Periódicos").px-3    
        .col-lg-8: p Usa la comunicación escrita y visual. Simboliza una oportunidad seductora para los anunciantes con presencia en mercados locales, departamentales o nacionales.
          br
          br
          |Es el medio de comunicación masivo que posee mayor credibilidad, porque la noticia tiene tiempo de ser revisada y estudiada antes de ser llevada a impresión. 
          br
          br
          |Son económicos para el consumidor, pero no lo son para los anunciantes. En general, todos los medios masivos de comunicación son costosos publicitariamente hablando. Y además, el papel periódico no es de excelente calidad, por lo que el proceso de impresión se debe realizar en tintas RGB (Red, Green y Blue). 
        .col-lg-4: img(src='@/assets/curso/131.jpg')
      .row(titulo="Revistas").px-3    
        .col-lg-8: p Así como los periódicos, las revistas también son medios masivos visuales, con la ventaja de poder seleccionar mejor a la audiencia meta (hay revistas especializada en muchas áreas, por ejemplo, deportivas, económicas, farándula, noticias, tecnología, etc.). 
          br
          br
          |Tienen mayor calidad tanto en impresión (usa tintas CMYK – cian, magenta, cian y black) como en el papel (propalcote), por lo que son más costosas para los lectores y también para los anunciantes.
        .col-lg-4: img(src='@/assets/curso/132.jpg')
      .row(titulo="Folletos ").px-3    
        .col-lg-8: p Son de menor tamaño que los medios antes mencionados y también están basados en una comunicación escrita. 
          br
          br
          |Se usan de manera interna para permitir el acercamiento directo con empleados y con clientes reales y potenciales pues en la mayoría de los casos se entregan de manera directa. La marca que los envía a impresión (en este caso, anunciante) y brinda a través de este medio una información completa y extensa sobre las características y beneficios del producto. En comparación con los periódicos y revista tienen bajo costo por impresión en volumen (Arellano, Barrera, Buendía, Castillo y Zamora, 2013)
        .col-lg-4: img(src='@/assets/curso/133.jpg')
    #t_3_4.titulo-segundo(data-aos="fade-right")
      h2 3.4 Muestra comercial
    .row.mb-5
      .col-lg-6(data-aos='fade-right'): img(src='@/assets/curso/134.jpg', alt='Texto que describa la imagen')
      .col-lg-6(data-aos='fade-left')
        p Es una herramienta muy efectiva de Branding que en la actualidad puede ser usada de manera estratégica en las tiendas <i>online</i> o <i>e-commerce</i>. Estrategia tradicional de <i>marketing</i> que también es llamada <i>Sampling</i> y que radica en el envío de una muestra de productos de manera gratuita y con un claro objetivo promocional (Florido, 2021).
          br
          br
          | La muestra gratis se envía al lugar de ubicación donde se encuentra, bien sea el cliente real y habitual, o el cliente potencial. Cuando se trata del cliente real y habitual, lo que se busca primordialmente es fidelizarlo para que él termine referenciando el producto a sus contactos, es decir, lo que se intenta hacer es incentivar el tradicional “voz a voz”, que en realidad es la mejor promoción que una marca puede tener, porque los clientes confían más en las sugerencias de alguien conocido que en la misma publicidad. Y cuando se trata de un cliente potencial, lo que se busca es que lo conozca para que más adelante termine comprándolo.
    .row.mb-5.justify-content-center
      .col-lg-8(data-aos='zoom-in-up')
        .cajon.color-secundario.bg--2-claro.p-4.mb-4
          p Por eso, la estrategia de <i>marketing</i> que se relaciona con el envío de las muestras gratis debe estar bien pensada porque no se trata de enviar cualquier objeto. Se trata de cuidar muy bien la imagen de la marca eligiendo muy bien el artículo de regalo para generar un impacto significativo en el cliente. 
    h3(data-aos='fade-right') Ejemplos más conocidos de muestras gratuitas
    SlyderD.mb-5(:datos="datosSlyder")
    p.mb-5 La estrategia consiste entonces en que las empresas entreguen muestras gratis de sus productos con la finalidad de fidelizar los clientes reales y habituales o de alcanzar clientes potenciales que se interesen por lo que la empresa ofrece. Cuando el cliente prueba un producto, sea cual sea, tiene más posibilidades de terminar comprándolo, siempre y cuando le haya gustado.
    h3(data-aos='fade-right') Existen varias formas de ofrecer estas muestras:
    .bg--1-claro.p-5.mb-5
      .row
        .col-lg-3: img(src='@/assets/curso/140.svg').mq-img.mb-4
        .col-lg-9
          ul.lista-ul--color
            li 
              i.vineta
              | Ofrecerlo como regalo por la compra de otro artículo.
            li 
              i.vineta
              | Enviando muestras gratuitas a domicilio; los gastos de envío son pagados por la marca. En este caso se puede hacer de dos formas; cuando la marca elige los clientes reales y habituales para enviarles la muestra gratis; y cuando la empresa da la oportunidad (por ejemplo, en internet) de que los clientes potenciales soliciten la muestra gratuita.
              li 
                i.vineta
                | Ofrecer la muestra gratuita en ferias comerciales (Florido, 2021).
    #t_3_5.titulo-segundo(data-aos="fade-right")
      h2 3.5 Material publicitario en el punto de venta
    .row.mb-5
      .col-lg-6(data-aos='fade-right'): img(src='@/assets/curso/141.jpg', alt='Texto que describa la imagen')
      .col-lg-6(data-aos='fade-left')
        p El concepto de material POP, proviene de Point Of Purchase, por sus siglas en inglés; su traducción directa es punto de compra; que se refiere al material situado en los lugares donde se exhiben los productos con el fin de atraer la atención del cliente para motivarlos a una acción de compra (Yate, 2021).
          br
          br
          |El material POP, también se conoce como Publicidad en Lugar de Venta (PLV), o publicidad en el punto de venta. Este material tiene una amplia variedad de formas y tamaños, como, por ejemplo, exhibidores, rompe tráficos, habladores y puntas de góndola, entre otros. 
          br
          br
          |Las características más importantes que debe tener el material POP son: 
    .bg--1-claro.p-5.mb-5
      .row
        .col-lg-3: img(src='@/assets/curso/142.svg').mq-img.mb-4
        .col-lg-9
          ul.lista-ul--color
            li 
              i.vineta
              | Estar situado en el punto de venta del artículo al que se le hace publicidad o promoción. 
            li 
              i.vineta
              | Tener medidas coherentes con el área disponible en el punto de venta, tanto en dimensiones como en costos de fabricación. 
            li 
              i.vineta
              | Poseer un diseño publicitario que refuerce la identidad corporativa de la empresa y sus productos promocionados.
            li 
              i.vineta
              | Lograr el posicionamiento de la marca y sus productos en el punto de venta. 
            li 
              i.vineta
              | Responder a condiciones de tendencias, fechas especiales y modas.
    h3(data-aos='fade-right') Tipos de material publicitario en el punto de venta
    p.mb-5 A continuación, se invita a interactuar para conocer diferentes tipos de material publicitario utilizado en el punto de venta:

    //todo! PENDIENTE POR DESARROLLOOOOO!!!!///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    figure.mb-5
      img(src='@/assets/curso/143.svg', alt='Texto que describa la imagen')

    //todo! PENDIENTE POR DESARROLLOOOOO!!!!///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    #t_3_6.titulo-segundo(data-aos="fade-right")
      h2 3.6 Omnicanalidad
    .row.mb-5
      .col-lg-6(data-aos='fade-right'): img(src='@/assets/curso/144.jpg', alt='Texto que describa la imagen')
      .col-lg-6(data-aos='fade-left')
        p La omnicanalidad busca una experiencia significativa por parte del cliente, independientemente del medio elegido, el cual puede ser tradicional o digital. Se trata de una teoría muy bien aceptada por empresas y estrategas de mercadeo, y que, al ser un concepto tan nuevo, hay muy pocos casos reales de una estrategia omnicanal implementada totalmente (Romero, Maldonado y Núñez, 2021).
          br
          br
          |La globalización de las nuevas Tecnologías de la Información y la Comunicación (TIC) en el nuevo milenio y la aceptación masiva de la telefonía celular por parte de la sociedad en los últimos años, cambiaron el paradigma del relacionamiento con los clientes. Ahora las empresas deben gestionar al mismo cliente por medio de distintos canales y de manera ubicua. 
    p.mb-5 Por un lado, la multicanalidad presumía que la marca pudiera poner a disposición del cliente diferentes canales de comunicación para promocionar sus productos o servicios. Y por otro, la omnicanalidad involucra un enfoque estratégico más complejo porque con los mismos canales de comunicación, tanto tradicionales como digitales, la marca brinda una verdadera experiencia para el cliente porque no tiene ninguna fisura en la interacción.
      br
      br
      |Implementar la omnicanalidad demanda de una metodología que integre las diferentes perspectivas que existen sobre el tema teniendo en cuenta el punto de vista del cliente, el de la empresa y además el de los requerimientos técnicos para llevarla a cabo. Se debe tener en cuenta que, a lo largo del proceso, los intereses, simpatías, conductas y modelos mentales del cliente, deben estar siempre presentes en los requisitos en la infraestructura tecnológica para conectar los canales y su despliegue en la empresa.
    .row.mb-5.justify-content-center
      .col-lg-8(data-aos='zoom-in-up')
        .cajon.color-secundario.bg--2-claro.p-4.mb-4
          p Este nuevo contexto, demanda que la empresa desarrolle un agudo proceso de evolución, para adaptarse a este complicado ecosistema competitivo, impactando en la empresa a todo nivel, por ejemplo, en cultura y recursos, tecnología y datos, comunicación y mercadeo, y operaciones y procesos, siempre teniendo al cliente como núcleo central de los esfuerzos.
    p.mb-5 Toda metodología se acompaña de nuevas herramientas que hacen más fácil la ejecución a lo largo de la cadena de valor del cliente, tales como el Customer Journey (experiencia que tiene el cliente en el proceso de compra de un producto o servicio), Buyer persona (arquetipo del cliente ideal de un producto o servicio), diagnósticos de madurez y nuevas tecnologías que se adapten a las necesidades e integraciones de sistemas que ya existan. Se entiende como diagnóstico del nivel de madurez a la evaluación de la forma de trabajo que la empresa realiza para plantear mejoras en la aplicación práctica de tal manera que lleven a una madurez en actividades de control de calidad en el proceso de desarrollo de software.
    h3(data-aos='fade-right') De la multicanalidad a la omnicanalidad
    p.mb-5 Hoy en día, las empresas deben intentar conquistar a los clientes que cada vez son más digitales y que adoptaron velozmente las nuevas tecnologías y que, gracias a la difusión de la telefonía celular, se acostumbró a disponer de todo lo que desea, cuando y donde quiera. Es por esto por lo que la ominicanalidad requiere ser flexible y conveniente para que el cliente se pueda comunicar con las marcas a través del canal que elija, cuando lo desee y desde el sitio que quiera. Este paso significa que los canales deben estar interrelacionados y que la información de cada cliente debe fluir sin problema alguno entre las diferentes fases de la relación. Así las cosas, el contacto con el cliente permite que se pueda comenzar el proceso o transacción en un canal, continuarlo en otro y finalizarlo en uno totalmente diferente, todo de manera muy natural, sin grietas en la relación y con la misma identidad de marca.
    .row.mb-5.justify-content-center
      .col-lg-8(data-aos='zoom-in-up'): img(src='@/assets/curso/145.jpg')
    p.mb-5 Esta gestión integral del relacionamiento con los clientes necesita de soluciones tecnológicas que lo soporten y que, además, sumen valor a lo largo del Customer Journey, entregando consistencia entre los canales usados en cada uno de los diferentes “momentos de la verdad” (puntos relevantes de la relación con el cliente). Desde el momento en que realiza una compra, hasta el contacto con el servicio de atención al cliente, asentar una reclamación, analizar un extracto bancario online o efectuar un cambio de tarifa de una empresa de suministros, siempre se debe reflejar consistencia y se debe actuar como canales interrelacionados. Los clientes pueden permitir distintos niveles de servicio en los distintos canales esperando que la propuesta de valor de marca sea coherente entre ellos. 
    .row.mb-5
      .col-lg-6(data-aos='fade-right')
        p La ejecución de una estrategia omnicanal está íntimamente ligada a la estrategia de experiencia del cliente; no se puede tener una buena estrategia omnicanal si no se incluye la visión del cliente y la coherencia de la marca en su planeación. Es vital tener en cuenta la apropiada y sólida combinación de los diferentes canales de interacción como uno de los puntos más importantes de la vinculación del cliente con la marca.
          br
          br
          |De esta forma, muchas organizaciones se encuentran actualmente sumergidas en la evaluación, rediseño e innovación de sus modelos de relacionamiento con el cliente, buscando mejorar la eficiencia operativa y maximizar la experiencia del cliente gracias al valor entregado en cada uno de los puntos de contacto. 
      .col-lg-6(data-aos='fade-left'): img(src='@/assets/curso/146.jpg', alt='Texto que describa la imagen')  
    p.mb-5 Estas sinergias permiten optimizar la experiencia del cliente debido a tres elementos:
    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Visión 360º ")
        .row
          .col-md-4
            figure
              img(src='@/assets/curso/147.jpg', alt='Texto que describa la imagen')
          .col-md-8.mb-4.mb-md-0
            h4 Conocimiento y visión 360º del cliente
            p Hay que conocer integralmente al cliente a través de la creación y administración de los perfiles completos en un CRM. Perfiles que deben contener los movimientos en los diferentes puntos de contacto con el cliente a través de los diferentes canales, de tal forma que se permita un trato más personalizado para la presentación de la información/ofertas que sean necesitadas o deseadas por cada cliente.
      .py-3.py-md-4(titulo="Interacciones")
        .row
          .col-md-4
            figure
              img(src='@/assets/curso/148.jpg', alt='Texto que describa la imagen')
          .col-md-8.mb-4.mb-md-0
            h4 Personalización de las interacciones. 
            p Gracias al conocimiento integral del cliente se puede comenzar a planear la interacción con él para poderle ofrecer un servicio que se adapte a su perfil. Es vital hacer sentir al cliente como alguien “relevante” para la marca. Por eso se le debe hablar con nombre propio, tratarlo de forma natural y amena, y siempre siendo coherentes con sus deseos y necesidades, de esta manera, se fortalece su vínculo emocional con la marca.
      .py-3.py-md-4(titulo="Propuestas de valor")
        .row
          .col-md-4
            figure
              img(src='@/assets/curso/149.jpg', alt='Texto que describa la imagen')
          .col-md-8.mb-4.mb-md-0
            h4 Oportunidad y propuestas de valor 
            p El aporte de valor al cliente en cada uno de los puntos de contacto debe pasar la incorporación de los datos analíticos a cada una de las etapas del <i>Customer Journey</i>, para así poder entregar el mensaje apropiado y pertinente. Si los canales se conectan correctamente, cada uno de los puntos de contacto con el cliente serán una oportunidad para conseguir nueva información de valor y para suministrar un mensaje que sea de interés para él.
    p.mb-5 Para concluir, las empresas pueden dirigir su estrategia en la búsqueda de la integración y unión entre todos los canales de la marca, de manera que se interconectan de forma instantánea y natural entre sí. Es vital tener claro que el presente y el futuro están en la integración de los canales físicos y digitales.
      br
      br
      |La omnicanalidad está demostrando que se trata de una estrategia efectiva para edificar un vínculo comunicativo entre clientes, productos, canales y empresas, lo que favorece el relacionamiento emocional de parte del cliente con la marca, aumentando las ventas y formando una nueva manera de entender su experiencia (Romero, Maldonado y Núñez, 2021). 












</template>

<script>
import AcordeonB from '../components/AcordeonB.vue'
export default {
  name: 'Tema3',
  components: {
    AcordeonB,
  },
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Muestras gratis para bebés ',
        texto:
          'Los padres saben que antes de nacer el bebé es muy probable que comiencen a recibir muestras gratuitas de revistas para bebé, cremas, pañales, lociones, ropa, etc. Muy importante, que el cliente reciba la muestra en el momento idóneo y preciso, que es en el momento del nacimiento del bebé.',
        imagen: require('@/assets/curso/135.jpg'),
      },
      {
        titulo: 'Muestras gratis de maquillaje',
        texto:
          'Otro excelente ejemplo de esta estrategia publicitaria que una marca puede hacer. El maquillaje es un artículo pequeño que no ocupa mucho espacio y, además, es fácil de enviar por correo directo.',
        imagen: require('@/assets/curso/136.jpg'),
      },
      {
        titulo: 'Muestras gratis de perfumes',
        texto:
          'En este caso es muy usual en clientes potenciales porque la idea es regalarles una muy pequeña muestra para que lo conozcan. Esta estrategia continúa siendo efectiva porque la mayoría de clientes, además de aceptar la muestra, agradecen el detalle.',
        imagen: require('@/assets/curso/137.jpg'),
      },
      {
        titulo: 'Demos gratis de los videojuegos',
        texto:
          'Esta industria también ha comprendido el potencial que tiene ofrecer muestras gratuitas, porque así motivan la compra del videojuego más adelante. En la actualidad, esta muestra puede ser online, descargando una versión gratuita de internet; el cliente queda con deseos de obtener la versión completa. Estrategia que funciona muy bien.',
        imagen: require('@/assets/curso/138.jpg'),
      },
      {
        titulo: 'Plantillas gratuitas Wordpress y Wix',
        texto:
          'Son dos plataformas de plantillas gratuitas que ya tienen múltiples opciones de diseños de sitios web y blogs, llamativos e impactantes visualmente, y que están perfectamente diseñados por categorías (tecnología, restaurantes, viajes, moda, servicios, etc.). El cliente puede elegir una plantilla para su sitio web, probarla, editarla y personalizarla. Y cuando esté seguro de su diseño y tenga comprados el dominio y el hosting en internet, procede a pagar a dichas plataformas la plantilla. Es negocio asegurado cuando se trata de una empresa o una persona que primero desea ver cómo queda su diseño de sitio web o blog.',
        imagen: require('@/assets/curso/139.jpg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped>
.linea-tiempo-d__item--selected
  background-color: #DED2F3 !important
</style>
