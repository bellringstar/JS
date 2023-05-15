import Vue from 'vue'
import VueRouter from 'vue-router'
import TodoList from '@/views/todos/TodoList'
import CreateTodo from '@/views/todos/CreateTodo'
import SignupPage from '@/views/accounts/SignupPage'
import LoginPage from '@/views/accounts/LoginPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/todos',
    name: 'TodoList',
    component: TodoList,
  },
  {
    path: '/todos/create',
    name: 'CreateTodo',
    component: CreateTodo,
  },
  {
    path: '/accounts/Signup',
    name: 'Signup',
    component: SignupPage,
  },
  {
    path: '/accounts/login',
    name: 'Login',
    component: LoginPage,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
