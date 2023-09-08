<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-up")
      .titulo-principal__numero
        span 2
      h1 Promoción de productos y servicios
    
    p(data-aos="zoom-in") La promoción de productos y servicios es una estrategia clave para:

    ul.fa-ul.mt-4
      li.mb-2(data-aos="zoom-in-left")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Rotar los productos.
      li.mb-2(data-aos="zoom-in-left")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Fidelizar clientes.
      li.mb-2(data-aos="zoom-in-left")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Generar mayor rentabilidad.
      li(data-aos="zoom-in-left")
        i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
        | Una oportunidad de implantar en el cliente la imagen y el posicionamiento del establecimiento.
    
    .col-xl-98.m-auto.mt-5.col-lg-10
      .cajon.color-acento-contenido.p-4(style="background-color:#BFEEF4;")
        p.mb-0(data-aos="zoom-in") En un modelo de farmacia, cuando se decide realizar promoción de productos y servicios, no se debe hacer solo por vender, también se debe apuntar a satisfacer las necesidades de los clientes de tal manera que haya ganancia de parte y parte; para que una promoción sea exitosa, la farmacia o droguería debe comunicar de forma expansiva la misma, ya sea por medio de carteles vistosos, por teléfono, volantes, entre otros.  
    
    p.mt-5(data-aos="zoom-in") La promoción de los productos y servicios se puede realizar de dos formas, desde el propio establecimiento o en línea, como se muestra a continuación:

    AcordionA.mt-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.col-lg-11.m-auto(titulo="El mueble de exhibición")
        .col-lg-7.col-md-6.mb-4.mb-md-0
          p El mueble de exhibición o escaparate debe ser muy atractivo a la vista de los clientes. Por lo cual al momento de poner uno se deben tener presentes los siguientes factores:
          ul.fa-ul.mt-3
            li
              i.fas.fa-chevron-right.fa-li(style="color:#00223D;")
              | Lo que se quiere transmitir y comunicar a las personas.
            li
              i.fas.fa-chevron-right.fa-li(style="color:#00223D;")
              | Detectar los productos más llamativos.
            li
              i.fas.fa-chevron-right.fa-li(style="color:#00223D;")
              | Implementar los llamados ganchos comerciales, que se refieren a todos los elementos que mueven los sentidos de las personas y los impulsan a ingresar al establecimiento, por ejemplo, pancartas.
          p.mt-4 Aunque los establecimientos farmacéuticos manejan productos diferentes a los medicamentos, no dejan de ser lugares enfocados en la salud, por lo que están reglamentados normativamente; así que antes de realizar cualquier exhibición, se debe revisar muy bien la normatividad legal vigente para no incurrir en ilegalidad.
        .col-md-6.col-lg-5
          figure
            img(src='@/assets/curso/tema2/1.png' alt="Imagen decorativa")
      .row.col-lg-11.m-auto(titulo="Posición de los productos")
        .col-lg-7.col-md-6.mb-4.mb-md-0
          p En todo establecimiento siempre se tienen dos puntos: los calientes y los fríos.
          ul.fa-ul.mt-3
            li
              i.fas.fa-chevron-right.fa-li(style="color:#00223D;")
              | Los calientes son normalmente aquellos puntos por donde hay mayor circulación de personas y son precisamente los utilizados para la exhibición.
            li
              i.fas.fa-chevron-right.fa-li(style="color:#00223D;")
              | Los fríos son esos puntos donde llega muy poca gente, por lo cual no se recomienda ubicar allí productos, sino utilizarlos para carteles, iluminación, entre otros.
        .col-md-6.col-lg-5
          figure
            img(src='@/assets/curso/tema2/2.png' alt="Imagen decorativa")
    
    h4.mt-5(data-aos="zoom-in") Exhibición de los productos como #[em marketing] de ventas farmacéutico

    p.mt-4(data-aos="zoom-in") La exhibición de los productos OTC, como pañales, cosméticos, multivitamínicos, aseo personal, entre otros, juega en las farmacias un papel importante como estrategia de #[em marketing] de venta, teniendo presente que hoy en día la figura de establecimiento de solo medicamentos ha cambiado por establecimiento que ofrece productos y servicios de bienestar general.
    p.mt-4(data-aos="zoom-in") Es importante exhibir los productos para:

    .row.mt-5
      .col-lg.mb-4.mb-lg-0.col-md-6
        .h-100.p-5(style="background-color:#F71C85;position:relative;border-radius:20px;" data-aos="zoom-in")
          div(style="position:absolute;right:-20px;top: auto;bottom: 25px")
            figure
              img(src="@/assets/curso/tema2/3.svg" style="max-width:100%" alt="Imagen decorativa")
          p.text-white.mb-0 Captar clientes
      .col-lg.mb-4.mb-lg-0.col-md-6
        .h-100.p-5(style="background-color:#FF9D00;position:relative;border-radius:20px;" data-aos="zoom-in")
          div(style="position:absolute;right:-20px;top: auto;bottom: 25px")
            figure
              img(src="@/assets/curso/tema2/4.svg" style="max-width:100%" alt="Imagen decorativa")
          p.text-white.mb-0 Dar a conocer el portafolio de productos.
      .col-lg.mb-4.mb-lg-0.col-md-6
        .h-100.p-5(style="background-color:#8CBCFA;position:relative;border-radius:20px;" data-aos="zoom-in")
          div(style="position:absolute;right:-20px;top: auto;bottom: 25px")
            figure
              img(src="@/assets/curso/tema2/5.svg" style="max-width:100%" alt="Imagen decorativa")
          p.text-white.mb-0 Rotar los productos poco o nada conocidos.
      .col-lg.mb-4.mb-lg-0.col-md-6
        .h-100.p-5(style="background-color:#7E5EE3;position:relative;border-radius:20px;" data-aos="zoom-in")
          div(style="position:absolute;right:-20px;top: auto;bottom: 25px")
            figure
              img(src="@/assets/curso/tema2/6.svg" style="max-width:100%" alt="Imagen decorativa")
          p.text-white.mb-0 Posicionar el establecimiento como referente de bienestar.
      .col-lg.mb-4.mb-lg-0.col-md-6
        .h-100.p-5(style="background-color:#2ED986;position:relative;border-radius:20px;" data-aos="zoom-in")
          div(style="position:absolute;right:-20px;top: auto;bottom:25px;")
            figure
              img(src="@/assets/curso/tema2/7.svg" style="max-width: 100%" alt="Imagen decorativa")
          p.text-white.mb-0 Obtener más rentabilidad por ventas.
    
    p.mt-5(data-aos="zoom-in") Dos aspectos para tener en cuenta al momento de exhibir los productos son:
    
    TabsA.color-acento-botones.mt-4
      .tarjeta.color-acento-botones.p-4(titulo="<em>Marketing off line</em>" style="background-color:#D9F5F9;")
        h5 #[em Marketing off line]
        p.mt-4 Esta clase de promoción es la que se realiza dentro del establecimiento en un encuentro presencial entre el vendedor y el cliente. Los productos no se ofertan de manera deliberada, sino de acuerdo con una selección estratégica de clientes donde se tiene presente la necesidad de estos; y ello se logra mediante un pequeño cuestionario en medio de la conversación. 
        p.mt-4 Es importante tener presente que todo el personal que labora en el establecimiento farmacéutico tiene que estar capacitado en los productos, empezando por los que se estén promocionando, ya que una persona sin conocimiento puede cometer errores como brindar información engañosa, omitir información importante u ofrecer un producto no acorde a la necesidad del cliente y esto afectaría notablemente los objetivos de venta. 
        figure.mt-4
          img(src="@/assets/curso/tema2/8.png" alt="Imagen decorativa")
        .mt-4.text-center
          a.boton.color-primario.indicador__container(@click="modal2 = true" data-aos="zoom-in")
            span.ps-4.pe-4.fw-bold Ejemplo
            .indicador--click(v-if="mostrarIndicador2")
      .tarjeta.color-acento-botones.p-4(titulo="<em>Marketing online</em>" style="background-color:#D9F5F9;")
        h5 #[em Marketing online]
        p.mt-4 Cada día las redes sociales tienen mayor fuerza como canal de comunicación, por lo que utilizar esta herramienta para promocionar los productos e impulsar las ventas es provechoso, pues tiene dualidad en función, ya que no solo complementa la promoción #[em off line], sino que también funciona por sí sola.
        p.mt-4 En el momento de implementar el #[em marketing online] se debe planificar muy bien el contenido que será expuesto allí, ya que debe ser contenido de calidad, llamativo y que no genere confusiones.
        figure.mt-4
          img(src="@/assets/curso/tema2/10.png" alt="Imagen decorativa")
    
    
    ModalA(:abrir-modal.sync="modal2")
      .row.align-items-center
        h5 Ejemplo
        p.mt-1 Si llega un cliente averiguando por un suplemento dietario, es el momento preciso para que el vendedor aplique el cuestionario (es diabético, sufre de alguna enfermedad crónica, que medicamentos toma, entre otras) y, de acuerdo con las respuestas, pueda orientar de la mejor manera al cliente.
        figure.mt-2
          img(src="@/assets/curso/tema2/9.png" alt="Imagen decorativa")
    
    h4.mt-5(data-aos="zoom-in") Reformas y cambios
    
    p.mt-4(data-aos="zoom-in") Cuando se desea implementar la promoción de productos y servicios por lo general se deben realizar reformas o cambios al establecimiento que permitan lograr los objetivos.
    p.mt-4(data-aos="zoom-in") Hay lugares que permiten reformas de ampliación, pero otros que no; en ese último caso, es indispensable reorganizar el lugar de manera que se aprovechen todos los espacios, claro está, sin interrumpir el fácil acceso.




    
  

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador2: true,
    modal2: false,
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
<style lang="sass">
.tarjeta.tarjeta--azul.acordion__activo
  background-color: #ECE7FB
.tarjeta.color-acento-botones *
  color: #12263F !important
</style>
