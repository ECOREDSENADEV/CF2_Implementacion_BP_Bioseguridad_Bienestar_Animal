<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-color-4
      .px-4.px-md-5
        p.mb-5 El componente Gestión integral de la producción avícola: normatividad, bienestar animal y buenas prácticas forma parte del curso Implementación de Buenas Prácticas de Bioseguridad y Bienestar Animal en Producción Avícola de Postura. Su propósito es desarrollar competencias que permitan aplicar criterios técnicos, sanitarios y normativos en la producción de huevos, garantizando su calidad e inocuidad.

        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/intro/1.png')})`}"
          )(data-aos="zoom-in")
          .bloque-texto-g__texto.p-4
            p.mb-0 Durante el proceso formativo, el aprendiz estudiará los fundamentos del bienestar animal, la bioseguridad y la sanidad avícola, aplicando las Buenas Prácticas Avícolas (BPA) conforme a las Resoluciones ICA 3651 de 2014 y 067449 de 2020. Se abordarán metodologías de evaluación del bienestar animal mediante los indicadores MBA, MBR y MBG, además de los planes sanitarios, los procedimientos de auditoría y las certificaciones requeridas para la producción responsable.
        
        .row.align-items-center
          .col-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/intro/2.svg", data-aos="zoom-in")
          .col-lg-10
            .bg-color-1.p-4
              p(data-aos="fade-left").mb-0 Este componente impulsa una visión de la avicultura centrada en la sostenibilidad, la ética y la trazabilidad. Asimismo, promueve el cumplimiento de los lineamientos establecidos por el Ministerio de Agricultura y Desarrollo Rural y la Organización Mundial de Sanidad Animal (WOAH), fortaleciendo la competitividad y el compromiso ambiental del sector avícola colombiano.
        

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
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

<style lang="sass"></style>
