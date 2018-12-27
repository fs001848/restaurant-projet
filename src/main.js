import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';
import 'vuetify/dist/vuetify.min.css';
import Menu from './components/Menu.vue';



Vue.use(Vuetify);

Vue.use(VueRouter);


const routes = [

  {path:'/menu', component: Menu}
];


const router = new VueRouter({

  routes: routes,

  mode:'history'

});

new Vue({
  el: '#app',
  router:router,
  render: h => h(App)
});
