<template>
  <div>
    <h2>AppParent</h2>
    <input type="text" v-model="parentData" @input="toApp" >
    <p>appData : {{ appData }}</p>
    <p >childData : {{ childData }}</p>
    <AppChild :parentData="parentData" :appData="appData" @get-child="PgetData"/>
  </div>
</template>

<script>
import AppChild from './AppChild.vue';
export default {
  name:"AppParent",
  components:{
    AppChild,
  },
  props:{
    appData:null
  },
  data: function () {
    return {
      parentData:null,
      childData:null,
    }
  },
  methods:{
    PgetData(data){
      this.childData = data
    },
    toApp(){
      this.$emit('getP', {p:this.parentData, c:this.childData})
    }
  }
}
</script>

<style>

</style>