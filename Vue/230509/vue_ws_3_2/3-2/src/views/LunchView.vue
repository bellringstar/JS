<template>
  <div>
    <h1>점심메뉴</h1>
    <button @click="pickLunch">Pick Lunch</button>
    <p>{{ menu }}</p>
    <br>
    <h2>로또를 뽑아보자</h2>
    <button @click="goToLotto">Pick Lotto</button>
  </div>
</template>

<script src="lodash.js"></script>
<script>
var _ = require('lodash');
export default {
  name:'LunchView',
  data(){
    return{
      list:['국밥','짜장','짬뽕','우동','라면'],
      menu: null
    }
  },
  methods:{
    pickLunch(){
      //랜덤으로 메뉴 1개 뽑아 menu에 저장.
      const rand = _.random(0, this.list.length - 1)
      this.menu = this.list[rand];
    },
    goToLotto(){
      this.$router.push({name:'lotto'})
    }
  }

}
</script>

<style>

</style>