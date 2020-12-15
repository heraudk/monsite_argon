
<template>





<div>

<img src="img/brand/bandeau test 11.png" class="img-fluid" alt="Responsive image">
 
   


    <b-navbar toggleable="lg" >
        
       

        <b-navbar-brand><router-link to="/"><img src="img/brand/LOGOOO PAINT JAUNE PEIT- CopieBETA.png" style="width:232px; height:100px;" alt="Mon site"></router-link>
           
        </b-navbar-brand>

        <b-navbar-toggle  style="color:black;" target="nav-collapse">☰</b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                 <b-nav-item><router-link to="/Expertise">EXPERTISE</router-link></b-nav-item>
                  <b-nav-item><router-link to="/Notrehistoire">NOTRE HISTOIRE</router-link></b-nav-item>
                   <b-nav-item><router-link to="/espaceclient">ESPACE CLIENT</router-link></b-nav-item>
            </b-navbar-nav>
     
            <!-- Right aligned nav items -->
           
        </b-collapse>
    </b-navbar>
 
 
</div>



 






</template>






<script>
import { BNavbar, BNavbarBrand, BNavbarToggle, BNavbarNav } from "bootstrap-vue/esm/components/navbar";
import { BCollapse } from "bootstrap-vue/esm/components/collapse";
import { BNavItem, BNavItemDropdown, BNavForm } from "bootstrap-vue/esm/components/nav";  
import { BDropdownItem } from "bootstrap-vue/esm/components/dropdown";
import { BFormInput } from "bootstrap-vue/esm/components/form-input";
import { BButton } from "bootstrap-vue/esm/components/button";





export default {
  components: {
    BNavbar,
    BNavbarBrand,
    BNavbarToggle,        
    BCollapse,
    BNavbarNav,    
    BNavItem,
    BNavItemDropdown,        
    BDropdownItem,
    BNavForm,
    BFormInput,
    BButton, 
  
    
  }
};



</script>



<style>





</style>


