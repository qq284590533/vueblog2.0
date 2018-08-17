<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <button @click="ajaxFun">click me</button>
    <input type="text" v-model="user.name" placeholder="昵称">
    <input type="text" v-model="user.username" placeholder="账号">
    <input type="text" v-model="user.password" placeholder="密码">
    <input type="text" v-model="user.email" placeholder="邮箱">
    <button @click="register(user)">register</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      user: {
        name:null,
        username:null,
        password:null,
        email:null
      }
    }
  },

  methods:{
    ajaxFun() {
      axios.post('/admin/user', {
        name: 'lin',
        password: '123456'
      }).then(res => {
        console.log(res.data)
      })
    },
    register(obj){
      axios.post('/admin/register', obj).then(res => {
        console.log(res)
      })
    }
  },

  mounted () {
    axios.get('/front').then(res => {
      console.log(res.data)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
