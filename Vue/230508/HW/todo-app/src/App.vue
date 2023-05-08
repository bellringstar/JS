<template>
  <div id="app" class="container-fluid mx-auto">
    <div class="d-flex">
      <!-- 메뉴 -->
      <SideBar class="border col-2 sidebar"/> 
      <!-- 내용 -->
      <div class="border col-9 content">
        <router-view/>

      </div>
    </div>
  </div>
</template>



<script>
import SideBar from './components/SideBar.vue';

export default{
  name : 'App',
  components: {
    SideBar
  },
}
</script>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10%;
}

h1 {
  margin-top: 15px;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.border {
  border: 2px solid #000;
  border-radius: 10px;
}

.sidebar {
  margin-right: 20px;
  margin-left: 20px;
  padding: 50px;
}

.item {
  margin: 20px;
  padding: 20px;
}

.rounded-circle{
  transform: scale(1.5);

}






</style>
