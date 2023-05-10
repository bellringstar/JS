import Vue from 'vue'
import VueRouter from 'vue-router'
import AllTodoPage from '../views/AllTodoPage.vue'
import ImportantTodoPage from '../views/ImportantTodoPage.vue'
import TodayTodoPage from '../views/TodayTodoPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'All',
    component: AllTodoPage
  },
  {
    path: '/today',
    name: 'Today',
    component: TodayTodoPage
  },
  {
    path: '/important',
    name: 'Important',
    component: ImportantTodoPage
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
