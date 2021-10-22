<template lang="pug">
.scroll
  .scroll-horizontal-container
    .screen.bg--1
      img(src='@/assets/curso/s1.svg' style='width: 1246px')
    .screen.bg--2
      img(src='@/assets/curso/s2.svg' style='width: 1246px')
    .screen
      img(src='@/assets/curso/s3.svg' style='width: 1246px')
    .screen
      img(src='@/assets/curso/s4.svg' style='width: 1246px')
    .screen
      img(src='@/assets/curso/s5.svg' style='width: 1246px')
  
</template>

<script>
export default {
  name: 'Scroll',
  data() {
    return {}
  },
  mounted() {
    ;(function() {
      let element = document.querySelector('.scroll-horizontal-container')
      element.addEventListener('wheel', e => {
        if (e.deltaY !== 0) {
          e.preventDefault()
          window.requestAnimationFrame(() => {
            element.scrollLeft += e.deltaY
          })
        }
      })
    })()
  },
}
</script>

<style lang="sass">

.scroll-horizontal-container
    display: flex
    width: 1246px
    height: 100%
    overflow-x: scroll
    scroll-snap-type: x mandatory
    &::-webkit-scrollbar
      display: none
.screen
    min-width: 1246px
    height: 100%
    flex: 0 0 auto
    display: flex
    justify-content: center
    align-items: center
</style>
