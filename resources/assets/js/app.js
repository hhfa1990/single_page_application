
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Vuetify from 'vuetify'
import VueRouter from 'vue-router'

import Awesome1 from './components/home/Awesome1.vue';
import Awesome2 from './components/home/Awesome2.vue';
import Awesome3 from './components/home/Awesome3.vue';

Vue.use(Vuetify)
Vue.use(VueRouter)

Vue.component('home', require('./components/home/index.vue'));

const routes = [
  { title: 'Awesome Component 1', icon: 'home', path: '/component_1', component: Awesome1 },
  { title: 'Awesome Component 2', icon: 'grade', path: '/component_2', component: Awesome2 },
  { title: 'Awesome Component 3', icon: 'face', path: '/component_3', component: Awesome3 },
]

const router = new VueRouter({
  routes: routes,
  linkActiveClass: 'list__tile--active',
});

const app = new Vue({
    el: '#app',
    data () {
      return {
        routes: routes,
      }
    },
    router,
});