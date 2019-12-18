<template>
    <div>
      <el-form class="text-container" label-position="left" label-width="0px">
        <el-form-item>
          <h1 class="title">注册</h1>
        </el-form-item>
        <el-form-item>
          <el-input type="text" v-model:value="registerForm.username"/>
        </el-form-item>
        <el-form-item>
          <el-input type="text" v-model:value="registerForm.password"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="registe">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
</template>

<script>
    export default {
      name: "Register",
      data(){
        return{
          registerForm:{
            username:"",
            password:""
          }
        }
      },
      methods:{
        registe(){
          let _this=this
          this.$axios
            .post('/registe',{
            username:this.registerForm.username,
            password:this.registerForm.password
          })
          .then(successResponse=>{
            if(successResponse.data.code===200){
              this.$router.replace({path:"/login"})
            }else if (successResponse.data.code===400){
              alert("wrong!")
            }
          })
        }
      }
    }
</script>

<style scoped>
  .title{
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
