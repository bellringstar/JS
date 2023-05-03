<template>
  <div class="shadow">
    <h2>시작</h2>
    <div class="content">
      <button @click="clickLeft">◀</button>
      <img src="@/assets/ssanocolor.png" alt="nocolor">
      <button @click="clickRight">▶</button>
    </div>
    <h2>싸플링(무색)</h2>
  </div>
</template>

<script>
export default {
  name: "NoColor",
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