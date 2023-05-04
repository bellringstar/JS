<template>
  <div class="size-list">
    <h2>2.사이즈를 선택하세요 </h2>
    <SizeListItem class="item" v-for="size in sizeList" :key="size.title" :size="size"/>
  </div>
</template>

<script>
import SizeListItem from './SizeListItem.vue';
export default {
  name: 'SizeList',
  components: {
    SizeListItem,
  },
  methods: {

  },
  computed: {
    sizeList: function () {
      return this.$store.state.sizeList
    },
  },
}
</script>

<style>
</style>