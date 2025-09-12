<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'4. Iteración en diseños basados en pruebas'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
      
      // Bloque 1/30: imagen-color 4:8
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/1.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-2.p-4.py-lg-5(data-aos="fade-left")
            p.mb-0 La iteración en diseños basados en pruebas representa un enfoque metodológico que integra ciclos de evaluación sistemática dentro del proceso de desarrollo de experiencia de usuario, asegurando que cada refinamiento del diseño se fundamenta en evidencia empírica en lugar de suposiciones o preferencias subjetivas. Este enfoque establece un marco para la mejora continua donde cada ciclo de iteración incluye recolección de datos, análisis, implementación de mejoras y validación subsecuente. Se comprende que este proceso transforma flujos de trabajo tradicionales de diseño desde progresiones lineales hacia sistemas adaptativos que responden dinámicamente a retroalimentación del usuario y métricas de rendimiento. La integración efectiva de iteración basada en pruebas requiere compromiso organizacional con toma de decisiones basada en datos y disposición a invertir en actividades continuas de evaluación.

      // Bloque 2/30: bloque-img
      .bg-color-6.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") La implementación exitosa de ciclos de iteración basados en evidencia de pruebas, requiere comprensión sofisticada de cómo sintetizar diversos tipos de retroalimentación, priorizar mejoras basadas en impacto y viabilidad, y mantener coherencia de diseño a través de múltiples ciclos de revisión. Se analiza que cada iteración debe abordar hipótesis específicas sobre mejoras de experiencia de usuario, con criterios claros de éxito que habiliten evaluación objetiva de cambios implementados. El proceso demanda equilibrio cuidadoso entre responder a problemas inmediatos de usabilidad y mantener visión a largo plazo para desarrollo de producto. La iteración basada en pruebas también requiere prácticas robustas de documentación que capturen la justificación detrás de decisiones de diseño, habilitando a los equipos para aprender de ciclos previos y evitar repetir problemas resueltos.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema4/2.svg', alt='')

      // Bloque 3/30: imagen-color
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/3.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-4.p-4.py-lg-5(data-aos="fade-left")
            p.mb-0 Los subtemas abordados en esta sección incluyen metodologías para implementar iteración sistemática basada en resultados de pruebas de usabilidad, estableciendo marcos que aseguren mejora continua sin comprometer líneas de tiempo del proyecto o restricciones presupuestarias. Se explorarán estrategias para aplicar la retroalimentación efectivamente, incluyendo técnicas para priorizar recomendaciones competidoras e integrar perspectivas diversas de stakeholders. La sección abordará enfoques para rediseñar prototipos siguiendo fases de prueba, asegurando que modificaciones aborden causas raíz en lugar de síntomas superficiales de problemas de usabilidad. Adicionalmente, se desarrollarán competencias en evaluación y análisis de resultados de prueba para informar ajustes de diseño, incluyendo técnicas de análisis estadístico y métodos de síntesis cualitativa. Finalmente, se examinarán prácticas de documentación que apoyen procesos de diseño iterativo, habilitando transferencia de conocimiento y aprendizaje institucional.

      // Bloque 4/30: titulo-segundo
      #t_4_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 4.1] Iteración en diseños basados en pruebas de usabilidad
      
      p.mb-5 La iteración en diseños basados en pruebas de usabilidad es un componente esencial en la creación de experiencias digitales centradas en el usuario, ya que permite refinar de manera continua los productos a partir de evidencia empírica.

      // Bloque 5/30: anexo-img
      .bg-full-width.bg-color-13.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8.text-white
              h2.mb-4(data-aos="flip-up") Iteración en diseños basados en pruebas de usabilidad
              p.mb-4(data-aos="fade-right") En el PDF Iteración en diseños basados en pruebas de usabilidad, se presentan enfoques metodológicos para estructurar ciclos iterativos efectivos, incorporando criterios de evaluación, análisis de métricas y toma de decisiones fundamentadas en datos reales. A través de casos prácticos, se ilustra cómo este enfoque garantiza soluciones más precisas, eficientes y alineadas con las expectativas y comportamientos de los usuarios.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_5.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Anexo_5.pdf

            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/4.png', alt='')

      // Bloque 6/30: titulo-segundo
      #t_4_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 4.2] Aplicación de feedback y mejoras continuas
      
      p.mb-5 La aplicación efectiva de la retroalimentación dentro de marcos de mejora continua requiere capacidades sofisticadas de síntesis que pueden integrar perspectivas diversas de stakeholders, priorizar recomendaciones competidoras, y traducir insights en modificaciones ejecutables de diseño.

      // Bloque 7/30: slider-a
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema4/5.png")
              .col-lg-7.order-lg-1
                h5 Aplicación de feedback
                p Este proceso se extiende más allá de simple incorporación de sugerencias de usuario para incluir evaluación estratégica de cómo retroalimentación se alinea con objetivos de producto, restricciones técnicas, y metas de experiencia de usuario a largo plazo. Se comprende que la aplicación efectiva de la retroalimentación requiere distinguir entre preferencias superficiales y problemas fundamentales de usabilidad, asegurando que modificaciones de diseño aborden causas raíz en lugar de síntomas de problemas de experiencia de usuario. La aplicación sistemática de la retroalimentación también demanda consideración de consecuencias no intencionadas que pueden surgir de cambios de diseño, requiriendo evaluación holística de cómo modificaciones impactan la coherencia general del sistema.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-lg-2
                figure
                  img(src="@/assets/curso/tema4/6.png")
              .col-lg-7.order-lg-1
                h5 Mejoras continuas
                p La integración de prácticas de mejora continua dentro de flujos de trabajo de desarrollo requiere compromiso organizacional con procesos de desarrollo iterativo y asignación de recursos suficientes para actividades continuas de evaluación y refinamiento. Torres Burriel (2018), enfatiza que efectividad de mejora continua depende de establecer bucles de retroalimentación que operen a intervalos apropiados a lo largo del ciclo de vida de desarrollo, asegurando que insights puedan ser incorporados antes de que las decisiones de diseño se vuelvan limitantemente costosas de modificar. Pintos Fernández (2023), propone que la mejora continua exitosa requiere sistemas de documentación que capturen no solo qué cambios fueron realizados, sino también por qué las modificaciones fueron implementadas y qué resultados fueron logrados. Esta documentación sistemática habilita el aprendizaje organizacional y ayuda a evitar que se repitan problemas previamente resueltos en proyectos futuros.

      // Bloque 8/30: BLOQUE sin nombre (párrafo normal)
      .row.justify-content-center
        .col-12
          p En desarrollo de software de servicio al cliente, la mejora continua basada en retroalimentación del usuario revela patrones evolutivos a medida que representantes de servicio al cliente adaptan flujos de trabajo e identifican oportunidades de eficiencia:

      // Bloque 9/30: slyderf-cards
      .bg-full-width.bg-gradiente-2
        .px-4.px-md-5.py-5
          .row.justify-content-center.mb-0
            .col-lg-8

              SlyderF(columnas="col-12 col-lg-6")
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema4/7.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  //h4.text-center.mb-4 Etapa 1
                  p.text-center La retroalimentación inicial indica que los representantes luchan con localizar el historial de cliente a través de múltiples pestañas del sistema.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema4/8.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  //h4.text-center.mb-4 Etapa 2
                  p.text-center El proceso de mejora continua implementa un tablero unificado de cliente que consolida la información relevante
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema4/9.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  //h4.text-center.mb-4 Etapa 3
                  p.text-center La retroalimentación subsecuente revela que mientras el acceso a la información mejora, los representantes ahora luchan con la sobrecarga de la información durante interacciones complejas del cliente.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema4/10.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  //h4.text-center.mb-4 Etapa 4
                  p.text-center El siguiente ciclo de mejora implementa técnicas de revelación progresiva que presentan información jerárquicamente basándose en contexto de interacción.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema4/11.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  //h4.text-center.mb-4 Etapa 5
                  p.text-center La recolección continua de retroalimentación revela los patrones estacionales donde ciertas características se vuelven más críticas durante períodos pico de servicio al cliente, informando los ajustes de prioridad para ciclos futuros de desarrollo.

            .col-lg-4
              figure
                img(src='@/assets/curso/tema4/12.png', alt='')

      // Bloque 10/30: bg-full-color
      .bg-full-width.bg-color-3.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center.text-white
            .col-lg
              p.mb-0 Este enfoque continuo asegura que la evolución del sistema responde a patrones reales de uso en lugar de requerimientos estáticos.

      // Bloque 11/30: BLOQUE sin nombre (párrafo normal)
      .row.justify-content-center.mb-4
        .col-12
          p #[strong Ejercicio]. Establecer un sistema amplio de integración de retroalimentación para una aplicación de gestión de proyectos.

      // Bloque 12/30: img-acordeon
      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/13.png", alt="").mb-4.mb-lg-0
        .col-lg-8
          AcordionA(tipo="b")
            .div(titulo="Paso 1")
              p Diseñar sistema de recolección de retroalimentación multi fuente incluyendo entrevistas de usuario, analítica de uso, análisis de tickets de soporte, y encuestas de stakeholders.

            .div(titulo="Paso 2")
              p Crear marco de priorización que equilibre impacto de usuario, complejidad de implementación, y alineación estratégica para evaluar elementos de retroalimentación.

            .div(titulo="Paso 3")
              p Establecer ciclos regulares de revisión (semanal, mensual, trimestral) con objetivos específicos y autoridades de toma de decisiones para cada intervalo.

      // Bloque 13/30: acordeon-IMG
      .row.align-items-start.mb-5
        .col-lg-8
          AcordionA(tipo="b")
            .div(titulo="Paso 4")
              p Implementar sistema de seguimiento de retroalimentación que monitoree progreso desde identificación inicial a través de implementación y validación.
            
            .div(titulo="Paso 5")
              p Diseñar métricas de éxito que habiliten evaluación de si las mejoras dirigidas por retroalimentación logran los resultados intencionados.

            .div(titulo="Paso 6")
              p Crear protocolos de comunicación para informar a los stakeholders sobre cambios dirigidos por retroalimentación y su justificación.
        
        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/14.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0

      // Bloque 14/30: bg-full-icono-texto
      .bg-full-width.bg-color-4.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema4/15.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El resultado debe demostrar comprensión sofisticada de cómo transformar la retroalimentación del usuario en procesos sistemáticos de mejora que impulsen las mejoras medibles en experiencia de usuario.

      // Bloque 15/30: titulo-segundo
      #t_4_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 4.3] Rediseño de prototipos tras pruebas de usabilidad
      
      p.mb-5 El rediseño de prototipos tras pruebas de usabilidad es una etapa crítica en el ciclo de desarrollo centrado en el usuario, ya que permite transformar evidencia empírica en mejoras funcionales y visuales del diseño.

      // Bloque 16/30: img-anexo
      .bg-full-width.bg-color-13.mb-lg-5
        .px-4.p-md-5.text-white
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/16.png', alt='')

            .col-lg-8
              h2.mb-4(data-aos="flip-up") Rediseño de prototipos tras pruebas de usabilidad
              p.mb-4(data-aos="fade-right") En el PDF Rediseño de prototipos tras pruebas de usabilidad, se presenta una metodología detallada para analizar hallazgos, categorizar problemas, proponer soluciones fundamentadas y validar su efectividad mediante nuevas pruebas. Este enfoque garantiza que las modificaciones realizadas respondan de forma coherente a las necesidades reales de los usuarios, optimizando la experiencia general sin comprometer la integridad del sistema.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_6.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Anexo_6.pdf

      // Bloque 17/30: titulo-segundo
      #t_4_4.titulo-segundo(data-aos="flip-up")
        h2 #[span 4.4] Evaluación y análisis de resultados de pruebas para ajustes de diseño
      
      p.mb-5 La evaluación y análisis riguroso de los resultados de pruebas requiere enfoques sistemáticos que puedan extraer insights ejecutables de los conjuntos de datos complejos incluyendo métricas cuantitativas de rendimiento, retroalimentación cualitativa del usuario, y observaciones comportamentales.

      // Bloque 18/30: iconobloque-color-imagen 8:4
      .row.mb-5
        .col-lg-8
          .bg-color-1.px-4.mb-0(data-aos="fade-left")
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema4/17.svg").mx-auto
              .col-lg
                p.mb-0 Este proceso analítico debe distinguir entre significancia estadística y significancia práctica, asegurando que decisiones de diseño se basen en diferencias significativas que impacten la experiencia real de usuario en lugar de variaciones menores que pueden no afectar los patrones reales de uso.

          .bg-color-14.p-4(data-aos="fade-left")
            p.mb-0 El análisis efectivo de resultados requiere experiencia tanto en métodos estadísticos como en principios de experiencia de usuario, habilitando interpretación que considere contexto, diversidad de usuario, y los objetivos más amplios de producto más allá de métricas inmediatas de prueba. El proceso de análisis también debe considerar variables confusas potenciales que podrían influenciar resultados de prueba, asegurando que las conclusiones reflejen con precisión factores de usabilidad en lugar de influencias externas.

        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/18.png", data-aos="zoom-in")

      // Bloque 19/30: img-acordeon
      .row.align-items-start.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/19.png", alt="").mb-4.mb-lg-0
        .col-lg-8
          AcordionA(tipo="b")
            .div(titulo="Traducción de los resultados de prueba")
              p La traducción de los resultados de prueba en ajustes específicos de diseño, requiere marcos que puedan priorizar problemas identificados, estimar esfuerzo de implementación, y predecir el impacto de cambios propuestos en experiencia general de usuario. Labrador y Márquez Moreno (2023), enfatizan que los análisis de resultados debe incluir evaluación de diferencias de segmento de usuario, reconociendo que diferentes tipos de usuario pueden experimentar desafíos diferentes y requerir soluciones diferentes. Torres Burriel (2018). propone que el análisis efectivo incluye identificación de patrones a través de múltiples usuarios en lugar de enfocarse en quejas individuales o preferencias que pueden no representar necesidades más amplias de usuario. Se analiza que el proceso de análisis debe producir recomendaciones claras con evidencia de apoyo, guía de implementación, y criterios de éxito para evaluar si los cambios implementados logran mejoras intencionadas.

            .div(titulo="Análisis de los resultados de prueba")
              p En el análisis de los resultados de prueba para un software de gestión de salud, la evaluación profunda revela patrones complejos que requieren interpretación matizada. Los datos cuantitativos muestran que profesionales médicos experimentados completan tareas de programación de pacientes 60% más rápido que usuarios nuevos, pero ambos grupos exhiben patrones de error similares al manejar la verificación de seguridad. El análisis cualitativo revela que usuarios experimentados desarrollan soluciones alternativas para limitaciones de interfaz que enmascaran problemas subyacentes de usabilidad, mientras usuarios nuevos luchan más abiertamente con flujos de trabajo confusos. El análisis estadístico indica correlaciones significativas entre tiempo para completar tareas y los elementos específicos de interfaz, pero el análisis contextual muestra que algunos retrasos reflejan la toma de decisiones clínicas necesarias en lugar de problemas de usabilidad. El análisis final produce recomendaciones dirigidas que abordan problemas genuinos de usabilidad sin interferir con requerimientos de flujo de trabajo clínico, incluyendo proceso simplificado de verificación de seguro y experiencia mejorada de incorporación para usuarios nuevos.

      // Bloque 20/30: BLOQUE sin nombre (párrafo normal)
      .row.justify-content-center
        .col-12
          p #[strong Ejercicio]. Realizar el análisis amplio de datos de pruebas de usabilidad para una plataforma de reservas de viaje.

      // Bloque 21/30: slyderf-cards
      .bg-full-width.bg-gradiente-2
        .px-4.px-md-5.py-5
          .row.justify-content-center.mb-0.align-items-center
            .col-lg-8

              SlyderF(columnas="col-12 col-lg-6")
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema4/20.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Paso 1
                  p.text-center Organizar datos recopilados incluyendo métricas para completar de tareas, registros de errores, calificaciones de satisfacción de usuario, y notas observacionales de sesiones de prueba.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema4/21.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Paso 2
                  p.text-center Realizar análisis estadísticos para identificar diferencias significativas en métricas de rendimiento, usando pruebas apropiadas para tamaño de muestra y distribución de datos.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema4/22.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Paso 3
                  p.text-center Conducir análisis cualitativo para identificar patrones en retroalimentación de usuario, categorizando comentarios por tema y severidad.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema4/23.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Paso 4
                  p.text-center Cruzar hallazgos cuantitativos y cualitativos para identificar evidencia convergente sobre problemas específicos de usabilidad.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema4/24.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Paso 5
                  p.text-center Priorizar problemas identificados usando marco que considere impacto de usuario, objetivos de negocio, y viabilidad de implementación.
                .bg-color-white.p-4.h-100.shadow-app
                  img(src='@/assets/curso/tema4/25.svg' alt='AvatarTop' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Paso 6
                  p.text-center Desarrollar recomendaciones específicas de ajuste de diseño con evidencia de apoyo, guía de implementación, y criterios medibles de éxito.

            .col-lg-4
              figure
                img(src='@/assets/curso/tema4/26.png', alt='')

      // Bloque 22/30: bg-full-color
      .bg-full-width.bg-color-3.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center.text-white
            .col-lg
              p.mb-0 El resultado debe demostrar capacidades analíticas sofisticadas que transformen datos complejos de prueba en estrategias accionables de mejora de diseño.

      // Bloque 23/30: titulo-segundo
      #t_4_5.titulo-segundo(data-aos="flip-up")
        h2 #[span 4.5] Documentación de los cambios y mejoras en el diseño
      
      p.mb-5 La documentación de los cambios y mejoras en el diseño representa una práctica esencial en procesos iterativos centrados en el usuario, ya que permite registrar, justificar y comunicar de manera estructurada las decisiones adoptadas a lo largo del desarrollo de un producto digital.

      // Bloque 24/30: img-anexo
      .bg-full-width.bg-color-13.mb-lg-5
        .px-4.p-md-5.text-white
          .row.justify-content-center.align-items-center
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema4/27.png', alt='')

            .col-lg-8
              h2.mb-4(data-aos="flip-up") Documentación de los cambios y mejoras en el diseño
              p.mb-4(data-aos="fade-right") En el PDF Documentación de los cambios y mejoras en el diseño, se describe un enfoque metodológico para registrar de forma clara y accesible las transformaciones del diseño, incluyendo sus motivaciones, alternativas consideradas y resultados obtenidos. Esta práctica fortalece la trazabilidad, promueve el aprendizaje organizacional y facilita la toma de decisiones fundamentadas en futuras iteraciones o proyectos relacionados.

              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_7.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Anexo_7.pdf

      // Bloque 25/30: bloque-img
      .bg-color-4.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") La exploración profunda de prototipado y pruebas de usabilidad dentro de esta unidad revela la importancia fundamental de enfoques sistemáticos, basados en evidencia para desarrollar experiencias de usuario que verdaderamente sirvan necesidades humanas mientras logran objetivos de negocio. Las metodologías examinadas demuestran que el diseño efectivo de experiencia de usuario requiere integración de habilidades técnicas, comprensión psicológica, y pensamiento estratégico que se extiende mucho más allá de consideraciones estéticas. Se comprende que estas competencias representan capacidades esenciales para ingenieros de software trabajando en ambientes tecnológicos contemporáneos donde la satisfacción del usuario y las tasas de adopción impactan directamente éxito de producto y competitividad organizacional.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema4/28.svg', alt='')

      // Bloque 26/30: BLOQUE sin nombre (párrafo normal)
      .row.justify-content-center.mb-5
        .col-12
          p La aplicación práctica de estos conceptos en contextos profesionales demanda comprensión sofisticada de cuándo y cómo aplicar diferentes metodologías, reconociendo que cada enfoque sirve propósitos específicos dentro de ecosistemas más amplios de desarrollo.

      // Bloque 27/30: imagen-color-color
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema4/29.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-15.p-4.py-lg-4(data-aos="fade-left").mb-0
            p.mb-0 Las herramientas y técnicas exploradas proporcionan marcos para tomar decisiones informadas sobre inversiones de experiencia de usuario, habilitando equipos a asignar recursos efectivamente mientras mantienen enfoque en resultados que importan más tanto para usuarios como organizaciones.

          .bg-color-6.p-4.py-lg-5(data-aos="fade-left")
            p.mb-0 La naturaleza iterativa de estos procesos refleja la realidad dinámica de desarrollo tecnológico donde requerimientos evolucionan, necesidades de usuario cambian, y paisajes competitivos se desplazan rápidamente.

      // Bloque 28/30: bloque-img
      .bg-color-3.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg.text-white
            .p-4
              p.mb-0(data-aos="fade-up") La integración de estas competencias de experiencia de usuario dentro de práctica de ingeniería de software representa cambio paradigmático hacia desarrollo tecnológico centrado en humanos que reconoce usuarios como socios en proceso de diseño en lugar de receptores pasivos de soluciones técnicas. Este enfoque demanda aprendizaje continuo, adaptabilidad, y compromiso con la toma de decisiones basada en evidencia que desafía a los ingenieros a expandir su perspectiva más allá de la optimización técnica hacia una consideración holística de factores humanos que determinan el éxito tecnológico. Las habilidades desarrolladas a través del dominio de estas metodologías habilitan ingenieros de software para contribuir significativamente a crear soluciones tecnológicas que mejoren la capacidad humana y la calidad de vida a través de prácticas de diseño reflexivas, centradas en el usuario.
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema4/30.png', alt='')

      // Bloque 29/30: actividad
      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad
            <Actividad :cuestionario="cuestionario"/>

      // Bloque 30/30: material-complementario
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
import Actividad from '@/components/actividad/Actividad.vue'
import cuestionarios from '@/config/cuestionarios'

export default {
  name: 'Tema4',

  // ===================================
  // COMPONENT REGISTRATION
  // ===================================
  components: {
    Actividad,
  },

  // ===================================
  // DATA CON CUESTIONARIO
  // ===================================
  data() {
    return {
      // IMPORTANTE: Cambiar 'tema4' por el tema correspondiente
      cuestionario: cuestionarios.tema4,
    }
  },

  // ===================================
  // LIFECYCLE - AOS REFRESH OBLIGATORIO
  // ===================================
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
