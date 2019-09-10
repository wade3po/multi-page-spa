import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/user',
      name: 'user',
      component: () => import('./views/User.vue')
    },
    {
      path: '/userone',
      name: 'userone',
      component: () => import('./views/UserOne.vue')
    },
    {
      path: '/usertwo',
      name: 'usertwo',
      component: () => import('./views/UserTwo.vue')
    }
  ]
})
