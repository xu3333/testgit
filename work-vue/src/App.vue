<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {router,dynamicRouter} from "./router/index.js"

export default {
  name: 'App',
  methods:{
    judgeLogin(){
      let autoLogin=JSON.parse(window.localStorage.getItem('user')).autoLogin
      if(!autoLogin){
        return this.$router.push('/login')
      }else {
        let dR=new Array()
        let front=null
        for(let i=0;i<dynamicRouter.length;i++){
          if(JSON.parse(window.localStorage.getItem('user')).role===dynamicRouter[i].meta.role){
            dR.push(dynamicRouter[i])
            front=dynamicRouter[i].meta.front
          }
        }
        this.$router.addRoutes(dR)
        console.log(front+'Index')
        let path=front+"Index"
        this.$router.push({path:path})
      }
    }
    // judgeLogin(){
    //   let isLogin=store.state.token
    //   if(!isLogin){
    //     return this.$router.push('/login')
    //   }else {
    //     let dR=new Array()
    //     for(let i=0;i<dynamicRouter.length;i++){
    //       if(dynamicRouter[i].meta.role==store.state.role){
    //         dR.push(dynamicRouter[i])
    //       }
    //     }
    //   }
    //   this.$router.addRoutes(dR)
    // }
  },
  created() {
    this.judgeLogin()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

