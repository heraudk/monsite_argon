 import Vue from "vue";
 import Router from "vue-router";
 import AppHeader from "./layout/AppHeader";
 import AppFooter from "./layout/AppFooter";
 import Components from "./views/Components.vue";
 import Accueil from "./views/Accueil.vue";
 import Landing from "./views/Landing.vue";
 import Login from "./views/Login.vue";
 import Register from "./views/Register.vue";
 import Profile from "./views/Profile.vue";
 import espaceclient from "./views/espaceclient.vue";
 import formulaire from "./views/formulaire.vue";
 


 Vue.use(Router);

 export default new Router({
     linkExactActiveClass: "active",
     routes: [{
             path: "/components",
             name: "components",
             components: {
                 header: AppHeader,
                 default: Components,
                 footer: AppFooter
             }
         },
         {
             path: "/",
             name: "accueil",
             components: {
                 header: AppHeader,
                 default: Accueil,
                 footer: AppFooter
             }
         },
         {
             path: "/landing",
             name: "landing",
             components: {
                 header: AppHeader,
                 default: Landing,
                 footer: AppFooter
             }
         },
         {
             path: "/login",
             name: "login",
             components: {
                 header: AppHeader,
                 default: Login,
                 footer: AppFooter
             }
         },
         {
             path: "/register",
             name: "register",
             components: {
                 header: AppHeader,
                 default: Register,
                 footer: AppFooter
             }
         },
         {
             path: "/profile",
             name: "profile",
             components: {
                 header: AppHeader,
                 default: Profile,
                 footer: AppFooter
             }
         },
         {
            path: "/espaceclient",
            name: "espaceclient",
            components: {
                header: AppHeader,
                default: espaceclient,
                footer: AppFooter
            }
        },
        {
            path: "/formulaire",
            name: "formulaire",
            components: {
                header: AppHeader,
                default: formulaire,
                footer: AppFooter
            }
        }
      
     ],











     scrollBehavior: to => {
         if (to.hash) {
             return { selector: to.hash };
         } else {
             return { x: 0, y: 0 };
         }
     }
 });