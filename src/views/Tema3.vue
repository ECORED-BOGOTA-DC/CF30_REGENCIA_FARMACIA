<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-up")
      .titulo-principal__numero
        span 3
      h1 Sistemas de información
    
    .row.justify-content-center
      .col-lg-3.col-6.mb-4.mb-md-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema3/1.svg" data-aos="zoom-in-right" alt="Imagen decorativa")
      .col-lg-9(style="place-self:center;")
        p(data-aos="zoom-in") Independientemente del tamaño del establecimiento farmacéutico, por control, rapidez y sencillez, es necesario sistematizar la información, debido a que manejar los datos de forma manual genera errores, desinformación, lentitud, entre muchos otros puntos negativos para las ventas.
        p.mt-4(data-aos="zoom-in") Gracias a los avances tecnológicos, hoy en día se cuenta con el Sistema de Información de #[em Marketing] (SIM) que evita pérdidas de tiempo y esfuerzo y permite gestionar, indagar y consignar, de qué manera y con qué personas se están formando relaciones o diálogos alrededor de un producto o una promoción.

    .col-xl-8.m-auto.mt-5.col-lg-10(data-aos="fade-right")
      .cajon.color-acento-contenido.p-4(style="background-color:#BFEEF4;")
        p.mb-0 El SIM es la fuente que brinda datos, los cuales son vitales a la hora de tomar decisiones, por lo cual contar con un sistema eficaz y confiable es una ventaja competitiva incomparable.
    
    Separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_3_1 3.1 Utilidad de los sistemas de información de #[em marketing]
    
    p(data-aos="fade-right") Los SIM son útiles porque permiten:

    ul.fa-ul.mt-4
      li.mb-2(data-aos="fade-left")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Evidenciar las fallas e implementar estrategias de mejoras que aumenten el porcentaje de resultados, gracias a los datos arrojados.
      li.mb-2(data-aos="fade-left")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Entender mejor a los clientes.
      li.mb-2(data-aos="fade-left")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Manejar de manera eficiente los datos.
      li.mb-2(data-aos="fade-left")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Que el recurso humano este más concentrado y obtenga información relevante en tiempo real.
      li.mb-2(data-aos="fade-left")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Ahorrar tiempo de búsqueda de información, gracias a la disposición rápida de la información.
      li.mb-2(data-aos="fade-left")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Un porcentaje muy alto de almacenamiento de datos.
      li.mb-2(data-aos="fade-left")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | La actualización de información constante.
      li.mb-2(data-aos="fade-left")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Separar los clientes y los #[em leads].
      li(data-aos="fade-left")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Identificar de manera oportuna los problemas, las oportunidades y las tendencias.
    
    Separador
    .titulo-segundo(data-aos="fade-right")
      h2#t_3_2 3.2 Tipos de datos en el SIM
    
    p(data-aos="fade-right") El SIM es un sistema con múltiples funciones, por lo cual tiene la capacidad de manejar diferentes tipos de datos que se clasifican de la siguiente manera:

    .row.justify-content-center.mt-5
      .col-lg.col-sm-8.mb-lg-0.mb-4
        .h-100.p-4.p-md-5.text-center.text-white(style="background-color:#7E5EE3;border-radius:15px 0px 0px 15px;")
          figure.text-center
            img(src="@/assets/curso/tema3/2.svg" data-aos="zoom-in-up" style="display:inline;max-width:130px;" alt="Imagen decorativa")
          h3.mt-5(data-aos="zoom-in") Bases de datos adquiridas
          p.mt-4(data-aos="zoom-in") Esto se da cuando el establecimiento toma información de bases de datos otorgadas por alguna empresa o ente gubernamental.
      .col-lg.col-sm-8.mb-lg-0.mb-4
        .h-100.p-4.p-md-5.text-center.text-white(style="background-color:#FF9D00;")
          figure.text-center
            img(src="@/assets/curso/tema3/3.png" data-aos="zoom-in-up" style="display:inline;max-width:130px;" alt="Imagen decorativa")
          h3.mt-5(data-aos="zoom-in") Datos internos del establecimiento
          p.mt-4(data-aos="zoom-in") En este aspecto el SIM aporta la información de ventas y actividades de #[em marketing] que, junto con las bases de datos, permite realizar informes.
          p.mt-4(data-aos="zoom-in") También el SIM integrado con plataformas internas de comunicaciones dentro del establecimiento, aporta beneficios como el acceso a ciertas bases de datos departamentales.
      .col-lg.col-sm-8.mb-lg-0.mb-4
        .h-100.p-4.p-md-5.text-center.text-white(style="background-color:#00BCD4;border-radius:0px 15px 15px 0px;")
          figure.text-center
            img(src="@/assets/curso/tema3/4.png" data-aos="zoom-in-up" style="display:inline;max-width:130px;" alt="Imagen decorativa")
          h3.mt-5(data-aos="zoom-in") Inteligencia de #[em marketing]
          p.mt-4(data-aos="zoom-in") Desde este punto se accede a diferente información mediante la supervisión de:
          ul.fa-ul.mt-3
            li.text-start(data-aos="zoom-in")
              i.fas.fa-atom.fa-li(style="color:#fff;")
              | Páginas web de establecimientos competidores.
            li.text-start(data-aos="zoom-in")
              i.fas.fa-atom.fa-li(style="color:#fff;")
              | Publicaciones comerciales de la industria.
            li.text-start(data-aos="zoom-in")
              i.fas.fa-atom.fa-li(style="color:#fff;")
              | Anotaciones del mercado que hayan realizado expertos en el medio.
          p.mt-3(data-aos="zoom-in") Otra forma de aplicar la inteligencia de #[em marketing] es a través de diálogos con clientes potenciales y distribuidores.

</template>

<script>
export default {
  name: 'Tema3',
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
