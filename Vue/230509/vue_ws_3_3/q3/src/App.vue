<template>
  <div id="app">
    <h1>진화 단계 가이드</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/nocolor">Start</router-link>
    </nav>
    <div class="box">
      <LeftBtn :name="show" class="btn btn-left"/>
      <div class="image">
        <router-view/>
      </div>
      <RightBtn :name="show" class="btn btn-right"/>
    </div>
  </div>
</template>



<script>
import LeftBtn from '@/components/LeftBtn.vue';
import RightBtn from '@/components/RightBtn.vue';

export default {
  name: 'NocolorView',
  components:{
    LeftBtn,
    RightBtn
  },
  data(){
    return{
      
    }
  },
  computed:{
    show(){
      return this.$route.name
    }
  },
  methods:{

  }

}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

nav {
  padding: 30px;
  margin: 30px;
  
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  background-color: white;
  border: 1px solid yellow;
  padding: 20px;
  margin: 10px;
}

nav a.router-link-exact-active {
  color: #42b983;
}


.outer {
    display: flex;
    justify-content: center;  
}
.container {
    width: 80%;
    height: 80%;
    padding: 20px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0,0,0,0.3) 0px 3px 7px -3px;
    box-sizing: border-box;
}

img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
  max-height: 100%;
}

.box {
  display: flex;
  justify-content: space-between;
}

.image {
  flex:1
}

.btn {
  margin-top: 20%;
}

.btn-left{
  margin-left: 400px;
}

.btn-right{
  margin-right: 400px;
}
</style>
