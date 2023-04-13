import Vue from 'vue'
import App from './App.vue'
// elent ui 
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入router
import router from './router/index'

// 引入vuex
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
