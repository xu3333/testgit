import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from "../components/Login"
import wuyeIndex from "../components/home/WuyeIndex"
import Register from "../components/Register"
import yezhuIndex from "../components/home/YezhuIndex"
import wuyeHome from "../components/home/WuyeHome";
import yezhuHome from "../components/home/YezhuHome";
import LibraryIndex from "../components/library/LibraryIndex";

Vue.use(Router)

const router=new Router({
  mode:'history',
  routes:[
    {
      path:'/',
      name:'HelloWorld',
      component:resolve=>require(['../components/HelloWorld.vue'],resolve)
    },
    {
      path: '/login',
      name: 'Login',
      component: resolve => require(['../components/Login.vue'],resolve)
    },
    {
      path:'/registe',
      name:'Register',
      component:resolve => require(['../components/Register.vue'],resolve)
    }
  ]
});
export default router

export const dynamicRouter=[
  {
    path:'/wuyeHome',
    name:'wuyeHome',
    component:wuyeHome,
    redirect:'/wuyeIndex',
    children:[
      {
        path:'/wuyeIndex',
        name:'wuyeIndex',
        component:wuyeIndex,
        meta:{
          requireAuth:true,
          role:"0",
          front:"/wuye"
        }
      },
      {
        path: '/library',
        name: 'Library',
        component: LibraryIndex,
        meta: {
          requireAuth: true,
          role: 0
        }
      }
    ],
    meta:{
      requireAuth:true,
      role:"0",
      front:"/wuye"
    }
  },
  {
    path:'/yezhuHome',
    name:'yezhuHome',
    component:yezhuHome,
    redirect:'/yezhuIndex',
    children:[
      {
        path: '/yezhuIndex',
        name: 'yezhuIndex',
        // component:resolve => require(['../components/home/YezhuIndex.vue'],resolve),
        component: yezhuIndex,
        meta: {
          requireAuth: true,
          role:"1",
          front:"/yezhu"
        }
      }
    ],
    meta: {
      requireAuth: true,
      role:"1",
      front:"/yezhu"
    }
  }
]

// export default new Router({
//   mode:'history',
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     },
//     {
//       path: '/login',
//       name: 'Login',
//       component: Login
//     },
//     {
//       path: '/wuyeIndex',
//       name: 'AppIndex',
//       component: AppIndex,
//       meta:{
//         requireAuth:true
//       }
//     },
//     {
//       path: '/yezhuIndex',
//       name: 'SecondAppIndex',
//       component: SecondAppIndex,
//       meta:{
//         requireAuth: true
//       }
//     },
//     {
//       path: '/registe',
//       name: 'Register',
//       component: Register
//     }
//   ]
//
// })
