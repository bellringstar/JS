<template>
  <div>
    <TodoListItemVue v-for="(todo, index) in TodoList" :key="index" :todo=todo class="border item" />
  </div>
</template>

<script>
import TodoListItemVue from './TodoListItem.vue'


export default {
  name: 'TodoList',
  props:{
    TodoList: Array,
  },
  components: {
    TodoListItemVue
  },
  computed: {
  }
}
</script>

<style>

</style>