import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import Commande from './components/Commande.vue';



Vue.use(Vuetify);



Vue.component('app-commande',Commande);

new Vue({
  el: '#app',

  render: h => h(App)
});
