import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import User from './views/User.vue'

Vue.use(Router)

export default new Router({
  // linkActiveClass:'aqqqaa',
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      component: Home,
      children:[
        {
          path:'news',
          component:() => import('./views/HomeNews.vue')
        },
        {
          path:'message',
          component:() => import('./views/HomeMessages.vue')
        }
      ]
    },
    {
      path: '/about',

      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path:'/user/:userId',
      component:User,
    }
  ]
})
