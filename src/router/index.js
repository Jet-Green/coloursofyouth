import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/who-are-we',
    name: 'WhoAreWe',
    component: () => import('../components/whoAreWe.vue')
  },
  {
    path: '/purpose',
    name: 'Purpose',
    component: () => import('../components/purpose.vue')
  },
  {
    path: '/about',
    name: 'AboutUs',
    component: () => import('../components/aboutUs.vue')
  },
  {
    path: '/workflow',
    name: 'HowItWorks',
    component: () => import('../components/howItWorks.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
