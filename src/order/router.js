import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/order',
      name: 'order',
      component: () => import('./views/Order.vue')
    },
    {
      path: '/orderone',
      name: 'orderone',
      component: () => import('./views/OrderOne.vue')
    },
    {
      path: '/ordertwo',
      name: 'ordertwo',
      component: () => import('./views/OrderTwo.vue')
    },
  ]
})
