<template>
  <div class="shadow">
    <h2>2단계</h2>
    <div class="content">
    <button @click="clickLeft">◀</button>
    <img src="@/assets/ssafleaf.png" alt="ssafleaf">
    <button @click="clickRight">▶</button>
    </div>
    <h2>싸플리프</h2>
  </div>
</template>

<script>
export default {
  name:"SsaleafPage",
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