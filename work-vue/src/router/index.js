import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from "../components/Login"
import AppIndex from "../components/home/AppIndex"
import Register from "../components/Register";
import SecondAppIndex from "../components/home/SecondAppIndex";

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/wuyeIndex',
      name: 'AppIndex',
      component: AppIndex,
      meta:{
        requireAuth:true
      }
    },
    {
      path: '/yezhuIndex',
      name: 'SecondAppIndex',
      component: SecondAppIndex,
      meta:{
        requireAuth: true
      }
    },
    {
      path: '/registe',
      name: 'Register',
      component: Register
    }
  ]

})
