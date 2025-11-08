<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Sanidad avícola en aves de postura
    
    .bg-full-width.bg-color-5
      .px-4.px-md-5
        .row.mb-5
          .col-lg-3.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema5/1.png", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            p La sanidad avícola de postura comprende el conjunto de acciones, prácticas y estrategias veterinarias orientadas a prevenir, controlar, diagnosticar y erradicar enfermedades que afectan la salud y el bienestar de las gallinas ponedoras a lo largo de su ciclo productivo.
            .bg-color-2.mb-3(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema5/2.png', alt='')
                .col-lg
                  .p-4
                    p.mb-0 Su objetivo es preservar el equilibrio sanitario del sistema productivo, evitando brotes infecciosos y asegurando condiciones óptimas de salud, lo que a su vez garantiza la inocuidad y calidad del huevo destinado al consumo humano.
            p Este enfoque sanitario involucra la integración de medidas preventivas, vigilancia, bioseguridad, control de vectores, manejo higiénico y prácticas alimentarias responsables, en coordinación con normativas nacionales vigentes.
    
    p.mb-5 A continuación, se presenta un video, que aborda los procedimientos esenciales para prevenir enfermedades en aves mediante planes de vacunación, técnicas de limpieza y desinfección, y prácticas de bioseguridad.

    figure
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

    separador
    
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Elementos fundamentales de la sanidad en aves de postura
    
    p.mb-5 La sanidad avícola no se limita al tratamiento de enfermedades, sino que abarca un modelo preventivo, integral y documentado. A continuación, se detallan sus componentes esenciales:

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema5/3.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Prevención sanitaria
              p Aplicación programada de vacunas y control estratégico de parásitos internos y externos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema5/4.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Monitoreo epidemiológico
              p Vigilancia diaria para detectar signos clínicos, cambios de comportamiento o alteraciones productivas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema5/5.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Diagnóstico y tratamiento
              p Intervención veterinaria ante enfermedades infecciosas, metabólicas o parasitarias.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema5/6.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Manejo higiénico
              p Limpieza y desinfección rutinaria de galpones, equipos, comederos y bebederos.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema5/7.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Educación sanitaria
              p Capacitación continua del personal en bioseguridad, buenas prácticas y manejo responsable.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema5/8.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Registro sanitario
              p Documentación detallada de vacunaciones, tratamientos, desinfecciones, mortalidades y observaciones clínicas.
    
    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Base normativa en Colombia
    
    .bg-full-width.bg-color-5
      .px-4.px-md-5
        p.mb-5 La normativa colombiana en sanidad avícola establece los requisitos técnicos y legales que deben cumplir los sistemas de producción para asegurar el control sanitario, el bienestar animal y la trazabilidad de sus productos. Las principales normas aplicables al sector de aves de postura son:

        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 17.
              span Normatividad vigente sobre buenas prácticas avícolas en Colombia

            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-7 Norma / Documento
                    th.bg-color-7 Institución responsable
                    th.bg-color-7 Contenido principal
                tbody.bg-color-white
                  tr.bg-color-sintesis
                    td Resolución ICA 3651 de 2014
                    td Instituto Colombiano Agropecuario (ICA)
                    td Define los requisitos para certificar granjas avícolas bioseguras.
                  tr
                    td Resolución ICA 067449 de 2020
                    td Instituto Colombiano Agropecuario (ICA)
                    td Establece lineamientos para la implementación de Buenas Prácticas Avícolas (BPA).
                  tr.bg-color-sintesis
                    td Manual de Buenas Prácticas Avícolas (2020)
                    td Ministerio de Agricultura y Desarrollo Rural (MADR)
                    td Orienta el manejo sanitario, ambiental y de bienestar animal en producción avícola.
        p Estas normas permiten estructurar programas sanitarios efectivos, aplicables tanto a sistemas tecnificados como a explotaciones rurales o familiares.
    
    separador
    
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Importancia de la sanidad en la producción de huevo

    p.mb-5 Mantener un programa de sanidad avícola actualizado y efectivo aporta beneficios directos en términos productivos, económicos y legales. Una granja con buena salud animal logra:

    .bg-color-8.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema5/9.png', alt='')
        .col-lg
          .p-4
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-circle-check.bg-color-6
                p.mb-0 <b>Reducción de la mortalidad</b> y menores costos por medicamentos veterinarios.
              li.d-flex
                i.fas.fa-circle-check.bg-color-6
                p.mb-0 <b>Mejor bienestar animal</b>, al evitar sufrimiento por enfermedades evitables.
              li.d-flex
                i.fas.fa-circle-check.bg-color-6
                p.mb-0 <b>Mayor eficiencia productiva</b>, con más huevos por gallina y menor descarte.
              li.d-flex
                i.fas.fa-circle-check.bg-color-6
                p.mb-0 <b>Mejor calidad e inocuidad del producto</b>, fundamental para el consumo humano y la aceptación del mercado.
              li.d-flex
                i.fas.fa-circle-check.bg-color-6
                p.mb-0 <b>Facilita la certificación oficial</b> de bioseguridad y bienestar ante el ICA, lo cual permite el acceso a programas de incentivo y diferenciación comercial.

    separador
    
    #t_5_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.4 Plan sanitario integral para aves de postura en Colombia 
    
    p.mb-5 El bienestar y la productividad de las aves de postura dependen directamente de un manejo sanitario riguroso, planificado y adaptado al ciclo productivo. En Colombia, el Instituto Colombiano Agropecuario (ICA) ha definido normativas y lineamientos técnicos que permiten implementar planes sanitarios efectivos, acordes con el nivel de tecnificación, la ubicación geográfica y el riesgo sanitario de cada granja. Este plan contempla vacunación, vermifugación, protocolos de bioseguridad, monitoreo sanitario y cumplimiento normativo, integrados en un sistema preventivo y sostenible.

    .bg-full-width.bg-color-5
      .px-4.px-md-5
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Plan de vacunación en aves de postura
        
        p.mb-5 El esquema de vacunación puede ajustarse según historial sanitario, condiciones regionales y recomendaciones del veterinario responsable, pero debe contemplar las principales enfermedades virales, bacterianas y parasitarias que afectan a las gallinas ponedoras.

        .titulo-sexto.color-acento-contenido
          h5 Tabla 18.
          span Programa de vacunación en aves de postura

        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th.bg-color-7 Enfermedad
                th.bg-color-7 Vacuna / Biológico
                th.bg-color-7 Edad de aplicación
                th.bg-color-7 Vía de aplicación
                th.bg-color-7 Dosis / Refuerzo
                th.bg-color-7 Protección contra
            tbody.bg-color-white
              tr.bg-color-sintesis
                td Enfermedad de Newcastle
                td Vacuna viva La Sota o B1
                td Día 1
                td Ocular o spray
                td 0.03 ml / cada 8-12 semanas
                td Paramixovirus aviar.
              tr
                td Bronquitis infecciosa
                td Cepa Massachusetts o H120
                td Día 1
                td Ocular o spray
                td 1 gota / refuerzo a 4 y 8 semanas
                td Virus de bronquitis aviar.
              tr.bg-color-sintesis
                td Gumboro (IBDV)
                td Vacuna viva (cepa intermedia)
                td 10-14 días
                td Agua de bebida
                td Según fabricante / a los 21 días
                td Virus de Gumboro.
              tr
                td Viruela aviar
                td Virus atenuado (vacuna viva)
                td 6-8 semanas
                td Punción en membrana alar
                td 1 dosis / refuerzo cada 6-9 meses
                td Virus de viruela aviar.
              tr.bg-color-sintesis
                td Enfermedad de Marek
                td Vacuna HVT o Rispens
                td Día 1 (incubadora)
                td Subcutánea (cuello)
                td 0.2 ml / sin refuerzo
                td Virus de Marek (herpesvirus).
              tr
                td Coryza infecciosa
                td Bacterina inactivada
                td 8-10 semanas
                td Subcutánea o intramuscular
                td 0.5 ml / refuerzo a las 4 semanas
                td Avibacterium paragallinarum.
              tr.bg-color-sintesis
                td Salmonelosis (S. enteritidis)
                td Vacuna inactivada
                td 10-12 semanas
                td Subcutánea
                td 0.5 ml / refuerzo en postura
                td Salmonelas zoonóticas.
              tr
                td Laringotraqueítis (LT)
                td Vacuna viva atenuada
                td 10-12 semanas
                td Ocular o intranasal
                td 1 gota / refuerzo en postura
                td Virus de LT aviar.
              tr.bg-color-sintesis
                td Colibacilosis (E. coli)
                td Autovacuna o bacterina inactivada
                td 12-14 semanas
                td Intramuscular
                td 0.5 ml / cada 6 meses
                td Cepas patógenas de E. coli.
              tr
                td Encefalomielitis aviar (AE)
                td Vacuna viva (cepa 1143)
                td 14-16 semanas
                td Agua de bebida u ocular
                td 1 gota / 1 vez por ciclo
                td Virus AE (poliomavirus).

        p.mb-5 Las notas técnicas esenciales indican que se debe mantener la cadena de frío entre 2 y 8 °C para garantizar la estabilidad del biológico. Además, se recomienda no utilizar agua clorada durante la vacunación oral, ya que puede afectar la viabilidad de las vacunas. Finalmente, toda aplicación debe realizarse bajo la supervisión de un médico veterinario zootecnista registrado ante el ICA, quien se encargará de verificar el cumplimiento de las condiciones sanitarias y técnicas del proceso.
    
    .bg-full-width.bg-color-5
      .px-4.px-md-5
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Plan de vermifugación en aves de postura
        
        p.mb-5 El control de parásitos internos es clave para la salud digestiva, la eficiencia alimentaria y la respuesta inmunológica. El plan debe ser preventivo, rotativo y respaldado con exámenes coproparasitoscópicos.

        .titulo-sexto.color-acento-contenido
          h5 Tabla 19.
          span Programa antiparasitario en aves de postura

        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th.bg-color-7 Principio activo / Producto
                th.bg-color-7 Tipo de parásito controlado
                th.bg-color-7 Edad / Momento de aplicación
                th.bg-color-7 Vía de administración
                th.bg-color-7 Dosis / Duración
                th.bg-color-7 Frecuencia recomendada
                th.bg-color-7 Observaciones técnicas
            tbody.bg-color-white
              tr.bg-color-sintesis
                td Albendazol 10 %
                td Nematodos (Ascaridia galli, Heterakis)
                td 6–8 semanas / inicio postura
                td Agua de bebida
                td 1 ml/L por 2 días
                td Cada 3–4 meses
                td Evitar durante el pico de postura.
              tr
                td Levamisol 7.5 %
                td Nematodos y capilarias
                td 10 y 25 semanas
                td Oral o agua
                td 1 ml/L por 1 día
                td Cada 4 meses
                td Estimula la respuesta inmune.
              tr.bg-color-sintesis
                td Fenbendazol 10 %
                td Nematodos y cestodos
                td 12 y 40 semanas
                td Oral o alimento
                td 1 g/kg de alimento por 3 días
                td Cada 6 meses
                td Rotar con albendazol.
              tr
                td Piperazina citrato 60 %
                td Ascaridiasis leve
                td 8–12 semanas
                td Agua de bebida
                td 1 g/L de agua por 1 día
                td Según necesidad
                td Uso en infestaciones iniciales.
              tr.bg-color-sintesis
                td Toltrazuril 5 %
                td Coccidios intestinales (Eimeria)
                td 14 días y 10 semanas
                td Agua de bebida
                td 1 ml/L por 2 días
                td Preventivo o en brotes
                td Complementar con manejo seco de cama.


        p.mb-5 Las recomendaciones generales establecen que se deben realizar análisis de heces cada tres meses para monitorear la presencia de parásitos y garantizar la efectividad del tratamiento. Se aconseja aplicar los productos en ayuno parcial y preferiblemente al amanecer, momento en que los animales presentan mayor receptividad. Es fundamental lavar y desinfectar los equipos antes y después de cada tratamiento para prevenir contaminaciones cruzadas. Además, se recomienda alternar los productos utilizados con el fin de evitar la resistencia farmacológica y mantener la eficacia de los antiparasitarios.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Protocolos sanitarios complementarios
    
    p.mb-5 Además de la vacunación y la vermifugación, es imprescindible mantener protocolos rutinarios de higiene, bioseguridad y monitoreo diario.

    .bg-full-width.bg-fondo-3
      .px-4.px-md-5.pb-md-3
        .row.justify-content-center.mb-3.p-3.align-items-center
          .col-lg-9.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-white.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema5/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Desinfección de galpón
                p.text-center Aplicar amonios cuaternarios o glutaraldehído (0.5–1 %). Frecuencia: antes del ingreso de aves y una vez por semana.
              .bg-color-white.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema5/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Control de plagas
                p.text-center Instalar trampas, usar rodenticidas y realizar desinsectación dirigida. Frecuencia: mensual o según nivel de infestación.
              .bg-color-white.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema5/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Limpieza de bebederos y comederos
                p.text-center Cepillar con detergente, enjuagar con agua limpia y revisar el flujo de agua. Frecuencia: diaria.
              .bg-color-white.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema5/14.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Control de mortalidad
                p.text-center Retirar de inmediato las aves muertas y disponer de forma segura mediante entierro profundo o incineración. Frecuencia: diaria.
              .bg-color-white.p-4.h-100.shadow-app.tarjeta
                img(src='@/assets/curso/tema5/15.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Registro sanitario
                p.text-center Registrar mortalidad, consumo de alimento, temperatura ambiental y síntomas clínicos. Frecuencia: diaria.
    
          .col-lg-3.order-lg-1
            figure
              img(src='@/assets/curso/tema5/10.png', alt='')

        p A continuación, se presenta un video, en el que se detallan los métodos técnicos para la detección, seguimiento y control de plagas comunes en las explotaciones avícolas, como roedores, moscas y alfitobios.

    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Normativa colombiana vigente 
    
    p.mb-5 El marco legal que respalda las prácticas sanitarias en avicultura de postura en Colombia se basa en normas de bioseguridad, bienestar animal e inocuidad alimentaria.

    .bg-full-width.bg-fondo-slider
      .p-4.p-md-5.mb-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema5/16.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Resolución ICA 16409 de 2024
              p <b>Entidad</b>: Instituto Colombiano Agropecuario (ICA). 
              p <b>Contenido</b>: establece la Certificación Voluntaria en Bienestar y Sanidad Animal.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema5/17.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Manual de Bioseguridad Avícola (2023)
              p <b>Entidad</b>: Instituto Colombiano Agropecuario (ICA). 
              p <b>Contenido</b>: define las medidas obligatorias de bioseguridad y control sanitario en granjas avícolas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema5/18.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Resolución ICA 3652 de 2014
              p <b>Entidad</b>: Instituto Colombiano Agropecuario (ICA). 
              p <b>Contenido</b>: regula la prevención, diagnóstico y control de enfermedades aviares.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema5/19.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Ley 1774 de 2016
              p <b>Entidad</b>: Congreso de la República. 
              p <b>Contenido</b>: reconoce a los animales como seres sintientes y penaliza el maltrato animal.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema5/20.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Decreto 1500 de 2007
              p <b>Entidad</b>: Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA). 
              p <b>Contenido</b>: reglamenta la sanidad e inocuidad de los productos de origen animal.

    .bg-full-width.bg-color-5
      .px-4.px-md-5
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Cronograma sanitario por etapa productiva
        
        p.mb-5 Un plan sanitario eficiente debe ajustarse al desarrollo fisiológico y productivo de las aves. El siguiente esquema resume las acciones clave por fase:

        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 20.
              span Plan sanitario según la etapa productiva en aves de postur

            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-7 Etapa productiva
                    th.bg-color-7 Actividad principal
                    th.bg-color-7 Objetivo específico
                    th.bg-color-7 Frecuencia / Responsable
                tbody.bg-color-white
                  tr.bg-color-sintesis
                    td Levante (1-16 semanas)
                    td Vacunación y vermifugación inicial
                    td Estimular inmunidad temprana.
                    td Según cronograma ICA / Veterinario.
                  tr
                    td Inicio de postura
                    td Refuerzos vacunales y control parasitario
                    td Proteger la entrada al ciclo productivo.
                    td Cada 3-4 meses / según riesgo.
                  tr.bg-color-sintesis
                    td Postura (26-90 semanas)
                    td Mantenimiento de inmunidad y monitoreo sanitario
                    td Prevenir caídas productivas y brotes.
                    td Bioseguridad diaria / monitoreo semanal.
                  tr
                    td Descanso sanitario
                    td Limpieza profunda y vacío sanitario
                    td Cortar ciclos infecciosos antes de nuevo lote.
                    td Mínimo 15 días antes del repoblamiento.

        p La sanidad en aves de postura constituye la base operativa de una producción avícola sostenible, rentable y ética. Un plan integral que combine vacunación, vermifugación, protocolos de bioseguridad y monitoreo constante:

    .row.mb-4.justify-content-center
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-10.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Reduce la incidencia de enfermedades.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-10.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Mejora la eficiencia productiva y la calidad del huevo.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-10.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Facilita el cumplimiento normativo y la certificación ICA.
    
    p.mb-5 En sistemas tecnificados (jaula o piso), la sanidad se apoya en automatización y registros digitales; en sistemas de traspatio, el éxito depende del conocimiento empírico, la observación diaria y la asesoría veterinaria. En todos los casos, el objetivo es común: mantener aves sanas, longevas, productivas y con altos estándares de bienestar animal.


  
</template>

<script>
export default {
  name: 'Tema5',
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
