import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:{
    user:{
      username:window.localStorage.getItem('user'||'[]')==null?'':JSON.parse(window.localStorage.getItem('user'||'[]')).username,
      autoLogin: window.localStorage.getItem('autoLogin'),
      rememberPassword: window.localStorage.getItem('rememberPassword'),
      role:window.localStorage.getItem("role")
    },
  },
  mutations:{
    login(state,user){
      state.user=user
      console.log(user)
      window.localStorage.setItem('user',JSON.stringify(user))
    }
  }



})
