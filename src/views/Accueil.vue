<template>
    <!-- <section class="section section-lg section-shaped overflow-hidden my-0"> -->
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
                            caption="Les bienfaits de la montagne l'été"
                            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." 
                            img-src="img/mountains/montagne2.jpg">
                        </b-carousel-slide>
                        <b-carousel-slide
                            caption="Séjour ski"
                            text="Praesent commodo cursus magna, vel scelerisque nisl consectetur." 
                            img-src="img/mountains/montagne4.jpg">
                        </b-carousel-slide>
                    </b-carousel>
            <p></p>
            <!-- <carousel2></carousel2>
            <p></p> -->
            <b-container class="bv-example-row">                
                <b-row>
                    <b-col cols="12" md="4" class="text-center">
                        <img v-lazy="'img/theme/gite.jpg'" alt="Raised circle image"
                            class=" rounded-circle shadow-lg" style="width: 150px;">
                        <h2>Gîte</h2>
                        <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>                           
                    </b-col>
                    <b-col cols="12" md="4" class="text-center">
                        <img v-lazy="'img/theme/randonnee.jpg'" alt="Raised circle image"
                            class="img-fluid rounded-circle shadow-lg" style="width: 150px;">
                        <h2>Randonnée</h2>
                        <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>        
                    </b-col>
                    <b-col cols="12" md="4" class="text-center">
                        <img v-lazy="'img/theme/ski.jpg'" alt="Raised circle image"
                            class="img-fluid rounded-circle shadow-lg" style="width: 150px;">
                        <h2>ski</h2>
                        <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
                        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>                       
                    </b-col>              
                </b-row>

                <hr class="featurette-divider">
                <div class="row featurette">
                <div class="col-md-7">
                    <h2 class="featurette-heading">First featurette heading. <span class="text-muted">It’ll blow your mind.</span></h2>
                    <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div class="col-md-5">
                    <img src="img/mountains/montagne3.jpg" width="100%" height="100%" alt="">
                </div>
                </div>
                <hr class="featurette-divider">        
                <div class="row featurette">
                <div class="col-md-7 order-md-2">
                    <h2 class="featurette-heading">Oh yeah, it’s that good. <span class="text-muted">See for yourself.</span></h2>
                    <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div class="col-md-5 order-md-1">
                    <img src="img/mountains/montagne5.jpg" width="100%" height="100%" alt="">
                </div>
                </div>        
                <hr class="featurette-divider">            
                <div class="row featurette">
                <div class="col-md-7">
                    <h2 class="featurette-heading">And lastly, this one. <span class="text-muted">Checkmate.</span></h2>
                    <p class="lead">Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Fusce dapibus, tellus ac cursus commodo.</p>
                </div>
                <div class="col-md-5">
                    <img src="img/mountains/vtt.jpg" width="100%" height="100%" alt="">
                </div>
                </div>
            </b-container>
    </section>  
</template>

<script>
// import Carousel2 from "./components/Carousel2";
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";
import { BCard } from "bootstrap-vue/esm/components/card";
import { BContainer, BCol, BRow } from "bootstrap-vue/esm/components/layout";

export default {
  components: {
    Carousel2,
    BCarousel,
    BCarouselSlide,
    BCard,
    BContainer,
    BCol,
    BRow
  }
};
</script>
