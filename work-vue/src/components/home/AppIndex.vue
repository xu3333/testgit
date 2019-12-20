<template>
    <div>
      <el-form class="text-container" label-position="left" label-width="0px">
        <el-form-item>
          <h1 class="result-title">Hello world role1</h1>
        </el-form-item>
        <el-form-item>
          <el-input type="text" v-model:value="loginForm.username" />
        </el-form-item>
        <el-form-item>
          <el-input type="text" v-model:value="loginForm.password" />
        </el-form-item>
        <el-form-item>
          <el-input type="text" v-model:value=loginForm.autoLogin.toString() />
        </el-form-item>
        <el-form-item>
          <el-input type="text" v-model:value=loginForm.rememberPassword.toString() />
        </el-form-item>
        <el-form-item>
          <el-button id="btn1" type="primary" style="width: 100%;background: #505458;border: none" v-on:click="getName">展示</el-button>
        </el-form-item>
        <el-form-item>
          <el-button id="btn2" type="primary" style="width: 100%;background: #505458;border: none" v-on:click="backToLogin">返回</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
      name: "AppIndex",
      data(){
        return{
          loginForm: {
            username:"",
            password:"",
            autoLogin:false,
            rememberPassword:false,
            flag:0
          }
        }
      },
      methods:{
        getName(){
          let user=JSON.parse(window.localStorage.getItem("user"))
          console.log(user.username)
          console.log(user.password)
          if(this.loginForm.flag%2==0){
            this.loginForm.username=user.username
            this.loginForm.password=user.password
            this.loginForm.autoLogin=user.autoLogin
            this.loginForm.rememberPassword=user.rememberPassword
            document.getElementById("btn1").innerText="hide"
            this.loginForm.flag++
          }else {
            this.loginForm.username=""
            this.loginForm.password=""
            this.loginForm.autoLogin=""
            this.loginForm.rememberPassword=""
            document.getElementById("btn1").innerText="show"
            this.loginForm.flag++
          }

          // this.loginForm.username=name
          // document.getElementById("name").value="222"
          // this.document.getElementById("name").text="222"
          // this.document.getElementById("name").textContent="222"
        },
        backToLogin(){
          window.localStorage.clear()
          this.$router.replace({path:"/login"})
        }
      }

    }
</script>

<style scoped>
  .result-title{
    margin: 0px 40px 0px 40px;
    text-align: center;
    color: aqua;
  }

  .text-container{
    border-radius: 15px;
    background-clip: padding-box;
    margin: 30px auto;
    width: 350px;
    padding: 20px 20px 20px 20px;
    background: #ffffff;
    border: 1px solid #42b983;
    box-shadow: 0 0 25px #505458;
  }

</style>
