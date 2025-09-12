export default {
  global: {
    numeroUnidad: '2',
    tituloUnidad: 'Prototipado y pruebas de usabilidad',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Prototipado y pruebas de usabilidad',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Metodologías centradas en el usuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Introducción a los wireframes interactivos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Prototipos de baja y alta fidelidad: diferencias y aplicaciones',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Herramientas de creación de wireframes (Figma, Adobe XD, Sketch)',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Diseño de interacción en wireframes',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Iteración en la creación de prototipos interactivos',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Métodos de prueba de usabilidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Pruebas de usabilidad: definición, tipos y objetivos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Métodos de evaluación heurística',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Evaluación cognitiva del diseño',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Pruebas de usabilidad con usuarios reales',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo:
              'Herramientas para pruebas de usabilidad (UserTesting, Hotjar)',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Iteración en diseños basados en pruebas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Iteración en diseños basados en pruebas de usabilidad',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Aplicación de feedback y mejoras continuas',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Rediseño de prototipos tras pruebas de usabilidad',
            hash: 't_4_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.4',
            titulo:
              'Evaluación y análisis de resultados de pruebas para ajustes de diseño',
            hash: 't_4_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.5',
            titulo: 'Documentación de los cambios y mejoras en el diseño',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Fernández Casado, P. E. (2018). Usabilidad web: teoría y uso: ( ed.). RA-MA Editorial.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/106512?page=1',
    },
    {
      referencia:
        'Fischer, M. (2008). Website boosting: optimizar los buscadores, usabilidad y marketing web: ( ed.). Marcombo.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/45919?page=9',
    },
    {
      referencia:
        'Labrador, E. & Márquez Moreno, J. (2023). UX para empresas: (1 ed.). FC Editorial.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/275487',
    },
    {
      referencia:
        'Pintos Fernández, J. (2023). Aplicación de técnicas de usabilidad y accesibilidad en el entorno cliente. IFCD0210: (1 ed.). IC Editorial.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/249858?page=1',
    },
    {
      referencia:
        'Torres Burriel, D. (2018). Usabilidad: deja de sufrir: ( ed.). Difusora Larousse - Anaya Multimedia.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/122938',
    },
  ],
  glosario: [
    {
      termino: 'Adobe XD',
      significado:
        'Herramienta de diseño de experiencia de usuario desarrollada por Adobe que permite crear wireframes, prototipos interactivos y sistemas de diseño integrados con el ecosistema Creative Cloud.',
    },
    {
      termino: 'Affordance',
      significado:
        'Cualidad percibida de un objeto o elemento de interfaz que sugiere cómo puede ser utilizado, comunicando de manera intuitiva las acciones posibles que el usuario puede realizar.',
    },
    {
      termino: 'API',
      significado:
        'Sigla en inglés de Application Programming Interface, que se refiere al conjunto de protocolos y herramientas que permiten la comunicación entre diferentes componentes de software.',
    },
    {
      termino: 'Arquitectura de información',
      significado:
        'Estructura organizacional del contenido y funcionalidades de un sistema digital que determina cómo los usuarios navegan, buscan y comprenden la información presentada.',
    },
    {
      termino: 'B2B',
      significado:
        'Sigla en inglés de Business to Business, que describe modelos de negocio donde las transacciones comerciales ocurren entre empresas en lugar de dirigirse directamente al consumidor final.',
    },
    {
      termino: 'Chunking',
      significado:
        'Técnica cognitiva que consiste en agrupar información relacionada en unidades más pequeñas y manejables para facilitar su procesamiento y retención en la memoria de trabajo.',
    },
    {
      termino: 'Dashboard',
      significado:
        'Interfaz visual que presenta información clave y métricas relevantes de manera consolidada, permitiendo a los usuarios monitorear y gestionar diferentes aspectos de un sistema desde una sola pantalla.',
    },
    {
      termino: 'ERP',
      significado:
        'Sigla en inglés de Enterprise Resource Planning, que se refiere a sistemas de software integrados que gestionan y automatizan procesos empresariales principales como finanzas, recursos humanos y operaciones.',
    },
    {
      termino: 'Feedback',
      significado:
        'Información proporcionada como respuesta a una acción realizada, ya sea por parte del sistema hacia el usuario o por parte de usuarios hacia diseñadores durante procesos de evaluación.',
    },
    {
      termino: 'Figma',
      significado:
        'Plataforma de diseño colaborativo basada en navegador que permite crear interfaces, prototipos interactivos y sistemas de componentes reutilizables con capacidades de trabajo en tiempo real.',
    },
    {
      termino: 'Handoff',
      significado:
        'Proceso de transferencia de diseños finalizados desde equipos de diseño hacia equipos de desarrollo, incluyendo especificaciones técnicas y activos necesarios para la implementación.',
    },
    {
      termino: 'Heurística',
      significado:
        'Principio o regla general establecida que sirve como guía para evaluar la usabilidad de interfaces digitales, basada en buenas prácticas y conocimiento experto acumulado.',
    },
    {
      termino: 'Hotjar',
      significado:
        'Herramienta de análisis de comportamiento de usuario que proporciona mapas de calor, grabaciones de sesiones y encuestas para comprender cómo los usuarios interactúan con sitios web y aplicaciones.',
    },
    {
      termino: 'Insights',
      significado:
        'Comprensiones profundas y revelaciones significativas obtenidas a partir del análisis de datos de usuario, que informan decisiones estratégicas de diseño y desarrollo de producto.',
    },
    {
      termino: 'Iteración',
      significado:
        'Proceso de refinamiento progresivo a través de ciclos repetitivos de desarrollo, evaluación y mejora, donde cada ciclo incorpora aprendizajes del anterior para optimizar el resultado final.',
    },
    {
      termino: 'Microinteracciones',
      significado:
        'Pequeñas animaciones o respuestas visuales que proporcionan retroalimentación inmediata sobre acciones específicas del usuario, mejorando la percepción de responsividad del sistema.',
    },
    {
      termino: 'Plugin',
      significado:
        'Componente de software adicional que extiende las funcionalidades de una aplicación principal, permitiendo personalizar y ampliar las capacidades de herramientas de diseño.',
    },
    {
      termino: 'Prototipo',
      significado:
        'Representación temprana y funcional de un producto digital que permite experimentar con conceptos de diseño, validar ideas y comunicar visiones antes de la implementación final.',
    },
    {
      termino: 'Sketch',
      significado:
        'Herramienta de diseño vectorial especializada en creación de interfaces digitales, exclusiva para el ecosistema macOS, conocida por su rendimiento optimizado y amplio ecosistema de extensiones.',
    },
    {
      termino: 'Stakeholder',
      significado:
        'Cualquier persona, grupo u organización que tiene interés o se ve afectada por el desarrollo y resultado de un proyecto, incluyendo usuarios, clientes, inversores y equipos internos.',
    },
    {
      termino: 'Testing',
      significado:
        'Proceso sistemático de evaluación donde se verifica el funcionamiento, usabilidad y calidad de un producto digital mediante diferentes metodologías de prueba y validación.',
    },
    {
      termino: 'UserTesting',
      significado:
        'Plataforma especializada que facilita la realización de pruebas de usabilidad remotas, proporcionando acceso a participantes diversos y herramientas para recopilar retroalimentación cualitativa y cuantitativa.',
    },
    {
      termino: 'UX',
      significado:
        'Sigla en inglés de User Experience, que abarca la totalidad de experiencias que una persona tiene al interactuar con un producto digital, incluyendo aspectos funcionales, emocionales y contextuales.',
    },
    {
      termino: 'Wireframe',
      significado:
        'Representación esquemática y estructural de una interfaz digital que muestra la disposición de elementos, jerarquía de información y navegación básica sin incluir detalles visuales finales.',
    },
    {
      termino: 'Workflow',
      significado:
        'Secuencia de pasos y procesos que un usuario debe seguir para completar una tarea específica dentro de un sistema, o el conjunto de actividades que un equipo realiza para desarrollar un producto.',
    },
  ],
}
