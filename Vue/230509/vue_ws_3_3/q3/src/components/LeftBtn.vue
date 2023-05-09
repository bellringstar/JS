<template>
  <div>
    <h1>
    <i class="bi bi-arrow-left-circle" @click="left"></i>
    </h1>
  </div>
</template>

<script>
export default {
  name:'LeftBtn',
  methods:{
    left(){
      if(this.name==="nocolor"){
        this.$router.push({name:'home'})
      } else{
        alert("이전 진화 단계로 돌아갈 수 없습니다.")
      }
    },
  },
  props:{
    name: String
  }
}
</script>

<style>

</style>