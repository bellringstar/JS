<template>
  <div :class="{'selected': menu.selected, 'unselected': !menu.selected}" @click="selectMenu(menu)">
      <img :src="imageUrl" alt="image" width="50" height="50">
      <span>{{ menu.title }}</span>
      <span>{{ menu.price }}</span>
  </div>
</template>

<script>
export default {
  name: 'MenuListItem',
  props: {
    menu: Object,
  },
  computed: {
    imageUrl () {
      return this.menu.image
    }
  },
  methods: {
    selectMenu: function (menu) {
      return this.$store.dispatch('updateMenuList', menu)
    },
  }
}
</script>

<style>


</style>