<template>
  <div>
    <p>
      id: <input type="text" v-model="id">
    </p>
    <p>
      password : <input type="text" v-model="password">
    </p>
    <p>
      password2 : <input type="text" v-model="password2">
    </p>
    <button @click="signup">가입하기</button> 
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SignupPage',
  data: function () {
    return {
      id: null,
      password: null,
      password2: null
    }
  },
  methods: {
    signup: function () {
       axios({
        method: 'post',
        url: "http://127.0.0.1:8000/accounts/signup/",
        data: {
          "username": this.id,
          "password": this.password,
          "password2": this.password2,
        }
       })
       .then(() => {
        this.$router.push({name:'Login'})
       })
    }
  }
}
</script>
