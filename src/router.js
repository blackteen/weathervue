import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        component: () => import('./views/Home.vue')
      },
    //   {
    //     path: '/list',
    //     name: 'list',
    //     component: () => import('./views/List.vue')
    //   },
    //   {
    //     path: '/task/:id',
    //     name: 'task',
    //     component: () => import('./views/Task.vue')
    //   }
    ]
  })