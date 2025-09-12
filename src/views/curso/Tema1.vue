<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Prototipado y pruebas de usabilidad'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    // Bloque: imagen-color (usando imagen-color-texto)
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-7.p-4.py-lg-5(data-aos="fade-left")
          p.mb-0 El prototipado y las pruebas de usabilidad, constituyen pilares fundamentales en el proceso de diseño de experiencia de usuario, especialmente en el contexto de la ingeniería de software. Esta unidad se enfoca en desarrollar competencias prácticas para crear prototipos funcionales que permitan validar conceptos de diseño antes de proceder con la implementación final del software. Se comprende que la transición desde la conceptualización hasta la materialización de interfaces requiere de metodologías rigurosas que minimicen los riesgos asociados con decisiones de diseño inadecuadas. La capacidad de prototipado efectivo permite a los ingenieros de software comunicar ideas de manera tangible, facilitando la colaboración entre equipos multidisciplinarios y la validación temprana de soluciones tecnológicas.

    // Bloque: slider-a (usando slyder-2)
    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/2.png")
            .col-lg-7.order-lg-1
              h3 Prototipado sistemático
              p A través del prototipado sistemático, se establece un puente entre las necesidades identificadas del usuario y las soluciones técnicas implementables. Este proceso iterativo permite refinar continuamente las propuestas de diseño, incorporando retroalimentación valiosa que emerge tanto de evaluaciones expertas como de interacciones directas con usuarios finales. Se analiza cómo los prototipos sirven como herramientas de comunicación que trascienden las barreras técnicas, permitiendo que stakeholders con diferentes niveles de conocimiento técnico puedan visualizar y evaluar las propuestas de diseño. La metodología de prototipado estructurada facilita la identificación temprana de problemas de usabilidad, reduciendo significativamente los costos asociados con modificaciones posteriores en el ciclo de desarrollo.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-lg-2
              figure
                img(src="@/assets/curso/tema1/3.png")
            .col-lg-7.order-lg-1
              h3 Validación continua
              p La integración de pruebas de usabilidad sistemáticas dentro del proceso de prototipado, establece un marco de validación continua que garantiza la alineación entre las expectativas del usuario y las capacidades del sistema. Se implementa un enfoque basado en evidencia que permite tomar decisiones de diseño fundamentadas en datos objetivos, minimizando la dependencia de suposiciones o preferencias subjetivas. Esta unidad proporciona las herramientas metodológicas necesarias para establecer ciclos de retroalimentación efectivos, donde cada iteración del prototipo incorpora aprendizajes derivados de evaluaciones rigurosas. El dominio de estas competencias resulta esencial para desarrollar productos de software que no solo cumplan con especificaciones técnicas, sino que también proporcionen experiencias de usuario excepcionales y significativas.

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
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/275487" target="_blank" rel="noopener noreferrer") Labrador, E. & Márquez Moreno, J. (2023). UX para empresas: (1 ed.). FC Editorial.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/122938" target="_blank" rel="noopener noreferrer") Torres Burriel, D. (2018). Usabilidad: deja de sufrir: ( ed.). Difusora Larousse - Anaya Multimedia.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/4ACp8nFptVc" target="_blank" rel="noopener noreferrer") Ministerio TIC Colombia. (2021, 30 de junio). #MásTIC4Punto0 | ¿Qué es un wireframe? Descúbrelo en esta trivia. [Vídeo] YouTube.

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://youtu.be/9IsGFuw7Bbw" target="_blank" rel="noopener noreferrer") Plain Concepts. (2018, 25 de junio). Cómo diseñar una app desde cero | Conceptualización, wireframes, diseño, iteración… [Vídeo] YouTube.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='Imagen material complementario')

</template>

<script>
export default {
  name: 'Tema1',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
