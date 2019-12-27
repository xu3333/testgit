<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {router,dynamicRouter} from "./router/index.js";

export default {
  name: 'App',
  methods:{
    judgeLogin(){
      let isLogin=store.state.token
      if(!isLogin){
        return this.$router.push('/login')
      }else {
        let dR=new Array()
        for(let i=0;i<dynamicRouter.length;i++){
          if(dynamicRouter[i].meta.role==store.state.role){
            dR.push(dynamicRouter[i])
          }
        }
      }
      this.$router.addRoutes(dR)
    }
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

