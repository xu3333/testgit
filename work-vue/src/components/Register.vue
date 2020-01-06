<template>
    <div>
      <el-form class="text-container" label-position="left" label-width="0px">
        <el-form-item>
          <h1 class="title">注册</h1>
        </el-form-item>
        <el-form-item prop="username">
          <tr>
            <td>
<!--              <el-input type="text" value="用户名：" style="width: 100px" readonly="readonly"></el-input>-->
              <h4 class="username">用户名：</h4>
            </td>
            <el-input type="text" v-model:value="registerForm.username"/>
          </tr>
        </el-form-item>
        <el-form-item prop="password">
          <tr>
            <td>
              <h4 class="password">密码：</h4>
            </td>
            <el-input type="text" v-model:value="registerForm.password"/>
          </tr>
        </el-form-item>
        <el-form-item>
          <tr>
            <td>
              <h4 class="role">角色：</h4>
            </td>
            <el-select v-model="registerForm.role" style="width: 130px">
              <el-option v-for="(x,index) in selection" :key="x.index" :value="x.role">{{x.role}}</el-option>
            </el-select>
          </tr>
        </el-form-item>
        <el-form-item>
          <tr>
            <td>
              <el-button type="primary" style="width: 80px;background: #505458;border: none;margin-left: 50px" v-on:click="registe">注册</el-button>
            </td>
            <td>
              <el-button type="primary" style="width: 80px;background: #505458;border: none;margin-left: 60px" v-on:click="backToLogin">返回</el-button>
            </td>
          </tr>
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
            password:"",
            role:""
          },
          selection:[
            {role:"物业",index: 0},
            {role:"业主",index: 1}
          ],
          rules:{
            username:[{
              required:true,
              message:"请填写用户名",
              trigger:"blur"
            },{
              pattern:/[A-Za-z0-9_\u4e00-\u9fa5]+$/,
              message: "只允许数字、字母、下划线"
            }],
            password:[{
              required:true,
              message:"请填写密码",
              trigger:"blur"
            },{
              pattern:/[A-Za-z0-9_\u4e00-\u9fa5]+$/,
              message: "只允许数字、字母、下划线"
            }]
          },
        }
      },
      methods:{
        registe(){
          let _this=this
          this.$axios
            .post('/registe',{
            username:this.registerForm.username,
            password:this.registerForm.password,
            role:this.registerForm.role
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

  .username,.password,.role{
    margin: 0px;
    width: 80px;
    text-align: right;
  }

  .el-input{
    width: 250px;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }

  .el-icon-arrow-down {
    font-size: 12px;
  }


</style>
