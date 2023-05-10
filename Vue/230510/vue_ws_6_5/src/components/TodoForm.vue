<template>
  <div>
    <button @click="createTodo">+</button>
    <input @keyup.enter="createTodo" class="todo-input" type="text" placeholder="할 일을 작성해주세요!" v-model.trim="todoContent">
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data() {
    return {
      todoContent: null,
    }
  },
  props:{
    important: Boolean
  },
  methods: {
    createTodo() {
      if (this.todoContent) {
        this.$store.dispatch('createTodo', [this.todoContent, this.important])
      } else {
        alert('todo를 입력하세요!')
      }
      this.todoContent = null
    }
  }
}
</script>

<style>
.todo-input {
  width: 80%;
  padding: 0px;
  margin: 0px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
}
</style>