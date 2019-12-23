<template>
    <div>
      <el-form class="text-container" label-position="left" label-width="0px">
        <el-form-item>
          <h1 class="title">注册</h1>
        </el-form-item>
        <el-form-item>
          <tr>
            <td>
              <h4>用户名：</h4>
            </td>
            <el-input type="text" v-model:value="registerForm.username"/>
          </tr>
        </el-form-item>
        <el-form-item>
          <tr>
            <td>
              <h4>密码：</h4>
            </td>
            <el-input type="text" v-model:value="registerForm.password"/>
          </tr>
        </el-form-item>
        <el-form-item class="select">
          <el-select v-model="choice">
            <el-option v-for="(x,index) in selection" :key="x.index" :value="x.role">{{x.role}}</el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="registe">注册</el-button>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 100%;background: #505458;border: none" v-on:click="backToLogin">返回</el-button>
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
          },
          selection:[
            {role:"物业",index:0},
            {role:"业主",index: 1}
          ],
          choice:""
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
        },
        backToLogin(){
          window.localStorage.clear()
          this.$router.replace({path:"/login"})
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

  .select{
    width: 100px;
    text-align: left;
  }

  .el-input{
    width: 200px;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }


</style>
