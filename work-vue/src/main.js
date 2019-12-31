// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from "../src/store"
import el from "element-ui/src/locale/lang/el";
// 设置反向代理，前端请求默认发送到 http://localhost:8443/api
let axios=require('axios')
axios.defaults.baseURL='http://localhost:8443/api'
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios=axios
Vue.config.productionTip = false

Vue.use(ElementUI)

router.beforeEach((to,from,next) =>{
  if(to.meta.requireAuth){
    if(store.state.user.username){
      if(store.state.user.role==="0"){
        console.log("main"+store.state.user.role)
        next({
          query:{redirect:'wuye'}
        })
      }else if (store.state.user.role==="1"){
        console.log("main"+store.state.user.role)
        next({
          query:{redirect:'yezhu'}
        })
      }
      console.log("main"+store.state.user.role)
    }else {
      next({
        path:'login',
        query:{redirect:to.fullPath}
      })
    }
  }else {
    next()
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
