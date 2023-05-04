// App.vue

<template>
  <div id="app">
    <p>Counter: {{ counter }}</p>
    <p>Counter x2: {{ counterDouble }}</p>
    <p></p>
    <button @click="increase">increase +</button>
    <button @click="decrease">decrease -</button>
  </div>
</template>

<script>
export default {
  name: 'App', 
  data: function() {
    return {
    }
  },
  methods: {
    increase: function () {
      this.$store.dispatch('increase')
    },
    decrease: function () {
      this.$store.dispatch('decrease')
    },
  },
  computed: {
    counterDouble: function () {
      return this.$store.getters.counterDouble
    },
    counter (){
      return this.$store.state.counter
    }
  },
}
</script>

<style>
</style>