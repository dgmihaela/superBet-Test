import Vue from 'vue';
import store from './vuex/index.js'
import BootstrapVue from 'bootstrap-vue'
import AppLayout from './theme/Layout.vue';
import router from './router'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);

console.log(AppLayout)

const app = new Vue({
  router,
  ...AppLayout,
  store
})

export { app, router, store }
