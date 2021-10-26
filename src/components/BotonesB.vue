<template lang="pug">
.btns
  img(src='@/assets/curso/175.svg', alt='Texto que describa la imagen')
  .btns__item(
    v-for="(boton, index) in botones"
    :style="getStyles(boton, index)"
    @mouseover="hover = index"
    @mouseleave="hover = null"
  )
    .indicador--hover(v-if="index === 0 && indicador")
    .btns__text.row.align-items-center.justify-content-end.px-3.py-4(v-if="index === hover")
      .number
        img(:src="boton.numero") 
      .col-md-10.p-2
        h4 {{boton.titulo}}
        p.mb-0(v-html="boton.texto")


</template>

<script>
export default {
  name: 'BotonesB',
  data: () => ({
    indicador: true,
    hover: null,
    size: '10%',
    botones: [
      {
        numero: require('@/assets/curso/number6.svg'),
        img: require('@/assets/curso/177.svg'),
        img_h: require('@/assets/curso/176.svg'),
        pos_x: '33%',
        pos_y: '15%',
        titulo: 'Capacidad de investigación y desarrollo y tecnología',
        texto:
          'Tiene que ver con la inversión en tecnología y en la investigación de nuevos productos que permita a la empresa estar un paso delante de la competencia.',
      },
      {
        numero: require('@/assets/curso/number1.svg'),
        img: require('@/assets/curso/178.svg'),
        img_h: require('@/assets/curso/179.svg'),
        pos_x: '58%',
        pos_y: '15%',
        titulo: 'Metas, objetivos y cultura',
        texto:
          'Tiene que ver con la filosofía empresarial, o sea sus principios, objetivos, misión, visión y valores de una empresa. Se convierten en su ruta de navegación, su norte. ',
      },
      {
        numero: require('@/assets/curso/number5.svg'),
        img: require('@/assets/curso/180.svg'),
        img_h: require('@/assets/curso/181.svg'),
        pos_x: '28%',
        pos_y: '43%',
        titulo: 'Capacidad de servicio',
        texto:
          'Tiene que ver con la atención al cliente. Toda empresa debe cumplir con un alto nivel en la calidad del servicio prestado al cliente. Ofrecer a los clientes un valor agregado y un excelente servicio, antes, durante y después de una venta, puede hacer la diferencia competitiva.',
      },
      {
        numero: require('@/assets/curso/number2.svg'),
        img: require('@/assets/curso/182.svg'),
        img_h: require('@/assets/curso/183.svg'),
        pos_x: '62%',
        pos_y: '43%',
        titulo: 'Recursos humanos',
        texto:
          'Tiene que ser con los empleados de la empresa y es obligatorio reflexionar sobre la integración de todos los miembros que hacen parte de la empresa. Se debe analizar en los perfiles, la rotación y las características que deben tener los ejecutivos de la fuerza de ventas ya que pueden tener una gran movilidad.',
      },
      {
        numero: require('@/assets/curso/number4.svg'),
        img: require('@/assets/curso/184.svg'),
        img_h: require('@/assets/curso/185.svg'),
        pos_x: '33%',
        pos_y: '70%',
        titulo: 'Capacidad de producción y cadena de suministro',
        texto:
          'Tiene que ver con la ubicación de las plantas productivas, la tecnología usada por la empresa y el equipo que tiene a su disposición. Todo esto influye en los planes de mercadeo y ventas. Como el tema es el suministro, la empresa debe prestar atención especial en garantizar que los productos siempre se encuentren disponibles en el punto de venta. ',
      },
      {
        numero: require('@/assets/curso/number3.svg'),
        img: require('@/assets/curso/186.svg'),
        img_h: require('@/assets/curso/187.svg'),
        pos_x: '58%',
        pos_y: '70%',
        titulo: 'Recursos financieros',
        texto:
          'Tiene que ver con el músculo financiero de la empresa. Si tiene buenos recursos financieros podrá invertir en la investigación y desarrollo de nuevos productos o servicios y, además, capacitar correctamente a quienes laboran en esta área.',
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
    background-size: cover
    border-radius: 50%
    cursor: pointer
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
