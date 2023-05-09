<template>
  <div class="option-list">
    <h2>3. 옵션을 고르세요.</h2>
    <OptionListItem class="item" v-for="option in optionList" :key="option.title" :option="option" @click="selectMenu(menu)"/>      
  </div>
</template>

<script>
import OptionListItem from './OptionListItem.vue';
export default {
  name: 'OptionList',
  components: {
    OptionListItem
  },
  computed: {
    optionList: function () {
      return this.$store.state.optionList
    },
  },
  methods: {
    increase: function () {
    },
    decrease: function () {
    },
  },
}
</script>

<style>
</style>