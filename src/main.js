import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import sysApi from './api/sys-api'
import Vant from 'vant';
import 'vant/lib/index.css';
import '@/style/index.css';
import 'amfe-flexible';
import echarts from 'echarts'
import copyright from "./components/copyright"
import 'swiper/css/swiper.css'

Vue.use(Vant);
Vue.use(sysApi)

Vue.prototype.$echarts = echarts
Vue.component('copyright',copyright)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if(to.meta.isLogin){
    if(store.getters.getToken){
      next()
    }else{
      next({
        name: 'login' // 跳转到PKI登录页
      })
    }
  }else {
    next()
  }

})



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
