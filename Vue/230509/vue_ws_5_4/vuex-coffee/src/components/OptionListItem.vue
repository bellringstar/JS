<template>
  <div>
      <span>{{ option.type }}</span>
      <div>
        <button class="left" @click="decrease(option)">-</button>
        <span class="count">{{ option.count }}</span>
        <button class="right" @click="increase(option)">+</button>
      </div>
  </div>
</template>

<script>
export default {
  name: 'OptionListItem',
  props: {
    option: Object,
  },
  methods: {
    increase(option) {
      const newOption = Object.assign({}, option)
      newOption.count += 1 
      return this.$store.dispatch('updateOptionList', newOption)
    },
    decrease(option) {
      const newOption = Object.assign({}, option)
      newOption.count -= 1 

      if(newOption.count < 0){
        newOption.count = 0
      }
      return this.$store.dispatch('updateOptionList', newOption)
    },
  },
}
</script>

<style scoped>
  button {
  border-radius: 50%;
  width: 30px;
  height: 30px;
}

.count{
  margin-left:10px;
  margin-right:10px;
}
</style>