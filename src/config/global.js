export default {
  global: {
    Name:
      'Gestión integral de la producción avícola: normatividad, bienestar animal y buenas prácticas.',
    Description:
      'El componente fortalece competencias para aplicar principios técnicos, sanitarios y normativos en la producción de huevos. El aprendiz estudiará bienestar animal, bioseguridad y sanidad avícola según las Resoluciones ICA 3651 de 2014 y 067449 de 2020, promoviendo Buenas Prácticas Avícolas, certificación, trazabilidad y sostenibilidad ética alineada con el Ministerio de Agricultura y la WOAH.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Bienestar animal en aves de postura: sistemas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Evaluación técnica del bienestar animal',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Principios del bienestar animal en aves de postura',
            hash: 't_1_2',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo:
          'Las cinco libertades y los cinco dominios del bienestar animal en aves de postura',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Aplicación práctica por libertad y sistema de producción',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Los cinco dominios del bienestar animal',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Diferencia entre los principios del bienestar animal y las cinco libertades en aves de postura',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'La sintiencia animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Evidencia científica en aves de postura',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Implicaciones éticas y productivas',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Marco legal de la sintiencia en Colombia',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Sintiencia aplicada a los sistemas de producción',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo:
          'Normativa colombiana sobre bienestar animal en aves de postura',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Principales normas nacionales aplicables',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Indicadores técnicos ICA para aves de postura',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Aplicación normativa según el sistema de producción',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Armonización internacional',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Sanidad avícola en aves de postura',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Elementos fundamentales de la sanidad en aves de postura',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Base normativa en Colombia',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Importancia de la sanidad en la producción de huevo',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo: 'Plan sanitario integral para aves de postura en Colombia',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Certificación de granja avícola biosegura de postura',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Bioseguridad en granjas avícolas de postura',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Objetivos fundamentales de la bioseguridad',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Niveles de aplicación en la bioseguridad avícola',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Relación con la certificación ICA',
            hash: 't_6_4',
          },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo:
          'Certificación de comercialización de productos avícolas en aves de postura',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '7.1',
            titulo: 'Requisitos para la certificación',
            hash: 't_7_1',
          },
          {
            numero: '7.2',
            titulo: 'Procedimiento para la certificación',
            hash: 't_7_2',
          },
          {
            numero: '7.3',
            titulo: 'Inocuidad alimentaria en la comercialización de huevos',
            hash: 't_7_3',
          },
          {
            numero: '7.4',
            titulo: 'Protocolos técnicos exigidos',
            hash: 't_7_4',
          },
          {
            numero: '7.5',
            titulo: 'Normatividad aplicable en Colombia',
            hash: 't_7_5',
          },
          {
            numero: '7.6',
            titulo: 'Beneficios de la certificación',
            hash: 't_7_6',
          },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Auditoría de granjas avícolas de postura',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '8.1',
            titulo: 'Tipos de auditoría',
            hash: 't_8_1',
          },
          {
            numero: '8.2',
            titulo: 'Propósito de la auditoría avícola',
            hash: 't_8_2',
          },
          {
            numero: '8.3',
            titulo: 'Procedimiento general de auditoría',
            hash: 't_8_3',
          },
          {
            numero: '8.4',
            titulo: 'Resultados y clasificación',
            hash: 't_8_4',
          },
          {
            numero: '8.5',
            titulo: '8.Indicadores más evaluados durante la auditoría',
            hash: 't_8_5',
          },
          {
            numero: '8.6',
            titulo: 'Resultados esperados de la auditoría',
            hash: 't_8_6',
          },
          {
            numero: '8.7',
            titulo: 'Marco normativo de referencia',
            hash: 't_8_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Bienestar animal en aves de postura: sistemas',
      referencia:
        'Organización Mundial de Sanidad Animal (WOAH). (2024). <em>Código sanitario para los animales terrestres: Capítulo sobre bienestar animal</em>. Documento técnico / Manual.',
      tipo: 'Documento técnico / Manual',
      link:
        'https://www.woah.org/fileadmin/Home/esp/Health_standards/tahc/current/es_titre_1.7.htm',
    },
    {
      tema: 'Bienestar animal en aves de postura: sistemas',
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2014). <em>Resolución 3651 de 2014. Certificación de granjas avícolas bioseguras</em>. Norma oficial.',
      tipo: 'Norma oficial',
      link:
        'https://www.ica.gov.co/getattachment/b8cb4efd-a1b4-409e-a11d-c81b91f59025/2014R3651.aspx',
    },
    {
      tema: 'Normativa colombiana sobre bienestar animal en aves de postura',
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2020). <em>Resolución 067449 de 2020</em>. Normatividad nacional.',
      tipo: 'Normatividad nacional',
      link:
        'https://www.ica.gov.co/getattachment/6b7f82ab-bccd-4bf5-a5c6-5bfff35b772b/2020R67449.aspx',
    },
    {
      tema: 'Normativa colombiana sobre bienestar animal en aves de postura',
      referencia:
        'Congreso de Colombia. (2016). <em>Ley 1774 de 2016. Por la cual se modifica el Código Penal y se dictan normas para la protección de los animales</em>. Legislación colombiana.',
      tipo: 'Legislación colombiana',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=68135',
    },
    {
      tema: 'Normativa colombiana sobre bienestar animal en aves de postura',
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). (2023). <em>Guía técnica de sanidad y vacunación en aves de corral</em>. Manual técnico.',
      tipo: 'Manual técnico',
      link:
        'https://fenavi.org/wp-content/uploads/2019/02/SANIDAD-EN-LA-INDUSTRIA-AV%C3%8DCOLA.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Auditoría avícola',
      significado:
        'Evaluación sistemática del cumplimiento de normas y procedimientos en una granja para verificar su conformidad técnica.',
    },
    {
      termino: 'Bienestar animal',
      significado:
        'Estado físico y mental de un animal en relación con las condiciones en las que vive y muere; implica garantizar confort, salud y comportamiento natural.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Conjunto de medidas preventivas destinadas a evitar la entrada y propagación de agentes infecciosos en una granja avícola.',
    },
    {
      termino: 'Buenas Prácticas Avícolas (BPA)',
      significado:
        'Procedimientos técnicos y administrativos que aseguran la producción inocua, ética y sostenible de productos avícolas.',
    },
    {
      termino: 'Certificación ICA',
      significado:
        'Proceso oficial de evaluación que otorga el Instituto Colombiano Agropecuario a granjas que cumplen requisitos sanitarios, de bioseguridad y bienestar animal.',
    },
    {
      termino: 'Cinco libertades',
      significado:
        'Principios básicos del bienestar animal que aseguran la ausencia de hambre, incomodidad, dolor, miedo y restricción del comportamiento natural.',
    },
    {
      termino: 'Comportamiento natural',
      significado:
        'Conjunto de acciones innatas de las aves como anidar, posarse, escarbar y acicalarse, esenciales para su bienestar.',
    },
    {
      termino: 'Densidad de alojamiento',
      significado:
        'Número de aves por metro cuadrado; parámetro que influye directamente en el confort y bienestar del lote.',
    },
    {
      termino: 'Inocuidad alimentaria',
      significado:
        'Garantía de que los alimentos no causarán daño al consumidor cuando se preparen o consuman según su uso previsto.',
    },
    {
      termino: 'Plan sanitario',
      significado:
        'Estrategia organizada para prevenir y controlar enfermedades, incluyendo vacunación, vermifugación y limpieza.',
    },
    {
      termino: 'Sanidad avícola',
      significado:
        'Conjunto de acciones técnicas para mantener la salud de las aves mediante prevención, diagnóstico y control de enfermedades.',
    },
    {
      termino: 'Sintiencia animal',
      significado:
        'Capacidad de los animales de sentir placer, dolor, miedo o bienestar, reconocida legalmente por la Ley 1774 de 2016 en Colombia.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad de seguir el recorrido de un producto desde su origen hasta el consumidor final, garantizando su seguridad.',
    },
    {
      termino: 'Vacunación aviar',
      significado:
        'Procedimiento de inmunización de las aves mediante aplicación de biológicos que previenen enfermedades infecciosas.',
    },
    {
      termino: 'Vermifugación',
      significado:
        'Aplicación de antiparasitarios internos para eliminar o prevenir infestaciones por helmintos en aves.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (2016). <em>Ley 1774 de 2016. Por medio de la cual se modifica el Código Civil y el Código Penal, y se dictan otras disposiciones en materia de protección y bienestar animal.</em> Diario Oficial No. 49.720.',
      link: '',
    },
    {
      referencia:
        'Decreto 1500 de 2007. (2007). <em>Por el cual se establece el Sistema Oficial de Inspección, Vigilancia y Control de la Carne, Productos Cárnicos Comestibles y Derivados Cárnicos Destinados para el Consumo Humano.</em> Ministerio de la Protección Social, Colombia.',
      link: '',
    },
    {
      referencia:
        'Decreto 2113 de 2017. (2017). <em>Por el cual se adoptan los principios y lineamientos de bienestar animal en el país.</em> Ministerio de Agricultura y Desarrollo Rural, Colombia.',
      link: '',
    },
    {
      referencia:
        'Farm Animal Welfare Council (FAWC). (1965). <em>Report on the Welfare of Animals Kept under Intensive Livestock Husbandry Systems.</em> London: Her Majesty’s Stationery Office.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2014). <em>Resolución 3651 de 2014. Por la cual se establecen los requisitos para la certificación de granjas avícolas bioseguras.</em> ICA.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2020a). <em>Resolución 067449 de 2020. Por la cual se reglamentan las Buenas Prácticas Avícolas y su auditoría.</em> ICA.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2020b). <em>Resolución 136 de 2020. Condiciones de bienestar durante el transporte de animales.</em> ICA.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2023). <em>Manual de Bioseguridad Avícola.</em> ICA.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario (ICA). (2024). <em>Resolución 16409 de 2024. Por la cual se establecen los criterios e indicadores para la certificación voluntaria de bienestar animal.</em> ICA.',
      link: '',
    },
    {
      referencia:
        'Instituto Nacional de Vigilancia de Medicamentos y Alimentos (INVIMA). (2007). <em>Decreto 1500 de 2007. Reglamento técnico para la inocuidad de productos de origen animal.</em> INVIMA.',
      link: '',
    },
    {
      referencia:
        'Mellor, D. J., & Beausoleil, N. J. (2015). <em>The Five Domains Model: Welfare assessment and application to poultry systems.</em> Animal Welfare Journal, 29(3), 227–239.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural (MADR). (2020). <em>Manual de Bienestar Animal.</em> MADR.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (1993/2022). <em>Resolución 8430 de 1993. Normas científicas, técnicas y administrativas para la investigación en salud con animales.</em> Actualización 2022.',
      link: '',
    },
    {
      referencia:
        'Organización de las Naciones Unidas para la Alimentación y la Agricultura (FAO). (2023). <em>Directrices para la sostenibilidad y el bienestar animal en la producción avícola.</em> Roma: FAO.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal (WOAH). (2019). <em>Código Sanitario para los Animales Terrestres.</em> París: WOAH.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal (WOAH). (2023). <em>Guías de Bienestar Animal.</em> París: WOAH.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal (WOAH). (2024). <em>Normas sobre el bienestar y la sintiencia animal.</em> París: WOAH.',
      link: '',
    },
    {
      referencia:
        'Universidad Nacional de Colombia. (2023). <em>Estudios etológicos sobre la sintiencia y comportamiento de aves de postura.</em> Facultad de Medicina Veterinaria y Zootecnia.',
      link: '',
    },
    {
      referencia:
        'World Poultry Science Association – WPSA. (2022). <em>Biosecurity and Animal Welfare in Layer Farms.</em> Poultry Science Review, 101(8), 1235–1247.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
