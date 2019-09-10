import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('./views/Home.vue')
    },
    {
      path: '/homeone',
      name: 'homeone',
      component: () => import('./views/HomeOne.vue')
    },
    {
      path: '/hometwo',
      name: 'hometwo',
      component: () => import('./views/HomeTwo.vue')
    }
  ]
})
