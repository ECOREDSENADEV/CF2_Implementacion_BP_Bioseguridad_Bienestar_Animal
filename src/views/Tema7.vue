<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 7
      h1 Certificación de comercialización de productos avícolas en aves de postura
    
    .row.mb-5
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema7/1.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        p(data-aos="fade-left") La certificación de comercialización de productos avícolas en el contexto de las aves de postura es un proceso técnico y regulado que garantiza que los huevos destinados al consumo humano provienen de granjas que cumplen con los estándares de bioseguridad, sanidad, bienestar animal e inocuidad alimentaria exigidos por la normatividad colombiana.

        .bg-color-10(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema7/2.png', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") Este proceso, liderado por el Instituto Colombiano Agropecuario (ICA) y el Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA), busca asegurar que los productos avícolas sean seguros, trazables y producidos bajo condiciones higiénicas, minimizando los riesgos para la salud pública.
        .bg-color-16.mb-5(data-aos="fade-up").p-4
          p.mb-0 La certificación es además una herramienta de competitividad y sostenibilidad, ya que permite al productor diferenciar su producto en el mercado como "huevos de calidad garantizada", promoviendo la confianza del consumidor y el cumplimiento de los estándares internacionales de bienestar y seguridad alimentaria.
    
    separador
    
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.1 Requisitos para la certificación
    
    p.mb-5 A continuación, se presenta un pódcast que expone los principales requisitos técnicos y administrativos exigidos para obtener la certificación en la comercialización de productos avícolas de postura, conforme a la normativa vigente en Colombia.

    .row
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema7/3.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-15.tarjeta.mb-5
          .p-4
            .row.justify-content-center.align-items-center
              .col-lg-5.mb-3.mb-lg-0
                figure
                  img(src="@/assets/curso/tema7/4.svg", data-aos="zoom-in")
              .col-lg-7.mb-3.mb-lg-0
                h2(data-aos="fade-left").text-white.mb-4 Pódcast
        
                TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                  texto="Requisitos para la certificación"
                  tiempo
                  :audio="require('../assets/curso/podcast/podcast1.mp3')"
                )
    
    separador
    
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.2 Procedimiento para la certificación
    
    p.mb-5 El procedimiento se desarrolla en etapas secuenciales que garantizan el cumplimiento normativo. Cada fase incluye evidencias obligatorias y seguimiento por parte del ICA:

    .bg-full-width.bg-color-5
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 24.
              span Etapas del proceso de certificación de granja avícola biosegura (ICA)

            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-7 Etapa
                    th.bg-color-7 Descripción detallada
                    th.bg-color-7 Responsable
                    th.bg-color-7 Evidencias / Documentos
                tbody.bg-color-white
                  tr.bg-color-sintesis
                    td Solicitud formal
                    td Entrega de solicitud y documentos a la oficina seccional del ICA.
                    td Productor
                    td Formato ICA, RUT, planos, plan de bioseguridad.
                  tr
                    td Revisión documental
                    td Análisis preliminar de requisitos técnicos y normativos.
                    td ICA
                    td Acta de revisión documental.
                  tr.bg-color-sintesis
                    td Visita diagnóstica
                    td Inspección inicial de las instalaciones y protocolos.
                    td ICA
                    td Informe diagnóstico.
                  tr
                    td Implementación de mejoras
                    td Corrección de no conformidades encontradas.
                    td Productor
                    td Reporte con evidencia fotográfica y documental.
                  tr.bg-color-sintesis
                    td Auditoría oficial
                    td Evaluación final con lista de chequeo ICA.
                    td ICA
                    td Lista firmada con evaluación del 100 %.
                  tr
                    td Emisión del certificado
                    td Aprobación del proceso y entrega del certificado por 2 años.
                    td ICA
                    td Certificado oficial ICA.
                  tr.bg-color-sintesis
                    td Seguimiento y renovación
                    td Visitas periódicas para verificar el cumplimiento sostenido.
                    td ICA / Productor
                    td Informes y registros de control.

    

    separador
    
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.3 Inocuidad alimentaria en la comercialización de huevos
    
    p.mb-5 Uno de los componentes más importantes del proceso de certificación es la inocuidad alimentaria, que asegura que los huevos no representen un riesgo para la salud del consumidor. A continuación se presentan los riesgos sanitarios asociados a cada etapa del proceso productivo y sus medidas preventivas:

    .bg-full-width.bg-color-4
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 25.
              span Control sanitario en la cadena de producción y comercialización de huevos

            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-7 Etapa del proceso
                    th.bg-color-7 Riesgo sanitario asociado
                    th.bg-color-7 Medida preventiva o protocolo exigido
                tbody.bg-color-white
                  tr.bg-color-sintesis
                    td Producción
                    td Contaminación fecal o de cama
                    td Limpieza diaria, control de humedad (<30 %), vacunación, control de plagas.
                  tr
                    td Recolección de huevos
                    td Ruptura o contaminación de la cáscara
                    td Lavado con agua potable, secado con aire, clasificación inmediata.
                  tr.bg-color-sintesis
                    td Almacenamiento
                    td Proliferación bacteriana
                    td Temperatura entre 12-18 °C, humedad del 60-70 %, sistema FIFO.
                  tr
                    td Transporte
                    td Contaminación cruzada
                    td Vehículos desinfectados, bandejas limpias, personal con uniforme sanitario.
                  tr.bg-color-sintesis
                    td Comercialización
                    td Falta de trazabilidad
                    td Etiquetado con nombre de granja, lote, fecha de postura y número de registro ICA.



        #t_7_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 7.4 Protocolos técnicos exigidos
        
        p.mb-5 Durante las visitas de auditoría del ICA se verifica el cumplimiento de los Protocolos Operativos Estandarizados de Saneamiento (POES) y las Buenas Prácticas de Manufactura (BPM). Se resumen a continuación:

        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 26.
              span Protocolos operativos esenciales en granjas avícolas de postura

            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-7 Protocolo
                    th.bg-color-7 Objetivo técnico
                    th.bg-color-7 Frecuencia / Control
                    th.bg-color-7 Registro exigido
                tbody.bg-color-white
                  tr.bg-color-sintesis
                    td Limpieza y desinfección
                    td Eliminar microorganismos en galpones y utensilios
                    td Diaria / entre lotes
                    td Formato de limpieza y desinfección
                  tr
                    td Control de plagas
                    td Prevenir vectores transmisores de enfermedades
                    td Semanal / mensual
                    td Evidencia de aplicación y plan de monitoreo
                  tr.bg-color-sintesis
                    td Manejo de residuos
                    td Disposición segura de gallinaza y desechos
                    td Diario / controlada
                    td Registro de compostaje y disposición final
                  tr
                    td Bioseguridad del personal
                    td Evitar ingreso de patógenos a través del contacto humano
                    td Diario / obligatorio
                    td Registro de ingreso y ropa sanitaria
                  tr.bg-color-sintesis
                    td Manejo del agua
                    td Garantizar agua potable para aves y limpieza de huevos
                    td Semanal / laboratorio
                    td Informe de potabilidad
                  tr
                    td Transporte
                    td Asegurar inocuidad durante entrega del producto
                    td Cada envío
                    td Registro de limpieza y trazabilidad

    

    separador
    
    #t_7_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.5 Normatividad aplicable en Colombia

    p.mb-5 La siguiente normativa sustenta legalmente el proceso de certificación para la comercialización de productos avícolas:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema7/5.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Ley 1774 de 2016
              p Entidad: Congreso de la República. 
              p Contenido principal: reconoce a los animales como seres sintientes y establece sanciones penales para quienes les causen dolor, sufrimiento o maltrato injustificado. Introduce la obligación de garantizar su bienestar en todos los sistemas productivos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema7/6.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Resolución ICA 3651 de 2014
              p Entidad: Instituto Colombiano Agropecuario (ICA). 
              p Contenido principal: regula los requisitos técnicos, estructurales y sanitarios para la certificación de granjas avícolas bioseguras, estableciendo criterios de evaluación, documentación y seguimiento.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema7/7.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Resolución ICA 067449 de 2020
              p Entidad: Instituto Colombiano Agropecuario (ICA). 
              p Contenido principal: define las condiciones necesarias para la implementación de Buenas Prácticas Avícolas (BPA), orientadas al bienestar, bioseguridad, inocuidad y trazabilidad en la producción de huevos y aves de corral.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema7/8.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Resolución ICA 16409 de 2024
              p Entidad: Instituto Colombiano Agropecuario (ICA). 
              p Contenido principal: actualiza los criterios y procedimientos para la certificación de bienestar animal en especies de producción, incluyendo indicadores de evaluación, condiciones ambientales y manejo conductual.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema7/9.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Decreto 1500 de 2007
              p Entidad: Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA). 
              p Contenido principal: establece el sistema oficial de inspección, vigilancia y control sanitario para la producción, beneficio, procesamiento y comercialización de productos de origen animal destinados al consumo humano.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema7/10.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Decreto 3075 de 1997
              p Entidad: Ministerio de Salud. 
              p Contenido principal: define las Buenas Prácticas de Manufactura (BPM) aplicables a establecimientos donde se fabriquen, procesen, envasen, almacenen o transporten alimentos, garantizando su inocuidad y calidad sanitaria.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema7/11.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Manual de Bienestar Animal (2023)
              p Entidad: Ministerio de Agricultura y Desarrollo Rural. 
              p Contenido principal: proporciona lineamientos técnicos y operativos para la implementación del bienestar animal por especie, integrando parámetros de alimentación, alojamiento, comportamiento, salud y sacrificio humanitario.
    
    separador
    
    #t_7_6.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.6 Beneficios de la certificación
    
    p.mb-5 Obtener la certificación ICA permite al productor diferenciarse en el mercado con productos que cumplen altos estándares de calidad e inocuidad:

    .bg-full-width.bg-fondo-3
      .px-4.px-md-5
        .row.justify-content-center.mb-5
          .col-md-4.col-lg-2.mb-3.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema7/12.svg', style="max-width: 90px" alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-color-9.w-100
                .p-4.text-center
                  p.mb-0 Garantiza productos inocuos y trazables.
          .col-md-4.col-lg-2.mb-3.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema7/12.svg', style="max-width: 90px" alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-color-9.w-100
                .p-4.text-center
                  p.mb-0 Mejora la aceptación del consumidor.
          .col-md-4.col-lg-2.mb-3.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema7/12.svg', style="max-width: 90px" alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-color-9.w-100
                .p-4.text-center
                  p.mb-0 Abre puertas a mercados de exportación y supermercados.
          .col-md-4.col-lg-2.mb-3.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema7/12.svg', style="max-width: 90px" alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-color-9.w-100
                .p-4.text-center
                  p.mb-0 Promueve el bienestar animal y la sostenibilidad.
          .col-md-4.col-lg-2.mb-3.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/tema7/12.svg', style="max-width: 90px" alt='AvatarTop')
              //- .tarjeta debe ir acompañado de una de una de estas clases => 
              //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
              //- estas clases tambien tienen un modificador --borde
              .tarjeta.bg-color-9.w-100
                .p-4.text-center
                  p.mb-0 Fortalece la reputación de la empresa avícola.

        .bg-color-white.mb-5(data-aos="fade-down").p-4.mb-5
          p.mb-0 La Certificación de comercialización de productos avícolas en sistemas de postura es un proceso integral que une la bioseguridad, la sanidad, la inocuidad y el bienestar animal bajo un mismo marco de trazabilidad y control. Cumplir con las disposiciones de las Resoluciones ICA 3651 de 2014 y 067449 de 2020, además de los decretos sanitarios vigentes, permite que los productores avícolas colombianos garanticen la calidad e inocuidad de sus huevos, fortaleciendo la reputación del sector avícola y la confianza de los consumidores. La certificación no solo representa un aval técnico, sino también un compromiso ético con la producción responsable, sostenible y segura de alimentos de origen animal.

</template>

<script>
export default {
  name: 'Tema7',
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
