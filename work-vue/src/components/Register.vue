<template>
    <div>
      <el-form class="text-container" label-position="left" :rules="rules" :model="registerForm" ref="registerForm">
        <el-form-item>
          <h1 class="title">注册</h1>
        </el-form-item>
        <el-form-item prop="username" label-width="80px" label="用户名：" style="text-align: left;" >
            <el-input type="text" v-model:value="registerForm.username" />
        </el-form-item>
        <el-form-item prop="password" label-width="80px" label="密码：" style="text-align: left;">
            <el-input type="text" v-model:value="registerForm.password" />
        </el-form-item>
        <el-form-item prop="role" label-width="80px" label="角色：" style="text-align: left;">
            <el-select v-model="registerForm.role" style="width: 130px">
              <el-option v-for="(x,index) in selection" :key="x.index" :value="x.role">{{x.role}}</el-option>
            </el-select>
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
            role:"物业",
            valid:false
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
              pattern:/[A-Za-z0-9_]+$/,
              message: "只允许数字、字母、下划线"
            }],
            password:[{
              required:true,
              message:"请填写密码",
              trigger:"blur"
            },{
              pattern:/[A-Za-z0-9_]+$/,
              message: "只允许数字、字母、下划线"
            }],
            role:[{
              required:true,
              message:"角色不能为空",
              trigger:"focus"
            }]
          },
        }
      },
      methods:{
        registe(){
          let _this=this
          console.log(this.$refs['registerForm'])
          if(this.$refs['registerForm'].validate((valid)=>{
            if(valid) {
              return true
            }else {
              return false
            }
          })){
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
          }else {
            this.registerForm.username=""
            this.registerForm.password=""
            alert("input wrong!")
          }
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
