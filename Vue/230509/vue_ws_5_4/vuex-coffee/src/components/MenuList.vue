<template>
  <div class="menu-list">
    <h2>1. 음료를 고르세요.</h2>
    <MenuListItem class="item" v-for="menu in menuList" :key="menu.title" :menu="menu" @click="selectMenu(menu)"/>      
  </div>
</template>

<script>

import MenuListItem from './MenuListItem.vue'
export default {
  name: 'MenuList',
  components: {
    MenuListItem
  },
  computed: {
    menuList: function () {
      return this.$store.state.menuList
    },
    totalOrderCount() {
      return this.$store.getters.totalOrderCount
    }
  },
  methods: {
    selectMenu: function (menu) {
      return this.$store.dispatch('updateMenuList', menu)
    },
  },
}
</script>

<style>

</style>