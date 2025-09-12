<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'2. Creación de wireframes interactivos'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    // Bloque: texto-color-imagen
    .row.mb-5
      .col-lg-8
        p(data-aos="fade-left") La creación de wireframes interactivos representa una evolución natural en el proceso de diseño de interfaces, donde se trasciende la representación estática para incorporar elementos de interacción que simulan el comportamiento real del sistema. Este enfoque permite validar no solo la disposición visual de elementos, sino también los flujos de navegación y las respuestas del sistema ante acciones específicas del usuario. Se comprende que los wireframes interactivos funcionan como prototipos funcionales de baja fidelidad que facilitan la comunicación de conceptos de diseño complejos, permitiendo que equipos de desarrollo y stakeholders experimenten directamente con las propuestas de interfaz antes de proceder con la implementación técnica.

        .bg-color-11.p-4(data-aos="fade-left")
          p.mb-0 La implementación efectiva de wireframes interactivos, requiere un entendimiento profundo de los principios de diseño de interacción, donde cada elemento para hacer clic, cada transición y cada respuesta del sistema debe estar cuidadosamente planificada para reflejar la experiencia de usuario deseada. Se analiza cómo estos prototipos sirven como herramientas de validación temprana, permitiendo identificar problemas de flujo de navegación, inconsistencias en la arquitectura de información y oportunidades de mejora en la experiencia de interacción. La capacidad de simular interacciones reales proporciona insights valiosos sobre el diseño intuitivo, revelando patrones de uso que podrían no ser evidentes en representaciones estáticas tradicionales.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")

    // Bloque: img-bloque
    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/2.svg', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Los subtemas que se abordarán en esta sección, incluyen una introducción fundamental a los wireframes interactivos, estableciendo los conceptos básicos y la terminología especializada necesaria para comprender su aplicación efectiva. Se explorará la distinción crítica entre prototipos de baja y alta fidelidad, analizando cuándo y cómo aplicar cada enfoque, según los objetivos específicos del proyecto. Se examinará el ecosistema de herramientas especializadas como Figma, Adobe XD y Sketch, desarrollando competencias prácticas para su utilización eficiente.

    // Bloque: párrafo simple
    p Adicionalmente, se profundizará en el diseño de interacción aplicado a #[strong wireframes] y se establecerán metodologías para la iteración sistemática en la creación de prototipos interactivos.

    // Bloque: titulo-segundo
    #t_2_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.1] Introducción a los wireframes interactivos

    p Los wireframes interactivos representan una herramienta clave en el diseño de interfaces digitales, ya que permiten simular experiencias de usuario antes del desarrollo definitivo.

    // Bloque: anexo-img
    .bg-full-width.bg-color-13.mb-lg-5
      .px-4.p-md-5.text-white
        .row.justify-content-center.align-items-center
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Introducción a los wireframes interactivos
            p.mb-4(data-aos="fade-right") En el PDF Introducción a los wireframes interactivos, se presenta una aproximación práctica a esta metodología, ilustrando cómo estos prototipos funcionales facilitan la validación de flujos de navegación, mejoran la comunicación entre equipos y optimizan la toma de decisiones tempranas en proyectos de ingeniería de software. Esta técnica fortalece el enfoque centrado en el usuario, al permitir detectar problemas de usabilidad y refinar la arquitectura de información desde las primeras fases del diseño.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Introducción a los wireframes interactivos

          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/3.png', alt='')

    // Bloque: titulo-segundo
    #t_2_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.2] Prototipos de baja y alta fidelidad: diferencias y aplicaciones

    p Conozcamos sobre esta temática:

    // Bloque: img-acordeon
    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/4.png", alt="").mb-4.mb-lg-0
      .col-lg-8

        AcordionA(tipo="b")
          .div(titulo="Prototipos de baja fidelidad")
            p Se caracterizan por su simplicidad visual y funcional, utilizando elementos gráficos básicos como rectángulos, líneas y texto plano para representar los componentes fundamentales de la interfaz. Este enfoque permite concentrarse en aspectos estructurales y de flujo de información, sin distraerse con detalles estéticos o de implementación técnica. Se comprende que su valor principal radica en la capacidad de comunicar conceptos de diseño de manera rápida y económica, facilitando iteraciones frecuentes y la incorporación de retroalimentación temprana. La naturaleza abstracta de estos prototipos permite que los evaluadores se enfoquen en la funcionalidad y usabilidad fundamental, sin verse influenciados por decisiones estéticas que podrían no ser definitivas.
          .div(titulo="Prototipos de alta fidelidad")
            p Incorporan elementos visuales detallados, tipografías específicas, esquemas de color definidos y comportamientos de interacción más sofisticados, aproximándose significativamente a la apariencia y funcionalidad del producto final. Según Labrador y Márquez Moreno (2023), estos prototipos resultan especialmente efectivos para validar aspectos específicos de la experiencia de usuario, incluyendo la percepción visual, la jerarquía de información y la respuesta emocional ante la interfaz. Se analiza que su implementación requiere mayor inversión de tiempo y recursos, pero proporciona insights más precisos sobre la experiencia de usuario final. La selección entre prototipos de baja y alta fidelidad debe basarse en los objetivos específicos de cada fase del proyecto, considerando factores como el tiempo disponible, los recursos del equipo y el tipo de retroalimentación requerida.

    // Bloque: iconobloque-texto-imagen
    .row.mb-5
      .col-lg-8
        .bg-color-11.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/tema2/5.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 En el contexto de desarrollo de software empresarial, considérese el caso de un sistema de gestión de recursos humanos donde se requiere validar tanto la arquitectura de información como la experiencia visual final. Durante las fases iniciales del proyecto, se implementan prototipos de baja fidelidad para validar la organización de módulos principales como gestión de empleados, control de asistencia y evaluación de desempeño. Esta aproximación permite identificar problemas en la estructura de navegación y la lógica de flujos de trabajo sin invertir tiempo excesivo en detalles visuales. Posteriormente, se desarrollan prototipos de alta fidelidad para validar aspectos específicos como la presentación de tableros ejecutivos, la visualización de datos de rendimiento y la interfaz de autoservicio para empleados, donde la experiencia visual resulta crítica para la adopción y satisfacción del usuario.

        p(data-aos="fade-left") #[strong Ejercicio.] Crear dos versiones de un prototipo para una aplicación de gestión de proyectos.

      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in")

    // Bloque: TabsC
    TabsC.color-acento-contenido.mb-0
      .tabs-content.border.px-4.p-md-5.py-3(titulo="Paso 1" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Paso 1
            p Desarrollar un prototipo de baja fidelidad que incluya las pantallas principales (tablero de control, lista de proyectos, vista de tareas) utilizando únicamente formas geométricas y texto plano.
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/7.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Paso 2" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Paso 2
            p Crear un prototipo de alta fidelidad de las mismas pantallas, incorporando colores específicos, tipografías definidas, iconografía y elementos visuales detallados.
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/8.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Paso 3" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Paso 3
            p Realizar una evaluación comparativa de ambos prototipos, identificando qué tipo de retroalimentación genera cada uno.
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/9.png', alt='')

      .tabs-content.border.px-4.p-md-5.py-3(titulo="Paso 4" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
        .row
          .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
            h4 Paso 4
            p Documentar las diferencias en tiempo de desarrollo y calidad de insights obtenidos.
          .col-md-6.col-lg-5.col-xl-4.order-1
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/10.png', alt='')

    // Bloque: color
    .bg-color-3.p-4(data-aos="fade-left").mb-5.text-white
      p.mb-0 El resultado debe demostrar claramente cuándo aplicar cada enfoque, según los objetivos específicos del proyecto y las necesidades de validación requeridas.

    // Bloque: titulo-segundo
    #t_2_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.3] Herramientas de creación de wireframes (Figma, Adobe XD, Sketch)

    p Las herramientas digitales para la creación de wireframes desempeñan un papel esencial en los procesos de diseño de interfaces centradas en el usuario, al facilitar la visualización temprana de estructuras y flujos funcionales.

    // Bloque: anexo-img
    .bg-full-width.bg-color-13.mb-lg-5
      .px-4.p-md-5.text-white
        .row.justify-content-center.align-items-center
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Herramientas de creación de wireframes (Figma, Adobe XD, Sketch)
            p.mb-4(data-aos="fade-right") En el PDF Herramientas de creación de wireframes, se exploran las principales plataformas utilizadas en la industria para diseñar y prototipar soluciones digitales, analizando sus características técnicas, ventajas colaborativas e impacto en los flujos de trabajo. Este recurso permite comprender cómo la elección adecuada de herramientas influye directamente en la eficiencia del desarrollo, la coherencia del diseño y la validación temprana de propuestas interactivas.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Herramientas de creación de wireframes (Figma, Adobe XD, Sketch)

          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/11.png', alt='')

    // Bloque: titulo-segundo
    #t_2_4.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.4] Diseño de interacción en wireframes

    // Bloque: img-bloque (segunda instancia)
    .bg-color-4.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema2/12.svg', alt='')
        .col-lg
          .p-4
            p(data-aos="fade-up") El diseño de interacción en wireframes trasciende la simple definición de elementos clicables para abordar la orquestación completa de la experiencia del usuario a través de micro interacciones, transiciones y respuestas del sistema. Se comprende que cada elemento interactivo debe diseñarse considerando no solo su funcionalidad inmediata, sino también su impacto en el flujo general de la experiencia del usuario.
            p.mb-0(data-aos="fade-up") La definición de estados de interfaz (inicial, carga, éxito, error) resulta fundamental para comunicar efectivamente el comportamiento esperado del sistema ante diferentes escenarios de uso. Este enfoque sistemático permite anticipar situaciones de uso real y diseñar respuestas apropiadas que mantengan la confianza y comprensión del usuario respecto al sistema.

    // Bloque: slider-a
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/13.png")
            .col-lg-7.order-lg-1
              p La implementación efectiva de diseño de interacción en wireframes, requiere una comprensión profunda de los principios de asequibilidad y retroalimentación, conceptos fundamentales establecidos por investigadores en diseño de interacción. Torres Burriel (2018), enfatiza que las interacciones efectivas deben proporcionar señales claras sobre qué acciones son posibles y qué resultados se pueden esperar de cada acción. Se analiza que la consistencia en patrones de interacción resulta crítica para desarrollar interfaces intuitivas, donde los usuarios puedan transferir conocimiento previo a nuevas situaciones dentro del sistema. La definición de micro interacciones específicas, como animaciones de hover, transiciones entre estados y confirmaciones de acción, contribuye significativamente a la percepción de calidad y profesionalismo del producto final.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema2/14.png")
            .col-lg-7.order-lg-1
              p En el desarrollo de sistemas de gestión académica, el diseño de interacción cobra particular importancia debido a la diversidad de usuarios y contextos de uso. Considérese un sistema donde estudiantes, profesores y administrativos interactúan con diferentes módulos del sistema. El diseño de interacción debe contemplar flujos específicos como la inscripción de materias, donde se requiere validación en tiempo real de prerrequisitos, disponibilidad de cupos y conflictos de horario. Los wireframes interactivos deben simular estas validaciones, mostrando mensajes de error contextual, sugerencias de alternativas y confirmaciones de éxito. Las interacciones de consulta de calificaciones requieren consideraciones diferentes, enfocándose en la presentación clara de información, filtros de búsqueda y opciones de exportación. Este enfoque diferenciado en el diseño de interacción garantiza que cada tipo de usuario encuentre patrones familiares y eficientes para sus tareas específicas.

    // Bloque: párrafo con ejercicio
    p #[strong Ejercicio.] Crear un sistema de comentarios y reseñas para una aplicación de servicios.

    // Bloque: img-acordeon (segunda instancia)
    .row.align-items-start.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema2/15.png", alt="").mb-4.mb-lg-0
      .col-lg-8

        AcordionA(tipo="b")
          .div(titulo="Paso 1")
            p Definir los diferentes estados de la interfaz (sin comentarios, cargando comentarios, comentarios cargados, error de carga).
          .div(titulo="Paso 2")
            p Diseñar las micro interacciones para acciones como "me gusta", "responder comentario" y "reportar contenido", incluyendo retroalimentación visual inmediata.
          .div(titulo="Paso 3")
            p Crear transiciones suaves entre estados, como la animación de aparición de nuevos comentarios o la expansión de hilos de conversación.
          .div(titulo="Paso 4")
            p Implementar validaciones de formulario en tiempo real para la creación de nuevos comentarios, incluyendo conteo de caracteres y validación de contenido.
          .div(titulo="Paso 5")
            p Diseñar respuestas del sistema para diferentes escenarios (comentario publicado exitosamente, error de conexión, contenido moderado).

    // Bloque: bg-full-icono-texto
    .bg-full-width.bg-color-12.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema2/16.svg", style="max-width: 90px").mx-auto
          .col-lg
            p.mb-0 El resultado debe ser un prototipo que demuestre comprensión avanzada de principios de diseño de interacción y proporcione una experiencia de usuario fluida y predecible.

    // Bloque: titulo-segundo
    #t_2_5.titulo-segundo(data-aos="flip-up")
      h2 #[span 2.5] Iteración en la creación de prototipos interactivos

    p La iteración en el diseño de prototipos interactivos permite mejorar progresivamente las soluciones de experiencia de usuario mediante ciclos estructurados de prueba, análisis y refinamiento.

    // Bloque: img-anexo
    .bg-full-width.bg-color-13.mb-lg-5
      .px-4.p-md-5.text-white
        .row.justify-content-center.align-items-center
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/tema2/17.png', alt='')

          .col-lg-8
            h2.mb-4(data-aos="flip-up") Iteración en la creación de prototipos interactivos
            p.mb-4(data-aos="fade-right") En el PDF Iteración en la creación de prototipos interactivos, se examinan los fundamentos y beneficios de este enfoque, resaltando su utilidad para validar hipótesis de diseño, optimizar flujos funcionales y asegurar la alineación con las necesidades reales de los usuarios. A través de ejemplos prácticos y criterios de evaluación claros, se evidencia cómo una gestión iterativa rigurosa favorece la toma de decisiones informadas y reduce riesgos en etapas avanzadas del desarrollo de productos digitales.

            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_3.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Iteración en la creación de prototipos interactivos

    // Bloque: material-complementario
    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/106512?page=1" target="_blank" rel="noopener noreferrer") Fernández Casado, P. E. (2018). Usabilidad web: teoría y uso: ( ed.). RA-MA Editorial.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/45919?page=9" target="_blank" rel="noopener noreferrer") Fischer, M. (2008). Website boosting: optimizar los buscadores, usabilidad y marketing web: ( ed.). Marcombo.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/275487" target="_blank" rel="noopener noreferrer") Labrador, E. & Márquez Moreno, J. (2023). UX para empresas: (1 ed.). FC Editorial.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/249858?page=1" target="_blank" rel="noopener noreferrer") Pintos Fernández, J. (2023). Aplicación de técnicas de usabilidad y accesibilidad en el entorno cliente. IFCD0210: (1 ed.). IC Editorial.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/122938" target="_blank" rel="noopener noreferrer") Torres Burriel, D. (2018). Usabilidad: deja de sufrir: ( ed.). Difusora Larousse - Anaya Multimedia.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/bjDG40NZ7O0" target="_blank" rel="noopener noreferrer") Software GURU. (2021, 5 de febrero). #SGVirtual 20.12 - Evaluación Remota de la Experiencia del Usuario y Usabilidad. [Vídeo] YouTube.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/tKTXbvOrweQ" target="_blank" rel="noopener noreferrer") MPlu_a Vídeos. (2021, 21 de abril). Evaluación Heurística. Charla en la Universidad del Quindío. [Vídeo] YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen material complementario')

</template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
