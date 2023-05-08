<template>
  <div>
    <li @click="updateTodo" :class="{'is_completed':todo.isCompleted}">{{ todo.title }}</li>
    <button @click="deleteTodo">DELETE</button>
  </div>
  
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todo: Object,
  },
  methods: {
    deleteTodo(){
      this.$store.dispatch('deleteTodo', this.todo)
    },
    updateTodo(){
      this.$store.dispatch('updateTodo', this.todo)
    }
  }
}
</script>

<style>
  .is_completed {
    text-decoration: line-through;
  }
</style>
