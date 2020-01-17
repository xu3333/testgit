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
      let dR1=new Array()
      if(window.localStorage.getItem('user')){
        for(let i=0;i<dynamicRouter.length;i++){
          console.log("App length:"+dynamicRouter.length)
          if(JSON.parse(window.localStorage.getItem('user')).role===dynamicRouter[i].meta.role){
            dR1.push(dynamicRouter[i])
          }
        }
        console.log("App1")
        if(dR1){
          this.$router.addRoutes(dR1)
          console.log("App2")
        }
      }
      console.log("App3")
    }
  },
  created() {
    // /**
    //  *判断浏览器窗口是刷新或者关闭操作
    //  * 无论任何浏览器不管是刷新或者是关闭都会执行下面两个方法 onbeforeunload  onunload
    //  * 根据时间差来实现
    //  * 在点击刷新或者关闭时开始计时记录下这一刻的时间戳
    //  * 因为刷新和关闭 在执行onunload方法时的时间不一样，一般情况下经过测试
    //  * 关闭时时间差不大于3毫秒
    //  * 刷新时即使只有一个简单的helloworld页面都不少于10毫秒
    //  * 而一般网站网页内容更多，时间差达到了100多毫秒
    //  *
    //  *
    //  * 下面方法的缺点是不管你开了多少窗口，都会在关闭一个窗口时清空所有localStorage缓存
    //  * 造成所有页面都需要重新登录，其实这也是针对项目而言的，目前本项目就不认为这是缺点
    //  * 而能更好的保护用户信息
    //  **/
    // let beginTime = 0//开始时间
    // let differTime = 0//时间差
    // let judge1=null
    // let judge2=null
    // window.onbeforeunload=function(){
    //   // event.returnValue="onbeforeunload"
    //   judge1="onbeforeunload"
    //   beginTime = new Date().getTime()
    // }
    // window.onunload=function(){
    //   differTime = new Date().getTime() - beginTime
    //   if(differTime <= 5){
    //     judge2="clear"
    //     window.localStorage.clear()
    //   }else{
    //     judge2="save"
    //   }
    // }
    this.judgeLogin()
    // console.log("judge1:"+judge1)
    // console.log("judge2:"+judge2)
    // console.log("differTime:"+differTime)
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

