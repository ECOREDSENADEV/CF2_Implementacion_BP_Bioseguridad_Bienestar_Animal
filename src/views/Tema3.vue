<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 La sintiencia animal
    
    p.mb-5 La sintiencia animal es un concepto central en el bienestar animal moderno. Se refiere a la capacidad de los animales para percibir y experimentar sensaciones y emociones como el dolor, el placer, el miedo, la alegría o el bienestar. Esta capacidad implica consciencia y subjetividad, es decir, el animal siente y reacciona conscientemente ante su entorno. No se trata solo de respuestas reflejas o instintivas, sino de procesos cognitivos y emocionales complejos. En el caso específico de las aves de postura (Gallus gallus domesticus), la evidencia científica menciona que poseen una vida mental avanzada, con habilidades tales como:

    .bg-full-width.bg-color-5
      .px-4.px-md-5
        .row
          .col-lg-3.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            .bg-color-8.mb-3(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema3/2.png', alt='')
                .col-lg
                  .p-4
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Reconocimiento de individuos y jerarquías sociales.
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Aprendizaje por observación (imitación de comportamientos).
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Memoria de experiencias positivas o negativas.
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Expresión de emociones como empatía y frustración.
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Preferencias ambientales claras (como elegir nidos oscuros o camas secas)
            p Según la Organización Mundial de Sanidad Animal (WOAH, 2024), las aves son seres capaces de sentir dolor y placer, por lo tanto, cualquier sistema de producción debe reconocer y respetar esa capacidad como base del bienestar animal.

    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Evidencia científica en aves de postura
    
    p.mb-5 Diversos estudios han confirmado que las gallinas poseen estructuras y comportamientos que respaldan su sintiencia. A continuación, se sintetizan los hallazgos más relevantes:

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-2.tarjeta.box-shadow.p-4.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/3.png" alt="" style="width: 363px")
              h5.text-center Universidad Nacional de Colombia 
              p.mb-0.text-center Desarrollo avanzado del sistema nervioso central; respuestas emocionales ante estímulos.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-2.tarjeta.box-shadow.p-4.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/4.png" alt="" style="width: 363px")
              h5.text-center Centro de Investigaciones Avícolas - FAO
              p.mb-0.text-center Presencia de nociceptores (receptores del dolor) comparables a los de mamíferos.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-2.tarjeta.box-shadow.p-4.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema3/5.png" alt="" style="width: 363px")
              h5.text-center Estudios etológicos
              p.mb-0.text-center Conductas como vocalización, aislamiento, preferencia ambiental, memoria y aprendizaje social.

        p Estos hallazgos sustentan la inclusión de la sintiencia en la legislación colombiana y en los procesos de certificación de bienestar animal liderados por el ICA.
    
    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Implicaciones éticas y productivas
    
    p.mb-5 Reconocer que las aves sienten conlleva responsabilidades morales y técnicas. Las prácticas productivas deben diseñarse no solo para evitar el sufrimiento, sino para promover estados positivos a lo largo de todo el ciclo de vida del animal. A continuación, se detallan las implicaciones por etapa productiva:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema3/6.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Alojamiento
              p Evitar hacinamiento; permitir expresión de conductas naturales. 
              p <b>Ejemplos prácticos</b>. Perchas, nidos funcionales, espacio suficiente para moverse.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema3/7.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Manejo diario
              p Minimizar estrés mediante interacciones cuidadosas.  
              p <b>Ejemplos prácticos</b> Capacitación del personal en etología y manejo calmo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema3/8.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Transporte
              p Evitar dolor, calor excesivo, golpes y miedo.  
              p <b>Ejemplos prácticos</b> Aplicar Resolución ICA 136 de 2020 sobre transporte humanitario.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema3/9.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Sacrificio
              p Garantizar métodos éticos y sin sufrimiento innecesario. 
              p <b>Ejemplos prácticos</b> Uso de aturdimiento previo, conforme al Decreto 1500 de 2007.
      
    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Marco legal de la sintiencia en Colombia
    
    p.mb-5 El reconocimiento legal de la sintiencia representa un cambio estructural en la relación entre humanos y animales en Colombia.

    .row.mb-5.justify-content-center.align-items-center
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/10.png", data-aos="zoom-in")
      .col-lg-6.order-lg-1
        .bloque-texto-c.color-secundario.bg-color-16.p-4
          i.fas.fa-quote-right
          p La Ley 1774 de 2016 establece que:
          h4 “Los animales son seres sintientes y no cosas; por tanto, deben recibir trato digno y respetuoso.”
    
    p.mb-5 Este principio transforma el bienestar animal en una obligación legal. Las consecuencias del maltrato incluyen multas, decomisos y penas privativas de libertad.

    .row.justify-content-center
      .col-lg-10
        .bg-color-8.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema3/11.png', alt='')
            .col-lg
              .p-4
                p Aplicaciones específicas en avicultura:
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Eliminación de prácticas crueles (corte de pico severo, hacinamiento extremo, privación de alimento).
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Mejoras en el diseño ambiental (iluminación, ventilación, confort térmico).
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Implementación de programas de formación en manejo ético para todo el personal.

    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Sintiencia aplicada a los sistemas de producción
    
    p.mb-5 En la práctica, los distintos sistemas productivos generan respuestas emocionales y conductuales distintas en las aves. A continuación, se resumen las expresiones de sintiencia observables y los manejos recomendados para cada caso:

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Jaula tecnificada")
        .row.p-4.align-items-center
          .col-md-7.mb-4.mb-md-0.order-2
            h4 Jaula tecnificada
            p Estrés por restricción de movimiento, jadeo, picaje entre individuos.
            p <b>Manejo recomendado</b>. Enriquecimiento ambiental, reducción de densidad, ventilación adecuada.
          .col-md-5.order-1.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/12.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Piso")
        .row.p-4.align-items-center
          .col-md-7.mb-4.mb-md-0.order-2
            h4 Piso
            p Conductas sociales activas, acicalado, vocalización regular.
            p <b>Manejo recomendado</b>. Cama seca, presencia de perchas, acceso a luz natural.
          .col-md-5.order-1.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/13.png', alt='Texto que describa la imagen')
      .py-3.py-md-4(titulo="Traspatio")
        .row.p-4.align-items-center
          .col-md-7.mb-4.mb-md-0.order-2
            h4 Traspatio
            p Exploración activa, vocalizaciones positivas, socialización libre.
            p <b>Manejo recomendado</b>. Supervisión constante, refugio nocturno, implementación de bioseguridad familiar.
          .col-md-5.order-1.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/tema3/14.png', alt='Texto que describa la imagen')
          
    
    .bg-color-16.tarjeta.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema3/15.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Reconocer la sintiencia en aves transforma la producción avícola en una actividad ética, sostenible y responsable. El bienestar animal no solo beneficia a los animales, sino que también mejora la eficiencia productiva, la calidad del huevo y la percepción del consumidor. Un animal que siente debe ser tratado con respeto. Por lo tanto, un sistema productivo ético debe demostrar este respeto con evidencia técnica y resultados verificables. La sintiencia no es una idea filosófica aislada, sino un principio operativo que debe guiar toda decisión en la producción moderna de huevos.





</template>

<script>
export default {
  name: 'Tema3',
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
