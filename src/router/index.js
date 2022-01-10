import Vue from 'vue'
import VueRouter from 'vue-router'
import welcome from '../components/welcome.vue'
import justLogo from '../components/justLogo.vue'
import whoAreWe from '../components/whoAreWe.vue'
import aboutUs from '../components/aboutUs.vue'
import howItWorks from '../components/howItWorks.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'welcome',
    component: welcome
  },
  {
    path: '/logo',
    name: 'justLogo',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: justLogo
  },
  {
    path: '/who-are-we',
    name: 'whoAreWe',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: whoAreWe
  },
  {
    path: '/about-us',
    name: 'aboutUs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: aboutUs
  },
  {
    path: '/workflow',
    name: 'howItWorks',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: howItWorks
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
