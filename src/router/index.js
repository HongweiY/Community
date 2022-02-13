import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'
import jwt from 'jsonwebtoken'
import dayjs from 'dayjs'

const Login = () => import(/* webpackChunkName: 'login' */'@/views/Login')
const Register = () => import(/* webpackChunkName: 'register' */'@/views/Register')
const Forget = () => import(/* webpackChunkName: 'forget' */'@/views/Forget')
const Index = () => import(/* webpackChunkName: 'index' */'@/views/channels/Index')
const IndexCategory = () => import(/* webpackChunkName: 'indexCategory' */'@/views/channels/IndexCategory')
const Users = () => import(/* webpackChunkName: 'center' */'@/views/Center')
const Center = () => import(/* webpackChunkName: 'center' */'@/views/Settings')
const Home = () => import(/* webpackChunkName: 'home' */'@/views/Home')
const Msg = () => import(/* webpackChunkName: 'msg' */'@/components/center/Msg')
const Others = () => import(/* webpackChunkName: 'others' */'@/components/center/Others')
const Posts = () => import(/* webpackChunkName: 'posts' */'@/components/center/Posts')
const Setting = () => import(/* webpackChunkName: 'setting' */'@/components/center/Setting')
const Info = () => import(/* webpackChunkName: 'info' */'@/components/user/Info')
const Pic = () => import(/* webpackChunkName: 'info' */'@/components/user/Pic')
const Password = () => import(/* webpackChunkName: 'info' */'@/components/user/Password')
const Account = () => import(/* webpackChunkName: 'info' */'@/components/user/Account')
const MyPosts = () => import(/* webpackChunkName: 'info' */'@/components/contents/MyPosts')
const MyCollections = () => import(/* webpackChunkName: 'info' */'@/components/contents/MyCollections')
const NotFund = () => import(/* webpackChunkName: 'notFund' */'@/views/NotFund')

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    component: Home,
    children: [
      {
        path: '/',
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
  },
  {
    path: '/user/:uid',
    name: 'users',
    component: Users
  },
  {
    path: '/center',
    component: Center,
    meta: { requiresAuth: true },
    linkActiveClass: 'layui-this',
    children: [
      {
        path: '',
        name: '/center',
        component: Center
      },
      {
        path: '',
        name: 'center',
        component: Center
      },
      {
        path: '/msg',
        name: 'msg',
        component: Msg
      },
      {
        path: '/others',
        name: 'others',
        component: Others
      },
      {
        path: 'posts',
        component: Posts,
        linkActiveClass: 'layui-this',
        children: [{
          path: '',
          name: 'myPosts',
          component: MyPosts
        },
        {
          path: '/myCollections',
          name: 'myCollections',
          component: MyCollections
        }
        ]
      },
      {
        path: 'setting',
        component: Setting,
        linkActiveClass: 'layui-this',
        children: [
          {
            path: '',
            name: 'info',
            component: Info
          },
          {
            path: 'pic',
            name: 'pic',
            component: Pic
          },
          {
            path: 'password',
            name: 'password',
            component: Password
          },
          {
            path: 'account',
            name: 'account',
            component: Account
          }
        ]
      }
    ]
  },
  {
    path: '/404',
    component: NotFund
  },
  {
    path: '*',
    redirect: '/404'
  }

]

const router = new VueRouter({
  linkExactActiveClass: 'layui-this',
  routes
})

router.beforeEach((to, from, next) => {
  const token = JSON.parse(localStorage.getItem('token'))
  const userInfo = JSON.parse(localStorage.getItem('userInfo'))
  if (token !== null && token !== '') {
    const decoded = jwt.decode(token)
    if (dayjs().isBefore(dayjs(decoded.exp * 1000))) {
      store.commit('setToken', token)
      store.commit('setUserInfo', userInfo)
      store.commit('setIsLogin', true)
    } else {
      localStorage.clear()
    }
  }
  if (to.matched.some(record => record.meta.requiresAuth)) {
    const isLogin = store.state.isLogin
    if (isLogin) {
      next()
    } else {
      // 获取
      next('login')
    }
  } else {
    next()
  }
}
)

export default router
