import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.config.devtools = true

import plugins from './plugins'
Vue.use(plugins)

import 'element-ui/lib/theme-chalk/index.css'
import '@ast/css/app.less'

new Vue({
  	router,
  	store,
  	render: h => h(App)
}).$mount('#app')
