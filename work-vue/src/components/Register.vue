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
        <el-form-item label-width="80px" label="角色：" style="text-align: left;">
            <el-select v-model="other.role" style="width: 130px">
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
      <span style="font-size: 14.1176px;">检验NO的反应为FeSO</span><span style="font-size: 14.1176px; position: relative; vertical-align: baseline; bottom: -0.25em;">4</span>
      <a data-cke-saved-href="http://www.baidu.com/s?wd=%E8%BF%87%E6%B0%A7%E5%8C%96%E9%92%A0&amp;tn=SE_PcZhidaonwhc_ngpagmjz&amp;rsv_dl=gh_pc_zhidao" href="http://www.baidu.com/s?wd=%E8%BF%87%E6%B0%A7%E5%8C%96%E9%92%A0&amp;tn=SE_PcZhidaonwhc_ngpagmjz&amp;rsv_dl=gh_pc_zhidao" target="_blank"></a>
      E<sub>4</sub>
      <br/>
      <i style="">E</i><sub>4&nbsp;&nbsp;</sub>

    </div>
</template>

<script>
    export default {
      name: "Register",
      data(){
        let checkUsername=(rule,value,callback)=>{
          if(!value.match(/[A-Za-z0-9_]+$/)){
            console.log("username wrong")
            callback(new Error('只允许数字、字母、下划线'))
          }else {
            console.log("username right")
            callback()
          }
        };
        let checkPassword=(rule,value,callback)=>{
          if(!value.match(/[A-Za-z0-9_]+$/)){
            console.log("password wrong")
            callback(new Error('只允许数字、字母、下划线'))
          }else {
            console.log("password right")
            callback()
          }

        };
        return{
          registerForm:{
            username:'',
            password:'',
          },
          other:{
            role:"物业",
            valid:false
          },
          selection:[
            {role:"物业",index: 0},
            {role:"业主",index: 1}
          ],
          rules:{
            username:[{
              validator:checkUsername,
              trigger:"blur"
            }],
            password:[{
              validator:checkPassword,
              trigger:"blur"
            }]
          },
        }
      },
      methods:{
        registe(){
          let _this=this
          console.log(this.$refs.registerForm.validate((valid)=>{
            if(valid) {
              console.log(valid)
            }else {
              return false
            }
          }))
          this.$refs.registerForm.validate((valid)=>{
            if(valid) {
              this.other.valid=valid
              console.log(valid)
            }else {
              this.other.valid=valid
              return false
            }
          })
          if(this.other.valid) {
            this.$axios
              .post('/registe',{
                username:this.registerForm.username,
                password:this.registerForm.password,
                role:this.other.role
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
