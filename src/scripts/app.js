import Vue from 'vue'
import App from './components/App.vue'
import '../sass/app.scss'
import 'bootstrap'

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})