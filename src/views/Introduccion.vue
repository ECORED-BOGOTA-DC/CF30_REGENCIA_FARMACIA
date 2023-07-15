<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las droguerías y farmacias-droguerías son establecimientos farmacéuticos que se han ido actualizando en busca de satisfacer las necesidades de pacientes, clientes y usuarios, por lo cual, ya no solo se consiguen medicamentos y dispositivos médicos, sino una alta gama de productos de bienestar en general.
        br
        br
        | Actualmente, estos establecimientos han incorporado en sus intereses el #[em marketing] farmacéutico de modo que puedan suplir las necesidades del consumidor, pero también hacer crecer y sostener el negocio.
        br
        br
        | A través de este componente formativo conocerás diferentes temas relacionados con la exhibición de los productos farmacéuticos como elemento clave de la estrategia comercial del #[em marketing] farmacéutico. 

    
 



    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
