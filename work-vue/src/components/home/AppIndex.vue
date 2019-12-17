<template>
    <div>
      Hello World!
      <el-input id="name" type="text" v-model="loginForm.username"/>
      <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="getName">登录</el-button>
    </div>
</template>

<script>
    export default {
      name: "AppIndex",
      data(){
        return{
          loginForm: {
            username:'',
            password:''
          }
        }
      },
      methods:{
        getName(){
          let name=localStorage.getItem("username")
          this.loginForm.username=name
        }
      }

    }
</script>

<style scoped>

</style>
