<template>
  <div id="app">
    <todo-list/>
    <todo-form/>
  </div>
</template>

<script>

import TodoList from './components/todoList.vue';
import TodoForm from './components/todoForm.vue';
export default {
  name: 'App',
  components: {
    TodoList,
    TodoForm,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
