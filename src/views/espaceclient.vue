<template>
    

  <div class="inscription">
      
        <form>
            <div class="form-group col-md-6">
              <label for="exampleInputEmail1">Adresse Email :</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
              <small id="emailHelp" class="form-text text-muted">Vos données resteront confidentielles</small>
            </div>
            <div class="form-group col-md-6">
              <label for="exampleInputPassword1">Mot de passe :</label>
              <input type="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1"> Rester connecter</label>
            </div>
            <button type="submit" class="btn btn-primary">Se connecter</button>            
            
           
           





               



          </form>
            
    
          <br>Vous n'avez pas encore de compte ? <router-link to="/formulaire">Créer un compte</router-link>  <br>  

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
