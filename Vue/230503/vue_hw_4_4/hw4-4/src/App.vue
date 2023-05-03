<template>
  <div id="app">
    <h1>캐릭터 진화 단계 가이드</h1>
    <div>
      <button @click="clickHome">Home</button>
      <button @click="clickStart">Start</button>
    </div>
    <HomePage v-if="!isStarted"/>
    <NoColor v-else-if="isStarted&&page==1"/>
    <SsaflingPage v-else-if="isStarted&&page==2"/>
    <SsaleafPage v-else-if="isStarted&&page==3"/>
    <SsaflowerPage v-else-if="isStarted&&page==4"/>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';
import NoColor from './components/Nocolor.vue';
import SsaflingPage from './components/Ssafling.vue';
import SsaleafPage from './components/Ssaleaf.vue';
import SsaflowerPage from './components/Ssaflower.vue';

export default {
  name: 'App',
  components: {
    HomePage,
    NoColor,
    SsaflingPage,
    SsaleafPage,
    SsaflowerPage,
  },
  data: function(){
    return {
      page: 1,
      isStarted: false,
    }
  },
  methods:{
    clickHome: function () {
      this.isStarted = false;
      this.page = 1;
    },
    clickStart: function () {
      this.isStarted = true;
    },
    clickLeft : function () {
      if(this.page == 1){
        this.isStarted = false
      } else {
        this.page -= 1;
      }
    },
    clickRight : function () {
      if(this.page == 4) {
        window.alert("Home 으로 돌아갑니다!")
        this.page = 1
        this.isStarted = false
      } else {
        this.page += 1
      }
    }
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
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

}

.shadow {
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 5%;
  max-width: 400px;
  min-width: 800px;
}

.content {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.content img {
  margin: 100px 100px;
}

.content button {
  margin: 0px 0px;
}


</style>
