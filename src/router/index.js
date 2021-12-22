import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'

const Login = () => import(/* webpackChunkName: 'login' */'@/views/Login')
const Register = () => import(/* webpackChunkName: 'register' */'@/views/Register')
const Forget = () => import(/* webpackChunkName: 'forget' */'@/views/Forget')
const Index = () => import(/* webpackChunkName: 'index' */'@/views/channels/Index')
const IndexCategory = () => import(/* webpackChunkName: 'indexCategory' */'@/views/channels/IndexCategory')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        name: 'index',
        component: Index
      },
      {
        path: 'index/:category',
        name: 'indexCategory',
        component: IndexCategory
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    beforeEnter: (to, from, next) => {
      if (from.name === 'login') {
        next()
      } else {
        next('login')
      }
    }
  },
  {
    path: '/forget',
    name: 'forget',
    component: Forget
  }

]

const router = new VueRouter({
  linkExactActiveClass: 'layui-this',
  routes
})

export default router
