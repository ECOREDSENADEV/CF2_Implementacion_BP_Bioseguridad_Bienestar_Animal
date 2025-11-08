<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Normativa colombiana sobre bienestar animal en aves de postura
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Colombia ha logrado importantes avances en la construcción de un marco legal sólido para el bienestar animal, alineado con las directrices internacionales de la Organización Mundial de Sanidad Animal (WOAH) y la Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). Este marco está compuesto por leyes, decretos, resoluciones y manuales técnicos que regulan todas las etapas del ciclo productivo, desde el alojamiento hasta el sacrificio, incluyendo la certificación del bienestar animal en aves de postura.
    
    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Principales normas nacionales aplicables
    
    p.mb-5 A continuación, se presenta una síntesis de los principales instrumentos normativos que regulan el bienestar animal en la avicultura colombiana, con énfasis en las aves de postura:

    .bg-full-width.bg-color-5
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 14.
              span Normatividad colombiana sobre bienestar animal

            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-7 Norma / Documento
                    th.bg-color-7 Entidad emisora
                    th.bg-color-7 Contenido principal
                tbody.bg-color-white
                  tr.bg-color-sintesis
                    td Ley 1774 de 2016
                    td Congreso de la República
                    td Reconoce a los animales como seres sintientes y penaliza el maltrato.
                  tr
                    td Decreto 2113 de 2017
                    td Ministerio de Agricultura y Desarrollo Rural
                    td Define los principios básicos de bienestar animal en la producción agropecuaria.
                  tr.bg-color-sintesis
                    td Resolución ICA 136 de 2020
                    td Instituto Colombiano Agropecuario (ICA)
                    td Establece condiciones de bienestar durante el transporte de animales.
                  tr
                    td Resolución ICA 067449 de 2020
                    td Instituto Colombiano Agropecuario (ICA)
                    td Regula las Buenas Prácticas Ganaderas y Avícolas, incluyendo criterios de bienestar.
                  tr.bg-color-sintesis
                    td Manual de Bienestar Animal (2023)
                    td Ministerio de Agricultura y Desarrollo Rural
                    td Define lineamientos técnicos sobre alojamiento, manejo, alimentación y evaluación.
                  tr
                    td Decreto 1500 de 2007 (y actualizaciones)
                    td Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA)
                    td Regula inocuidad, sacrificio y bienestar en el procesamiento animal.
                  tr.bg-color-sintesis
                    td Resolución ICA 16409 de 2024
                    td Instituto Colombiano Agropecuario (ICA)
                    td Establece los criterios e indicadores para la certificación voluntaria de bienestar animal.
                  tr
                    td Resolución 8430 de 1993 (actualizada 2022)
                    td Ministerio de Salud
                    td Define principios éticos para el uso de animales en investigación.
    
    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Indicadores técnicos ICA para aves de postura
    
    p.mb-5 Con el objetivo de garantizar condiciones medibles de bienestar, el ICA ha definido una serie de indicadores técnicos aplicables en procesos de certificación y auditoría. Estos permiten evaluar el estado físico, ambiental, conductual y sanitario del lote productivo.

    .bg-full-width.bg-color-4
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 15.
              span Indicadores técnicos para la evaluación del bienestar animal en aves de postura

            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-7 Categoría
                    th.bg-color-7 Indicador técnico
                    th.bg-color-7 Unidad de medida / Rango aceptable
                    th.bg-color-7 Objetivo técnico
                tbody.bg-color-white
                  tr.bg-color-sintesis
                    td Condición corporal
                    td Escala de 1 (delgada) a 5 (óptima)
                    td ≥ 3
                    td Evaluar estado fisiológico y nutricional.
                  tr
                    td Calidad del plumaje
                    td % de aves con plumaje completo
                    td ≥ 85 %
                    td Identificar confort, salud y ausencia de picaje.
                  tr.bg-color-sintesis
                    td Lesiones en patas o pechuga
                    td % de aves sin lesiones
                    td ≥ 90 %
                    td Verificar confort ambiental y condiciones sanitarias.
                  tr
                    td Comportamiento activo
                    td % de aves que anidan o se acicalan
                    td ≥ 70 %
                    td Medir bienestar mental y libertad conductual.
                  tr.bg-color-sintesis
                    td Densidad de alojamiento
                    td Aves por metro cuadrado (sistema piso)
                    td ≤ 9 aves/m²
                    td Garantizar espacio adecuado y confort físico.
                  tr
                    td Nivel de amoníaco
                    td Concentración en aire del galpón
                    td < 20 ppm
                    td Evaluar ventilación y calidad del ambiente.
                  tr.bg-color-sintesis
                    td Mortalidad semanal
                    td % del lote
                    td < 0.5 %
                    td Reflejar el estado sanitario y la efectividad del manejo.
                  tr
                    td Capacitación del personal
                    td Horas de formación anuales
                    td ≥ 20 horas certificadas
                    td Fortalecer las competencias técnicas en bienestar animal.

        separador
    
        #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.3 Aplicación normativa según el sistema de producción
        
        p.mb-5 La normativa colombiana contempla la diversidad de sistemas de producción de huevo (jaula, piso y traspatio), adaptando los criterios técnicos a las realidades de cada uno. A continuación, se presentan las exigencias normativas más relevantes, los indicadores priorizados por el ICA y las recomendaciones operativas clave:

        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 16.
              span Exigencias normativas y recomendaciones técnicas según el sistema de producción

            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-7 Sistema de producción
                    th.bg-color-7 Exigencia normativa principal
                    th.bg-color-7 Foco de evaluación ICA
                    th.bg-color-7 Recomendaciones técnicas
                tbody.bg-color-white
                  tr.bg-color-sintesis
                    td Jaula tecnificada
                    td Cumplir densidad y ventilación (Resolución ICA 067449/2020).
                    td Condición corporal, integridad ósea.
                    td Revisión diaria de equipos, enriquecimiento ambiental.
                  tr
                    td Sistema en piso
                    td Cumplir espacio, ventilación y limpieza (Manual MADR 2023).
                    td Lesiones plantares, humedad de la cama.
                    td Mantener cama seca, iluminación controlada y espacio funcional.
                  tr.bg-color-sintesis
                    td Traspatio
                    td Bioseguridad básica y refugio nocturno.
                    td Condición corporal, comportamiento social.
                    td Promover vacunación, acceso permanente a agua limpia, control de refugio.

    separador
    
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Armonización internacional
    
    p.mb-5 El enfoque colombiano en bienestar animal avanza hacia una armonización técnica con los estándares internacionales, lo cual fortalece la competitividad del país y respalda la sostenibilidad de su sistema agropecuario.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4
        .tarjeta.bg-color-11.h-100
          .bg-color-10.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center WOAH (2024)
          p.mb-0.p-4 Define el bienestar como componente sanitario clave.

      .col-lg-4
        .tarjeta.bg-color-11.h-100
          .bg-color-10.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center FAO (2023)
          p.mb-0.p-4 Promueve la sostenibilidad y la trazabilidad ética.

      .col-lg-4
        .tarjeta.bg-color-11.h-100
          .bg-color-10.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center ISO 34700 (2021)
          p.mb-0.p-4 Establece estándares globales para la implementación de sistemas de bienestar animal.

    .bg-full-width.bg-color-5
      .px-4.px-md-5
        .row.mb-5
          .col-lg-4.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")
          .col-lg-8.order-lg-1
            .bg-color-8.p-4.mb-3(data-aos="fade-left")
              .row.align-items-start
                .col-lg-auto
                  img(src="@/assets/curso/tema4/3.svg", style="max-width: 90px").mx-auto
                .col-lg
                  p.mb-0 Tanto el ICA como el MADR trabajan activamente en la incorporación de estas directrices dentro de los programas de Certificación Voluntaria de Bienestar Animal, posicionando a Colombia como referente regional.
            p(data-aos="fade-left") El bienestar animal en aves de postura ha pasado de ser un compromiso ético opcional a un requisito técnico, legal y comercial. Reconocer la sintiencia de las aves implica transformar los sistemas productivos hacia modelos más humanos, sostenibles y trazables. Cumplir con la normatividad nacional garantiza no solo el respeto a los animales, sino también beneficios concretos:

        .row.mb-4
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-9.p-4.mb-3(data-aos="fade-left")
              p.mb-o Mayor eficiencia productiva (más huevos por gallina por año).
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-9.p-4.mb-3(data-aos="fade-left")
              p.mb-o Mejor calidad del producto (huevos con cáscara firme y clara limpia).
          .col-lg-4.mb-3.mb-lg-0
            .bg-color-9.p-4.mb-3(data-aos="fade-left")
              p.mb-o Menor mortalidad y uso de medicamentos veterinarios.
    
    p.mb-5 Colombia avanza hacia una avicultura ética y sostenible, integrando ciencia, legislación y práctica productiva, en línea con los principios de la WOAH y la FAO, y consolidándose como líder en bienestar animal en América Latina.



</template>

<script>
export default {
  name: 'Tema4',
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
