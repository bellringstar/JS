<template>
  <div>
    <h1>회원가입</h1>
    <form @submit.prevent="signUp">
      <p>아이디</p>
      <input type="text" id="username" v-model="username"><br>

      <p>비밀번호</p>
      <input type="password" id="password1" v-model="password1"><br>

      <p>비밀번호 확인</p>
      <input type="password" id="password2" v-model="password2">
      
      <input type="submit" value="회원가입">
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignUpView',
  data() {
    return {
      username: null,
      password1: null,
      password2: null,
    }
  },
  methods: {
    signUp() {
      // console.log('signup')
      const username = this.username
      const password1 = this.password1
      const password2 = this.password2

      const payload = {
        username, password1, password2
      }

      this.$store.dispatch('signUp', payload)

    }
  }
}
</script>
