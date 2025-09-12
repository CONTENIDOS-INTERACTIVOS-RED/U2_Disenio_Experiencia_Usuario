<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Métodos de prueba de usabilidad'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
      
      // Bloque 1/20: img-bloque
      .bg-color-3.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center.text-white
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema3/1.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") Los métodos de prueba de usabilidad representan un conjunto de técnicas sistemáticas diseñadas para evaluar la efectividad, eficiencia y satisfacción de las interfaces digitales desde la perspectiva del usuario final. Este enfoque metodológico permite identificar problemas de usabilidad antes de que los productos lleguen a los usuarios finales, reduciendo significativamente los costos asociados con correcciones posteriores y mejorando la probabilidad de adopción exitosa del software. Se comprende que la implementación rigurosa de pruebas de usabilidad no solo mejora la calidad del producto final, sino que también proporciona insights valiosos sobre el comportamiento del usuario que pueden informar decisiones de diseño futuras y estrategias de desarrollo de producto.

      // Bloque 2/20: iconobloque-texto-imagen
      .row.mb-5
        .col-lg-8
          .bg-color-2.p-4.mb-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/2.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 La aplicación de métodos de prueba de usabilidad en el contexto de la ingeniería de software requiere una comprensión profunda de diferentes enfoques evaluativos, cada uno con fortalezas específicas y aplicaciones particulares, según los objetivos del proyecto. Se analiza que la combinación estratégica de métodos cuantitativos y cualitativos proporciona una perspectiva integral sobre la experiencia del usuario, permitiendo identificar tanto problemas específicos de usabilidad como oportunidades de mejora en la experiencia general. La selección apropiada de métodos de prueba debe considerar factores como el presupuesto disponible, la línea de tiempo del proyecto, el nivel de fidelidad del prototipo y el tipo de retroalimentación requerido para tomar decisiones informadas sobre el diseño.

          p(data-aos="fade-left") Los subtemas que se explorarán en esta sección incluyen una fundamentación teórica y práctica sobre las pruebas de usabilidad, estableciendo definiciones claras, tipologías y objetivos específicos para cada enfoque metodológico. Se examinará en detalle los métodos de evaluación heurística, proporcionando marcos estructurados para identificar problemas de usabilidad basados en principios establecidos. Se abordará la evaluación cognitiva del diseño, enfocándose en cómo los usuarios procesan información y toman decisiones dentro de interfaces digitales.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/3.png", data-aos="zoom-in")

      // Bloque 3/20: texto
      .row.justify-content-center
        .col-12
          p Adicionalmente, se desarrollará competencias para conducir pruebas de usabilidad con usuarios reales, incluyendo metodologías de reclutamiento, facilitación y análisis de resultados. Finalmente, se explorará el ecosistema de herramientas especializadas para pruebas de usabilidad, desarrollando habilidades prácticas para su implementación efectiva.

      // Bloque 4/20: titulo-segundo
      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Pruebas de usabilidad: definición, tipos y objetivos
      
      p.mb-5 La comprensión de las pruebas de usabilidad es esencial para garantizar que los productos digitales satisfagan de manera efectiva las expectativas y necesidades de los usuarios.

      // Bloque 5/20: img-anexo
      .bg-full-width.bg-color-13.mb-lg-5
        .px-4.p-md-5.text-white
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/4.png', alt='')

            .col-lg-8
              h2.mb-4(data-aos="flip-up") Pruebas de usabilidad: definición, tipos y objetivos
              p.mb-4(data-aos="fade-right") En el PDF Pruebas de usabilidad, se exploran los fundamentos conceptuales y metodológicos de este proceso evaluativo, diferenciando entre pruebas formativas, sumativas, moderadas y no moderadas. A través de ejemplos aplicados y criterios de selección de enfoques, se proporciona una guía práctica para diseñar estrategias de evaluación que permitan optimizar la experiencia del usuario desde etapas tempranas del desarrollo.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_4.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Anexo_4.pdf

      // Bloque 6/20: titulo-segundo
      #t_3_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.2] Métodos de evaluación heurística
      
      p.mb-5 Para conocer más sobre la temática, lo invitamos a ver el siguiente video.

      // Bloque 7/20: video-fondo
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/_AF9dCe1yW0?si=NVUXauyKDGmAh2fu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      // Bloque 8/20: titulo-segundo
      #t_3_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.3] Evaluación cognitiva del diseño
      
      p.mb-5 La evaluación cognitiva del diseño permite comprender cómo los usuarios interpretan, procesan y responden a los elementos de una interfaz digital, facilitando la identificación de obstáculos mentales que afectan la eficiencia y efectividad de la interacción.

      // Bloque 9/20: anexo-img
      .bg-full-width.bg-color-13.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8.text-white
              h2.mb-4(data-aos="flip-up") Evaluación cognitiva del diseño
              p.mb-4(data-aos="fade-right") En el PDF Evaluación cognitiva del diseño, se abordan los principios fundamentales de la psicología cognitiva aplicados al diseño de interfaces, explorando conceptos como carga cognitiva, memoria de trabajo y consistencia visual. A través de ejemplos prácticos y estrategias de análisis, se propone una metodología estructurada para optimizar la experiencia del usuario mediante la reducción de fricciones cognitivas y la mejora del flujo de interacción.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Anexo_5.pdf

            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/5.png', alt='')

      // Bloque 10/20: titulo-segundo
      #t_3_4.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.4] Pruebas de usabilidad con usuarios reales

      // Bloque 11/20: color-imagen-color 4:4:4
      .row.mb-5
        .col-lg-4
          .bg-color-4.tarjeta.p-4(data-aos="fade-left").h-100
            p.mb-0 Las pruebas de usabilidad con usuarios reales constituyen el estándar de oro para evaluar la efectividad de interfaces digitales, proporcionando insights auténticos sobre cómo los usuarios objetivo interactúan con el sistema en condiciones realistas. Este enfoque permite observar directamente comportamientos de uso, identificar problemas no anticipados por evaluadores expertos y recopilar retroalimentación cualitativa que refleja las necesidades reales y expectativas de la población objetivo.
        
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/6.png", data-aos="zoom-in")
        
        .col-lg-4
          .bg-color-12.p-4.tarjeta(data-aos="fade-left").h-100
            p.mb-0 Se comprende que la validez de estas pruebas depende fundamentalmente de la representatividad de los participantes reclutados, la autenticidad de las tareas evaluadas y el rigor en la metodología de recolección de datos y análisis. La implementación efectiva de pruebas con usuarios reales requiere planificación cuidadosa, habilidad al ejecutarla y análisis sistemático para generar insights accionables.

      // Bloque 12/20: img-bloque
      .bg-color-6.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema3/7.svg', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") La ejecución exitosa de pruebas con usuarios reales demanda experiencia en múltiples áreas incluyendo estrategias de reclutamiento, facilitación de sesiones, observación de comportamiento e interpretación de datos. Fernández Casado (2018), destaca la importancia de crear un ambiente cómodo que fomente el comportamiento natural mientras mantiene suficiente control para asegurar la validez de datos. Pintos Fernández (2023), enfatiza que la formulación de tareas debe reflejar escenarios del mundo real sin dirigir a los participantes hacia comportamientos o soluciones específicas. Se analiza que el equilibrio entre protocolos estructurados y exploración flexible permite capturar tanto métricas cuantitativas como insights cualitativos que informan una comprensión amplia de la experiencia de usuario. La ejecución requiere habilidades para fomentar pensamiento en voz alta, profundizar en motivaciones del usuario y mantener objetividad a lo largo del proceso.

      // Bloque 13/20: iconobloque-texto-imagen
      .row.mb-5
        .col-lg-8
          .bg-color-2.p-4.mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/8.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 En el contexto de desarrollo de software para salud, las pruebas con profesionales médicos reales presentan desafíos y oportunidades únicas. Considérese las pruebas de un sistema de registros médicos electrónicos donde participantes incluyen doctores, enfermeros y personal administrativo con niveles variables de experiencia técnica y diferentes requerimientos de flujo de trabajo. Tareas realistas pueden incluir entrada de datos de pacientes durante encuentros clínicos simulados, prescripción de medicamentos con verificaciones de seguridad, y generación de reportes bajo presión de tiempo similar a ambientes clínicos reales.

          p(data-aos="fade-left") Las pruebas revelan insights como interrupciones de flujo de trabajo causadas por navegación compleja, preocupaciones de seguridad relacionadas con interfaces confusas de medicamentos, y cuellos de botella de eficiencia en recuperación de datos de pacientes. Estos insights informan mejoras críticas como flujos de trabajo de entrada de datos simplificados, advertencias de seguridad mejoradas y arquitectura de información optimizada que impactan directamente la calidad de atención al paciente.

          p(data-aos="fade-left") #[strong Ejercicio]. Realizar un estudio amplio de usabilidad para una aplicación móvil de banca.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/9.png", data-aos="zoom-in")

      // Bloque 14/20: infografia
      .bg-full-width.bg-color-info.mb-0
        .p-4.p-md-5
          .row.justify-content-center.align-items-center.mb-0
            .col-lg-10
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema3/infografia1.svg', alt='', style="max-width: 1106px;").mx-auto

                .bg-color-white.box-shadow.p-3(x="5%" y="70%" numero="+")
                  h5 Paso 1
                  p Desarrollar criterios de reclutamiento que aseguren muestra representativa de demografía objetivo (edad, alfabetización tecnológica, hábitos bancarios).

                .bg-color-white.box-shadow.p-3(x="20%" y="75%" numero="+")
                  h5 Paso 2
                  p Crear escenarios de tareas realistas como pago de facturas, transferencia de fondos y monitoreo de cuentas que reflejen objetivos reales de usuario.

                .bg-color-white.box-shadow.p-3(x="40%" y="70%" numero="+")
                  h5 Paso 3
                  p Diseñar protocolo de sesión incluyendo cuestionario previo a prueba, instrucciones de tareas, guías de observación y preguntas de entrevista posterior a prueba.

                .bg-color-white.box-shadow.p-3(x="55%" y="75%" numero="+")
                  h5 Paso 4
                  p Conducir sesiones con al menos 8 participantes, manteniendo enfoque de facilitación consistente mientras se adapta a necesidades individuales de participantes.

                .bg-color-white.box-shadow.p-3(x="70%" y="70%" numero="+")
                  h5 Paso 5
                  p Analizar datos cuantitativos (tasas para completar tareas, tiempo en tarea, tasas de error) y observaciones cualitativas (puntos de dolor, áreas de confusión, retroalimentación positiva).

                .bg-color-white.box-shadow.p-3(x="85%" y="75%" numero="+")
                  h5 Paso 6
                  p Sintetizar hallazgos en recomendaciones priorizadas con evidencia de soporte y sugerencias de implementación.

      // Bloque 15/20: bg-full-color
      .bg-full-width.bg-color-3.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center.text-white
            .col-lg
              p.mb-0 El resultado debe demostrar dominio del proceso completo de pruebas de usuario desde planificación hasta recomendaciones accionables.

      // Bloque 15/20: titulo-segundo
      #t_3_5.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.5] Herramientas para pruebas de usabilidad (UserTesting, Hotjar)
      
      p.mb-5 Las herramientas especializadas para pruebas de usabilidad han revolucionado la accesibilidad y escalabilidad de evaluación de experiencia de usuario, proporcionando plataformas que facilitan todo desde reclutamiento de participantes hasta análisis automatizado de comportamiento de usuario.

      // Bloque 16/20: img-acordeon
      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/10.png", alt="").mb-4.mb-lg-0
        .col-lg-8
          AcordionA(tipo="b")
            .div(titulo="UserTesting")
              p Representa una plataforma líder que habilita pruebas remotas moderadas y no moderadas, proporcionando acceso a grupos diversos de participantes y capacidades sofisticadas de grabación que capturan tanto interacciones de pantalla como retroalimentación verbal. Se comprende que estas herramientas democratizan las pruebas de usabilidad al reducir barreras tradicionales como restricciones geográficas, desafíos de reclutamiento y complejidades de configuración técnica. La evolución de estas plataformas ha habilitado organizaciones de todos los tamaños a implementar evaluación regular de usabilidad como parte de sus procesos de desarrollo en lugar de tratarla como lujo ocasional.

            .div(titulo="Hotjar")
              p Ejemplifica una categoría diferente de herramientas de usabilidad enfocadas en analítica comportamental y mapas de calor, proporcionando insights sobre cómo usuarios realmente interactúan con sitios web y aplicaciones en vivo. Torres Burriel (2018), nota que estas herramientas analíticas complementan métodos tradicionales de prueba al proporcionar datos cuantitativos sobre patrones de comportamiento de usuario a través de bases grandes de usuarios. La combinación de herramientas como grabaciones de sesión, mapas de calor y encuestas de usuario crea comprensión profunda de la experiencia de usuario que se extiende más allá de escenarios controlados de prueba. La selección de herramientas apropiadas debe considerar factores como restricciones presupuestarias, requerimientos técnicos, características de audiencia objetivo e insights específicos necesarios para informar decisiones de diseño. Las capacidades de integración con flujos de trabajo de desarrollo existentes también representan consideración crítica para asegurar prácticas sostenibles de prueba.

      // Bloque 17/20: BLOQUE sin nombre (párrafo normal)
      .row.justify-content-center.mb-4
        .col-12
          p En desarrollo de software empresarial, particularmente para aplicaciones B2B complejas, la selección de herramientas impacta significativamente la viabilidad y efectividad de programas de evaluación de usabilidad. Considérese el desarrollo de software de gestión de la cadena de suministro donde la base de usuarios incluye operadores de almacén, coordinadores logísticos y usuarios de tablero ejecutivo a través de diferentes ubicaciones geográficas. Herramientas de prueba remota habilitan evaluación con stakeholders reales sin requerir viajes costosos o instalaciones de prueba centralizadas.

      // Bloque 18/20: bloque-img
      .bg-color-6.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p(data-aos="fade-up") UserTesting facilita sesiones moderadas con expertos en la materia que pueden proporcionar retroalimentación específica del dominio sobre eficiencia de flujo de trabajo y precisión. La implementación de Hotjar en despliegues piloto proporciona datos comportamentales sobre patrones de uso reales, revelando las discrepancias entre flujos de trabajo intencionados y el comportamiento real del usuario.
              p.mb-0.mt-3(data-aos="fade-up") Este enfoque multiherramienta proporciona una comprensión profunda que informa tanto mejoras inmediatas como estrategia de producto a largo plazo.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema3/11.svg', alt='')

      // Bloque 19/20: BLOQUE sin nombre (párrafo normal con ejercicio)
      .row.justify-content-center.mb-5
        .col-12
          p #[strong Ejercicio]. Crear una estrategia amplia de evaluación para una plataforma de búsqueda de empleo utilizando múltiples herramientas.

      // Bloque 20/20: slyderf-cards
      .bg-full-width.bg-gradiente-2
        .px-4.px-md-5.py-5
          .row.justify-content-center.mb-5.align-items-center
            .col-lg-4
              figure
                img(src='@/assets/curso/tema3/12.png', alt='')
            
            .col-lg-8

              SlyderF(columnas="col-12 col-lg-6")
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/13.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Paso 1
                  p.text-center Diseñar estudio remoto no moderado utilizando plataforma UserTesting, incluyendo escenarios realistas de búsqueda de empleo y criterios específicos de evaluación.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/14.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Paso 2
                  p.text-center Implementar seguimiento Hotjar en prototipo o plataforma existente para capturar analítica comportamental durante uso natural.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/15.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Paso 3
                  p.text-center Configurar mapas de calor para páginas claves como resultados de búsqueda, descripciones de trabajo y formularios de aplicación para entender patrones de atención.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/16.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Paso 4
                  p.text-center Establecer embudos de conversión para rastrear progresión de usuario a través del proceso de aplicación e identificar puntos de abandono.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/17.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Paso 5
                  p.text-center Combinar datos cuantitativos de Hotjar con insights cualitativos de UserTesting para crear comprensión holística de la experiencia de usuario.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema3/18.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Paso 6
                  p.text-center Crear recomendaciones que aborden tanto problemas específicos de usabilidad identificados a través de pruebas como patrones comportamentales más amplios revelados a través de analítica.

      // Bloque 21/20: bg-full-color
      .bg-full-width.bg-color-3
        .px-4.px-md-5.py-4
          .row.align-items-center.text-white
            .col-lg
              p.mb-0 El resultado debe demostrar comprensión sofisticada de cómo diferentes herramientas se complementan entre sí para proporcionar evaluación comprehensiva de usabilidad.

      // Bloque 22/20: material-complementario
      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/ereader/tecnologicadeloriente/106512?page=1" target="_blank" rel="noopener noreferrer") Fernández Casado, P. E. (2018). Usabilidad web: teoría y uso: ( ed.). RA-MA Editorial.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/ereader/tecnologicadeloriente/45919?page=9" target="_blank" rel="noopener noreferrer") Fischer, M. (2008). Website boosting: optimizar los buscadores, usabilidad y marketing web: ( ed.). Marcombo.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/275487" target="_blank" rel="noopener noreferrer") Labrador, E. & Márquez Moreno, J. (2023). UX para empresas: (1 ed.). FC Editorial.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/ereader/tecnologicadeloriente/249858?page=1" target="_blank" rel="noopener noreferrer") Pintos Fernández, J. (2023). Aplicación de técnicas de usabilidad y accesibilidad en el entorno cliente. IFCD0210: (1 ed.). IC Editorial.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/122938" target="_blank" rel="noopener noreferrer") Torres Burriel, D. (2018). Usabilidad: deja de sufrir: ( ed.). Difusora Larousse - Anaya Multimedia.

            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema3',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
