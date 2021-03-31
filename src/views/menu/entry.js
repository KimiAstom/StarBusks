import Vue from 'vue'
import App from './index.vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'
Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
