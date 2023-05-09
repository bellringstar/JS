import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NocolorView from '../views/NocolorView.vue'
import ErrorView from '../views/404View.vue'
import SsaflingView from '../views/SsaflingView.vue'
import SsafleafView from '../views/SsafleafView.vue'
import SsaflowerView from '../views/SsaflowerView.vue'




Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/nocolor',
    name: 'nocolor',
    component: NocolorView
  },
  {
    path: '/ssafling',
    name: 'ssafling',
    component: SsaflingView
  },
  {
    path: '/ssafleaf',
    name: 'ssafleaf',
    component: SsafleafView
  },
  {
    path: '/ssaflower',
    name: 'ssaflower',
    component: SsaflowerView
  },
  {
    path: '*',
    component: ErrorView
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   console.log(to)
//   console.log(from)
//   console.log(next)
//   next()
// })

export default router
