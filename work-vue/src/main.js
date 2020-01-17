// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router, {dynamicRouter} from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from "../src/store"
import el from "element-ui/src/locale/lang/el";
import th from "element-ui/src/locale/lang/th";
// 设置反向代理，前端请求默认发送到 http://localhost:8443/api
let axios=require('axios')
axios.defaults.baseURL='http://localhost:8443/api'
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios=axios
Vue.config.productionTip = false

Vue.use(ElementUI)

router.beforeEach((to,from,next) =>{
  // if(to.meta.requireAuth){
  //   if(store.state.user.username){
  //     next()
  //   }else {
  //     next({
  //       path:'login',
  //       query:{redirect:to.fullPath}
  //     })
  //   }
  // }else {
  //   next()
  // }
  // let dR1=new Array()
  // for(let i=0;i<dynamicRouter.length;i++){
  //   console.log("length:"+dynamicRouter.length)
  //   if(JSON.parse(window.localStorage.getItem('user')).role===dynamicRouter[i].meta.role){
  //     dR1.push(dynamicRouter[i])
  //   }
  // }
  // this.$router.addRoutes(dR1)
  console.log("to:"+to.fullPath)
  console.log("from:"+from.fullPath)
  console.log("to.meta.requireAuth:"+to.meta.requireAuth)
  console.log(router)
  console.log(dynamicRouter)

  if(to.meta.requireAuth){
    console.log("to1:"+to.fullPath)
    if(store.state.user.username){
      next()
    }else {
      let autoLogin=JSON.parse(window.localStorage.getItem('user')).autoLogin
      if(!autoLogin) {
        next({
          path: 'login'
        })
      }else {
        let dR=new Array()
        let front=null
        for(let i=0;i<dynamicRouter.length;i++){
          console.log("main length:"+dynamicRouter.length)
          if(JSON.parse(window.localStorage.getItem('user')).role===dynamicRouter[i].meta.role){
            dR.push(dynamicRouter[i])
            front=dynamicRouter[i].meta.front
          }
        }
        this.$router.addRoutes(dR)
        let path=front+"Index"
        next({
          path:path
        })
      }
    }
  }else {
    console.log("转折失效")
    if(to.path==='/login'){
      next()
    }else {
      next('/login')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h=>h(App),
  router,
  store,
  components: { App },
  template: '<App/>'
})
