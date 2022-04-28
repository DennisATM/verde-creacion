import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Catalogo from '../views/Catalogo.vue'
import Carrito from '../views/Carrito.vue'
import Login from '../views/Login.vue'
import HomeAdmin from '../views/HomeAdmin.vue'
import MainProduct from '../views/MainProduct.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Catalogo',
    name: 'Catalogo',
    component: Catalogo
  },
  {
    path: '/Carrito',
    name: 'Carrito',
    component: Carrito
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/HomeAdmin',
    name: 'HomeAdmin',
    component: HomeAdmin
  },
  {
    path: '/mainProduct',
    name: 'MainProduct',
    component: MainProduct
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router