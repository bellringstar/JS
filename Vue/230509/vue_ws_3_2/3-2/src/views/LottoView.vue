<template>
  <div>
    <h1>로또</h1>
    <button @click="pickNumbers">Get Lucky Numbers</button>
    <p>{{ numbers }}</p>
  </div>
</template>

<script>
var _ = require('lodash');
export default {
  name:'LottoView',
  data(){
    return{
      numbers:null
    }
  },
  methods:{
    pickNumbers(){
      const lst = []
      while(lst.length < 6){
        const rand = _.random(1, 46)
        if (!lst.includes(rand)){
          lst.push(rand)
        }
      }
      this.numbers = lst;
      
      

    }
  }
}
</script>

<style>

</style>