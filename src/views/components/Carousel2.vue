<template>
    <section>
        <b-carousel id="carousel1"
                    controls
                    indicators>
            <!-- Text slides with image -->
            <b-carousel-slide
                caption="Les plus belles photos des Alpes"
                text="Nulla vitae elit libero, a pharetra augue mollis interdum." 
                img-src="img/mountains/montagne1.jpg">
            </b-carousel-slide>
            <b-carousel-slide
                caption="Les bienfaits de la montagne l'Ã©tÃ©"
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
                img-src="img/mountains/montagne2.jpg">
            </b-carousel-slide>
            <b-carousel-slide
                caption="SÃ©jour ski"
                text="Praesent commodo cursus magna, vel scelerisque nisl consectetur." 
                img-src="img/mountains/montagne4.jpg">
            </b-carousel-slide>
        </b-carousel>
    </section>
</template>
<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";

export default {
  components: {
    BCarousel,
    BCarouselSlide
  }
};
</script>
<style>
</style>