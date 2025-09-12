<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'Introducción'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    // Bloque: iconobloque-texto-imagen 8:4
    .row.mb-5
      .col-lg-8
        .bg-color-11.p-4(data-aos="fade-left").mb-4
          .row.align-items-start
            .col-lg-auto
              img(src="@/assets/curso/intro/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 El prototipado y las pruebas de usabilidad constituyen elementos fundamentales en el desarrollo de sistemas interactivos efectivos, representando el puente esencial entre la conceptualización teórica y la implementación práctica de interfaces digitales. Esta unidad se centra en las metodologías y técnicas que permiten materializar las ideas de diseño en prototipos funcionales, evaluando su efectividad a través de pruebas sistemáticas con usuarios reales. En el contexto actual de la ingeniería de software, la capacidad de crear prototipos efectivos con validación mediante evaluaciones rigurosas determina significativamente la calidad y adopción exitosa de los productos digitales desarrollados.

        p(data-aos="fade-left") Al finalizar esta unidad, se desarrollará la competencia para aplicar técnicas de prototipado y realizar pruebas de usabilidad que mejoren la interfaz y la experiencia del usuario en sistemas interactivos. Esta capacidad abarca desde la creación de wireframes interactivos de diferentes niveles de fidelidad hasta la implementación de metodologías de evaluación que incluyen técnicas heurísticas, cognitivas y pruebas con usuarios reales. Se adquirirá además la habilidad para interpretar resultados de evaluación y traducirlos en mejoras iterativas del diseño, estableciendo ciclos de refinamiento continuo basados en evidencia empírica que aseguren la calidad de la experiencia de usuario final.

      .col-lg-4
        figure
          img(src="@/assets/curso/intro/2.png", data-aos="zoom-in")

    // Bloque: img-bloque
    .bg-color-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/intro/3.svg', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up").mb-3 La relevancia profesional de estas competencias se manifiesta en la creciente demanda del mercado laboral por ingenieros de software capaces de integrar consideraciones de experiencia de usuario en sus procesos de desarrollo. Las organizaciones reconocen que los productos con interfaces intuitivas y experiencias optimizadas generan mayor satisfacción del usuario, reducen costos de soporte técnico, y aumentan las tasas de adopción y retención. 
            p.mb-0 Los profesionales con competencias en prototipado y evaluación de usabilidad se destacan en equipos multidisciplinarios, contribuyendo de manera significativa al éxito comercial de productos tecnológicos en sectores diversos como salud, educación, finanzas y comercio electrónico.

    // Bloque: párrafo simple
    p La unidad se organiza en tres componentes principales que construyen progresivamente las competencias requeridas para el prototipado y evaluación efectiva:

    // Bloque: tarjetas-boton (3 tarjetas)
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/4.svg" alt="" style="width: 90px")
          h5.mb-2.text-center #[strong Primer componente]
          p.mb-0.text-center Aborda la creación de wireframes interactivos, desarrollando habilidades para materializar conceptos de diseño en prototipos funcionales de diferentes niveles de fidelidad.

      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/5.svg" alt="" style="width: 90px")
          h5.mb-2.text-center #[strong Segundo componente]
          p.mb-0.text-center Se enfoca en métodos de prueba de usabilidad, incluyendo evaluación heurística, análisis cognitivo y técnicas de evaluación con usuarios reales.

      .col-lg-4.mb-4(data-aos="zoom-in-up")
        .bg-color-white.box-shadow.px-4.py-5.h-100
          img.mx-auto.d-block.mb-4(src="@/assets/curso/intro/6.svg" alt="" style="width: 90px")
          h5.mb-2.text-center #[strong Tercer componente]
          p.mb-0.text-center Integra ambas competencias en procesos de iteración sistemática, donde los resultados de evaluación informan mejoras continuas del diseño a través de ciclos estructurados de refinamiento.

    // Bloque: color-imagen (usando imagen-color-texto)
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/intro/7.png", data-aos="zoom-in")
      .col-lg-8
        .bg-color-3.p-4.py-lg-5(data-aos="fade-left").text-white
          p.mb-0 Se recomienda una participación en los ejercicios prácticos que simulen condiciones reales de desarrollo de software, incluyendo la creación de prototipos funcionales y la conducción de evaluaciones de usabilidad con metodologías establecidas. De igual forma, es importante contar con conocimientos básicos de diseño de interfaces y familiaridad con principios fundamentales de experiencia de usuario, así como disposición para trabajar colaborativamente en ejercicios de evaluación cruzada que enriquezcan la perspectiva individual sobre efectividad de diferentes enfoques de diseño.

</template>

<script>
export default {
  name: 'Introduccion',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
