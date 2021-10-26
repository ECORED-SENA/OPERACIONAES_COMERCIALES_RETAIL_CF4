<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.bg-img.p-4.p-md-5
      
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Productos y servicios
    .row.mb-5
      .col-lg-6(data-aos='zoom-in-up')
        p El producto es cualquier artículo que se ofrece en el mercado para su compra y que satisface una necesidad o deseo. Además, tiene atributos y beneficios que lo pueden hacer diferente a la competencia. Algunos de los productos sufren un proceso de transformación para llegar a su forma final con la que se exhibirá en los establecimientos (Chávez, 2016).
        .cajon.color-secundario.bg--2-claro.p-4.mb-4
          p El término “bienes” contiene al producto/servicio. Los productos son tangibles, se pueden tocar, poner, comer, untar, etc., como por ejemplo zapatos, hamburguesas, perfumes. En cambio, los servicios son intangibles, no se pueden tocar, pero si se pueden usar, como por ejemplo los servicios bancarios, funerarios, de salud, etc.
        p Tanto los productos como los servicios necesitan de la parte tangible e intangible para su eficiente funcionamiento. La naturaleza del producto es la tangibilidad; pero, para que funcione en el mercado, necesita de su parte intangible, o sea, el servicio (figura 1). 
      .col-lg-6(data-aos='zoom-in-up'): img(src='@/assets/curso/48.jpg')
    .titulo-sexto.color-acento-contenido
      h5.fw-normal
        b Figura 1 
        | Productos y servicios
    .row.mb-5.justify-content-center
      .col-lg-8(data-aos='zoom-in-up'): img(src='@/assets/curso/49.svg')
    p.mb-5 También conocido con el nombre de gama de productos. Es un conjunto de productos muy relacionados entre sí por sus funciones y servicios; se diferencian por sus características, tamaños, colores, olores, entre otros. Se refiere al total de artículos que una marca ofrece al consumidor para que tenga opciones de escoger.
    #t_2_1.titulo-segundo(data-aos="fade-right")
      h2 2.1 Portafolio de productos
    .row.mb-5.justify-content-center
      .col-lg-6(data-aos="fade-right")
        p.mb-5 Por ejemplo, cuando se compra una pastilla para el dolor muscular, se busca en la farmacia más cercana y a la hora de hacer la compra se requiere de un servicio de atención, facturación y servicio de entrega del producto. 
          br
          br
          |Por su lado, la naturaleza del servicio es intangible, pero, en cuanto a su funcionamiento, necesita de su parte tangible. Por ejemplo, un hotel brinda el servicio de hospedaje, pero, para poder proporcionar este servicio, necesita de infraestructura física, inmobiliario y equipamiento.
      .col-lg-6(data-aos="fade-left"): img(src='@/assets/curso/50.jpg')
    h3(data-aos='fade-right') Características de la gama de productos 
    p.mb-5 Tiene que ver con las dimensiones del surtido, tema visto en el módulo anterior. En este apartado se ampliará el concepto. La gama de productos se define a partir de las siguientes variables: 
    SlyderD.mb-5(:datos="datosSlyder")
    h3(data-aos='fade-right') Diseño de la gama de productos
    p.mb-5 Dentro del grupo de artículos que ofrece la marca, existen productos que poseen específicas características, las cuales permiten diseñar estrategias de ventas; estos productos se denominan:
    .row.mb-5.justify-content-center
      .col-lg-4
        .tarjeta.tarjeta-hover.bg--3.d-flex.justify-content-center.text-white.h-100
          .contenido.p-5.text-center
            img(src='@/assets/curso/55.svg' style='width: 102px').m-auto.mb-5
            h4 Cabeza de línea
            p Son los productos que suministran mayores beneficios a la marca; por lo general tienen mayor rotación de ventas o mayor rentabilidad.
          .imagen-hover: img(src="@/assets/curso/56.png")
      .col-lg-4
        .tarjeta.tarjeta-hover.bg--2.d-flex.justify-content-center.text-white.h-100
          .contenido.p-5.text-center
            img(src='@/assets/curso/55.svg' style='width: 102px').m-auto.mb-5
            h4 Productos a atracción
            p Se refiere a los productos que estimulan el interés y motivan a conseguir más información, y concluyen con la compra del artículo sin importar el precio.
          .imagen-hover: img(src="@/assets/curso/57.png")
      .col-lg-4
        .tarjeta.tarjeta-hover.bg--3.d-flex.justify-content-center.text-white.h-100
          .contenido.p-5.text-center
            img(src='@/assets/curso/55.svg' style='width: 102px').m-auto.mb-5
            h4 Productos reguladores
            p Estos productos tienen como misión la de atenuar las variaciones estacionales de la demanda, en épocas malas del año donde las ventas sean mínimas o exista escasez del artículo. Como ejemplo, una marca de productos deportivos vende trajes de baño cuando hay verano y esquís cuando hay invierno.
          .imagen-hover: img(src="@/assets/curso/58.png")
    #t_2_2.titulo-segundo(data-aos='fade-right')
      h2 2.2 Los servicios como valor agregado
    p.mb-5 El sector servicios va logrando más importancia día a día. Las marcas de países desarrollados invierten más del 50% de sus presupuestos en servicios para alcanzar una ventaja competitiva. Y este incremento de los servicios con valor corresponde a la exigencia de los clientes en la actualidad. Las marcas grandes han optado entonces por especializarse en el servicio continuo de atención al consumidor. Por ejemplo, la marca IBM declara ser una empresa de servicios y no de computadoras (Chávez, 2016).
    h3(data-aos='fade-right') Clasificación de los servicios 
    .row.mb-3.g-0
      .col-lg-2
        .tarjeta.tarjeta-hover.bg--1.rounded-0.h-100
          .contenido.p-4.text-center.h-100.d-flex.justify-content-center.align-items-center
            h1.texto-grande.mb-0.text-white.text-center 1
          .imagen-hover: img(src="@/assets/curso/59.svg")
      .col-lg-10
        .tarjetas-borde.bg-white.h-100.rounded-card.p-5
          h4 Generadores de utilidades.
          p Se refiere a aquellos que se cobran y que el cliente está dispuesto a pagar. Por ejemplo, marcas funerarias, de seguros, de diversiones, financieras, de servicios médicos, entre otros. 
    .row.mb-3.g-0
      .col-lg-2
        .tarjeta.tarjeta-hover.bg--1.rounded-0.h-100
          .contenido.p-4.text-center.h-100.d-flex.justify-content-center.align-items-center
            h1.texto-grande.mb-0.text-white.text-center 2
          .imagen-hover: img(src="@/assets/curso/59.svg")
      .col-lg-10
        .tarjetas-borde.bg-white.h-100.rounded-card.p-5
          h4 Mixtos
          p Es cuando el producto necesita del componente de servicio, sin importar si es en un grado mayor o menor. Como ejemplo se pueden citar los restaurantes, porque el producto va a variar de precio de acuerdo con la calidad de los servicios y atención prestada (música de fondo o en vivo, espacios amplios y cómodos, zonas de juegos para los niños, entre otros. 
    .row.mb-3.g-0
      .col-lg-2
        .tarjeta.tarjeta-hover.bg--1.rounded-0.h-100
          .contenido.p-4.text-center.h-100.d-flex.justify-content-center.align-items-center
            h1.texto-grande.mb-0.text-white.text-center 3
          .imagen-hover: img(src="@/assets/curso/59.svg")
      .col-lg-10
        .tarjetas-borde.bg-white.h-100.rounded-card.p-5
          h4 Servicios de apoyo
          p Son aquellos que se usan para ayudar a vender un artículo brindando apoyo adicional, como por ejemplo el servicio de entrega a domicilio, atención clara y oportuna y crédito, entre otros, y que motiven al cliente a realizar una acción de compra. Como ejemplo se puede citar la venta de camionetas 4x4 que, a la hora de la compra, y con el objetivo de que experimenten la camioneta, se le entrega al cliente y a su familia unos pases de cortesía para que asistan en un fin de semana a un determinado evento.
    .row.mb-3.g-0
      .col-lg-2
        .tarjeta.tarjeta-hover.bg--1.rounded-0.h-100
          .contenido.p-4.text-center.h-100.d-flex.justify-content-center.align-items-center
            h1.texto-grande.mb-0.text-white.text-center 4
          .imagen-hover: img(src="@/assets/curso/59.svg")
      .col-lg-10
        .tarjetas-borde.bg-white.h-100.rounded-card.p-5
          h4 Servicio de entrega
          p El cliente del siglo XXI quiere hacer el mínimo esfuerzo en la compra de un artículo. Este apartado se refiere a tener un excelente servicio de entrega y manejo de mercancías con el apoyo de pedidos vía teléfono, fax, correo electrónico, WhatsApp, almacenaje, dar facilidades para su adquisición es vital en el momento de comprar productos.
    .row.mb-5.g-0
      .col-lg-2
        .tarjeta.tarjeta-hover.bg--1.rounded-0.h-100
          .contenido.p-4.text-center.h-100.d-flex.justify-content-center.align-items-center
            h1.texto-grande.mb-0.text-white.text-center 5
          .imagen-hover: img(src="@/assets/curso/59.svg")
      .col-lg-10
        .tarjetas-borde.bg-white.h-100.rounded-card.p-5
          h4 Servicio de crédito
          p En la actualidad es el más requerido por los clientes para productos que le resulten costosos. Puede ser por medio de tarjetas de crédito, cheques por fechados, cuentas corrientes, tarjetas débito, etc.
    h3(data-aos='fade-right') Características de los servicios 
    .row.mb-3.g-0
      .col-lg-2
        .tarjeta.tarjeta-hover.bg--2.rounded-0.h-100
          .contenido.p-4.text-center.h-100.d-flex.justify-content-center.align-items-center
            h1.texto-grande.mb-0.text-white.text-center 1
          .imagen-hover: img(src="@/assets/curso/60.svg")
      .col-lg-10
        .tarjetas-borde2.bg-white.h-100.rounded-card.p-5
          h4 Intangibilidad del servicio
          p Los servicios no pueden ser vistos, probados, sentidos, olfateados o escuchados. En el sector de servicios, se promocionan experiencias intangibles. Por ejemplo, el servicio de un seguro médico es intangible, no se toca, pero se tiene la seguridad que cuenta con médicos cuando se requieran.   
    .row.mb-3.g-0
      .col-lg-2
        .tarjeta.tarjeta-hover.bg--2.rounded-0.h-100
          .contenido.p-4.text-center.h-100.d-flex.justify-content-center.align-items-center
            h1.texto-grande.mb-0.text-white.text-center 2
          .imagen-hover: img(src="@/assets/curso/60.svg")
      .col-lg-10
        .tarjetas-borde2.bg-white.h-100.rounded-card.p-5
          h4 Carácter indisociable del servicio
          p Es cuando los servicios se producen y se consumen al mismo tiempo y no se pueden separar de sus proveedores, ya sean estos, personas, máquinas o instalaciones. Por ejemplo, un restaurante vende comida, que es un producto, pero sustancialmente es un servicio y en este caso solo se hace tangible cuando se consume.   
    .row.mb-3.g-0
      .col-lg-2
        .tarjeta.tarjeta-hover.bg--2.rounded-0.h-100
          .contenido.p-4.text-center.h-100.d-flex.justify-content-center.align-items-center
            h1.texto-grande.mb-0.text-white.text-center 3
          .imagen-hover: img(src="@/assets/curso/60.svg")
      .col-lg-10
        .tarjetas-borde2.bg-white.h-100.rounded-card.p-5
          h4 Carácter perecedero del servicio
          p Los servicios no se pueden conservar, acumular o archivar en un cajón para luego ponerlos en venta, o para usarlos. Por ejemplo, los minutos en los que un odontólogo no tiene pacientes, no se puede acumular para venderlos más adelante, simplemente porque esos minutos ya no vuelven y se pierden por siempre. 
    .row.mb-5.g-0
      .col-lg-2
        .tarjeta.tarjeta-hover.bg--2.rounded-0.h-100
          .contenido.p-4.text-center.h-100.d-flex.justify-content-center.align-items-center
            h1.texto-grande.mb-0.text-white.text-center 4
          .imagen-hover: img(src="@/assets/curso/60.svg")
      .col-lg-10
        .tarjetas-borde2.bg-white.h-100.rounded-card.p-5
          h4 Variabilidad del servicio
          p  Se refiere a que la calidad en el servicio puede variar porque va a depender de quién los ofrece y cuándo, dónde y cómo los ofrece.
    #t_2_3.titulo-segundo(data-aos='fade-right')
      h2 2.3 La estrategia comercial de ventas
    p.mb-5 En un mundo donde la transformación digital se ha acelerado, y con un mercado sellado por una competencia extrema, se hace vital que toda marca cuente con una estrategia comercial de ventas que se centre en la satisfacción de los clientes (Silva, 2020).
      br
      br
      |Si la marca desea suministrar la mejor experiencia a los clientes, requiere tener una estrategia comercial bien diseñada, la cual enlace con el consumidor y lo motive no solo a comprar, sino a formar parte de la “tribu” de marca, es decir, conjunto de personas que están identificados con un producto, compartiendo ciertos argumentos y teniendo nociones parecidas sobre la marca. 
    .row.mb-5.justify-content-center
      .col-lg-7(data-aos='zoom-in-up')
        .cajon.color-secundario.bg--2-claro.p-4.mb-4
          p Hoy en día, en pleno siglo XXI, contar con una estrategia comercial es cuestión de supervivencia. Aproximadamente el 80% de las compañías que no diseñar nuevas estrategias de <i>marketing</i> y ventas, desaparecen del mercado.
    .row.mb-5
      .col-lg-6(data-aos='fade-right'): img(src='@/assets/curso/61.jpg')
      .col-lg-6(data-aos='fade-left')
        p La estrategia comercial se puede definir como el grupo de acciones que una empresa puede poner en práctica con el fin de dar a conocer un producto nuevo, para aumentar su participación de mercado. Es una “hoja de ruta”, un plan diseñado de manera personalizada según el contexto y necesidades de cada empresa, de acuerdo con sus características y filosofía empresarial (objetivos, principios, misión, visión y valores).
          br
          br
          |En una estrategia comercial de ventas se unen un conjunto de acciones racionales y elegidas en el interior de la compañía. Se deben centrar en el cliente y sus acciones tienen como fin poder posicionar la marca en el mercado. Va mucho más allá del aumento en las ventas ya que su dirección apunta a la perduración de la marca y sus ventas en el tiempo, garantizando de esta manera su existencia.
    h3(data-aos='fade-right') Premisas de la estrategia comercial de ventas
    AcordeonB.mb-5(tipo="b" clase-tarjeta="tarjeta")
      div(titulo="No existe estrategia sin contexto").px-3    
        p Para que la estrategia marche, debe dar respuesta a la pregunta “¿En dónde se encuentra la empresa?”. La respuesta debe incluir datos reveladores sobre su situación actual en el año que termina, así como tener en cuenta variables globales e internas que pueden impactar en el funcionamiento de la empresa. Según sea el contexto empresarial se diseña la estrategia, siempre con mirar a un mejoramiento continuo, con base en ese análisis de su situación actual.
      div(titulo="Necesidad de una visión y una misión").px-3    
        p La visión es el norte de la marca, si se visualiza, entonces se puede alcanzar. No se pueden planificar estrategias si no se sabe a dónde se quiere llegar. Por su lado, la misión, es el ahora, quién se es en la actualidad. Por otro lado, una estrategia comercial para que sea exitosa debe ser realista, lo que implica tener claro cuáles son las metas a las que la empresa puede dar cumplimiento según sus recursos, en un período determinado de tiempo. Por eso, la visión y la misión son fundamentales.
      div(titulo="La estrategia comercial debe ser medible y flexible").px-3    
        p La ejecución de la estrategia comercial se debe medir en cada una de sus fases, por lo que los indicadores deben estar preestablecidos. El resultado debe permitir un ajuste en la estrategia en pos de lograr un mejoramiento continuo.
    h3(data-aos='fade-right') Principios de la estrategia comercial de ventas
    p.mb-5 Las premisas permiten la creación de las condiciones previas para el diseño y ejecución de la estrategia comercial de ventas: Por su lado, los principios son reglas sagradas que se deben cumplir para que la estrategia marche.
    ol.lista-ol--cuadro.lista-ol--separador.mb-5
      li 
        .lista-ol--cuadro__vineta
          span 1
        | La estrategia debe estar planteada en términos operativos, con acciones específicas y con plazos y responsables específicos.
      li 
        .lista-ol--cuadro__vineta
          span 2
        | Una vez determinada la estrategia, el trabajo y la organización de la empresa deben alinearse para el logro de los objetivos pactados.
      li 
        .lista-ol--cuadro__vineta
          span 3
        | Cada uno de los empleados de la empresa deben tener conocimiento sobre la estrategia comercial, así como también las acciones concretas que se van a desarrollar para aportar a la contribución con el cumplimiento de sus labores.
      li 
        .lista-ol--cuadro__vineta
          span 4
        | Según su definición, la estrategia comercial de ventas se debe gestionar como un proceso que se desarrolla de manera continua e ininterrumpida.
    h3(data-aos='fade-right') Tipos de estrategia comercial de ventas
    p.mb-5 Lo primero que se debe hacer es diferenciar qué es estrategia comercial de ventas y qué es estrategia de <i>marketing</i> ya que no tienen el mismo fin. La estrategia de <i>marketing</i> se orienta en la generación de oportunidades en el mercado, mientras que la estrategia comercial de ventas se aprovecha de estas oportunidades para lograr la rentabilidad empresarial.
      br
      br
      |La estrategia comercial le da prioridad al cierre del proceso de ventas con los clientes ya conocidos. Además de incluir acciones que se dirigen a los clientes de la competencia y, en menor grado, a captar clientes que aún no conocen la marca. Hay varios criterios que sirven para lograr la clasificación de los tipos de estrategia comercial. Son criterios que se operan de manera cotidiana en el ámbito empresarial. 
      br
      br
      |Hay un criterio tradicional que divide la estrategia comercial en dos tipos esenciales:
    .row.justify-content-center.mb-5
      .col-lg-5.mb-4
        .tarjeta.bg--3-claro.px-4.py-4.d-flex.justify-content-center.align-items-center.position-relative
          h4.mb-0 Estrategia comercial de productos.
          .numero.bg--3
            p.mb-0.text-white 1
      .col-lg-5
        .tarjeta.bg--3-claro.px-4.py-4.d-flex.justify-content-center.align-items-center.position-relative
          h4.mb-0 Estrategia comercial de servicios.
          .numero.bg--3
            p.mb-0.text-white 2
    p.mb-5 A pesar de ser bastante usada en el pasado, esta clasificación sigue siendo válida en la actualidad, simplemente porque no es lo mismo vender un producto que un servicio, y las estrategias comerciales deben estar conectadas con este contexto.
      br
      br
      |Con la aparición de internet, surge un nuevo criterio cuyo uso se ha difundido fuertemente en el mundo empresarial, y que ha dividido los tipos de estrategia comercial en:
    .row.justify-content-center.mb-5
      .col-lg-5.mb-4
        .tarjeta.bg--1-claro.px-4.py-4.d-flex.justify-content-center.align-items-center.position-relative
          h4.mb-0 Estrategias comerciales <i>online</i>.
          .numero.bg--1
            p.mb-0 1
      .col-lg-5
        .tarjeta.bg--1-claro.px-4.py-4.d-flex.justify-content-center.align-items-center.position-relative
          h4.mb-0 Estrategias comerciales <i>offline</i>.
          .numero.bg--1
            p.mb-0 2
    p.mb-5 La estrategia comercial <i>online</i> incluye todos aquellos tipos de estrategias que la marca desarrolla en el ecosistema digital (redes sociales, correo electrónico, blog, sitio <i>web</i>, etc.), son vitales para las empresas contemporáneas. 
      br
      br
      |Por su lado, la estrategia comercial <i>offline</i> completa todas las acciones tradicionales de ventas desarrolladas a lo largo de la historia. Utiliza canales distintos a internet, pero eso no quiere decir que sean incompatibles.
      br
      br
      |Son muchas las marcas que de manera exitosa unen ambos tipos de estrategia (<i>online y offline</i>), dando como resultado una decisión inteligente porque de esta manera se logra el diseño de una estrategia omnicanal que en la actualidad es de amplia aceptación. Ahora se verán los siguientes pasos para el desarrollo de una estrategia comercial efectiva.
    TabsA.color-acento-contenido.mb-5
      .tarjeta.bg--1-claro.p-4(titulo="Paso 1: Elaborar la matriz DOFA ")
        h4 Paso 1: Elaborar la matriz DOFA 
        p Para la ejecución de este paso se debe tener el <i>brief</i> empresarial, especialmente conocer el contexto y la filosofía de la empresa, o sea, la visión, misión y valores declarados por la misma.
      .tarjeta.bg--1-claro.p-4(titulo="Paso 2: Definir los objetivos comerciales")
        h4 Paso 2: Definir los objetivos comerciales
        p Deben ser establecidos de manera realista y medible.
          br
          |Es importante saber que estos objetivos no comprenden solo números de ventas, sino también la penetración del mercado, la fidelización de los clientes, el posicionamiento de marca, la percepción e imagen de la marca, entre otros aspectos.
      .tarjeta.bg--1-claro.p-4(titulo="Paso 3: Establecer la cartera de clientes")
        h4 Paso 3: Establecer la cartera de clientes
        p Tener muy claro cuál es el segmento al cual van dirigidos los productos de la marca. Resulta imposible desarrollar acciones de ventas si no se conoce quiénes son y cómo piensan los clientes a los cuales se dirigirá cada producto.
      .tarjeta.bg--1-claro.p-4(titulo="Paso 4: Definir responsables, plazos y mecanismos de control para cada una de las acciones que se diseñen")
        h4 Paso 4: Definir responsables, plazos y mecanismos de control para cada una de las acciones que se diseñen
        p Es importante contar con un registro las personas que hacen parte del equipo de ventas y los ejecutivos comerciales, de tal forma que puedan acceder a un ciclo de trabajo uniforme y concreto, donde se perciba quién es el responsable de cada acción, qué fechas de cumplimiento tiene y cuáles son los mecanismos de control que se tienen, todo con el fin de poder tener oportunidades de mejora en cuanto se tengan indicadores. 
          br
          br
          |La mayoría de las empresas que trabajan con sistemas de control de ventas tienen mejores resultados e ingresos más altos
      .tarjeta.bg--1-claro.p-4(titulo="Pasos 5:  Utilizar la información del embudo de ventas para diseñar las acciones de la estrategia comercial")
        h4 Pasos 5:  Utilizar la información del embudo de ventas para diseñar las acciones de la estrategia comercial
        p Las acciones deben diseñarse de manera personalizada y para tener información sobre los hábitos y el comportamiento del cliente, el embudo es primordial para obtener estos datos.
      .tarjeta.bg--1-claro.p-4(titulo="Paso 6: Diseñar una estrategia comercial con soporte omnicanal")
        h4 Paso 6: Diseñar una estrategia comercial con soporte omnicanal
        p Es el uso creativo de los medios <i>offline</i> y <i>online</i> para beneficio de la marca. Las empresas que acogen una estrategia comercial omnicanal tienen mayores posibilidades de retener más clientes y de lograr mejores resultados.
    #t_2_4.titulo-segundo(data-aos='fade-right')
      h2 2.4 Las ventas
    .row.mb-5
      .col-lg-6(data-aos='fade-right')
        p.mb-5 Es vital que los empleados de la empresa, y en especial los ejecutivos de ventas, conozcan los productos de la marca. De esta manera los trabajadores reflejan el compromiso que poseen como colaboradores. No cabe duda de que la razón de ser que tiene toda empresa es satisfacer al cliente, pero para conseguirlo, primero debe conocer las necesidades y lo que motiva al cliente para tomar una decisión de compra; de esta manera se orientan mejor todos los esfuerzos para poder lograr los objetivos trazados (Navarro, 2012).     
      .col-lg-6(data-aos='fade-left'): img(src='@/assets/curso/62.jpg')
    h3(data-aos='fade-right') Factores que afectan a las ventas
    p.mb-5 Una de las más importantes labores que debe tener un especialista en mercadeo es estar pendiente constantemente del entorno para intentar realizar un pronóstico de lo que puede suceder en los próximos meses y años, porque eso ayuda con la elaboración de estrategias entre diferentes escenarios o situaciones. Como ejemplo se puede mencionar lo que la sociedad ha vivido con el Covid-19 y la forma en que muchas empresas pudieron sostenerse o incluso, mejorar sus ventas porque diseñaron estrategias para lograrlo. 
    .tarjeta.tarjeta-bg2.p-5.hover.mb-5
      .col-lg-6
        p.mb-0 
          b Entorno externo. 
          | El entorno externo no depende de la empresa porque tiene variables o factores que nacen fuera de ella, por lo tanto, no pueden ser controlados por la empresa, este se integra por los siguientes factores:
    BotonesC.mb-5
    .tarjeta.tarjeta-bg2.p-5.hover.mb-5
      .col-lg-6
        p.mb-0 
          b Entorno interno. 
          | El entorno interno sí depende de la empresa porque tiene variables o factores que nacen dentro de ella, por lo tanto, se pueden controlar de tal forma que la empresa pueda tener un mejoramiento continuo. Los siguientes son esos factores:
    .titulo-sexto.color-acento-contenido
      h5.fw-normal
        b Figura 2  
        | Factores entorno interno
    BotonesB.mb-5
    h3(data-aos='fade-right') Técnicas de ventas
    p.mb-5 Se refiere a los métodos de venta que tienen como finalidad llegar al cliente potencial a través de cualquier medio o canal, incluido internet y su ecosistema digital. El proceso de venta tiene unas etapas que comienzan con la ubicación y calificación del cliente, y terminan en el cierre de la venta; pero, no todo termina con la venta, ya que un excelente vendedor siempre estará en búsqueda de entregar un servicio y atención que generen más valor para el consumidor. 
    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-secundario.bg--2-claro.p-4.mb-4
          p La venta personal era la técnica o método de venta más importante en el siglo XX y de forma frecuente se les veía a los vendedores viajando de casa en casa exhibiendo los productos. Luego las ventas multinivel fueron importantes y a los vendedores los acompañaba un catálogo para la exhibición de los productos más publicitariamente. Y en la actualidad, las ventas a distancia, que se manejan por correspondencia, han recobrado mucha fuerza gracias a internet, siendo uno de los medios más eficaces. 
    h3(data-aos='fade-right') Venta a distancia
    p.mb-5 Método en el que no hay una relación directa entre el cliente y el asesor de ventas. Se refiere a las ventas por correspondencia, ventas telefónicas, ventas electrónicas y ventas a través de la televisión. A continuación, se explicarán cada una de ellas:
    AcordeonB.mb-5(tipo="b" clase-tarjeta="tarjeta")
      .row(titulo="Venta por correspondencia ").px-3  
        .col-lg-6
          p Se ejecuta a través de un catálogo que se envía por correo postal o se pone directamente en el buzón del cliente. Puede tener el formato de “inserto”, que es un anuncio pagado tipo volante o folleto que se ubica dentro de las páginas de las revistas o periódicos. 
            br
            br
            |Este tipo de ventas tiene como ventaja que puede describir la información del producto o servicio con gran detalle. Pero, en la actualidad, con la presencia del correo electrónico su uso ha disminuido considerablemente. 
        .col-lg-6: img(src='@/assets/curso/65.jpg')
      .row(titulo="Ventas telefónicas").px-3  
        .col-lg-6
          p También conocida como <i>telemarketing</i>,  especialmente se usa en mercados de gran consumo o para lanzar productos nuevos o en promoción especial.
            br
            br
            |Con la aparición de la telefonía celular y de internet, ya no es tan usual ver esta técnica en la actualidad. 
        .col-lg-6: img(src='@/assets/curso/66.jpg')
      .row(titulo="Ventas electrónicas").px-3  
        .col-lg-6
          p Es el tipo de venta que se respalda en la transferencia de datos a través del ecosistema digital.
            br
            br
            |Es la preferida en la actualidad por la economía que presenta a las empresas en su uso y por la agilidad y versatilidad que tiene a la hora de planear las ventas. Correo electrónico, redes sociales, sitios webs y hasta el <i>WhatsApp</i> sirven de apoyo.
        .col-lg-6: img(src='@/assets/curso/67.jpg')
      .row(titulo="Ventas por televisión ").px-3  
        .col-lg-6
          p Se conocen también como televenta y se refieren a la demostración de productos o servicios de forma minuciosa; la idea es destacar los beneficios como por ejemplo un precio llamativo (puede ser una oferta o descuento) o también las ventajas competitivas.
            br
            br
            |Por lo general, se transmiten diariamente en el mismo horario familiar.
        .col-lg-6: img(src='@/assets/curso/68.jpg')
      .row(titulo="Venta personal").px-3  
        .col-lg-6
          p En esta técnica sí hay contacto directo entre vendedor y cliente. Puede tener dos variables: ejecutarse por dentro o por fuera de las sedes de la empresa. 
        .col-lg-6: img(src='@/assets/curso/69.jpg')
    p.mb-5 A su vez, las ventas internas, se pueden clasificar en: 
    .row.mb-5
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 1
          h4 Venta directa
          p Cuando el cliente ingresa al establecimiento y es atendido de manera personalizada por el vendedor.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 2
          h4 Venta en libre servicio
          p Cuando el cliente realiza una compra en una tienda de autoservicio, de un producto que ya ha elegido y evaluado previamente. Por lo general presenta la ventaja de tener precios más accesibles al consumidor.
      .col-md-6.col-xl.mb-4.mb-xl-0
        .tarjeta-numerada.color-acento-contenido.p-5.h-100
          .tarjeta-numerada__numero
            .h2 3
          h4 Venta en ferias, salones y exhibiciones. 
          p Cuando la empresa expone sus productos o servicios a clientes potenciales en lugares especiales como salones especiales o zonas amplias donde pueda existir un buen ambiente. La empresa puede usar un salón de un hotel, por ejemplo. 
    p.mb-5 Por su lado, en las ventas externas, se pueden clasificar en:
    .row.mb-3.align-items-center
      .col-lg-1.col-md-2.col-sm-3.col-4: img(src='@/assets/curso/70.svg')
      .col-lg-11.col-md-10.col-sm-9.col-8
        p 
          b Ventas a domicilio. 
          | Cuando la venta se ejecuta en el lugar de ubicación del cliente y por lo general en ese instante se hace la orden de compra y luego se hace entrega del producto o servicio. Este tipo de ventas pueden ser “venta por cita en el domicilio del cliente”, cuando el vendedor visita al consumidor con una cita previa acordada por ambos; “venta de puerta en puerta”, cuando el vendedor, sin pedir cita, toca a la puerta del domicilio o lugar de estadía del cliente; y “venta en el lugar de trabajo”, cuando el vendedor visita al cliente en horario laboral en su oficina, previa cita.
    .row.mb-3.align-items-center
      .col-lg-1.col-md-2.col-sm-3.col-4: img(src='@/assets/curso/71.svg')
      .col-lg-11.col-md-10.col-sm-9.col-8
        p 
          b Venta ambulante. 
          | Cuando la venta no tiene un lugar fijo. Lo que sí es seguro es que se realiza en la calle y por lo general no presenta garantía en la calidad del producto.
    .row.mb-3.align-items-center
      .col-lg-1.col-md-2.col-sm-3.col-4: img(src='@/assets/curso/72.svg')
      .col-lg-11.col-md-10.col-sm-9.col-8
        p 
          b Autoventa. 
          | Cuando la empresa establece itinerarios para llevar a los clientes los productos que normalmente son perecederos y se consumen diariamente. El vendedor usa una ruta ya establecida de manera estratégica y entrega los productos a clientes que por lo general son tiendas minoristas.
    .row.mb-3.align-items-center
      .col-lg-1.col-md-2.col-sm-3.col-4: img(src='@/assets/curso/73.svg')
      .col-lg-11.col-md-10.col-sm-9.col-8
        p 
          b Venta multinivel. 
          | Cuando se crea una red que se compone por un cliente que se asocia a una empresa para obtener un código que lo autoriza como vendedor de sus productos y puede obtener, con precios más bajos, los productos directamente de la empresa. Con este código el cliente vendedor obtiene un porcentaje de las ventas que realicen otros clientes que fueron afiliados a través de ellos. 
          br
          br
          |De esta manera, el cliente vendedor gana por el descuento del precio del producto, por el porcentaje en las ventas propias, por el porcentaje en las ventas de las personas que afilió bajo su auspicio hasta el nivel de profundidad establecido por la empresa de multinivel, además de obtener bonificaciones y regalías de acuerdo con las normas que la empresa haya establecido. 
          br
          br
          |De esta forma cada integrante puede construir y dirigir su fuerza de venta afiliando, motivando y adiestrando a otros para que realicen lo mismo que él, hasta el punto de construir su propia organización, si así lo desean.
    #t_2_5.titulo-segundo(data-aos='fade-right')
      h2 2.5 Buenas Prácticas de Manufactura (BPM)
    .row.mb-5.align-items-end
      .col-lg-6(data-aos='fade-right')
        .cajon-b.color-secundario.abajo-derecha.p-3.mb-5
          p.mb-0 Son las normas establecidas de forma oficial por las empresas y que actualmente regulan a las Plantas Procesadoras de Alimentos (PPA) en relación con los procedimientos de fabricación, limpieza y desinfección, la higiene personal, la manipulación, los controles, registros, almacenamiento, que garantizan calidad y seguridad en los alimentos (Amagua, Coronel, Quintana y Reyes, 2016).
      .col-lg-6(data-aos='fade-left'): img(src='@/assets/curso/74.jpg')
    p.mb-5 El uso de las BPM en la industria de alimentos puede ser empleado alrededor de las PPA o al interior de estas:
    .row.mb-3.justify-content-center
      .col-lg-4.mb-3
        .bg--3.p-3.rounded-pill.mb-3.text-center.h-100.hover-color
          .textos

            h4.mb-0 En la planta
            p.mb-0 En los pisos, paredes, cielo raso y desagües.
      .col-lg-4.mb-3
        .bg--3.p-3.rounded-pill.mb-3.text-center.h-100.hover-color
          .textos

            h4.mb-0 En los alrededores  
            p.mb-0 Zonas externas a las PPA para presentar facilidades sanitarias.
      .col-lg-4.mb-3
        .bg--3.p-3.rounded-pill.mb-3.text-center.h-100.hover-color
          .textos

            h4.mb-0 Con equipos  
            p.mb-0 Desinfección, mantenimiento y calibración de los equipos.
    .row.mb-5.justify-content-center
      .col-lg-4.mb-3
        .bg--3.p-3.rounded-pill.mb-3.text-center.h-100.hover-color
          .textos

            h4.mb-0 En almacenes 
            p.mb-0 Ubicación interna, ventilados e iluminación.
      .col-lg-4.mb-3
        .bg--3.p-3.rounded-pill.mb-3.text-center.h-100.hover-color
          .textos
            h4.mb-0 Procesos productivos 
            p.mb-0 Lógica en los procesos sanitarios (de higiene y presentación) del personal, como ejemplo.
    p.mb-5 Este tema tiene que ver con todo el establecimiento, con el personal o empleados, con la higiene en la producción o transformación de los productos, con el almacenamiento y transporte de materias primas y del producto final, con el control de procesos en la producción y la documentación, entre otros. De tal forma que se pueda garantizar la calidad en los productos alimenticios.
      br
      br
      |Se verá a continuación su aplicación a diferentes procesos:
    TabsA.color-acento-contenido.mb-5
      .tarjeta.bg--1-claro.p-4(titulo="BPM de materias primas")
        h4 BPM de materias primas
        p Si se sospecha que la materia prima es inadecuada, debe ser aislada de inmediato para ser rotulada y eliminarla. Las medidas que la empresa debe tener para eliminación de esta materia prima contaminada son específicas, según sea el proceso de elaboración. La materia prima debe estar almacenada en condiciones adecuadas que certifiquen su protección contra cualquier tipo de contaminante. Los productos terminados deben estar lejos del depósito para evitar la contaminación. Además, el almacenamiento se debe realizar en condiciones óptimas y el transporte debe realizarse según sean los principios higiénico-sanitarios que la empresa considere pertinentes.
      .tarjeta.bg--1-claro.p-4(titulo="BPM en los establecimientos")
        h4 BPM en los establecimientos
        p No pueden estar ubicados en lugares que afecten la calidad del producto, como, por ejemplo, humedad o agua, peligro de deslave, o incluso olores censurables. Las vías internas en la empresa deben estar pavimentadas de tal forma que permitan la circulación de furgones, camiones y contenedores. La estructura del establecimiento debe ser sólida y sanitariamente apropiada, además, no debe haber materiales que transmitan sustancias indeseables a los alimentos. Deben existir muros y separaciones entre las áreas para evitar la contaminación cruzada. Los equipos e instrumentos deben ser de un material que permita desmontarlos para su desinfección. Es por esto por lo que el diseño de los equipos tiene que admitir una óptima desinfección. La limpieza de las áreas debe hacerse de manera fácil y adecuada. El agua usada para la limpieza tiene que ser potable y los pisos deben tener una inclinación del 2% para su correcto desagüe. Y finamente, la caja de revisión se debe situar en el exterior de la PPA.
      .tarjeta.bg--1-claro.p-4(titulo="BPM en la higiene de las plantas procesadoras de alimentos")
        h4 BPM en la higiene de las plantas procesadoras de alimentos
        p Las herramientas, equipos y material de trabajo se deben mantener en el mejor estado higiénico para su máxima conservación. En la limpieza y desinfección, se debe usar productos que no contaminen el proceso de las PPA. Se recomienda aplicar Planes Operativos Estandarizados de Saneamiento (POES) que muestran cómo, cuándo y dónde hacer limpieza y desinfección. 
      .tarjeta.bg--1-claro.p-4(titulo="BPM en la higiene personal")
        h4 BPM en la higiene personal
        p Su finalidad es garantizar la no contaminación de los alimentos por parte de las personas que entren en contacto, bien sea directo o indirecto, con los alimentos. Para ello, en las PPA debe haber instrucciones por escrito y reglas establecidas de estricto cumplimiento por parte de los estos empleados, y que son referentes a sus hábitos en la higiene personal, como por ejemplo, que se bañen todos los días; tener uñas cortadas y limpias; tener ropa interior y uniformes limpios; uso de mascarillas; mantener los guantes aseados; usar ropa adecuada para evitar la contaminación como mallas para el cabello, guantes o gorras; hombres afeitados o mínimo que tengan protectores para la barba; no usar joyas; mantenimiento del lugar de trabajo aseado; no ingerir comida, no comer chicle ni fumar en la planta; nada de maquillaje ni lociones o perfumes; lavarse las manos con frecuencia, en especial, luego de usar el teléfono, haber tocado el piso, recipientes de basura o cualquier fuente contaminante; entre otras consideraciones.
      .tarjeta.bg--1-claro.p-4(titulo="BPM en sustancias peligrosas")
        h4 BPM en el manejo y almacenamiento de sustancias peligrosas
        p Se deben rotular con una etiqueta que sea visible todas aquellas sustancias tóxicas, como, por ejemplo, solventes y plaguicidas, que puedan representar un riesgo para la salud y una fuente de contaminación para los productos alimenticios. Además de almacenarlos en áreas exclusivas alejadas de las PPA.
      .tarjeta.bg--1-claro.p-4(titulo="BPM en la elaboración de alimentos")
        h4 BPM en la elaboración de alimentos
        p El material que se va a destinar para empacar y envasar no puede emitir sustancias tóxicas y, además, debe estar libre de contaminantes. La elaboración de los alimentos o el proceso que sufren de transformación debe ser realizado por empleados que hayan tenido capacitación al respecto y supervisado por el personal técnico. 
      .tarjeta.bg--1-claro.p-4(titulo="BPM en el almacenamiento y transporte")
        h4 BPM en el almacenamiento y transporte de materias primas
        p Como todas las prácticas anteriores, que sea en condiciones óptimas. Realizar inspecciones periódicas durante el almacenamiento. Dependiendo del tipo de producción se instauran las exigencias para el transporte de materias primas. Cuando hay alimentos  congelados deben ser transportados con un correcto funcionamiento del equipo de frio, verificando que su temperatura sea la adecuada. Los vehículos, accesorios y conexiones deben estar siempre limpios, libres de tierra o desperdicio que contaminen los alimentos. Por otro lado, dependiendo del tipo de transporte, pueden variar los procesos y productos de limpieza. 
      .tarjeta.bg--1-claro.p-4(titulo="BPM en el procesos y documentación")
        h4 BPM en el control de procesos y documentación
        p También se deben tener en cuenta los análisis de laboratorios para establecer cuáles son los contaminantes físicos, químicos y microbiológicos. Con el fin de garantizar un resultado óptimo en las BPM, se necesitan los controles que certifiquen el cumplimiento de los procedimientos y los criterios para obtener la calidad deseada. Su propósito es la definición, por escrito, de los procedimientos y los controles. El sistema de control debe permitir diferenciar entre números de lotes, fecha de fabricación y vencimiento, y debe permitir seguir el rastro del producto.
    h3(data-aos='fade-right') Prácticas de limpieza
    p.mb-5 La empresa siempre debe procurar que, de manera permanente, se hagan acciones como barrer, limpiar, enjuagar, escurrir, desinfectar. Existen algunos factores que afectan a la limpieza y desinfección de las PPA: 
    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.hover
          img(src='@/assets/curso/75.svg' alt='AvatarTop')
          .tarjeta.bg-white.shadow.w-100
            .p-4.text-center.mt-5
              h2.text-center Diseño de la planta
              p Materiales de construcción. diseño arquitectónico de las instalaciones.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.hover
          img(src='@/assets/curso/76.svg' alt='AvatarTop')
          .tarjeta.bg-white.shadow.w-100
            .p-4.text-center.mt-5
              h2.text-center Suciedad
              p Cantidad de sucio, tipo y tiempo que lleva acumulado.
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar.hover
          img(src='@/assets/curso/77.svg' alt='AvatarTop')
          .tarjeta.bg-white.shadow.w-100
            .p-4.text-center.mt-5
              h2.text-center Procesos de limpieza
              p Tiempo que dura el proceso, tipo de detergente a usar y su concentración, velocidad de flujo de la solución detergente usada por la PPA, acción mecánica.
    p.mb-5 Las siguientes son las 4 zonas en las que se debe poner atención para tener BPM:
    .contenedor-desplegables.d-flex.justify-content-center
      .cuadro-desplegable.bg--3.p-4
        .indicador--hover(v-if="mostrarIndicador")
        .imagen-texto(@mouseover="mostrarIndicador=false")
          h2.text-center.text-white Zona 1
          img(src='@/assets/curso/78.svg' alt='AvatarTop' style='width: 152px').m-auto
        .texto.text-white
          p Superficies que tengan contacto con el producto, bandas transportadoras, mesas de trabajo, sierras, tuberías, tanques, rebanadoras, llenadores, herramientas. 
      .cuadro-desplegable.bg--2.p-4
        .imagen-texto
          h2.text-center.text-white Zona 2
          img(src='@/assets/curso/79.svg' alt='AvatarTop' style='width: 152px').m-auto
        .texto.text-white
          p Exterior de los equipos, unidades de refrigeración, pisos, marcos, coches de transporte.
    .contenedor-desplegables.d-flex.justify-content-center.mb-5
      .cuadro-desplegable.bg--2.p-4
        .imagen-texto
          h2.text-center.text-white Zona 3
          img(src='@/assets/curso/80.svg' alt='AvatarTop' style='width: 152px').m-auto
        .texto.text-white
          p Teléfonos, montacargas, intercomunicadores, drenajes, paneles
      .cuadro-desplegable.bg--3.p-4
        .imagen-texto
          h2.text-center.text-white Zona 4
          img(src='@/assets/curso/81.svg' alt='AvatarTop' style='width: 152px').m-auto
        .texto.text-white
          p Vestidores, pasillos, cafetería, cuarto de entrenamientos, salas de reuniones, lavandería 
    h3(data-aos='fade-right') Métodos de limpieza
    p.mb-5 Existen dos métodos de limpieza:
    .row.mb-3.tarjeta.bg--1-claro.overflow-hidden.align-items-center.hover
      .col-lg-2.p-0
        .bg--1.h-100.mq-img: img(src='@/assets/curso/82.svg' alt='AvatarTop').p-5
      .col-lg-10
        .py-4.mx-5
          h4 Limpieza en húmedo
          p Utiliza detergentes y agua. Se usan los siguientes procedimientos: Pre-enjuague para eliminar la suciedad y ablandarla, de tal manera que luego sea fácilmente contrarrestada por el detergente. Luego viene la limpieza con el detergente en la que se pueden tener a disposición compuestos para efectuar la limpieza, como lo son álcalis, fosfatos, ácidos, humectantes y agentes quelantes; cada compuesto se aplica según sea la necesidad.
    .row.mb-3.tarjeta.bg--3-claro.overflow-hidden.align-items-center.hover
      .col-lg-2.p-0
        .bg--2.h-100.mq-img: img(src='@/assets/curso/83.svg' alt='AvatarTop').p-5
      .col-lg-10
        .py-4.mx-5
          h4 Limpieza en seco
          p Elimina la suciedad seca sin usar agua; se puede desarrollar a través de aspiradora, soplador (aire a presión), escoba, cepillo, raspador, etc.
    .row.mb-3.tarjeta.bg--1-claro.overflow-hidden.align-items-center.hover
      .col-lg-2.p-0
        .bg--1.h-100.mq-img: img(src='@/assets/curso/84.svg' alt='AvatarTop').p-5
      .col-lg-10
        .py-4.mx-5
          h4 Desinfección
          p Se deben definir planes validados de limpieza y desinfección por cada área y equipo, teniendo en cuenta la frecuencia, método, producto y responsable directo de cada área. Se debe hacer una selección de detergentes y desinfectantes, además de tener claros los datos técnicos y precauciones, con disolución adecuada a la hora de desinfectar. Todas las superficies que entren en contacto con los alimentos incluyen herramientas y guantes, que deben limpiarse y desinfectarse de forma frecuente. Las superficies que se usan para fabricar alimentos de baja humedad deben estar secos y en condiciones sanitarias.
    .row.mb-5.tarjeta.bg--3-claro.overflow-hidden.align-items-center.justify-content-start.hover
      .col-lg-2.p-0
        .bg--2.h-100.w-100.m-0.mq-img: img(src='@/assets/curso/85.svg' alt='AvatarTop').p-5
      .col-lg-10
        .py-4.mx-5
          h4 Monitoreo ambiental
          p Las pruebas para el control ambiental son una manera de calcular la efectividad de los procesos sanitarios: evaluar las superficies y aguas de enjuague bioluminiscencia. Proteínas descompuestas: método de detección colorimétrico (verde, gris, púrpura). Se deben tener claro cuáles son los puntos de monitoreo, los tanques de almacenamiento, las conexiones en sistemas, los cortadores.
    h3(data-aos='fade-right') Guía de control de plagas
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-6(data-aos='fade-right'): img(src='@/assets/curso/86.jpg',)
      .col-lg-6(data-aos='fade-left')
        p Las plagas traen consigo un riesgo peligroso porque acarrean una gran cantidad de microorganismos y parásitos nocivos a través de su piel, fosas nasales, tracto gastrointestinal y deposiciones, por ello se deben conocer las condiciones de la planta que facilitan la invasión de plagas, especialmente en el almacenamiento de materia prima, depósitos de basura y desperdicios.
    p.mb-5 Definiciones para elaborar un Programa de Control de Plagas (PCP):
    .bg--1-claro.p-5.mb-5
      .row
        .col-lg-3: img(src='@/assets/curso/87.svg').mq-img.mb-4
        .col-lg-9
          ul.lista-ul--color
            li 
              i.vineta
              p.mb-0
                b Plaga:  
                | especie que puede llegar hacer mucho daño, siendo una amenaza para la empresa y la PPA, especialmente cuando se encuentra en gran cantidad.
            li 
              i.vineta
              p.mb-0
                b Cebo: 
                | es un veneno que se prepara en forma de comida y que va dirigida a las plagas para poderlas exterminar. 
            li 
              i.vineta
              p.mb-0
                b Cebar: 
                | poner el cebo seleccionado de manera que sea ingerido por la plaga.
            li 
              i.vineta
              p.mb-0
                b Infestación: 
                | número alto de individuos que tiene una plaga y que es nocivo para la PPA.
            li 
              i.vineta
              p.mb-0
                b Plaguicida: 
                | sustancia destinada para la prevención o el control de plagas.
            li 
              i.vineta
              p.mb-0
                b Rodenticida: 
                | plaguicida que sirve para controlar roedores, ratones y ratas.
            li 
              i.vineta
              p.mb-0
                b Raticida: 
                | rodenticida que controla solamente ratas.
            li 
              i.vineta
              p.mb-0
                b Fumigación: 
                | método rápido para controlas las plagas como, por ejemplo, cianuro de calcio y fosfuro de hidrógeno.
    p.mb-5 La gerencia del control de calidad de la planta es la que se encarga del control de plagas. La empresa debe asignar a una persona que se encargue de la Planeación y Control de Producción (PCP), quien tendrá la autoridad para requerir la ayuda del personal y supervisar el programa. Esta persona se debe capacitar en la manipulación de plaguicidas y control de plagas y sus responsabilidades son mantener limpios y seguros los alrededores de la planta y su interior. Además, debe conocer si la planta está ubicada en sitios donde los sistemas de limpieza sean deficientes y donde se almacene una gran cantidad de desperdicios.
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-acento-contenido.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/88.svg', alt='Texto que describa la imagen')
          
        h3 Medidas preventivas 
        ul.lista-ul--color.color-4
          li 
            i.fas.fa-check
            | Evitar la entrada de plagas al interior de la planta de alimento. 
          li 
            i.fas.fa-check
            | Limitar el acceso directo a las zonas donde se encuentran los alimentos. 
          li 
            i.fas.fa-check
            | Eliminar ambientes propicios que permitan el arrimo y progreso de las plagas. 
          li 
            i.fas.fa-check
            | Diligencia rigurosa del programa de limpieza y desinfección.
      .col-md.tarjeta.color-acento-botones.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/88.svg', alt='Texto que describa la imagen')
          
        h3 Medidas correctivas 
        ul.lista-ul--color
          li 
            i.fas.fa-check
            p.mb-0
              b Contra roedores:  
              | trampas y rodenticidas anticoagulantes. 
          li 
            i.fas.fa-check
            p.mb-0
              b Contra cucarachas: 
              | insecticidas piretroides y del grupo fosforado.
          li 
            i.fas.fa-check
            p.mb-0
              b Contra moscas: 
              | insecticidas similares y trampas eléctricas, luz UV.
          li 
            i.fas.fa-check
            | Las aves son portadores de enfermedades y parásitos peligrosos para la salud (Amagua, Coronel, Quintana y Reyes, 2016).
    #t_2_6.titulo-segundo(data-aos='fade-right')
      h2 2.6 Las demostraciones
    .row.mb-5
      .col-lg-6(data-aos='fade-right')
        .cajon-b.color-secundario.abajo-derecha.p-3.mb-5
          p.mb-0 La convicción es un tema vital en el proceso de ventas. La convicción radica en mostrar pruebas, hechos que comprueben lo que se afirma por parte de la empresa, bien sea publicitariamente o a través del equipo de la fuerza de ventas. Por eso al cliente se le debe convencer, pero muy importante, entusiasmarlo a la compra, de lo contrario sería inútil e improductivo. El cliente, además de estar convencido de las características del producto, más importante aún, debe estar convencido de las ventajas y beneficios que le provee a la hora de comprarlo. Y por eso la demostración es una acción vital y decisiva, por medio de la cual el vendedor puede convencer a sus clientes.
      .col-lg-6(data-aos='fade-left'): img(src='@/assets/curso/89.jpg')
    p.mb-5 La demostración debe reunir estas cuatro características básicas: 
    .row.mb-5
      .col-lg-3
        .tarjeta.bg--1-claro.p-4.h-100.hover
          img(src='@/assets/curso/90.svg' style='width: 85px').m-auto.mb-3
          .text-center
            h4 Comprensión:
            p Entender qué tipo de producto es
      .col-lg-3
        .tarjeta.bg--1-claro.p-4.h-100.hover
          img(src='@/assets/curso/91.svg' style='width: 86px').m-auto.mb-3
          .text-center
            h4 Interés
            p Generar el deseo de saber más acerca del producto.
      .col-lg-3
        .tarjeta.bg--1-claro.p-4.h-100.hover
          img(src='@/assets/curso/92.svg' style='width: 85px').m-auto.mb-3
          .text-center
            h4 Credulidad
            p Confiar en las ventajas del producto.
      .col-lg-3
        .tarjeta.bg--1-claro.p-4.h-100.hover
          img(src='@/assets/curso/93.svg' style='width: 85px').m-auto.mb-3
          .text-center
            h4 Persuasión 
            p Motivar al posible cliente para que compre el producto por los beneficios exhibidos en la demostración.
    p.mb-5 Entonces, a la hora de la convicción, se requiere de un factor que refuerce los argumentos en una venta, y ese factor se llama “demostración”. Sin la demostración se hace complejo poder llegar al cierre de una compra (Universidad América Latina - UAL, 2021).
      br
      br
      |La demostración se puede considerar como el método que tiene un vendedor comercial para que el cliente se interese en el producto a través de su exposición de manera personalizada, para que no quepan dudas de que realmente es lo que necesita. Y se debe desarrollar de manera dinámica y espectacular para llamar mucho más la atención del cliente. Básicamente tiene dos fases en su desarrollo:
    .row.mb-5.justify-content-center
      .col-lg-8(data-aos='zoom-in-up'): img(src='@/assets/curso/94.svg')
    p.mb-5 Las demostraciones deben crear algo más que lograr el interés por conocer más acerca del producto, deben generar curiosidad y una acción de compra al instante. Por eso, en la primera fase, los argumentos deben ser claros, concisos y completos, para que el posible cliente tenga toda la información a la mano. Y luego, la demostración debe ser una exhibición tan significativa, que manifieste la importancia de la oferta. Además, es el medio más eficiente para probar las afirmaciones sobre cualquier producto porque: 
    .bg--1-claro.p-4.mb-5
      .row.align-items-center
        .col-lg-2: img(src='@/assets/curso/95.svg')
        .col-lg-6
          ul.lista-ul--color
            li 
              i.vineta
              | Convence más que las simples palabras, porque va a la práctica.
            li 
              i.vineta
              | Se recuerda con mayor facilidad, es más difícil olvidar el producto.
            li 
              i.vineta
              | Va al grano cuando pueden existir ideas abstractas.
            li 
              i.vineta
              | Ahorra tiempo, ya que expone personalizadamente las ventajas y beneficios del producto.
    h3(data-aos='fade-right') La demostración como medio promocional de ventas
    .row.mb-5
      .col-lg-6(data-aos='fade-right'): img(src='@/assets/curso/96.jpg')
      .col-lg-6(data-aos='fade-left')
        p El vendedor comercial, que es un excelente orador y exhibidor del producto, va a mejorar su actuación si usa otros canales como el audio y el video, para mejorar la forma en que entrega los mensajes. Y precisamente ese empleo de canales añadidos de refuerzo es lo que se conoce como demostración. 
          br
          br
          |Cuando se tiene, por ejemplo, un posible cliente cautivo, pueden existir diferencias individuales en relación con los medios visuales. Si el vendedor considera que la otra persona no comprende bien su exhibición oral, la táctica apropiada sería entonces el empleo de un medio visual de comunicación. Y es ahí donde radica la importancia de reflexionar sobre cómo reunir las cuatro características básicas de la demostración: comprensión, interés, credulidad y persuasión, para motivar al posible cliente a una compra. Es bueno hacerse esta pregunta antes de desarrollar la demostración: <b>¿Hay algo que se pueda exponer al posible cliente para realzar las características de la exposición?</b> Videos, imágenes, fotografías, multimedia, presentaciones digitales, diagramas esquemáticos, entre otros, son formas de tener una demostración más significativa. Incluso, puede llegar a invitar al posible cliente a presenciar una demostración por parte de un cliente real y satisfecho, muy a manera de testimonial.
    p.mb-5 Otra consideración importante es que, al exhibir las ventajas del producto, el vendedor tiene que aprovechar dos detalles de la percepción: la acumulación espacial y la selectividad. Cuando los ojos y oídos del posible cliente están cautivos en la información suministrada por el vendedor hay más posibilidades de lograr una venta. Y es ahí, en ese momento, donde la elección de un canal puede estar particularmente diseñado para manipular la atención del posible cliente.
      br
      br
      |Entonces, cuando se suman a la exposición diferentes estímulos visuales se incrementa su realismo y esto facilita la comprensión (primera de las 4 características básicas de la demostración) del posible cliente. La demostración puede facilitar el empleo de los siguientes principios del saber: 
    .row.justify-content-center.mb-5
      .col-lg-6
        PasosA.color-acento-contenido.mb-5(tipo="n")
          div
            h4 Participación
            p La práctica hace al maestro. La educación es un proceso activo y, por eso, cuanto más constantemente participa la persona en una labor, más aprenderá.
          div
            h4 Asociación
            p Si se emplean más canales sensitivos, más oportunidades existirán de tener un aprendizaje por asociación. 
          div
            h4 Transferencia
            p Si los materiales usados por el vendedor demuestran el empleo del producto más oportunidades existirán para que el posible cliente sea capaz de comprender y visualizar el uso del producto en su propia empresa o para sí mismo. Muy usado cuando se trata de productos y servicios técnicos.
          div
            h4 Discernimiento
            p Únicamente la presentación entrega al cliente detalles significativos sobre la oferta; pero se puede requerir de la demostración para exponer el empleo correcto de los productos y servicios, junto con sus ventajas y beneficios. 
    p.mb-5 Las herramientas que se utilizan en la demostración comprenden un número muy amplio de formas, y pueden variar según sea la necesidad del vendedor comercial, por ejemplo, desde una lista de precios hasta una demostración del producto a gran escala. 
      br
      br
      |A continuación, se presentan las herramientas que se utilizan con más frecuencia: 
    .tarjeta.tarjeta-bg(data-aos="zoom-in-up")
      #carouselExampleIndicators.carousel.slide.mb-5(data-bs-ride='carousel').p-5
        .carousel-indicators
          button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='3' aria-label='Slide 4')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='4' aria-label='Slide 5')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='5' aria-label='Slide 6')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='6' aria-label='Slide 7')
          button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='7' aria-label='Slide 1')
        .carousel-inner
          .carousel-item.active.py-5
            .row.justify-content-center
              .col-lg-5(data-aos="fade-rigth")
                h4 Fotografías
                p Son mejores las fotos en color que en blanco y negro. El color debe mostrar al producto tal cual es, de forma realista. Se recomienda mostrar el producto en acción y no de manera aislada. También se pueden usar ampliaciones en algunas piezas específicas del producto para exponer detalles importantes. 
              .col-lg-5(data-aos="fade-left")
                img(src="@/assets/curso/97.jpg")
          .carousel-item.py-5
            .row.justify-content-center
              .col-lg-5(data-aos="fade-rigth")
                h4 Diagramas esquemáticos
                p Son considerablemente útiles para transferir ideas sobre productos que son técnicos, y en este caso el color ayuda a comprenderlos mucho mejor, empleando uno para cada sección del diagrama. Pueden ser impresos en hojas transparentes (como el acetato) y montados en secuencia para que al final se vea una unidad completa. Por ejemplo, ir viendo las partes de un automóvil desde adentro hacia afuera. El diagrama esquemático también puede ser digital o multimedial.
              .col-lg-5(data-aos="fade-left")
                img(src="@/assets/curso/98.jpg")
          .carousel-item.py-5
            .row.justify-content-center
              .col-lg-5(data-aos="fade-rigth")
                h4 Copias
                p Son representaciones del artículo en tres dimensiones de manera digital. Las copias deben ser realistas para que sean efectivas; pero, por lo general son simplificadas en comparación con el producto, porque se diseñan para mostrar únicamente las características más destacadas del artículo.
              .col-lg-5(data-aos="fade-left")
                img(src="@/assets/curso/99.jpg")
          .carousel-item.py-5
            .row.justify-content-center
              .col-lg-5(data-aos="fade-rigth")
                h4 Modelos en miniatura 
                p Son diferentes a las copias porque son réplicas exactas del producto hechas a escala y de forma tangible. Como ventaja, poseen un mayor realismo comparado con las copias; como desventaja, el costo puede ser elevado.
              .col-lg-5(data-aos="fade-left")
                img(src="@/assets/curso/100.jpg")
          .carousel-item.py-5
            .row.justify-content-center
              .col-lg-5(data-aos="fade-rigth")
                h4 Muestras
                p Para artículos de tamaño pequeño la mejor demostración es el mismo producto; no hay nada que se le compare. La muestra debe estar en perfectas condiciones para que logre el mejor impacto. De todas formas, el vendedor no puede sobrepasar la cantidad de muestras indicadas por la misma empresa.
              .col-lg-5(data-aos="fade-left")
                img(src="@/assets/curso/101.jpg")
          .carousel-item.py-5
            .row.justify-content-center
              .col-lg-5(data-aos="fade-rigth")
                h4 Pruebas
                p Es cuando se da la oportunidad de experimentar el producto al posible cliente. No se regala, se prueba para que el cliente lo tenga en mano y lo pueda sentir. Videojuegos, televisores y productos de tecnología usan esta herramienta.
              .col-lg-5(data-aos="fade-left")
                img(src="@/assets/curso/102.jpg")
          .carousel-item.py-5
            .row.justify-content-center
              .col-lg-5(data-aos="fade-rigth")
                h4 Demostración en gran escala
                p Es importante elegir el lugar perfecto para desarrollar la demostración. Cuando se trata de muchos posibles clientes, el sistema más económico es llevarlos al sitio de trabajo de un cliente real para observar el desempeño del producto, o en un lugar amoblado para la demostración del producto en masa. Por ejemplo, artículos de maquinaria pesada, productos de sistemas de audio tipo <i>Home Theater</i>.
              .col-lg-5(data-aos="fade-left")
                img(src="@/assets/curso/103.jpg")
        button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
          span.carousel-control-prev-icon(aria-hidden='true')
          span.visually-hidden Previous
        button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
          span.carousel-control-next-icon(aria-hidden='true')
          span.visually-hidden Next
    h3(data-aos='fade-right') Requisitos para una buena demostración
    p.mb-5 La idea es que el vendedor ayude a la audiencia a la comprensión del material que usa en la demostración, para aprovechar las ventajas que tiene la demostración, con el fin de lograr exhibir los beneficios que trae el producto para los posibles clientes. El vendedor debe tener un conocimiento práctico de los cinco requisitos primordiales para lograr que la demostración sea efectiva:
    .bg--4-claro2.p-4
      .row.justify-content-center.align-items-center
        .col-lg-3(data-aos="fade-rigth"): img(src='@/assets/curso/104.svg' style='width: 179px').m-auto
        .col-lg-9(data-aos="fade-left")
          ul.lista-ul--color
            li 
              i.vineta
              | Comprensión clara por parte de la audiencia.
            li 
              i.vineta
              | Definición precisa del objetivo de la demostración.
            li 
              i.vineta
              | Organización excelente del material, canales o herramientas a usar en la demostración.
            li 
              i.vineta
              | Apoyo de ayudas visuales adecuadas que impacten al posible cliente.
            li 
              i.vineta
              | Demostración efectiva en el tiempo preciso. 
    p.mb-5 La manera en que el vendedor ordena su material y sincroniza la demostración, incide directamente en la selección de las herramientas visuales (tales como fotografías, esquemas, gráficos, diagramas, pruebas, etc.). Esta selección brinda el más alto potencial para optimizar las demostraciones debido a las siguientes razones: 
    .bg--4-claro2.p-4
      .row.justify-content-center.align-items-center
        .col-lg-3(data-aos="fade-rigth"): img(src='@/assets/curso/105.svg' style='width: 179px').m-auto
        .col-lg-9(data-aos="fade-left")
          ul.lista-ul--color
            li 
              i.vineta
              | Hay muy poca información sobre el tema, por eso la creatividad debe ser la mejor. 
            li 
              i.vineta
              | Las nuevas tendencias en diseño de gráfico y sus técnicas suministran opciones muy importantes que fortalecen la presentación verbal del vendedor. 
            li 
              i.vineta
              | Las ayudas visuales centran la atención del cliente potencial en las ventajas y beneficios del producto (Universidad América Latina - UAL, 2021.
    #t_2_7.titulo-segundo(data-aos='fade-right')
      h2 2.7 Las degustaciones
    .row.mb-5
      .col-lg-6(data-aos="fade-rigth")
        .cajon-b.color-secundario.arriba-izquierda.p-3
          p.mb-0.ps-4 Es una actividad promocional que se constituye en una importante herramienta para mostrar al público las bondades de un nuevo producto, un nuevo sabor, una nueva fórmula o un producto que tuvo cambios y lo mejoraron, entre otros. Hay diferentes opciones para llegar e impactar al cliente potencial con la intención de que pruebe el producto, que en realidad es el objetivo central de la actividad (Universidad América Latina - UAL, 2021). 
        p.mb-5 Obviamente, posterior a la acción de degustar el producto se encuentra la intención de motivar la compra de este, aprovechando el apoyo (visual, publicitario, recursos humanos, materiales de trabajo, abastecimiento, logística, etc.) con que se cuenta durante la actividad. La degustación se debe situar en los lugares donde exista más concentración de clientes, con el objetivo de aumentar el número de impactos logrados por “degustación” al día. Se sugiere un gran número de sitios donde se exhiba la degustación, es decir, tener una mayor cobertura geográfica (área o ciudad que se pretenda impactar).     
      .col-lg-6(data-aos="fade-left"): img(src='@/assets/curso/106.jpg')
    .row.mb-5.justify-content-center
      .col-lg-10
        .cajon.color-primario.bg--1-claro.p-4.mb-4
          p Hay quienes mencionan que esta actividad solo es una buena alternativa para comer en el punto de venta y que no representa un buen beneficio para la marca. Pero, para poder ser más prudente con el análisis, se recomienda tener claro cómo están las ventas del producto en el momento antes de la degustación, y cómo reaccionan durante y después de la misma. La medición final va a permitir el establecimiento bastante preciso sobre la eficacia de la actividad en el punto de venta.
    p.mb-5 Las siguientes son tres consideraciones que es vital tenerla en cuenta al implementar un plan de degustación:
    AcordeonB.mb-5(tipo="b" clase-tarjeta="tarjeta")
      .row(titulo="Preparación").px-3    
        .col-lg-2: img(src='@/assets/curso/107.svg')
        .col-lg-10: p Hay productos que necesitan ser preparados porque pueden ser cocinados, asados o se les puede agregar algún condimento, dejando esto en responsabilidad de quien exhibe la degustación y, claro, la aceptación o rechazo por parte del cliente. Importante no cambiar con demasiados condimentos el sabor original del producto exhibido en la degustación.
      .row(titulo="Ejecución").px-3    
        .col-lg-2: img(src='@/assets/curso/108.svg')
        .col-lg-10: p Es vital que en la creación del plan de degustación se tengan en cuenta las negociaciones necesarias con el establecimiento comercial para ejecutar la actividad de forma adecuada. Por ejemplo, la instalación de un stand o mueble degustador, su tamaño, si se requiere de tomacorriente, que esté cerca del producto en góndola, cuántas personas estarán presentes haciendo la presentación de la degustación, si se necesita refrigeración, si es necesario un espacio en el establecimiento para guardar materiales o productos, etc. 
      .row(titulo="Personal").px-3    
        .col-lg-2: img(src='@/assets/curso/109.svg')
        .col-lg-10: p La degustación brinda significativos beneficios para la marca, aunque su implementación no siempre es fácil. Por esta razón se sugiere contar con expertos en el tema, más específicamente, de agencias promocionales que recluten, seleccionen, contraten, capaciten y supervisen al personal que desarrollará la actividad de degustación. También es vital que la actividad se realice con tiempo para que la agencia promocional pueda reunir al personal idóneo, prepararlo de la mejor forma y evitar contratiempos en el momento de la degustación. 
    .tarjeta.tarjeta-bg2.p-5.hover.mb-5
      .col-lg-6
        p.mb-0 Se recomienda también considerar la posibilidad de rotar los stands o muebles degustadores entre tiendas, situación que va a requerir de una planeación apropiada y pertinente. Los establecimientos de autoservicio son los que más se eligen para realizar este tipo de actividades de promoción porque brindan las mayores ventajas a la marca en términos de ubicación, número de consumidores, facilidades internas, imagen y número de impactos o consumidores que degusten el producto (Universidad América Latina - UAL, 2021).


























</template>

<script>
import AcordeonB from '../components/AcordeonB.vue'
import BotonesB from '../components/BotonesB.vue'
import BotonesC from '../components/BotonesC.vue'
export default {
  name: 'Tema2',
  components: { AcordeonB, BotonesB, BotonesC },
  data: () => ({
    mostrarIndicador: true,
    datosSlyder: [
      {
        titulo: 'Amplitud',
        texto:
          'Se refiere al número de familias, también llamadas líneas de producto, que ofrece la marca. Por ejemplo, crema facial, leche corporal, crema de manos, etc. Mide el número de líneas de productos que se comercializan. Por ejemplo, una empresa que posee una línea de electrodomésticos y otra de aseo personal, posee dos familias de productos.',
        imagen: require('@/assets/curso/51.jpg'),
      },
      {
        titulo: 'Profundidad',
        texto:
          'Es el número de variantes que la marca ofrece por cada producto en cada familia o línea. Por ejemplo, en cremas faciales ofrece alternativas como crema facial para pieles grasas, pieles mixtas, pieles secas, pieles normales, etc. Es el número total de referencias que la marca ofrece por cada familia o línea de productos. Otro ejemplo, en la línea de cervezas, la marca ofrece cerveza ligera, amarga, negra, rubia, etc. También cuenta el número de presentaciones, por ejemplo, botella de 250 ml, 360 ml y 650 ml.',
        imagen: require('@/assets/curso/52.jpg'),
      },
      {
        titulo: 'Longitud',
        texto:
          'Indica el número total de productos y referencias que ofrece la marca en una familia o línea. Es el resultado de multiplicar la amplitud de la gama por el número de referencia de cada una de ellas; mide el número de productos totales que se pueden vender.',
        imagen: require('@/assets/curso/53.jpg'),
      },
      {
        titulo: 'Consistencia o coherencia',
        texto:
          'Es la cercanía relativa entre las líneas de producto y su uso final. Deben poseer una relación homogénea. Ejemplo: en una relojera, no se debe vender carnicería por el simple hecho de no tener una coherencia en la gama.',
        imagen: require('@/assets/curso/54.jpg'),
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
.bg-img
  background-image: url(../assets/curso/bg-2.svg)
  background-position: top
  background-size: cover
  background-repeat: no-repeat
.tarjeta-hover
  position: relative
  overflow: hidden
  &:hover
    .imagen-hover
      img
        transform: translateY(0)
  .imagen-hover
    img
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      transform: translateY(200%)
      transition: all 0.3s ease-in-out
.rounded-card
  @media (min-width: $bp-max-lg)
    border-radius: 0px 10px 10px 0px
.tarjetas-borde
  border: 2px solid $color-primario
.tarjetas-borde2
  border: 2px solid $color-secundario
.texto-grande
  font-size: 85px
.numero
  display: flex
  justify-content: center
  align-items: center
  width: 85px
  height: 85px
  border-radius: 50%
  position: absolute
  top: 0
  left: 0
  transform: translateY(-10%) translateX(-10%)
  p
    font-size: 50px
    font-weight: bold
.hover-color
  .textos
    h4, p
      color: white !important
  &:hover
    background-color: $color-acento-botones !important
    .textos
      h4, p
        color: $color-acento-contenido !important
.contenedor-desplegables
  flex-wrap: wrap
.cuadro-desplegable
  transition: all 0.3s ease-in-out
  display: block
  justify-content: center
  align-items: center
  width: 305px
  height: 241px
  overflow: hidden
  .texto
    transition: all 0.3s ease-in-out
    margin-top: 100px
    overflow-x: hidden
    width: 358px
  &:hover
    display: flex
    width: fit-content
    .texto
      margin-top: 0px
      margin-left: 30px
.container.tarjeta.tarjeta--blanca
  overflow: visible
.mq-img
  @media (max-width: $bp-max-md)
    img
      width: 200px
      margin: 0 auto
.color-4
  li > i:first-of-type
    color: $color-acento-botones
</style>
