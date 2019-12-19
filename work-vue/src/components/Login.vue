<template>
  <body id="poster">
    <el-form class="login-container" label-position="left"
             label-width="0px">
      <h3 class="login_title">系统登录</h3>
      <el-form-item>
        <el-input type="text" v-model="loginForm.username"
                  auto-complete="off" placeholder="账号"/>
      </el-form-item>
      <el-form-item>
        <el-input type="password" v-model="loginForm.password"
                  auto-complete="off" placeholder="密码"/>
      </el-form-item>
      <el-form-item>
        <div>
          <tr>
            <td>
              <el-checkbox id="autoLogin" style="width: 100%;background: white" v-model:checked="loginForm.autoLogin">自动登录</el-checkbox>
            </td>
            <td>
              <el-checkbox id="rememberPassword" style="width: 100%;background: white" v-model="loginForm.rememberPassword">记住密码</el-checkbox>
            </td>
          </tr>
        </div>
      </el-form-item>
      <el-form-item style="width: 100%">
        <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="login">登录</el-button>
      </el-form-item>
        <a href="/registe" style="left: 45%;position: relative">注册</a>
    </el-form>
  </body>
</template>


<script>
export default {
  name: 'Login',
  data(){
    return{
        loginForm:{
          username:'',
          password:'',
          autoLogin:false,
          rememberPassword:false,
          flag:0
        },
    responseResult:[]
    }
  },

  mounted:function () {
    let user=JSON.parse(window.localStorage.getItem("user"))
    console.log("111")
    console.log(user)
    if(user){
      if(user.autoLogin===true){
        this.$router.replace({path:"/index"})
      }
      if(user.rememberPassword===true){
        this.loginForm.username=user.username
        this.loginForm.password=user.password
        this.loginForm.rememberPassword=true
      }
    }
  },

  methods:{
      login(){
        let _this=this
        this.$axios
            .post('/login',{
                username: this.loginForm.username,
                password: this.loginForm.password
            })
            .then(successResponse=>{
                if(successResponse.data.code===200){
                  // if(document.getElementById("autoLogin").checked==true){
                  //   this.loginForm.autoLogin=true
                  // }
                  // if(document.getElementById("rememberPassword").checked==true){
                  //   this.loginForm.rememberPassword=true
                  // }
                  _this.$store.commit('login',_this.loginForm)
                  let path=this.$route.query.redirect
                  this.$router.replace({path:path==='/'||path===undefined?'/index':path})
                }
            })
            .catch(failResponse=>{
            })
      }
    }
}
</script>
<style>
  #poster{
    background: url("../assets/main.jpg") no-repeat center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;
  }

  body{
    margin: 0px;
  }

  .login-container {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 90px auto;
    width: 350px;
    padding: 35px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }

  .login_title {
    margin: 0px auto 30px auto;
    text-align: center;
    color: #505458;
  }

  .el-form-item{
    margin: 0 auto 15px auto;
  }

</style>

