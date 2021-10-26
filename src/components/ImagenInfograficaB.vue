<template lang="pug">
.img-infografica-b(
  :class="{'img-infografica-b--open': selectedItem}"
)
  .img-infografica-b__img(:ref="'img-ref-'+mainId")
    slot(name="imagen")
  .img-infografica-b__content(v-if="elements.length")
    .img-infografica-b__item(
        v-for="(item, index) in elements"
        :key="'img-infografica-b-btn-'+item.id"
        :style="[{top: item.y},{left: item.x}, {width: item.ancho + 'px'}, {height: item.ancho + 'px'}]"
        @click="selected = item.id"
      )
      .indicador--click(v-if="showIndicator && firstElement.id === item.id")
      .img-infografica-b__item__dot.d-flex.justify-content-center.align-items-center.p-3
        .h4.text-center.text-white.m-auto {{item.titulo}}
        

  .img-infografica-b__modal.p-3.p-md-4.p-xl-5(v-if="selectedItem" :style="getImageHeight()")
    .img-infografica-b__modal__btn-cerrar(@click="selected = 0")
      i.fas.fa-times.color-black
    .img-infografica-b__modal__contenido(v-child="selectedItem.elm")

  .hidden-slot
    slot
</template>

<script>
import componentSlotMixins from '../../node_modules/ecored-base-pkg/src/mixins/componentSlotMixins'
export default {
  name: 'ImagenInfograficaB',
  mixins: [componentSlotMixins],
  data: () => ({
    firstSelection: false,
    showIndicator: true,
  }),
  computed: {
    selectedItem() {
      return this.elements.find(element => element.id === this.selected)
    },
    firstElement() {
      return this.elements.length && this.elements[0]
    },
  },
  watch: {
    selected() {
      if (this.showIndicator) {
        this.showIndicator = false
      }
    },
  },
  methods: {
    getImageHeight() {
      console.log(this.$refs)
      const imgElement = this.$refs['img-ref-' + this.mainId]
      if (imgElement) {
        console.log(imgElement.clientHeight)
        return {
          'min-height': imgElement.clientHeight + 'px',
        }
      }
    },
  },
}
</script>

<style lang="sass">
// .img-infografica-b__item__dot__title
//   position: absolute
//   top: 72.5px
//   left: 50px

.color-black
  color: #000 !important
</style>
