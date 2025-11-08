<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 8
      h1 Auditoría de granjas avícolas de postura
    
    p.mb-5 La auditoría de granjas avícolas de postura es un proceso sistemático, documentado y objetivo mediante el cual se verifica el cumplimiento de los requisitos técnicos, sanitarios, de bioseguridad, bienestar animal e inocuidad establecidos por la legislación colombiana y por los estándares internacionales.

    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5.h-100
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema8/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El objetivo es evaluar la conformidad de las operaciones con las Buenas Prácticas Avícolas (BPA) y los criterios exigidos por el Instituto Colombiano Agropecuario (ICA) para la certificación de Granja Avícola Biosegura y Certificación en Bienestar Animal.

    p.mb-5 Una auditoría permite evidenciar si la granja:

    .row.mb-4.justify-content-center
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-10.p-4.mb-3.h-100(data-aos="fade-left")
          p.mb-0 Cumple los protocolos sanitarios y de bioseguridad.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-10.p-4.mb-3.h-100(data-aos="fade-left")
          p.mb-0 Aplica correctamente los planes de vacunación y limpieza.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-10.p-4.mb-3.h-100(data-aos="fade-left")
          p.mb-0 Garantiza el bienestar y salud de las aves.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-10.p-4.mb-3.h-100(data-aos="fade-left")
          p.mb-0 Asegura la inocuidad de los huevos destinados al consumo humano.
    
    separador
    
    #t_8_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.1	Tipos de auditoría
    
    p.mb-5 Existen diferentes tipos de auditoría reconocidos por el ICA y el INVIMA. A continuación, se presentan las características esenciales:

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Auditoría interna" :icono="require('@/assets/componentes/2.svg')")
        .row.px-5.align-items-center
          .col-md-7.mb-4.mb-md-0
            h4 Auditoría interna
            p Evaluación realizada por el propio productor o personal técnico. Responsable: productor o técnico capacitado. Objetivo: verificar el cumplimiento de protocolos y registros. Frecuencia: trimestral o mensual.
        
          .col-md-5
            figure
              img(src='@/assets/curso/tema8/2.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Auditoría externa" :icono="require('@/assets/componentes/2.svg')")
        .row.px-5.align-items-center
          .col-md-7.mb-4.mb-md-0
            h4 Auditoría externa
            p Evaluación realizada por el ICA o una entidad certificadora. Responsable: ICA o auditor externo. Objetivo: comprobar el cumplimiento de los requisitos para la certificación oficial. Frecuencia: anual o según el proceso de renovación.
        
          .col-md-5
            figure
              img(src='@/assets/curso/tema8/3.png', alt='Texto que describa la imagen')
    
    p.mb-5 Además, se reconocen tres auditorías complementarias:

    .bg-full-width.bg-color-4
      .px-4.px-md-5
        .bg-color-8.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema8/4.png', alt='')
            .col-lg
              .p-4
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 <b>Diagnóstica o inicial</b>: identifica brechas antes de iniciar el proceso de certificación.
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 <b>Seguimiento</b>: evalúa la sostenibilidad de las condiciones certificadas.
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 <b>Re-certificación</b>: se realiza cada dos años.

        separador
        
        #t_8_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 8.2 Propósito de la auditoría avícola
        
        p.mb-5 La auditoría tiene una finalidad técnica y correctiva, orientada a la mejora continua y no al castigo. 

        TabsB.color-acento-contenido.mb-5
          .py-4.py-md-5(titulo="Objetivos " :icono="require('@/assets/componentes/2.svg')")
            .row.px-5.align-items-center
              .col-lg-7.mb-4.mb-md-0
                h4 Objetivos 
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Evaluar la conformidad con normativas (Resoluciones ICA 3651/2014 y 067449/2020).
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Identificar no conformidades en infraestructura, sanidad e inocuidad.
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Proponer acciones correctivas y preventivas.
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Fortalecer la trazabilidad del sistema productivo.
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Promover una cultura de autocontrol y buenas prácticas.
            
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema8/5.png', alt='Texto que describa la imagen')
          .py-4.py-md-5(titulo="Criterios principales de evaluación" :icono="require('@/assets/componentes/2.svg')")
            .row.px-5.align-items-center
              .col-lg-7.mb-4.mb-md-0
                h4 Criterios principales de evaluación
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Infraestructura sanitaria y ambiental (MBR).
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Condiciones de las aves: integridad, comportamiento, salud (MBA).
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Gestión documental y operativa (MBG).
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Bioseguridad: ingreso, limpieza, residuos.
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Bienestar animal: confort, densidad, sintiencia.
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Inocuidad del producto: limpieza, manipulación, almacenamiento.
            
              .col-lg-5
                figure
                  img(src='@/assets/curso/tema8/6.png', alt='Texto que describa la imagen')
      
    separador
    
    #t_8_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.3 Procedimiento general de auditoría
    
    p.mb-5 A continuación, se describen las etapas generales del proceso de auditoría según la metodología ICA:

    .bg-full-width.bg-color-4
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 27.
              span Etapas del proceso de auditoría en granjas avícolas de postura

            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-7 Etapa
                    th.bg-color-7 Descripción de la actividad
                    th.bg-color-7 Responsable / Evidencia
                tbody.bg-color-white
                  tr.bg-color-sintesis
                    td Planeación de la auditoría
                    td Definición de objetivos, alcance, fechas y criterios.
                    td Auditor interno o ICA.
                  tr
                    td Revisión documental
                    td Análisis de manuales BPA, registros sanitarios y de bioseguridad.
                    td Documentos físicos.
                  tr.bg-color-sintesis
                    td Visita técnica
                    td Observación directa de instalaciones, animales y ambiente.
                    td Lista de chequeo ICA (Forma 3-1669 V.1).
                  tr
                    td Entrevista al personal
                    td Verificación del conocimiento del equipo.
                    td Bitácora de entrevistas, fotografías.
                  tr.bg-color-sintesis
                    td Registro de hallazgos
                    td Clasificación de no conformidades (menores, mayores, críticas).
                    td Acta de auditoría.
                  tr
                    td Informe final
                    td Documento técnico con nivel de cumplimiento y acciones correctivas.
                    td ICA o auditor externo.
                  tr.bg-color-sintesis
                    td Seguimiento
                    td Verificación del cumplimiento de acciones correctivas.
                    td Auditor o supervisor.

    

    separador
    
    #t_8_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.4 Resultados y clasificación
    
    p.mb-5 Los resultados se expresan como porcentaje de cumplimiento, según la metodología ICA 3-1669 V.1. La siguiente tabla presenta los rangos establecidos:

    .bg-full-width.bg-color-4
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 28.
              span Clasificación del nivel de cumplimiento en auditorías avícolas

            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-7 Nivel de cumplimiento (%)
                    th.bg-color-7 Clasificación
                    th.bg-color-7 Interpretación técnica
                tbody.bg-color-white
                  tr
                    td 90-100 %
                    td Excelente
                    td Cumple plenamente; apto para certificación.
                  tr
                    td 80-89 %
                    td Alto
                    td Cumple con la mayoría de los requisitos; requiere mejoras menores.
                  tr
                    td 60-79 %
                    td Medio
                    td Cumple parcialmente; necesita plan de acción.
                  tr
                    td < 60 %
                    td Bajo
                    td No cumple; no certificable hasta implementar mejoras.

        
        #t_8_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 8.5 Indicadores más evaluados durante la auditoría
        
        p.mb-5 Se resumen los indicadores más frecuentes utilizados en las auditorías técnicas del ICA:

        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 29.
              span Indicadores de evaluación del bienestar animal según categorías ICA

            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-7 Categoría
                    th.bg-color-7 Indicador
                    th.bg-color-7 Unidad / criterio de evaluación
                tbody.bg-color-white
                  tr.bg-color-sintesis
                    td MBA - Animal
                    td Condición corporal, lesiones, comportamiento, plumaje, mortalidad.
                    td Escala 1-5 o porcentaje.
                  tr
                    td MBR - Recursos
                    td Ventilación, temperatura, densidad, calidad de cama, acceso a agua.
                    td °C, ppm, % humedad.
                  tr.bg-color-sintesis
                    td MBG - Gestión
                    td Protocolos documentados, registros de limpieza, capacitación.
                    td Evidencias físicas verificables.

        

        p.mb-5 Observaciones según el sistema de producción:
    
    .row.justify-content-center
      .col-lg-10
        .bg-color-16.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema8/7.png', alt='')
            .col-lg
              .p-4
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 En sistemas de jaula tecnificada: los indicadores más críticos son el confort térmico, la densidad y la integridad ósea de las aves.
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 En sistemas de piso o traspatio: se priorizan el ambiente general, la limpieza y la manifestación del comportamiento natural.
    
    separador
    
    #t_8_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 8.6 Resultados esperados de la auditoría
    
    p.mb-5 Los resultados de una auditoría avícola eficaz deben incluir:

    .bg-color-8.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema8/8.png', alt='')
        .col-lg
          .p-4
            ol.lista-ol--cuadro
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span A
                | Diagnóstico integral de la situación sanitaria, operativa y de bienestar.
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span B
                | Identificación clara de no conformidades y propuesta de plan de mejora.
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span C
                | Evaluación del cumplimiento de la normativa vigente (ICA 3651 de 2014 y 067449 de 2020).
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span D
                | Acreditación o mantenimiento de la certificación otorgada por el ICA.
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span E
                | Recomendaciones específicas en bioseguridad, ventilación y salud animal.
              li.d-flex 
                .lista-ol--cuadro__vineta
                  span F
                | Sensibilización del personal sobre la importancia de las BPA y la inocuidad del producto final.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Importancia de la auditoría en la gestión avícola
    
    p.mb-5 La auditoría se consolida como una herramienta clave para la gestión técnica y sanitaria de las granjas de postura. Entre sus beneficios destacan:

    .bg-full-width.bg-color-19
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .bg-color-16.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema8/9.png', alt='')
                .col-lg
                  .p-4
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Favorece la mejora continua del sistema productivo.
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Reduce los riesgos sanitarios, operativos y económicos. 
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Fortalece la confianza del consumidor frente a los productos de origen avícola.
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Facilita el acceso a certificaciones nacionales e internacionales.
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Garantiza la trazabilidad, transparencia y sostenibilidad de la producción. 

        separador
        
        #t_8_7.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 8.7 Marco normativo de referencia
        
        p.mb-5 La auditoría de granjas avícolas de postura se fundamenta en un conjunto de normas técnicas y legales emitidas por entidades nacionales, que establecen los requisitos mínimos para garantizar la bioseguridad, el bienestar animal y la inocuidad en la producción. A continuación, se presenta el marco normativo de consulta obligatoria:

        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 30.
              span Normatividad vigente para la certificación y manejo del bienestar animal en producción avícola

            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-7 Norma / Documento
                    th.bg-color-7 Entidad emisora
                    th.bg-color-7 Contenido principal
                tbody.bg-color-white
                  tr.bg-color-sintesis
                    td Resolución ICA 067449 de 2020
                    td ICA
                    td Reglamenta las Buenas Prácticas Avícolas y auditoría
                  tr
                    td Resolución ICA 3651 de 2014
                    td ICA
                    td Define requisitos para certificación en bioseguridad
                  tr.bg-color-sintesis
                    td Resolución ICA 16409 de 2024
                    td ICA
                    td Establece lineamientos para la certificación en bienestar animal
                  tr
                    td Manual de Bienestar Animal (2023)
                    td MADR
                    td Proporciona lineamientos técnicos y éticos para el manejo animal
                  tr.bg-color-sintesis
                    td Decreto 1500 de 2007 / INVIMA
                    td Ministerio de Salud
                    td Regula la inocuidad de productos de origen animal


    
    .bg-color-8.mb-5
      .row.align-items-center
        .col-lg-auto.order-2
          img(src="@/assets/curso/tema8/10.svg", style="max-width: 140px").mx-auto
        .col-lg.order-1.p-4.px-lg-5.mb-3.mb-lg-0
          p.mb-0 La auditoría en granjas avícolas de postura es una herramienta técnica esencial para garantizar la calidad, inocuidad y bienestar animal en la producción de huevos. Aplicar correctamente la metodología EBA (MBA, MBR, MBG) permite verificar el cumplimiento normativo, identificar oportunidades de mejora y mantener activa la certificación oficial. El éxito de una auditoría no se mide únicamente por el porcentaje de cumplimiento, sino por la capacidad de implementar y sostener las acciones correctivas, consolidando una producción ética, responsable y segura.
    
    p.mb-5 A continuación, se presenta un video, que ofrece herramientas clave para implementar prácticas sostenibles en las granjas avícolas.

    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video


</template>

<script>
export default {
  name: 'Tema8',
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
