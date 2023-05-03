<template>
  <div id="app">
    <h2>App</h2>
    <input type="text" v-model="appData">
    <p>parentData : {{ parentData }}</p>
    <p>childData : {{ childData }}</p>
    <AppParent @getP="pData" :appData="appData"/>

  </div>
</template>

<script>


import AppParent from './components/AppParent.vue';
export default {
  name: 'App',
  components: {

    AppParent,
  },
  data: function () {
    return {
      appData:null,
      parentData:null,
      childData:null
    }
  },
  methods:{
    pData(data){
      console.log(data)
      this.parentData = data['p']
      this.childData = data['c']
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
}
</style>
