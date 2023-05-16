<template>
  <div>
    <h1>로그인</h1>
    <form @submit.prevent="login">
      <p>아이디</p>
      <input type="text" id="username" v-model="username"><br>

      <p>비밀번호</p>
      <input type="password" id="password" v-model="password"><br>

      <input type="submit" value="logIn">
    </form>
  </div>
</template>

<script>
export default {
  name: 'LogInView',
  data() {
    return {
      username: null,
      password: null,
    }
  },
  methods: {
    login() {
      const username = this.username
      const password = this.password

      const payload = {
        username, password
      }

      this.$store.dispatch('login', payload)

    }
  }
}
</script>
