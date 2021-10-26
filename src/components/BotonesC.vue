<template lang="pug">
.btns
  img(src='@/assets/curso/188.svg', alt='Texto que describa la imagen')
  .btns__item(
    v-for="(boton, index) in botones"
    :style="getStyles(boton, index)"
    @mouseover="hover = index"
    @mouseleave="hover = null"
  )
    .indicador--hover(v-if="index === 0 && indicador")
    .btns__text.row.align-items-center.justify-content-end.px-3.py-4(v-if="index === hover")
      .col-md-12.p-2
        p.mb-0(v-html="boton.texto")


</template>

<script>
export default {
  name: 'BotonesC',
  data: () => ({
    indicador: true,
    hover: null,
    size: '10%',
    botones: [
      {
        pos_x: '36%',
        pos_y: '14%',
        texto:
          '<b>Legales.</b> Son los cambios en las normativas que estén relacionadas con el contexto empresarial, y que también puede influir de forma positiva o negativa. Las licencias, las leyes o normas sobre el empleo, leyes de seguridad y salud en el trabajo, leyes antimonopolios, el entorno legal en el país de origen de la empresa, derechos de propiedad intelectual, sectores protegidos o regulados, entre otros.',
      },
      {
        pos_x: '54%',
        pos_y: '14%',
        texto:
          '<b>Políticos.</b> Son aquellos factores que se asocian con la clase política que pueden influir positiva o negativamente a futuro en la actividad empresarial. Se deben analizar temas como la política fiscal, los tratados de libre comercio, posibles cambios políticos en los gobiernos, entre otros, que pueden afectar seriamente en las actividades empresariales.',
      },
      {
        pos_x: '27%',
        pos_y: '43%',
        texto:
          '<b>Ecológicos</b>. Se refiere a estar al enterado de los posibles cambios normativos desde el contexto ecológico, y del nivel de conciencia social de este movimiento. La naturaleza siempre nos da enseñanzas importantes, más aún en la actualidad porque se ha comenzado a visualizar los resultados negativos por culpa de los abusos en los recursos naturales. Por eso, antes de lanzar un producto al mercado, se debe analizar si la materia prima para la producción y fabricación del producto afecta negativamente a la ecología.',
      },
      {
        pos_x: '63%',
        pos_y: '43%',
        texto:
          '<b>Económicos.</b> Se refiere al poder adquisitivo de la sociedad, las personas sólo compran bienes o servicios si poseen dinero. Por esta razón, en este factor se deben tener en cuenta indicadores como el PIB, el tipo de cambio, el índice de inflación, los intereses, el cambio del dólar o del euro, entre otras. Con estos indicadores se podrá realizar un pronóstico de ventas más ajustado y real.',
      },
      {
        pos_x: '35%',
        pos_y: '69%',
        texto:
          '<b>Tecnológicos.</b> Es un análisis sobre cómo las nuevas tecnologías pueden cambiar la sociedad en un futuro y cómo pueden afectar a la empresa. La tecnología puede influir en las estrategias de ventas, y por otro lado puede impulsar la capacidad empresarial para vender con mejores resultados. La inversión I+D de los países o continentes, nuevas tecnologías relacionadas con el contexto empresarial, el nacimiento de tecnologías disruptivas, cambios en el uso de energía, nuevos métodos de producción y distribución son algunos de los puntos que ameritan ser analizados desde el contexto de la empresa.',
      },
      {
        pos_x: '54%',
        pos_y: '69%',
        texto:
          '<b>Socioculturales</b>. Se refiere a desarrollar un análisis sobre qué elementos de la sociedad pueden influir en la empresa y cómo están cambiando. Se busca el poder identificar aquellas tendencias que tiene la sociedad actual. En esta variable se deben tener presentes el comportamiento demográfico, los cambios en el nivel de ingresos, los cambios en gustos o modas que puedan repercutir en el nivel de las compras, la diversidad cultural, los valores éticos, los cambios en cómo nos relacionamos o comunicamos, y hasta rasgos religiosos que sean interesantes tenerlos en cuenta. Con este análisis se pueden identificar los artículos que satisfacen mejor las necesidades del cliente. ',
      },
    ],
  }),
  watch: {
    selected() {
      this.indicador = false
    },
    hover() {
      this.indicador = false
    },
  },
  methods: {
    getStyles(boton, index) {
      const image = this.hover === index ? boton.img_h : boton.img
      return {
        'background-image': `url(${image})`,
        top: boton.pos_y,
        left: boton.pos_x,
        width: this.size,
        'padding-top': this.size,
      }
    },
  },
}
</script>

<style lang="sass" scoped>
.btns
  position: relative
  &__item
    position: absolute
    background-size: auto
    background-repeat: no-repeat
    cursor: pointer
    background-position: center
    transition: background-image 0.2s ease-in-out
  &__text
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1)
    border-radius: 20px
    position: absolute
    top: -20%
    left: 100%
    background-color: white
    width: 500px
    z-index: 100
    line-height: 1.2em
    transform: translate(-50%)
    .number
      position: absolute
      top: -10px
      left: 3%
      width: 91px

@media (max-width: $bp-max-md)
  .btns__text
    text-align: center
    width: 200px
    left: 50%
</style>
