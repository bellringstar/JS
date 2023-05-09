<template>
  <div>
    <h1>
    <i class="bi bi-arrow-right-circle"  @click="right"></i>
    </h1>
  </div>
</template>

<script>
export default {
  name: 'RightBtn',
  methods:{
    right(){
      this.$router.push({name: this.nextPath})
    }
  },
  props:{
    name: String
  },
  computed:{
    nextPath(){
      if(this.name === 'home'){
        return 'nocolor'
      }else if(this.name === 'nocolor'){
        return 'ssafling'
      }else if(this.name === 'ssafling'){
        return 'ssafleaf'
      }else if(this.name === 'ssafleaf'){
        return 'ssaflower'
      }else if(this.name === 'ssaflower'){
        alert('Home으로 돌아갑니다.')
        return 'home'
      }else{
        return 'home'
      }
    }
  }
}
</script>

<style>

</style>