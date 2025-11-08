<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Las cinco libertades y los cinco dominios del bienestar animal en aves de postura
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/1.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 El bienestar animal en aves de postura se aborda desde dos marcos conceptuales complementarios: el modelo clásico de las Cinco Libertades, formulado por el Farm Animal Welfare Council (FAWC, 1965), y el modelo contemporáneo de los Cinco Dominios, desarrollado por Mellor et al. (2015) y adoptado por la WOAH (2021).
    
    p.mb-5 Ambos marcos se articulan en la evaluación integral del bienestar, ya que las libertades establecen los principios éticos mínimos, mientras que los dominios permiten analizar el impacto de cada dimensión física sobre el estado emocional del animal.

    .bg-full-width.bg-color-4
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 6.
              span Articulación conceptual: cinco libertades y cinco dominios

            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-7 Cinco libertades
                    th.bg-color-7 Cinco dominios
                tbody.bg-color-white
                  tr.bg-color-sintesis
                    td 1. Libre de hambre y sed
                    td 1. Nutrición
                  tr
                    td 2. Libre de incomodidad
                    td 2. Ambiente físico
                  tr.bg-color-sintesis
                    td 3. Libre de dolor, lesión y enfermedad
                    td 3. Salud
                  tr
                    td 4. Libre para expresar comportamientos normales
                    td 4. Conducta
                  tr.bg-color-sintesis
                    td 5. Libre de miedo y angustia
                    td 5. Estado mental

    p.mb-5 Las libertades orientan los estándares mínimos de trato ético; los dominios permiten un análisis multidimensional, incluyendo el estado emocional del animal.

    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Aplicación práctica por libertad y sistema de producción
    
    p.mb-5 La aplicación efectiva de cada libertad en los distintos sistemas de producción permite adaptar el bienestar animal a las condiciones reales del entorno, asegurando que las aves vivan con salud, confort y dignidad, sin comprometer su expresión natural ni su integridad física o emocional

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Libertad de hambre y sed 
    
    p.mb-5 Acceso constante a agua limpia y alimento balanceado que satisfaga las necesidades fisiológicas y metabólicas.

    .bg-full-width.bg-color-5
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 7.
              span Manejo alimenticio y riesgos asociados según el sistema de producción

            .tabla-a.color-acento-contenido.mb-5  
              table
                thead
                  tr
                    th.bg-color-7 Sistema
                    th.bg-color-7 Aspectos técnicos clave
                    th.bg-color-7 Ejemplos de manejo
                    th.bg-color-7 Riesgos comunes
                tbody.bg-color-white
                  tr.bg-color-sintesis
                    th Jaula
                    td Suministro automático controlado
                    td Uso de bebederos tipo niple, comederos lineales
                    td Obstrucción de líneas, fallas en dosificación
                  tr
                    th Piso
                    td Distribución equitativa, control de consumo
                    td Comederos ajustables, bebederos circulares
                    td Competencia por alimento, residuos
                  tr.bg-color-sintesis
                    th Traspatio
                    td Alimentación manual y natural
                    td Mezcla de concentrado con forraje o restos vegetales
                    td Agua contaminada, deficiencia nutricional

        
        p.mb-5 La deficiencia en agua o alimento genera estrés fisiológico, reduce la producción de huevo y afecta la salud ósea. El bienestar comienza con una nutrición adecuada (FAWC, WOAH, 2021).

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Libertad de incomodidad 
        
        p.mb-5 Provisión de un entorno físico que ofrezca confort térmico, ventilación, superficie seca, espacio y refugio ante condiciones adversas.

        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 8.
              span Condiciones ambientales y buenas prácticas según el sistema de producción

            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-7 Sistema
                    th.bg-color-7 Aspectos técnicos clave
                    th.bg-color-7 Buenas prácticas
                    th.bg-color-7 Riesgos
                tbody.bg-color-white
                  tr.bg-color-sintesis
                    th Jaula
                    td Espacio restringido, ventilación artificial
                    td Control térmico (18-24 °C), ventilación continua
                    td Estrés térmico, lesiones por alambres
                  tr
                    th Piso
                    td Microclima condicionado por cama y ventilación
                    td Cama seca (<30 % humedad), cortinas, luz natural controlada
                    td Humedad elevada → pododermatitis
                  tr.bg-color-sintesis
                    th Traspatio
                    td Exposición ambiental directa
                    td Sombra natural, refugios nocturnos, techo parcial
                    td Golpes de calor o frío, riesgo de depredadores

    
    p.mb-5 El confort físico tiene un efecto directo en la salud y la estabilidad del comportamiento. La WOAH (2019) destaca la importancia de un ambiente seguro y controlado.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Libertad de dolor, lesión y enfermedad 
    
    p.mb-5 Prevención, detección y tratamiento oportuno de enfermedades o lesiones, mediante planes sanitarios y manejo humanitario.

    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 9.
          span Prevención sanitaria y riesgos de salud según el sistema de producción

        .tabla-a.color-acento-contenido.mb-5
          table
            thead
              tr
                th.bg-color-7 Sistema
                th.bg-color-7 Acciones preventivas
                th.bg-color-7 Indicadores (ICA)
                th.bg-color-7 Riesgos principales
            tbody.bg-color-white
              tr.bg-color-sintesis
                td Jaula
                td Vacunación, revisión diaria de patas y quilla
                td Lesiones óseas, fracturas, afecciones respiratorias
                td Falta de movimiento → osteoporosis, heridas
              tr
                td Piso
                td Desinfección periódica, bioseguridad
                td Mortalidad, estado del plumaje, signos clínicos
                td Alta carga bacteriana, coccidiosis
              tr.bg-color-sintesis
                td Traspatio
                td Vacunación básica, control de parásitos
                td Condición corporal, presencia de heridas o parásitos
                td Depredadores, falta de control sanitario

    p.mb-5 La observación diaria y el cumplimiento del plan sanitario mejoran el bienestar físico y la longevidad productiva. El ICA (2024) establece la salud y la integridad corporal como criterios centrales en la evaluación del bienestar (MBA).

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Libertad para expresar comportamientos normales 
    
    p.mb-5 Posibilidad de manifestar conductas naturales como escarbar, anidar, percharse, acicalarse, socializar y explorar.
    
    .bg-full-width.bg-color-5
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 10.
              span Libertad conductual y manejo del comportamiento según el sistema de producción

            .tabla-a.color-acento-contenido.mb-5 
              table
                thead
                  tr
                    th.bg-color-7 Sistema
                    th.bg-color-7 Nivel de libertad conductual
                    th.bg-color-7 Conductas observables
                    th.bg-color-7 Acciones recomendadas
                tbody.bg-color-white
                  tr.bg-color-sintesis
                    td Jaula
                    td Muy limitado
                    td Imposibilidad de escarbar o volar
                    td Enriquecimiento ambiental (perchas, objetos de picoteo)
                  tr
                    td Piso
                    td Moderado
                    td Escarbado, acicalamiento, percheo
                    td Espacio >9 aves/m², acceso a nidos
                  tr.bg-color-sintesis
                    td Traspatio
                    td Pleno
                    td Exploración natural, interacción social
                    td Supervisión de seguridad, refugio nocturno

        p.mb-5 La restricción del comportamiento natural genera estrés, picaje y pérdida de condición corporal. El bienestar psicológico se construye a partir de la libertad de actuar según la biología de la especie.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Libertad de miedo y angustia 
        
        p.mb-5 Prevención del sufrimiento mental mediante un entorno predecible, trato respetuoso, protección ante amenazas y reducción del estrés.

        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 11.
              span Causas de miedo y estrategias de manejo según el sistema de producción

            .tabla-a.color-acento-contenido.mb-5 
              table
                thead
                  tr
                    th.bg-color-7 Sistema
                    th.bg-color-7 Causas frecuentes de miedo
                    th.bg-color-7 Estrategias preventivas
                    th.bg-color-7 Ejemplos positivos
                tbody.bg-color-white
                  tr.bg-color-sintesis
                    td Jaula
                    td Manipulación brusca, ruido mecánico
                    td Trato tranquilo, iluminación tenue
                    td Música ambiental, personal capacitado
                  tr
                    td Piso
                    td Cambios bruscos de luz, ingreso de extraños
                    td Rutinas fijas, movimientos suaves
                    td Reducción del estrés por habituación
                  tr.bg-color-sintesis
                    td Traspatio
                    td Depredadores, contacto humano forzado
                    td Cercado seguro, manejo paciente
                    td Animales tranquilos, sociables

    .row.mb-5.align-items-center
      .col-lg-5.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      .col-lg-7
        p(data-aos="fade-left") El bienestar emocional influye en la productividad y en la relación humano-animal. En Colombia, la Ley 1774 de 2016 establece como deber legal el “trato digno y sin crueldad” hacia los animales.
    
        .bg-color-2.p-4(data-aos="fade-left").mb-3
          p.mb-0 La combinación de las cinco libertades y los cinco dominios ofrece una visión integral y complementaria del bienestar animal. mientras las libertades representan compromisos éticos universales, los dominios permiten una evaluación más precisa y multidimensional, considerando los impactos físicos y mentales en las aves.
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/3.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 Su aplicación práctica debe adaptarse a los distintos sistemas de producción (jaula, piso, traspatio), garantizando que las aves vivan con salud, seguridad, confort y la posibilidad de comportarse conforme a su naturaleza.
    
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Los cinco dominios del bienestar animal 
    
    .row.mb-5.align-items-center
      .col-lg-5.mb-3.mb-lg-0
        .bg-color-2.tarjeta.py-5.px-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left").mb-0 El modelo de los Cinco dominios, desarrollado por David Mellor y colaboradores, representa una evolución científica en la comprensión del bienestar animal. A diferencia del modelo de las Cinco Libertades, que se enfoca en evitar el sufrimiento, este enfoque también promueve experiencias positivas, como el confort, el placer y la satisfacción conductual.
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/4.png" data-aos="zoom-in")
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/5.png" data-aos="zoom-in", style="max-width: 90px")
        p(data-aos="fade-left") Este modelo permite una evaluación más integral, al considerar los efectos fisiológicos, ambientales y emocionales sobre el estado mental del animal. A continuación, se explican los cinco dominios aplicados a gallinas de postura en distintos sistemas de producción.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Dominio 1. Nutrición

    p.mb-5 Evalúa la calidad, cantidad y acceso continuo a alimento y agua. Una nutrición adecuada se refleja en el peso corporal estable, el plumaje completo y una postura regular.

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-2.tarjeta.box-shadow.p-4.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/6.png" alt="" style="width: 363px")
              h5.text-center Jaula
              p.mb-0.text-center Dosificación automatizada; riesgo de obstrucción o distribución desigual.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-2.tarjeta.box-shadow.p-4.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/7.png" alt="" style="width: 363px")
              h5.text-center Piso
              p.mb-0.text-center Competencia por el comedero; requiere ajuste en la altura y número de accesos.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-2.tarjeta.box-shadow.p-4.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/8.png" alt="" style="width: 363px")
              h5.text-center Traspatio
              p.mb-0.text-center Alimentación variada; riesgo de deficiencias nutricionales. Requiere suplemento balanceado.
    
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Dominio 2. Ambiente físico
        
        p.mb-5 Incluye el microclima, iluminación, ventilación, temperatura, sustrato y refugio. Un ambiente adecuado proporciona confort térmico y seguridad.

    .bg-full-width.bg-fondo-2
      .px-4.px-md-5
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-14.tarjeta.box-shadow.p-4.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/9.png" alt="" style="width: 363px")
              h5.text-center Jaula
              p.mb-0.text-center Dependencia de ventilación forzada; riesgo de acumulación de calor.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-14.tarjeta.box-shadow.p-4.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/10.png" alt="" style="width: 363px")
              h5.text-center Piso
              p.mb-0.text-center Cama seca, ventilación y temperatura controladas.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-14.tarjeta.box-shadow.p-4.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/11.png" alt="" style="width: 363px")
              h5.text-center Traspatio
              p.mb-0.text-center Refugios naturales, sombra vegetal y manejo de lluvias.
    
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Dominio 3. Salud

        p.mb-5 Abarca la prevención, diagnóstico y tratamiento de enfermedades y lesiones. Su control depende del plan sanitario y la observación constante.

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-2.tarjeta.box-shadow.p-4.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/12.png" alt="" style="width: 363px")
              h5.text-center Jaula
              p.mb-0.text-center Vigilancia diaria y protocolos de limpieza automatizados.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-2.tarjeta.box-shadow.p-4.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/13.png" alt="" style="width: 363px")
              h5.text-center Piso
              p.mb-0.text-center Desinfección entre lotes, vacunación y control del estado de la cama.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-2.tarjeta.box-shadow.p-4.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/14.png" alt="" style="width: 363px")
              h5.text-center Traspatio
              p.mb-0.text-center Vacunación manual, control de parásitos y bioseguridad familiar.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Dominio 4.  Comportamiento e interacciones

        p.mb-5 Evalúa la posibilidad de expresar conductas naturales y sociales, como escarbar, posarse y explorar. A mayor libertad conductual, mayor bienestar psicológico.
    
    .bg-full-width.bg-fondo-2
      .px-4.px-md-5
        div.row.justify-content-center.align-items-stretch.mb-5
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-14.tarjeta.box-shadow.p-4.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/15.png" alt="" style="width: 363px")
              h5.text-center Jaula
              p.mb-0.text-center Conductas restringidas; alto nivel de estrés conductual.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-14.tarjeta.box-shadow.p-4.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/16.png" alt="" style="width: 363px")
              h5.text-center Piso
              p.mb-0.text-center Conductas naturales moderadas.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-14.tarjeta.box-shadow.p-4.h-100
              img.mx-auto.d-block.mb-4(src="@/assets/curso/tema2/17.png" alt="" style="width: 363px")
              h5.text-center Traspatio
              p.mb-0.text-center Libertad total para explorar, escarbar y posarse.
    
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Dominio 5. Estado mental

    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/18.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        .bg-color-8.p-5(data-aos="fade-left")
          p.mb-0 Este dominio integra los efectos de los anteriores para valorar el estado emocional del animal: placer, confort, curiosidad, o, por el contrario, miedo y sufrimiento. El bienestar completo no solo implica evitar experiencias negativas, sino promover experiencias positivas.

    .bg-full-width.bg-color-5
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 12.
              span Relación entre las cinco libertades y los cinco dominios

            .tabla-a.color-acento-contenido.mb-5 
              table
                thead
                  tr
                    th.bg-color-7 Cinco libertades
                    th.bg-color-7 Cinco dominios
                    th.bg-color-7 Relación
                tbody.bg-color-white
                  tr.bg-color-sintesis
                    td Libre de hambre y sed
                    td Nutrición
                    td Garantiza bienestar fisiológico básico.
                  tr
                    td Libre de incomodidad
                    td Ambiente físico
                    td Evalúa microclima y confort.
                  tr.bg-color-sintesis
                    td Libre de dolor, lesión y enfermedad
                    td Salud
                    td Refuerza la prevención y atención veterinaria.
                  tr
                    td Libre para expresar comportamientos normales
                    td Interacciones y comportamiento
                    td Evalúa el grado de expresión conductual natural.
                  tr.bg-color-sintesis
                    td Libre de miedo y angustia
                    td Estado mental
                    td Refleja el equilibrio emocional y psicológico.

        p.mb-5 Las cinco libertades establecen condiciones mínimas de bienestar, mientras que los Cinco Dominios permiten valorar cómo se siente realmente el animal y si experimenta emociones positivas. Ambos modelos son complementarios y pueden aplicarse simultáneamente en certificaciones de bienestar animal (ICA, 2024). El manejo responsable de aves de postura, ya sea en jaula, piso o traspatio, debe considerar ambos marcos de referencia:

        .row.justify-content-center
          .col-lg-8
            .bg-color-9.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema2/19.png', alt='')
                .col-lg
                  .p-4
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Las cinco libertades garantizan las condiciones esenciales para una vida digna.
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Los cinco dominios permiten evaluar el bienestar desde un enfoque científico, emocional y holístico.

        p.mb-5 La integración de ambos modelos orienta al productor a transitar del cumplimiento mínimo hacia la excelencia en bienestar animal, fomentando sistemas más éticos, sostenibles y productivos.

    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Diferencia entre los principios del bienestar animal y las cinco libertades en aves de postura    
    
    p.mb-5 A continuación, se presenta un pódcast que compara las cinco libertades y los principios del bienestar animal, destacando sus diferencias conceptuales, metodológicas y normativas en el manejo de aves de postura. Este análisis permite comprender cómo ambos enfoques se complementan para garantizar un bienestar animal real, ético y científicamente fundamentado.

    .row.mb-5
      .col-lg-5.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/20.png", data-aos="zoom-in")
      .col-lg-7.order-lg-1
        .bg-color-15.tarjeta.mb-5
          .p-4
            .row.justify-content-center.align-items-center
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema2/21.svg", data-aos="zoom-in")
              .col-lg-7
                h2(data-aos="fade-left").text-white.mb-4 Pódcast
        
                TarjetaAudio.color-acento-botones.bg-color-white.mb-3(
                  texto="Cinco libertades y principios del bienestar animal: enfoques complementarios en la producción de aves de postura"
                  tiempo
                  :audio="require('../assets/curso/podcast/podcast1.mp3')"
                )
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Aplicación en la normatividad colombiana
    
    .row.mb-5
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/22.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        p(data-aos="fade-left") Esta sección expone el lugar que ocupan ambos enfoques dentro del marco legal colombiano, destacando su función ética y operativa en el diseño y ejecución de políticas públicas.
    
        .bg-color-8.mb-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema2/23.png', alt='')
            .col-lg
              .p-4
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Las Cinco libertades están reconocidas como base ética en la Ley 1774 de 2016 y el Decreto 2113 de 2017, bajo el principio de trato digno y respeto hacia los animales.
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Los principios del bienestar animal constituyen el soporte técnico de la Resolución ICA 16409 de 2024, donde se definen metodologías, indicadores y procedimientos de certificación.
        
        p.mb-5 Las libertades explican el por qué del bienestar animal; los principios determinan el cómo implementarlo, medirlo y verificarlo en campo.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Cuadro comparativo
    
    p.mb-5 Finalmente, se presenta una síntesis estructurada de las principales diferencias entre ambos modelos, útil para su análisis conjunto y aplicación complementaria.

    .bg-full-width.bg-color-4
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 13.
              span Cuadro comparativo general

            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-7 Criterio
                    th.bg-color-7 Cinco libertades
                    th.bg-color-7 Principios del bienestar animal
                tbody.bg-color-white
                  tr.bg-color-sintesis
                    td Enfoque
                    td Ético y moral (evitar sufrimiento).
                    td Técnico, científico y normativo.
                  tr
                    td Finalidad
                    td Garantizar condiciones básicas de vida.
                    td Asegurar bienestar integral medido objetivamente.
                  tr.bg-color-sintesis
                    td Evaluación
                    td Cualitativa (presencia/ausencia).
                    td Cuantitativa (indicadores, escalas, ponderaciones).
                  tr
                    td Aplicación
                    td General, válida para cualquier especie o sistema.
                    td Específica por especie (aves, bovinos, porcinos).
                  tr.bg-color-sintesis
                    td Base normativa
                    td Ley 1774/2016, FAWC (1965).
                    td Decreto 2113/2017, Resolución ICA 16409/2024, Manual MADR 2020.
                  tr
                    td Orientación
                    td Preventiva (evitar sufrimiento).
                    td Proactiva (promover bienestar positivo).
                  tr.bg-color-sintesis
                    td Ejemplo aplicado a aves de postura
                    td Proveer agua, alimento y protección.
                    td Medir jadeo, plumaje, densidad, lesiones y comportamiento.
                  tr
                    td Resultado esperado
                    td Animales sin sufrimiento visible.
                    td Animales saludables, activos, confortables y productivos.


</template>

<script>
export default {
  name: 'Tema2',
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
