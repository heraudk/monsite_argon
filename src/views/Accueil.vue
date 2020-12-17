<template>
    <!-- <section class="section section-lg section-shaped overflow-hidden my-0"> -->   
    <section>   
                 
            <p></p>

            <b-container class="bv-example-row">                
                                
                
               

                <hr class="featurette-divider">
                <div class="row featurette">

                <div class="col-md-12 col-lg-7">
                    <h2 class="featurette-heading"> <span class="text-muted"></span></h2>
<p class="lead">Notre agence web accompagne nos clients dans la <font>création 
de site internet</font> ou la <font>refonte de votre site</font> web:
<pre>
- gestion de projet
- audit technique
- l'identité visuelle à votre image
- design & ergonomie
- conception graphique
- expérience client
- développement web sur-mesure
- référencement naturel
- référencement payant
- média sociaux
 </pre>
</p>


                </div>

                <div class="col-md-12 col-lg-5">
                    <img src="img/brand/unnamed (1).jpg" width="100%" height="100%" alt="">
                </div>
                </div>




                <hr class="featurette-divider">        
                <div class="row featurette">
                <div class="col-md-12 col-lg-7 order-2">
                    <h2 class="featurette-heading"> <span class="text-muted"></span></h2>
                    <p class="lead">
              <br> vous confiez la création de votre site internet à une agence web ?
              Notre agence conseil est <font>spécialiste dans la création de site web</font> afin 
              de répondre à tous vos besoins et d'élaborer une véritable <font>stratégie 
              digitale sur-mesure</font>.<br>
  
              <br>Construire un site web requiert des compétences en graphisme
              pour la <font>réalisation de votre logo</font> et design des pages du site, 
              webmarketing pour avoir un site web performant et <font>générer de 
              nouveaux clients</font> et enfin en référencement naturel et payant pour être 
              visible sur Google et développer votre acquisition de trafic. <br> 
              
               </p>

                </div>
                <div class="col-md-12 col-lg-5 ">
                    <img src="img/brand/mathilde.jpg" width="100%" height="100%" alt="">
                </div>
                </div>       






 <div class="video"> 
 <iframe width="350" height="315" src="https://www.youtube.com/embed/56NfqCe9Uc4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
 </div>
             





















    
                
            </b-container>


    </section>  



    
</template>






<script>
import { BCarousel } from "bootstrap-vue/esm/components/carousel/carousel";
import { BCarouselSlide } from "bootstrap-vue/esm/components/carousel/carousel-slide";
import { BCard } from "bootstrap-vue/esm/components/card";
import { BContainer, BCol, BRow } from "bootstrap-vue/esm/components/layout";

export default {
  components: {
    BCarousel,
    BCarouselSlide,
    BCard,
    BContainer,
    BCol,
    BRow
  },
  data () {
    return {
        message: 'Hello vue.js'
    }
  }
};
</script>




<style>
iframe

    {
           max-width: 580px;
           height: 380px;
         }



</style>