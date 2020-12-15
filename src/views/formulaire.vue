<template>
    
<div class="formulaire">
      
        <form>
            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Nom :</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="">
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Prénom :</label>
                <input type="password" class="form-control" id="inputPassword4" placeholder="">
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress">Adresse :</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="">
            </div>
            <div class="form-group">
              <label for="inputAddress">Société :</label>
              <input type="text" class="form-control" id="inputAddress" placeholder="">
            </div>



            <div class="form-row">
              <div class="form-group col-md-6">
                <label for="inputCity">Ville :</label>
                <input type="text" class="form-control" id="inputCity">
              </div>
              
              <div class="form-group col-md-2">
                <label for="inputZip">Code postal :</label>
                <input type="text" class="form-control" id="inputZip">
              </div>
            </div>
            

          
           







          </form>
          




    
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">Adresse Email :</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="mon-nom@adresse.com">
              <small id="emailHelp" class="form-text text-muted">Vos données resteront confidentielles</small>
            </div>


            <div class="form-group">
              <label for="exampleInputPassword1">Mot de passe :</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Doit faire au minimum 6 caractères">
            </div>

            <div class="form-group">
              <label for="exampleInputPassword1">Confirmer le mot de passe :</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Doit faire au minimum 6 caractères">
            </div>

            <div class="form-group form-check">
              
            </div>
            <button type="submit" class="btn btn-primary">Valider :</button>
          </form>




        </div>


    
    











































   
</template>
<script>
import Carousel from "./components/Carousel";

export default {
  name: "acccueil",
  components: {
    Carousel
  }
}
</script>
