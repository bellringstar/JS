<template>
  <div class="shadow">
    <h2>1단계</h2>
    <div class="content">
      <button @click="clickLeft">◀</button>
      <img src="@/assets/saffling.png" alt="saffling">
      <button @click="clickRight">▶</button>
    </div>
    <h2>싸플링</h2>
  </div>
</template>

<script>
export default {
  name:"SsaflingPage",
  methods:{
    clickLeft: function() {
      this.$parent.clickLeft()
    },
    clickRight: function () {
      this.$parent.clickRight() 
    }
  }
}
</script>

<style>

</style>