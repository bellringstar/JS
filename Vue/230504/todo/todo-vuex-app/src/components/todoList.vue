<template>
  <div>
    <todo-list-item v-for="(todo,index) in todos" :key="index" :todoitem="todo"/>
  </div>
</template>

<script>
import todoListItem from './todoListItem.vue';
export default {
  name:"TodoList",
  components: {
    todoListItem,
  },
  computed:{
    todos(){
      return this.$store.state.todos
    }
  }
}
</script>

<style>

</style>