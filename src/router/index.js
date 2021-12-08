import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import(/* webpackChunkName: 'login' */'../views/Login')
const Register = () => import(/* webpackChunkName: 'register' */'../views/Register')
const Forget = () => import(/* webpackChunkName: 'forget' */'../views/Forget')

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  }, {
    path: '/register',
    name: 'register',
    component: Register
  }, {
    path: '/forget',
    name: 'forget',
    component: Forget
  }

]

const router = new VueRouter({
  routes
})

export default router
