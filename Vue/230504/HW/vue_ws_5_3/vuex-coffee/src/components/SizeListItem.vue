<template>
  <div :class="{'selected': size.selected, 'unselected': !size.selected}" @click="selectSize(size)">
      <span>{{ size.title }}</span>
      <span>{{ size.price }}</span>
  </div>
</template>

<script>
export default {
  name: 'SizeListItem',
  props: {
    size: Object,
  },
  methods:{
    selectSize(size){
      return this.$store.dispatch("updateSizeList", size)
    }
  }
}
</script>

<style scoped>

  div{
    height: 73px;
  }
</style>