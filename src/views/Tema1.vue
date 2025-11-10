<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Bienestar animal en aves de postura: sistemas
    
    .bg-full-width.bg-color-5
      .px-4.px-md-5
        p.mb-5 El bienestar animal se define como el estado físico y mental óptimo de un animal en relación con las condiciones ambientales y de manejo en las que vive. En el caso de las gallinas ponedoras, este bienestar implica que las aves mantengan su salud, confort, nutrición adecuada, libertad de movimiento y la posibilidad de expresar comportamientos naturales, estando además libres de miedo, dolor o estrés prolongado.

        .row.mb-5.align-items-center
          .col-lg-3.order-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema1/2.png", data-aos="zoom-in")
          .col-lg-9.order-lg-1
            .bg-color-2.mb-3(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/1.png', alt='')
                .col-lg
                  .p-4
                    p.mb-0(data-aos="fade-up") Este concepto va más allá de la mera productividad o supervivencia: implica que las aves experimenten una vida de calidad, con estímulos positivos y mínimas restricciones. En la producción avícola moderna, la relación entre bienestar y productividad es directa: aves sanas y sin estrés presentan mejor conversión alimenticia, mayor persistencia de postura, mejor calidad de cáscara y menor mortalidad.
            
            p Según la Organización Mundial de Sanidad Animal (WOAH, 2023), el bienestar se evalúa con base en cinco dominios: nutrición, ambiente físico, salud, comportamiento y estado mental. Este enfoque permite valorar no solo la ausencia de sufrimiento, sino también la presencia de estados positivos como el confort y la satisfacción.
        
        separador
        
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1	Evaluación técnica del bienestar animal
    
    p.mb-5 La evaluación del bienestar debe considerar tanto indicadores productivos como observaciones directas del estado de las aves y de su entorno. El Instituto Colombiano Agropecuario (ICA) establece tres tipos de medidas adaptadas a cada sistema productivo:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema1/3.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Medidas Basadas en el Animal (MBA)
              p Observan directamente a las aves: 
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Condición corporal.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Hueso de la quilla.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 <em>Pododermatitis.</em>
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Daños en plumaje y piel. 
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Jadeo y respiración. 
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Conductas anormales.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema1/4.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Medidas Basadas en los Recursos (MBR)
              p Evalúan el ambiente físico:  
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Aire y ventilación.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Estado de equipos. 
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Calidad de la cama.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Espacio disponible. 
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Temperatura e iluminación.
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema1/5.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Medidas Basadas en la Gestión (MBG)
              p Analizan la gestión operativa:  
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Protocolos escritos. 
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Registros sanitarios. 
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Capacitación. 
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Planes de vacunación y bioseguridad. 
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Estrategias para reducir el estrés.

    p.mb-5 Estas tres medidas combinadas permiten una evaluación integral del bienestar, adaptada a las condiciones reales de cada granja.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Metodología nacional del ICA
    
    p.mb-5 El ICA desarrolló una metodología oficial para evaluar el bienestar en sistemas de jaula, piso, pastoreo y traspatio. Esta metodología se encuentra detallada en la Forma ICA 3-1669 V.1 y clasifica las granjas en cuatro niveles:
    
    .bg-full-width.bg-color-5
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 Tabla 1.
              span Categorías de evaluación del bienestar animal
            
            .tabla-a.color-acento-contenido.mb-5 
              table
                thead
                  tr
                    th.bg-color-7 Categoría
                    th.bg-color-7 Porcentaje obtenido
                    th.bg-color-7 Interpretación técnica
                tbody.bg-color-white
                  tr.bg-color-sintesis
                    td Bajo
                    td 0-59 %
                    td Condiciones inadecuadas; riesgo para el bienestar y la salud.
                  tr
                    td Medio
                    td 60-79 %
                    td Aceptable, pero con deficiencias estructurales o de manejo.
                  tr.bg-color-sintesis
                    td Alto
                    td 80-89 %
                    td Buen nivel de bienestar; requiere mejoras continuas.
                  tr
                    td Excelente
                    td ≥90 %
                    td Cumple estándares óptimos de bienestar.

    p.mb-5 Esta metodología estandariza la evaluación con instrucciones de muestreo, escalas de calificación y tablas específicas, permitiendo comparar de manera objetiva granjas de distinto tamaño y nivel de tecnificación.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Bienestar según el sistema de producción
    
    p.mb-5 Cada sistema de alojamiento presenta condiciones particulares que impactan el bienestar de las aves. A continuación, se comparan los principales sistemas:

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema1/6.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Sistema en jaulas (tecnificado)
              p Alta densidad, automatización y control sanitario. 
              h5 Ventajas:  
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Mayor bioseguridad 
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Menor contacto con excretas 
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Registro individualizado 
              h5 Desventajas:   
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Movilidad restringida 
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Ausencia de estímulos 
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Riesgo de lesiones óseas  
              h5 Recomendaciones ICA:   
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 ≤9 aves/m²  
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 18-24 °C 
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Luz regulada y enriquecimiento ambiental  
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema1/7.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Sistema en piso (galpón o aviario)
              p Aves sobre cama de viruta o paja. Permite comportamiento natural. 
              h5 Ventajas:  
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Mayor movilidad 
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Reducción del estrés  
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Mejor plumaje 
              h5 Desventajas:   
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Riesgo respiratorio  
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Necesidad de limpieza constante 
              h5 Indicadores clave:    
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Humedad de cama <30 %   
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Amoníaco <20 ppm 
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 7-9 aves/m² 
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 1 nido/5-6 gallinas
          .row.align-items-center.p-4.p-md-5
            .col-lg-6.order-2
              figure
                img(src="@/assets/curso/tema1/8.png")
            .col-lg-6.order-1.mb-3.mb-lg-0
              h5 Sistema de traspatio
              p Uso familiar o semi-comercial, baja tecnificación. Alimentación local. 
              h5 Ventajas:  
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Alta libertad de movimiento 
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Bajo estrés  
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Comportamientos naturales completos 
              h5 Desventajas:   
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Exposición a predadores 
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Infraestructura limitada 
              h5 Evaluación ICA:   
              ul.lista-ul--color
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 60 % MBA + 40 % MBR  
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-6
                  p.mb-0 Certificables si >80 % (según Resolución ICA 16409 de 2024)

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Impacto práctico y productivo

    p.mb-5 La implementación de estrategias de bienestar animal conlleva beneficios directos:

    .bg-full-width.bg-color-5
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .bg-color-8.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/9.png', alt='')
                .col-lg
                  .p-4
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Reducción de mortalidad y uso de antibióticos.
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Mejora en la calidad del huevo (cáscara más gruesa, color uniforme).
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Aumento de la persistencia de postura.
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Mejor comportamiento social.
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Acceso a mercados que exigen certificaciones: “huevos libres de jaula”, “bienestar animal certificado”.

        p.mb-5 El bienestar animal es una herramienta estratégica de sostenibilidad y rentabilidad: reduce el gasto energético de las aves, optimiza la conversión alimenticia y extiende su vida productiva.

        .row.justify-content-center
          .col-lg-10
            .bg-color-9.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/10.png', alt='')
                .col-lg
                  .p-4
                    p.mb-0 El bienestar animal en aves de postura es una condición esencial en cualquier sistema, desde los más tecnificados hasta los familiares. Gracias a la metodología del ICA (Forma 3-1669 V.1), es posible establecer parámetros claros, verificables y adaptados a cada realidad productiva.
    
    p.mb-5 Este compromiso responde no solo a normativas internacionales (WOAH) y nacionales (Resolución ICA 16409 de 2024, MADR 253 de 2020), sino también a una tendencia global hacia un consumo responsable donde la producción de huevo se asocia con salud, ética y calidad de vida animal.

    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Principios del bienestar animal en aves de postura
    
    p.mb-5 A continuación, se presenta un video, el cual ofrece una visión integral sobre los principales aspectos técnicos, normativos y operativos de la producción avícola.

    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/lBvIpVU2lrs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption <b>Video</b>: Producción de aves, carne, huevo y bienestar animal

    


    .bg-color-9.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema1/11.png', alt='')
        .col-lg
          .p-4
            p.mb-0 Los principios del bienestar animal son fundamentos técnicos, éticos y científicos que orientan el manejo responsable de las aves, garantizando su salud, confort y capacidad de expresar comportamientos naturales dentro de los sistemas de producción.
    
    p.mb-5 A diferencia de las Cinco Libertades, estos principios no se limitan a consideraciones morales, sino que establecen criterios objetivos, medibles y verificables que permiten evaluar y certificar el bienestar animal con base en evidencia.

    .row.justify-content-center
      .col-lg-10
        .bg-color-8.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/12.png', alt='')
            .col-lg
              .p-4
                p Seis principios universales adaptados a aves ponedoras:
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Integridad física y salud
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Estado fisiológico adecuado
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Expresión de comportamientos naturales
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Control del estrés crónico
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Evaluación continua del bienestar
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Justificación ética y científica de las prácticas de manejo

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Integridad física y salud
    
    p.mb-5 Este principio establece que las aves deben estar libres de dolor, lesiones, enfermedades y sufrimiento físico innecesario. La salud se evalúa no solo como ausencia de enfermedad, sino como presencia de vitalidad general, buena condición corporal y resiliencia inmunológica.

    .bg-full-width.bg-color-4
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 2.
              span Condiciones e indicadores de bienestar según el sistema de producción

            .tabla-a.color-acento-contenido.mb-5 
              table
                thead
                  tr
                    th.bg-color-7 Sistema
                    th.bg-color-7 Condiciones claves
                    th.bg-color-7 Indicadores (ICA)
                    th.bg-color-7 Acciones recomendadas
                tbody.bg-color-white
                  tr.bg-color-sintesis
                    th Jaula
                    td Movimiento restringido; riesgo óseo
                    td Lesiones en patas, quilla y plumaje
                    td Aumentar espacio, incorporar perchas, suplementar minerales
                  tr
                    th Piso
                    td Contacto con cama; riesgo sanitario
                    td Pododermatitis, limpieza del plumaje, mortalidad
                    td Mantener cama seca, buena ventilación, plan sanitario
                  tr.bg-color-sintesis
                    th Traspatio
                    td Exposición ambiental
                    td Parasitismo, heridas, condición corporal
                    td Refugio nocturno, control de parásitos, vacunación

        p.mb-5 El bienestar físico depende de un manejo preventivo, monitoreo constante y detección temprana de signos clínicos como jadeo, letargo o anorexia.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Estado fisiológico adecuado
        
        p.mb-5 El bienestar requiere mantener un balance térmico, nutricional y metabólico que garantice la homeostasis del organismo. Aves en buen estado fisiológico presentan plumaje brillante, postura activa y productividad estable.

        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 3.
              span Factores determinantes del confort térmico y ambiental en aves de postura

            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-7 Sistema
                    th.bg-color-7 Factores determinantes
                    th.bg-color-7 Indicadores
                    th.bg-color-7 Medidas correctivas
                tbody.bg-color-white
                  tr.bg-color-sintesis
                    th Jaula
                    td Temperatura, ventilación, agua y alimento
                    td Consumo, jadeo, temperatura corporal
                    td Ventiladores, flujo de aire, dieta ajustada
                  tr
                    th Piso
                    td Cama, densidad, microclima
                    td Humedad &lt;30 %, peso homogéneo, descanso
                    td Reducir densidad, mejorar bebederos y luz
                  tr.bg-color-sintesis
                    th Traspatio
                    td Clima, refugio, acceso a agua
                    td Hidratación, sombra, alimento balanceado
                    td Cobertizos, bebederos sombreados, suplemento proteico

    p.mb-5 La temperatura ideal debe oscilar entre 18 °C y 26 °C, con un consumo de agua diario de 200-300 ml por ave (más en climas cálidos).

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Expresión de comportamientos naturales
    
    p.mb-5 Las gallinas tienen necesidades conductuales específicas como anidar, escarbar, posarse, acicalarse y explorar. La restricción de estas conductas genera estrés, picaje y frustración.

    .bg-full-width.bg-color-4
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 4.
              span Expresión del comportamiento natural según el sistema de producción

            .tabla-a.color-acento-contenido.mb-5 
              table
                thead
                  tr
                    th.bg-color-7 Sistema
                    th.bg-color-7 Comportamientos permitidos o restringidos
                    th.bg-color-7 Indicadores
                    th.bg-color-7 Acciones
                tbody.bg-color-white
                  tr.bg-color-sintesis
                    th Jaula
                    td Severamente restringidos
                    td Picaje, apatía, deterioro del plumaje
                    td Enriquecimiento ambiental, perchas, objetos de picoteo
                  tr
                    th Piso
                    td Parcialmente expresados
                    td Jerarquía estable, bajo estrés
                    td Espacio adecuado, iluminación gradual
                  tr.bg-color-sintesis
                    th Traspatio
                    td Plenamente expresados
                    td Actividad diurna normal, curiosidad
                    td Supervisión, evitar hacinamiento nocturno


        p.mb-5 La posibilidad de expresar conductas naturales es un marcador directo del bienestar mental y emocional. Debe promoverse incluso en sistemas intensivos.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Control del estrés crónico
        
        p.mb-5 El estrés puede ser agudo o crónico, pero es este último el que más compromete la salud, inmunidad y producción. Puede ser causado por ruido, calor, mal manejo, hacinamiento, entre otros factores.

        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 5.
              span Fuentes de estrés y estrategias de prevención según el sistema de producción

            .tabla-a.color-acento-contenido.mb-5 
              table
                thead
                  tr
                    th.bg-color-7 Sistema
                    th.bg-color-7 Fuentes de estrés
                    th.bg-color-7 Indicadores conductuales
                    th.bg-color-7 Medidas preventivas
                tbody.bg-color-white
                  tr.bg-color-sintesis
                    th Jaula
                    td Ruido, calor, manipulación brusca
                    td Jadeo, anorexia, picaje
                    td Manejo tranquilo, regulación térmica
                  tr
                    th Piso
                    td Competencia por alimento o espacio
                    td Agresividad, huida, falta de descanso
                    td Distribución equitativa del alimento, menor densidad
                  tr.bg-color-sintesis
                    th Traspatio
                    td Amenazas externas, falta de rutina
                    td Nerviosismo, aislamiento, baja postura
                    td Cercas, establecimiento de rutinas, refugios seguros


    p.mb-5 Altos niveles de corticosterona, pérdida de peso, menor ovulación y deterioro del plumaje son indicadores fisiológicos de estrés crónico.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Evaluación continua del bienestar
    
    p.mb-5 El bienestar debe ser monitoreado, documentado y mejorado constantemente. El ICA exige evaluaciones periódicas mediante la Forma 3-1669 V.1, que pondera 60 % de indicadores basados en el animal (MBA) y 40 % basados en recursos (MBR).

    .bg-full-width.bg-color-5
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .bg-color-8.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/13.png', alt='')
                .col-lg
                  .p-4
                    p Ejemplos de evaluación continua:
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Revisiones semanales de lesiones, condición corporal y plumaje.
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Registros de mortalidad, consumo y comportamiento.
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Monitoreo ambiental: temperatura, humedad, niveles de amoníaco.
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Auditorías internas y externas para certificación.

        p.mb-5 La mejora continua permite identificar causas raíz y aplicar acciones correctivas oportunas.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Justificación ética y científica
    
    p.mb-5 Toda decisión de manejo debe estar respaldada por principios éticos y evidencia científica, no por la costumbre o conveniencia económica. Esto implica comprender la fisiología, etología, bioseguridad y productividad del animal. La normativa colombiana es:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .tarjeta.bg-color-11.h-100
          .bg-color-10.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Ley 1774 de 2016
          p.mb-0.p-4 Reconoce a los animales como seres sintientes.

      .col-lg-4.mb-3.mb-lg-0
        .tarjeta.bg-color-11.h-100
          .bg-color-10.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Decreto 2113 de 2017
          p.mb-0.p-4 Establece principios de trato digno.

      .col-lg-4.mb-3.mb-lg-0
        .tarjeta.bg-color-11.h-100
          .bg-color-10.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Resolución ICA 16409 de 2024
          p.mb-0.p-4 Define criterios técnicos de evaluación del bienestar.
    
    p.mb-5 Los productores deben justificar técnica y científicamente decisiones como la densidad, el tipo de jaula o los métodos de sacrificio. Aplicar los principios del bienestar animal en aves de postura permite equilibrar la productividad con la ética, la salud y la sostenibilidad.

    .bg-full-width.bg-color-5
      .px-4.px-md-5
        .bg-color-12.mb-5
          .px-4.px-md-5.py-4
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema1/14.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 En sistemas tecnificados (jaula o piso), su implementación requiere herramientas científicas y planificación ambiental. En sistemas de traspatio, se debe fortalecer la bioseguridad, la nutrición y la observación constante del comportamiento.
        
        .row.justify-content-center
          .col-lg-10
            .bg-color-13.mb-5(data-aos="fade-down")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema1/15.png', alt='')
                .col-lg
                  .p-4
                    p Los beneficios clave son:
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Mejora la calidad de vida de las aves.
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Aumenta la eficiencia productiva y sanitaria.
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Facilita el cumplimiento normativo y la certificación ICA.
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Responde a las exigencias del mercado nacional e internacional en materia de bienestar animal.





</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
