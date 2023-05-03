<template>
  <div>
    <h2>AppChild</h2>
    <input type="text" v-model="childData" @input="CtoP">
    <p>appData : {{ appData }}</p>
    <p>parentData : {{ parentData }}</p>
    <p>childData : {{ childData }}</p>
  </div>
</template>

<script>
export default {
  name:"AppChild",
  props:{
    appData: String,
    parentData: String
  },
  data: function () {
    return {
      childData:null
    }
  },
  methods:{
    CtoP(){
      this.$emit('get-child', this.childData)
    },
  }
}
</script>

<style>

</style>