<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="fade-up")
      .titulo-principal__numero
        span 1
      h1 Productos y servicios
    
    p(data-aos="zoom-in") Los establecimientos farmacéuticos han evolucionado debido a la alta competencia y a la incursión de las ventas por internet. Hoy en día no solo se encargan de la dispensación, sino también de vender, por lo que la figura de paciente ha cambiado a paciente-cliente, integrando la información otorgada por un experto farmacéutico (dispensación), con otros servicios dando así valor añadido a las peticiones de los clientes. 

    .col-xl-8.m-auto.mt-5.col-lg-10
      .cajon.color-acento-contenido.p-4(style="background-color:#BFEEF4;")
        p.mb-0(data-aos="zoom-in") Los farmacéuticos son expertos en los temas relacionados con los productos y los servicios que legalmente están habilitados a ofrecer y lograr cumplir con las demandas el mercado actual y cambiar el modelo tradicional por el modelo presente, es necesario contar con el apoyo y la asesoría de un experto en materia de mercado y captor de las necesidades de los clientes.
    
    Separador.mt-5

    .titulo-segundo
      h2#t_1_1 1.1 Prestación de servicios en la farmacia
    
    .row
      .col-md-6.mb-4.mb-md-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/1.png" data-aos="zoom-in-right")
      .col-md-6(style="place-self:center;")
        p(data-aos="zoom-in-left") Las farmacias y farmacias-droguerías que, además de la dispensación de los medicamentos y dispositivos médicos ofrecen otros servicios, son establecimientos que tienen la visión puesta en el cliente que está en la búsqueda integral de su bienestar y de conocer su estado de salud para cuidarla y fortalecerla.
        p.mt-4(data-aos="zoom-in-left") Hoy en día, esta clase de clientes son los que mueven el mercado, pues todo el tiempo están en la búsqueda de información online y establecimientos que les ofrezcan el mejor y completo servicio que ayude a cuidar su salud. 
    
    Separador.mt-5

    .titulo-segundo
      h2#t_1_2 1.2 El entorno exterior del establecimiento
    
    .row
      .col-lg-3.col-md-5.mb-4.mb-md-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/2.png" data-aos="zoom-in-right")
      .col-lg-9.col-md-7(style="place-self:center;")
        p(data-aos="zoom-in-left") En el momento de ofrecer servicios competentes es necesario identificar la clase de clientes que rodean la farmacia y que por ende acuden a ella, además de conocer los establecimientos que son directamente competencia, teniendo presente que todos los valores agregados deben estar enfocados en satisfacer las necesidades de los clientes.
        a.mt-4.boton.color-primario.indicador__container(@click="modal1 = true" data-aos="zoom-in")
          span.ps-4.pe-4.fw-bold Ejemplo
          .indicador--click(v-if="mostrarIndicador")
    
    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center
        p.mb-0 Si la mayoría de las personas que rodean el establecimiento son adultos y adultos mayores, un servicio agregado seria brindar talleres sobre los riesgos que generan la automedicación (sobre todo en pacientes con patologías crónicas).

    .col-xl-8.m-auto.mt-5.col-lg-10
      .cajon.color-acento-contenido.p-4(style="background-color:#BFEEF4;")
        p.mb-0(data-aos="zoom-in") Es importante cerciorarse de no realizar los mismos talleres que la competencia, porque esto desfavorece en gran medida la imagen y credibilidad del establecimiento, debido a que implica carencia de creatividad y necesidad de robar ideas de otros.
    
    .row.mt-5
      .col-lg-3.col-md-5.mb-4.mb-md-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/3.svg" data-aos="zoom-in-right")
      .col-lg-9.col-md-7(style="place-self:center;")
        p(data-aos="zoom-in") Estar atentos al entorno en línea (on line), es indispensable, debido a que hoy en día es de gran afluencia la venta on line, a tal punto que gran parte de la publicidad y descuentos se lleva a cabo por este medio. Claro está que la estrategia competitiva en este modo de venta es ofrecer, en lo que la venta está en desventaja:
        ul.fa-ul.mt-4
          li.mb-2(data-aos="zoom-in")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Atención personalizada cara a cara.
          li(data-aos="zoom-in")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Servicios como el de peso y talla.
    
    h4.mt-5(data-aos="zoom-in") Recurso humano
    
    .row.mt-4
      .col-lg-3.col-md-5.mb-4.mb-md-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/4.svg" data-aos="zoom-in-right")
      .col-lg-9.col-md-7(style="place-self:center;")
        p(data-aos="zoom-in") Una manera eficaz de ofrecer servicios de calidad es contar con recurso humano capacitado que pueda brindar a los clientes información completa, eficaz y veraz.
        p.mt-4(data-aos="zoom-in") Dentro del establecimiento farmacéutico solo debe haber profesionales certificados en el campo como:
        ul.fa-ul.mt-4
          li.mb-2(data-aos="zoom-in")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Químicos farmacéuticos.
          li.mb-2(data-aos="zoom-in")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Regentes de farmacia.
          li(data-aos="zoom-in")
            i.fas.fa-check.fa-li(style="color:#00BCD4;")
            | Técnicos en servicios farmacéuticos.

    p.mt-5(data-aos="zoom-in") En el momento de ofrecer un servicio extra como toma de presión arterial o educación nutricional, estos deben ser brindados por una enfermera y un nutricionista, respectivamente, y así sucesivamente.

    h4.mt-5(data-aos="zoom-in") Recursos en general
    
    .row.mt-4
      .col-lg-3.col-md-5.mb-4.mb-md-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/5.svg" data-aos="zoom-in-right")
      .col-lg-9.col-md-7(style="place-self:center;")
        p(data-aos="zoom-in") En el momento de establecer servicios extras en la farmacia se debe tener presente que estos ameritan una inversión en tiempo y en dinero y que de entrada no es muy recomendable cobrar por ellos a los clientes, ya que ofrecerlos gratuitamente, como valor agregado o como un regalo al cliente por fidelización, son un gancho clave para la aceptación de los servicios, lo que se verá reflejado en la cantidad de personas que ingresan al establecimiento y por consiguiente en las ventas. Por lo cual, la implementación de servicios en la farmacia no se debe considerar como un gasto, sino una inversión positiva.
    
    h4.mt-5(data-aos="zoom-in") Oferta de servicios
    
    .row.mt-4
      .col-lg-3.col-md-5.mb-4.mb-md-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/6.svg" data-aos="zoom-in-right")
      .col-lg-9.col-md-7(style="place-self:center;")
        p(data-aos="zoom-in") La implementación de servicios está orientada a la satisfacción de las necesidades integrales en salud de los clientes, por lo cual los servicios ofertados deben inclinarse a ello.
        p.mt-4(data-aos="zoom-in") Retomando el ejemplo anterior en el que se tiene que el mayor número de las personas que rodean el establecimiento son adultos y adultos mayores, ofrecer a esa comunidad un taller sobre nutrición completa y balanceada para niños entre los 2 y 7 años, no será un tema atractivo para la mayoría, por lo cual con certeza sería una inversión fracasada.
        p.mt-4(data-aos="zoom-in") En el momento de ofertar servicios se debe iniciar con los propios y básicos a nivel farmacéutico como son:
    
    .col-xl-10.m-auto.mt-5
      PasosA.color-acento-contenido.mb-5(tipo="n")
        .row.p-4
          p.mb-0(data-aos="zoom-in-right") La atención farmacéutica, incluye la dispensación (entrega de los productos farmacéuticos acompañada de información sobre el uso adecuado).
        .row.p-4
          p.mb-0.text-start(data-aos="zoom-in-left") Indicación farmacéutica (orientación al paciente cuando no sabe cuál es el producto más recomendable para su necesidad).
        .row.p-4
          p.mb-0(data-aos="zoom-in-right") Seguimiento farmacoterapéutico (evaluación y monitorización de la terapia en los pacientes). 
      .row.mt-5
        .col-lg-3.col-md-5.mb-4.mb-md-0(style="place-self:center;")
          figure
            img(src="@/assets/curso/tema1/7.svg" data-aos="zoom-in-right")
        .col-lg-9.col-md-7(style="place-self:center;")
          p(data-aos="zoom-in") La indicación farmacéutica solo está autorizada con los productos o medicamentos de venta libre (OTC, por sus siglas en inglés), con los medicamentos con prescripción médica no (prohibiciones del dispensador Decreto 780 del 2016, capítulo 10).
          p.mt-4(data-aos="zoom-in") Además de los servicios básicos, la farmacia puede ofrecer todos otros servicios que tengan habilitados legalmente y para los que estén preparados.
      
      .col-xl-9.m-auto.mt-5.col-lg-10
        .cajon.color-acento-contenido.p-4(style="background-color:#BFEEF4;")
          p.mb-0(data-aos="zoom-in") Cabe aclarar que la farmacia o farmacia-droguería no puede compartir espacio con ninguna otra área como, por ejemplo, consultorios médicos, odontológicos, entre otros.
    
    p.mt-5(data-aos="zoom-in") Algunos servicios de valor agregado que se pueden prestar y que en ciertos casos requieren de gestión, planeación y seguimiento:

    .row.mt-5
      .col-lg-4.col-md-5.mb-4.mb-md-0(style="place-self:center;")
        figure
          img(src="@/assets/curso/tema1/8.svg" data-aos="zoom-in-right")
      .col-lg-8.col-md-7(style="place-self:center;")
        ul.fa-ul
          li.mb-2(data-aos="zoom-in-left")
            i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
            | #[strong Inyectología:] para brindar este servicio el establecimiento tiene que contar con el permiso o habilitación para ello y cumplir con todo lo que exige el Decreto 780 del 2016 (artículo 2.5.3.10.21) y la Resolución 1403 del 2007.
          li.mb-2(data-aos="zoom-in-left")
            i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
            | Monitoreo de glicemia con equipo por punción: para prestar este servicio se debe cumplir con la exigencia normativa del Decreto 780 del 2016 (artículo 2.5.3.10.22) y la Resolución 1403 del 2007.
          li.mb-2(data-aos="zoom-in-left")
            i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
            | Atención farmacéutica: esta la puede brindar a profundidad un químico farmacéutico y con ciertas restricciones el regente de farmacia.
          li.mb-2(data-aos="zoom-in-left")
            i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
            | #[strong Preparados magistrales:] siempre y cuando esté habilitado y cumpla con la normatividad según el Decreto 780 del 2016.
          li.mb-2(data-aos="zoom-in-left")
            i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
            | Servicio de báscula y metro para peso y talla.
          li.mb-2(data-aos="zoom-in-left")
            i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
            | Talleres y charlas en temas específicos pertinentes para la comunidad.
          li(data-aos="zoom-in-left")
            i.fas.fa-atom.fa-li(style="color:#7E5EE3;")
            | Servicios en nutrición, dentales, óticos y oftalmológicos, toma de presión arterial, entre otros, se pueden ofrecer siempre y cuando sea un profesional en el área quien atienda a los clientes.




 

      
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
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
