import Vue from 'vue'
import App from './index.vue'
import axios from 'axios'
// AA
axios.defaults.baseURL = 'http://localhost:3000'
Vue.config.productionTip = false
Vue.prototype.axios = axios
new Vue({
  render: h => h(App)
}).$mount('#app')
