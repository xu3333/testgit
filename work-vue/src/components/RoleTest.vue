<template>
    <div id="login">
      <form>
        <label>账号</label><input type="text" v-model="username"></input>
        <label>密码</label><input type="password" v-model="password"></input>
        <input type="button" value="登录" @click="Login"></input>
      </form>
    </div>
</template>

<script>
    // export default {
    //     name: "RoleTest"
    // }

    import {router,dynamicRouter} from '../router/index' //获取路由配置文件里的两个路由表
    export default {
      name: 'login',
      data () {
        return {
          username:'', //双向绑定获取账号
          password:'', //双向绑定获取密码
        }
      },
      methods:{
        Login(){
          sessionStorage.setItem('token',this.username); //将token和roles保存下来，因为没有后台接口，我这边就将账号当做token和roles
          sessionStorage.setItem('roles',this.username);
          let dR = new Array(); //创建一个数组用来存储符合权限的路由
          for (let i=0;i<dynamicRouter.length;i++){ //第一层循环遍历动态路由表的每一个路由
            for (let j=0;j<dynamicRouter[i].meta.roles.length;j++){ //第二次循环遍历每一个路由里的roles设置的权限并和当前登录账号的权限比较
              if (dynamicRouter[i].meta.roles[j] == this.username){ //这里因为我默认账号名就是当前用户的权限
                dR.push(dynamicRouter[i]); //符合条件的路由信息就放进数组里
              }
            }
          }
          this.$router.addRoutes(dR.concat([{ //这里调用addRoutes方法，动态添加符合条件的路由
            path: '*',
            redirect: '/404' //所有不匹配路径(*)都重定向到404，为什么写在这里而不放到静态路由表里可以查看“前端路上”的文章
          }]));
          this.$router.push('/'); //登录验证后跳转到主页"/"
        }
      },
      created(){
        sessionStorage.clear();
      }
    }
</script>

<style scoped>

</style>
