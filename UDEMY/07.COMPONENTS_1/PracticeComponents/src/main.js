import Vue from 'vue'
import App from './App.vue'
import Header from './Header.vue'
import Footer from './Footer.vue'
import Servers from './Servers.vue'

Vue.component('header-app', Header);
Vue.component('footer-app', Footer);
Vue.component('servers', Servers);
new Vue({
  el: '#app',
  render: h => h(App)
})
