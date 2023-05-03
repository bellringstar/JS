<template>
  <div class="shadow">
    <h2>3단계</h2>
    <div class="content">
    <button @click="clickLeft">◀</button>
    <img src="@/assets/ssaflower.png" alt="ssaflower">
    <button @click="clickRight">▶</button>
    </div>
    <h2>싸플라워</h2>
  </div>
</template>

<script>
export default {
  name:"SsaflowerPage",
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