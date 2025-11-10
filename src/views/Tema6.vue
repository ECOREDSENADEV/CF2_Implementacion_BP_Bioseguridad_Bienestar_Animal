<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Certificación de granja avícola biosegura de postura
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/1.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 La certificación de granja avícola biosegura es un proceso oficial del Instituto Colombiano Agropecuario (ICA) mediante el cual se verifica que una unidad de producción avícola cumple con los protocolos estructurales, sanitarios y operativos que permiten prevenir, controlar y minimizar los riesgos de introducción y propagación de enfermedades infecciosas. Este proceso está regulado por la Resolución ICA 3651 de 2014, y es aplicable a sistemas de producción de aves de postura en jaula, piso o traspatio. A continuación, se presenta la descripción completa de las fases que conforman el proceso de certificación oficial ante el ICA.


    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-17")
      .div(titulo="Fase 1. Solicitud formal")
        p.ms-5 La certificación inicia con la radicación de una solicitud escrita dirigida a la oficina local del ICA. Debe incluir el formato oficial de solicitud debidamente diligenciado, el plano de la granja con identificación clara de zonas limpias y sucias, rutas de circulación y ubicación de los galpones. También se requiere la copia del Registro Único de Predio Avícola (RUPA) y del NIT, junto con el plan de bioseguridad firmado por el responsable técnico. Además, deben anexarse evidencias sanitarias que respalden la implementación de medidas preventivas, tales como registros de vacunación, limpieza y capacitaciones del personal. Esta fase se encuentra reglamentada en los artículos 6 al 8 de la Resolución ICA 3651 de 2014.

      .div(titulo="Fase 2. Visita técnica de diagnóstico")
        p.ms-5 Una vez recibida la documentación, el ICA realiza una visita de diagnóstico para verificar el cumplimiento de los requisitos estructurales, sanitarios y operativos. En esta inspección se evalúan los protocolos de limpieza, control de ingreso, vacunación y registros sanitarios existentes. Se aplica la lista de chequeo oficial del ICA y se asigna un porcentaje de cumplimiento. Si este es inferior al 80 %, el ICA emite un plan de acciones correctivas con un plazo de 30 a 60 días para que la granja implemente las mejoras requeridas antes de una nueva evaluación.

      .div(titulo="Fase 3. Evaluación documental")
        p.ms-5 En esta etapa, el ICA revisa exhaustivamente toda la documentación presentada por la granja para garantizar que los procesos se ajustan a los estándares de bioseguridad. Se analizan los registros sanitarios que evidencian vacunación, mortalidad, limpieza y uso de biológicos; los Procedimientos Operativos Estandarizados (POE), que aseguran la uniformidad en las prácticas diarias; el manual de bioseguridad, como evidencia de planificación y cumplimiento de los protocolos; los certificados de capacitación del personal, que verifican la formación en bioseguridad; y los reportes de laboratorio, que deben contener los resultados de análisis microbiológicos del agua y alimentos.

      .div(titulo="Fase 4. Inspección final para certificación")
        p.ms-5 Tras la implementación de las mejoras y correcciones señaladas, el ICA realiza una segunda visita oficial. Durante esta fase, se inspecciona toda la unidad de producción, verificando los indicadores críticos de bioseguridad: condiciones mínimas de bioseguridad (MBA), manejo biológico responsable (MBR) y buenas prácticas de granja (MBG). Se vuelve a aplicar la lista de chequeo y se obtiene un puntaje final de cumplimiento. El resultado se clasifica así: excelente (≥ 90 %, certificación inmediata), aprobado (80-89 %, certificación condicionada), regular (60-79 %, requiere ajustes y nueva evaluación) y deficiente (< 60 %, no certifica).
      .div(titulo="Fase 5. Emisión del certificado oficial")
        p.ms-5 Si la granja alcanza el cumplimiento mínimo exigido, el ICA emite el Certificado de Granja Avícola Biosegura, con una vigencia de dos años. Este documento incluye el nombre del predio, tipo de producción (aves de postura), nombre del responsable técnico, fecha de expedición y vencimiento, y el porcentaje de cumplimiento alcanzado. Además, se asigna un número de registro nacional único y la información es publicada en la base de datos oficial del ICA. Esta certificación acredita que la unidad productiva cumple con los estándares técnicos, sanitarios y operativos establecidos en la normativa vigente.
      .div(titulo="Fase 6.  Seguimiento y renovación")
        p.ms-5 Durante la vigencia del certificado, el ICA realiza visitas de seguimiento semestrales para garantizar la continuidad del cumplimiento de las medidas de bioseguridad. En caso de detectarse incumplimientos graves, la certificación puede ser suspendida o revocada. Para mantener la validez del certificado, la renovación debe gestionarse mínimo 30 días antes de la fecha de vencimiento. Este proceso se encuentra establecido en el artículo 18 de la Resolución ICA 3651 de 2014.
    
    .tarjeta.bg-color-18.p-3.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema6/2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Protocolos obligatorios en granjas de postura según la resolución ICA 3651 de 2014
              p.text-small Se invita a leer el documento Protocolos obligatorios en granjas de postura según la resolución ICA 3651 de 2014, donde se aborda el conjunto de procedimientos exigidos por el Instituto Colombiano Agropecuario (ICA) para la certificación de las granjas avícolas bioseguras.  
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download
    
    separador
    
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Bioseguridad en granjas avícolas de postura

    p.mb-5 La bioseguridad avícola es un sistema integrado de medidas físicas, químicas, biológicas y de manejo que busca prevenir la introducción, propagación y persistencia de agentes patógenos en las unidades de producción. Este concepto es clave en la prevención de enfermedades como Newcastle, Influenza Aviar, Salmonelosis o Micoplasmosis, y es indispensable para garantizar la inocuidad de productos como el huevo fresco y sus derivados.

    .bg-full-width.bg-color-19
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-8
            .bg-color-9.tarjeta.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema6/3.svg', alt='')
                .col-lg
                  .p-4
                    p Referencias normativas:
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Resolución ICA 3651 de 2014.
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Manual de Bioseguridad Avícola (ICA, 2023).
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Resolución ICA 067449 de 2020.

        separador
        
        #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 6.2 Objetivos fundamentales de la bioseguridad
        
        p.mb-5 Un sistema de bioseguridad correctamente implementado busca:

        .bg-color-8.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema6/4.png', alt='')
            .col-lg
              .p-4
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Prevenir el ingreso de enfermedades infecciosas al sistema productivo.
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Disminuir la circulación de patógenos entre galpones o lotes.
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Evitar la contaminación cruzada de alimentos, agua, personal y equipos.
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Promover un entorno sanitario estable que favorezca la productividad.
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Asegurar trazabilidad sanitaria frente a autoridades, consumidores y mercados.
      
    separador
    
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Niveles de aplicación en la bioseguridad avícola
    
    p.mb-5 El sistema de bioseguridad se estructura en tres niveles interdependientes, cada uno con acciones específicas que deben implementarse de manera simultánea.

    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Bioseguridad externa" :icono="require('@/assets/componentes/2.svg')")
        .row.p-5.align-items-center
          .col-md-7.mb-4.mb-md-0
            h4 Bioseguridad externa
            p Previene el ingreso de patógenos desde el exterior de la granja. 
            p.mb-0 <b>Ejemplo</b>: instalación de cercas perimetrales, control de visitantes y aplicación de cuarentenas.
        
          .col-md-5
            figure
              img(src='@/assets/curso/tema6/5.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Bioseguridad interna" :icono="require('@/assets/componentes/2.svg')")
        .row.p-5.align-items-center
          .col-md-7.mb-4.mb-md-0
            h4 Bioseguridad interna
            p Controla la diseminación de patógenos dentro del sistema de producción. 
            p.mb-0 <b>Ejemplo</b>: manejo separado por lotes, desinfección diaria y flujos unidireccionales.
        
          .col-md-5
            figure
              img(src='@/assets/curso/tema6/6.png', alt='Texto que describa la imagen')
      .py-4.py-md-5(titulo="Bioseguridad sanitaria" :icono="require('@/assets/componentes/2.svg')")
        .row.p-5.align-items-center
          .col-md-7.mb-4.mb-md-0
            h4 Bioseguridad sanitaria
            p Mantiene el estado inmunológico óptimo de las aves. 
            p.mb-0 <b>Ejemplo</b>: vacunación, vermifugación y monitoreo sanitario continuo.
        
          .col-md-5
            figure
              img(src='@/assets/curso/tema6/7.png', alt='Texto que describa la imagen')
    
    separador
    
    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.4 Relación con la certificación ICA
    
    p.mb-5 Los protocolos de bioseguridad constituyen la base técnica sobre la que se estructura la Certificación de granja avícola biosegura, establecida en la Resolución ICA 3651 de 2014. Su cumplimiento garantiza que la unidad productiva:

 
    .bg-color-9.tarjeta.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema6/8.png', alt='')
        .col-lg
          .p-4
            ul.lista-ul--color
              li.d-flex
                i.fas.fa-circle-check.bg-color-6
                p.mb-0 Cumple estándares sanitarios nacionales e internacionales.
              li.d-flex
                i.fas.fa-circle-check.bg-color-6
                p.mb-0 Previene brotes y mejora el bienestar animal.
              li.d-flex
                i.fas.fa-circle-check.bg-color-6
                p.mb-0 Reduce pérdidas económicas por mortalidad o enfermedades.
              li.d-flex
                i.fas.fa-circle-check.bg-color-6
                p.mb-0 Aumenta la aceptación comercial y el acceso a mercados diferenciados.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Principales protocolos o Procedimientos Operativos Estándar (POE)
    
    p.mb-5 A continuación, se detalla los procedimientos esenciales que garantizan la prevención, control y seguimiento de riesgos sanitarios en las explotaciones avícolas, de acuerdo con las normas vigentes del ICA.

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-17")
      .div(titulo="A.	Control de ingreso de personal y visitantes")
        div.ms-5
          p <b>Objetivo técnico</b>: evitar el ingreso de patógenos a través de personas, ropa o vehículos.
          p <b>Medidas clave</b>: registro de ingreso con datos básicos y antecedentes de visitas a otras granjas; uso obligatorio de ropa, botas y tapabocas exclusivos; instalación de pediluvios y lavamanos; desinfección de vehículos mediante arcos o rociadores; restricción de acceso sin autorización. 
          p <b>Evidencia</b>: formato de registro, bitácora de desinfección y señalización en puntos críticos. 

      .div(titulo="B.	Control perimetral y acceso de animales")
        div.ms-5
          p <b>Objetivo técnico</b>: impedir la entrada de fauna silvestre, roedores, perros o gatos. 
          p <b>Medidas clave</b>: cercado del predio y control de accesos; separación de zonas limpias y sucias; colocación de trampas y aplicación de control químico para roedores; limpieza y desinfección de bodegas y nidos. 
          p <b>Evidencia</b>: plan de control integrado de plagas, mapa de puntos de control y registros mensuales actualizados.

      .div(titulo="C.	Limpieza y desinfección")
        div.ms-5
          p <b>Objetivo técnico</b>: reducir la carga microbiana en superficies, equipos y ambiente. 
          p <b>Medidas clave</b>: limpieza diaria de comederos, bebederos y pasillos; desinfección total entre lotes con un vacío sanitario mínimo de 15 días; uso de desinfectantes aprobados por el ICA (hipoclorito, amonios, glutaraldehído); calibración y control de concentraciones.  
          p <b>Evidencia</b>: POE de limpieza, registro de aplicación y control de productos empleados.

      .div(titulo="D.	Manejo de mortalidad y desechos")
        div.ms-5
          p <b>Objetivo técnico</b>: prevenir la contaminación ambiental y la proliferación de vectores. 
          p <b>Medidas clave</b>: retiro inmediato de cadáveres mínimo dos veces al día; compostaje en fosas impermeables, cubiertas y señalizadas; control de lixiviados y temperatura mayor a 55 °C; alternativas de incineración o entierro controlado; limpieza del área de compostaje. 
          p <b>Evidencia</b>: registro diario de mortalidad, control de temperatura y fotografías del compostaje.
      .div(titulo="E.	Manejo de agua y alimento")
        div.ms-5
          p <b>Objetivo técnico</b>: garantizar insumos inocuos y prevenir contaminación bacteriana o fúngica. 
          p <b>Medidas clave</b>: uso de agua potable con cloro residual entre 0.3–0.5 ppm; limpieza semanal de tanques y bebederos; análisis microbiológicos semestrales; almacenamiento del alimento en condiciones secas y limpias; rotación del producto y registros de consumo. 
          p <b>Evidencia</b>: resultados de análisis de agua, plan de limpieza y control de ingreso y rotación de alimentos.
      .div(titulo="F.	Programa de vacunación y sanidad")
        div.ms-5
          p <b>Objetivo técnico</b>: mantener la inmunidad del lote y prevenir la aparición de enfermedades infecciosas. 
          p <b>Medidas clave</b>: cumplimiento del cronograma de vacunación según la etapa productiva; registro de fecha, lote, vía, producto, dosis y responsable; vermifugación periódica; monitoreo serológico y necropsias ante signos clínicos.  
          p <b>Evidencia</b>: carné de vacunación, registro sanitario y reportes de laboratorio.
      .div(titulo="G.	Manejo de residuos sólidos y líquidos")
        div.ms-5
          p <b>Objetivo técnico</b>: evitar la contaminación ambiental y el aumento de vectores. 
          p <b>Medidas clave</b>: clasificación de residuos (biológicos, comunes y peligrosos); disposición controlada de la gallinaza mediante compostaje o venta certificada; mantenimiento de trampas de grasa y pozos sépticos; almacenamiento de residuos en zonas techadas y señalizadas. 
          p <b>Evidencia</b>: plan de manejo ambiental y registros de disposición final de residuos.
      .div(titulo="H.	Control de movilización y transporte")
        div.ms-5
          p <b>Objetivo técnico</b>: prevenir la entrada o salida de patógenos mediante el transporte de animales, huevos o insumos. 
          p <b>Medidas clave</b>: desinfección de vehículos y jaulas; obtención de certificados sanitarios ICA; limpieza de bandejas y guacales; registro de destino y trazabilidad de los lotes.   
          p <b>Evidencia</b>: guías ICA, bitácoras de transporte y plan de movilización.
      .div(titulo="I.	Capacitación del personal")
        div.ms-5
          p <b>Objetivo técnico</b>: asegurar la correcta ejecución de todos los protocolos de bioseguridad. 
          p <b>Medidas clave</b>: desarrollo de programas anuales de formación en bioseguridad, bienestar animal y respuesta ante emergencias sanitarias; simulacros de emergencia; evaluación de competencias del personal operativo.  
          p <b>Evidencia</b>: actas de asistencia, certificados individuales y cumplimiento mínimo de 20 horas anuales de formación (ICA, 2024).
    
    p.mb-5 A continuación, se presenta un video, que describe de manera detallada los tipos de residuos generados en las explotaciones avícolas y su adecuada clasificación: orgánicos, convencionales no peligrosos y peligrosos.

    .bg-full-width.bg-color-4
      .px-4.px-md-5
        figure.mb-5
          .video.mb-2
            iframe(width="560" height="315" src="https://www.youtube.com/embed/hiJCUNy1GQc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption <b>Video</b>: Clasificación de los residuos en la producción avícola

        p.mb-5 En el siguiente  video se expone los procedimientos físicos, químicos y biológicos necesarios para reducir la carga microbiana en estos subproductos, conforme a la Resolución ICA 30292 de 2017.
    
    .bg-full-width.bg-color-4
      .px-4.px-md-5
        figure.mb-5
          .video.mb-2
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption <b>Video</B>: Sanitización de la gallinaza o pollinaza

        p.mb-5 A continuación, se presenta un video, que resalta la importancia de documentar adecuadamente los procesos productivos en una granja avícola para garantizar la trazabilidad, el cumplimiento normativo y la mejora continua.

        figure.mb-5
          .video.mb-2
            iframe(width="560" height="315" src="https://www.youtube.com/embed/5pgCEDrAm5E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption <b>Video</b>: Registros y recolección de datos

    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Evaluación y monitoreo del cumplimiento
    
    p.mb-5 El Instituto Colombiano Agropecuario (ICA) evalúa el cumplimiento de los protocolos de bioseguridad mediante:

    .row.mb-4.justify-content-center
      .col-lg-5.mb-3.mb-lg-0
        .bg-color-10.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Inspecciones: programadas o inopinadas, realizadas por funcionarios ICA.
      .col-lg-5.mb-3.mb-lg-0
        .bg-color-10.p-4.mb-3(data-aos="fade-left")
          p.mb-0 Listas de verificación oficiales: establecidas en la Resolución ICA 3651 de 2014.

    .bg-full-width.bg-color-5
      .px-4.px-md-5
        p Ponderación del nivel de cumplimiento, expresado en porcentaje, según la siguiente escala:
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 21.
              span Niveles de cumplimiento y acciones según la evaluación del ICA

            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-7 Porcentaje de cumplimiento
                    th.bg-color-7 Nivel asignado por ICA
                    th.bg-color-7 Acción correspondiente
                tbody.bg-color-white
                  tr.bg-color-sintesis
                    td ≥ 90 %
                    td Excelente
                    td Certificación inmediata
                  tr
                    td 80-89 %
                    td Aprobado
                    td Certificación condicionada
                  tr.bg-color-sintesis
                    td 60-79 %
                    td Regular
                    td Requiere plan de mejoras y revaluación
                  tr
                    td < 60 %
                    td Deficiente
                    td Rechazo de la solicitud; suspensión o revocatoria

        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Consecuencias del incumplimiento
    
    p.mb-5 El incumplimiento parcial o total de los protocolos establecidos puede generar las siguientes sanciones, según la normativa ICA:

    .bg-full-width.bg-color-5
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .bg-color-8.mb-5(data-aos="fade-up")
              .row.justify-content-center.align-items-center
                .col-lg-auto.mb-3.mb-lg-0
                  figure
                    img(src='@/assets/curso/tema6/9.png', alt='')
                .col-lg
                  .p-4
                    ul.lista-ul--color
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Suspensión de la Certificación de granja biosegura.
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Aplicación de medidas administrativas (advertencias, cierres temporales).
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Inmovilización o sacrificio sanitario de aves infectadas o expuestas.
                      li.d-flex
                        i.fas.fa-circle-check.bg-color-6
                        p.mb-0 Pérdida del estatus sanitario ICA, afectando la comercialización y trazabilidad.
    
    p.mb-5 A continuación, se presenta un video, que explica los principios fundamentales para garantizar la sanidad, bioseguridad, inocuidad y bienestar animal en la producción avícola. 

    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/9FcUeEC1Ego" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption <b>Video</b>: Buenas prácticas en granjas avícolas


    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Relación entre bioseguridad y bienestar animal
    
    p.mb-5 La bioseguridad y el bienestar animal son conceptos interdependientes. Ambos son fundamentales para el desempeño sanitario, productivo y ético de una granja avícola de postura:

    .bg-full-width.bg-color-4
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 22.
              span Relación entre bioseguridad y bienestar animal en la producción avícola

            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-7 Bioseguridad
                    th.bg-color-7 Bienestar animal
                tbody.bg-color-white
                  tr.bg-color-sintesis
                    td Protege la salud física mediante prevención de enfermedades.
                    td Protege el estado físico, mental y emocional del animal.
                  tr
                    td Se centra en instalaciones, control de ingreso, limpieza.
                    td Considera conductas naturales, confort y estado emocional.
                  tr.bg-color-sintesis
                    td Indicadores MBA y MBR.
                    td Indicadores MBR y MBG.
                  tr
                    td Forma parte del proceso de certificación sanitaria.
                    td Es base de la Certificación de Bienestar Animal (ICA 16409/2024).



        p.mb-5 La Metodología ICA 3-1669 V.1 unifica ambos enfoques al integrar los siguientes indicadores:

        .row.mb-4.justify-content-center
          .col-lg-3.mb-3.mb-lg-0
            .bg-color-10.p-4.mb-3(data-aos="fade-left")
              p.mb-0 <b>MBA</b>: 
              p.mb-0 Medio Bioseguro Ambiental.
          .col-lg-3.mb-3.mb-lg-0
            .bg-color-10.p-4.mb-3(data-aos="fade-left")
              p.mb-0 <b>MBR</b>: 
              p.mb-0 Manejo Básico Responsable.
          .col-lg-3.mb-3.mb-lg-0
            .bg-color-10.p-4.mb-3(data-aos="fade-left")
              p.mb-0 <b>MBG</b>: 
              p.mb-0 Medio de Bienestar General.
        
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Esquema resumen de protocolos esenciales
        
        p.mb-5 Este cuadro sintetiza los protocolos clave exigidos por el ICA y los documentos requeridos para su verificación:

        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 23.
              span Protocolos de bioseguridad y evidencias requeridas por el ICA

            .tabla-a.color-acento-contenido.mb-5
              table
                thead
                  tr
                    th.bg-color-7 Categoría
                    th.bg-color-7 Protocolo / Procedimiento
                    th.bg-color-7 Evidencia exigida por ICA
                tbody.bg-color-white
                  tr.bg-color-sintesis
                    td Control de acceso
                    td Registro de ingreso, pediluvios, ropa exclusiva
                    td Formato diario firmado
                  tr
                    td Limpieza y desinfección
                    td Frecuencias, productos, concentraciones
                    td Bitácora y fichas técnicas
                  tr.bg-color-sintesis
                    td Mortalidad
                    td Retiro diario, compostaje
                    td Registros y fotografías del proceso
                  tr
                    td Agua y alimento
                    td Análisis microbiológico, limpieza de tanques
                    td Resultados de laboratorio
                  tr.bg-color-sintesis
                    td Control de plagas
                    td Trampas, fumigación, monitoreo
                    td Informe mensual de control integrado de plagas
                  tr
                    td Sanidad
                    td Vacunación, vermifugación
                    td Registros sanitarios oficiales (carné, laboratorio)
                  tr.bg-color-sintesis
                    td Residuos
                    td Manejo ambiental, disposición responsable
                    td Plan de manejo ambiental y certificados
                  tr
                    td Transporte
                    td Desinfección de vehículos y guacales
                    td Guías de movilización ICA, bitácoras de transporte
                  tr.bg-color-sintesis
                    td Personal
                    td Capacitaciones y simulacros sanitarios
                    td Actas firmadas, certificados de formación (>20 h/año)
    
    p.mb-5 La bioseguridad en las granjas avícolas de postura no es una medida aislada, sino un sistema integral, continuo y verificable que:

    .row.justify-content-center
      .col-lg-10
        .bg-color-8.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema6/10.png', alt='')
            .col-lg
              .p-4
                ul.lista-ul--color
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Protege la salud de las aves.
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Garantiza la inocuidad de los huevos.
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Reduce el riesgo de brotes infecciosos y pérdidas económicas.
                  li.d-flex
                    i.fas.fa-circle-check.bg-color-6
                    p.mb-0 Asegura el cumplimiento de la normativa ICA y la permanencia en el mercado formal.
    
    p.mb-5 A continuación, se presenta un video, orientado a fortalecer el conocimiento sobre el manejo técnico de agua, control de plagas, disposición de residuos y registros operativos en granjas avícolas. 

    .bg-full-width.bg-color-5
      .px-4.px-md-5
        figure.mb-5
          .video.mb-2
            iframe(width="560" height="315" src="https://www.youtube.com/embed/1jsZtiYd-I8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption <b>Video</b>: Protocolos de bioseguridad y control de actividades anexas de producción

      
        p.mb-5 Cumplir con los protocolos establecidos por la Resolución ICA 3651 de 2014 permite obtener y mantener la Certificación de Granja Avícola Biosegura, y constituye además el requisito técnico preliminar para acceder a la Certificación de Bienestar Animal (Resolución ICA 16409 de 2024).

    .tarjeta.bg-color-18.p-3
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/tema6/2.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Certificación ICA postura
              p.text-small Se invita a leer el documento Certificación ICA postura, donde se aborda el proceso de certificación como Granja Avícola Biosegura exigido por el Instituto Colombiano Agropecuario (ICA).   
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download




</template>

<script>
export default {
  name: 'Tema6',
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
