import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Navigation from 'vue-navigation'
// 引入axios文件
import axios from 'axios'
// import VueAxios from 'vue-axios'
// Vue.use(VueAxios, axios)

Vue.use(Navigation, {
  router, store
})

// 引入UI组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 引入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
