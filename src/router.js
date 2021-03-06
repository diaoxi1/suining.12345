import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
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
            path: '/work-list/:key?',
            name: 'work-list',
            component: () => import('./views/work-list/index.vue')
        },
        {
          path: '/news-info/:id',
          name: 'news-info',
          component: () => import('./views/news-info/index.vue')
        },
        {
          path: '/appeal-list',
          name: 'appeal-list',
          component: () => import('./views/appeal-list/index.vue')
        },
        {
          path: '/appeal-info/:id',
          name: 'appeal-info',
          component: () => import('./views/appeal-info/index.vue')
        },
      {
          path: '/submit/:type',
          name: 'submit',
          meta:{
              isLogin:true
          },
          component: () => import('./views/submit/index.vue')
      },
      {
          path: '/user',
          name: 'user',
          meta:{
              isLogin:true
          },
          component: () => import('./views/user/index.vue')
      },
  ],
  scrollBehavior: () => ({ y: 0 })
})

