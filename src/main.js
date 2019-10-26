import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import sysApi from './api/sys-api'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'amfe-flexible';

Vue.use(Vant);
Vue.use(sysApi)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
