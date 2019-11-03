import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
        component: () => import('./views/home/index.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login/index.vue')
     },
     {
          path: '/register',
          name: 'register',
          component: () => import('./views/register/index.vue')
     },
    {
        path: '/work-list',
        name: 'work-list',
        component: () => import('./views/work-list/index.vue')
    },
    {
      path: '/news-info/:id',
      name: 'news-info',
      component: () => import('./views/news-info/index.vue')
    }
  ],
  scrollBehavior: () => ({ y: 0 })
})
