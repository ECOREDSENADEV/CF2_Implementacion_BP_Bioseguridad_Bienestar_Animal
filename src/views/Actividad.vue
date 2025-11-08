<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Gestión integral de la producción avícola: normatividad, bienestar animal y buenas prácticas',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> evaluar la comprensión y aplicación de los conceptos fundamentales sobre bienestar animal, bioseguridad, sanidad y certificación en la producción avícola de postura..',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Qué se entiende por bienestar animal en aves de postura?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La capacidad de las aves para producir más huevos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El estado físico y mental óptimo del animal bajo condiciones adecuadas de manejo.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El control sanitario del galpón.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La implementación de un sistema tecnificado de jaulas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Cuál es el principal objetivo de las “Cinco Libertades” del bienestar animal?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumentar la producción y reducir costos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cumplir con normas internacionales de exportación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Garantizar que los animales estén libres de sufrimiento y puedan expresar comportamientos naturales.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Estandarizar el tipo de alimento suministrado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Según la Ley 1774 de 2016 en Colombia, los animales son reconocidos como:',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Seres sintientes.', esCorrecta: true },
            { id: 'b', texto: 'Recursos económicos.', esCorrecta: false },
            { id: 'c', texto: 'Seres irracionales.', esCorrecta: false },
            { id: 'd', texto: 'Bienes muebles.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué entidad es responsable de la certificación en bienestar animal en aves de postura?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'INVIMA.', esCorrecta: false },
            { id: 'b', texto: 'SENA.', esCorrecta: false },
            { id: 'c', texto: 'FAO.', esCorrecta: false },
            { id: 'd', texto: 'ICA.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Cuál es el porcentaje asignado a las Medidas Basadas en el Animal (MBA) en la Forma ICA 3-1669 V.1?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: '30 %.', esCorrecta: false },
            { id: 'b', texto: '60 %.', esCorrecta: true },
            { id: 'c', texto: '40 %.', esCorrecta: false },
            { id: 'd', texto: '70 %.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'En las Medidas Basadas en los Recursos (MBR) se evalúa principalmente:',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La salud de las aves.', esCorrecta: false },
            { id: 'b', texto: 'Los registros productivos.', esCorrecta: false },
            {
              id: 'c',
              texto:
                'La infraestructura y las condiciones ambientales del galpón.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'La calidad del huevo.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué principio del bienestar animal asegura que las aves estén protegidas de lesiones o enfermedades?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estado fisiológico adecuado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Utilizar cajas limpias y resistentes.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Control del estrés.', esCorrecta: false },
            { id: 'd', texto: 'Expresión conductual.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es la diferencia entre sanidad y bioseguridad en avicultura?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sanidad se enfoca en la prevención y control de enfermedades, y bioseguridad en evitar su ingreso y propagación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sanidad es preventiva, bioseguridad es correctiva.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Bioseguridad se aplica solo en el transporte.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No existe diferencia entre ambas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué documento regula las granjas avícolas bioseguras en Colombia?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Resolución 067449 de 2020.', esCorrecta: false },
            { id: 'b', texto: 'Decreto 1500 de 2007.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Resolución ICA 136 de 2020.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Resolución 3651 de 2014.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué evalúa principalmente la certificación de comercialización de productos avícolas?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La inocuidad y trazabilidad de los huevos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La cantidad de producción semanal.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El tamaño y color de los huevos.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'La genética de las aves.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
