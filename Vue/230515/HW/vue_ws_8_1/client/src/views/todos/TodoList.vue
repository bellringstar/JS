<template>
  <div>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span 
          @click="updateTodoStatus(todo)" 
          :class="{ 'is-completed': todo.is_completed }"
        >
        {{ todo.title }}
        </span>
        <button @click="deleteTodo(todo)" class="todo-btn">X</button>
      </li>
    </ul>
    <button @click="getTodos">Get Todos</button>
  </div>
</template>

<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'

export default {
  name: 'TodoList',
  data: function () {
    return {
      todos: null,
    }
  },
  created(){
    this.getTodos()
  },

  methods: {
    getTodos: function () {
      axios({
        method: 'get',
        url: `${API_URL}/todos/`,
      })
        .then(res => {
          console.log(res)
          this.todos = res.data
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteTodo: function (todo) {
      axios({
        method:'delete',
        url: `${API_URL}/todos/${todo.id}/`
      })
      .then((res) => {
        console.log(res)
        this.getTodos()
      })
      .catch((err) => {
        console.log(err)
      })
    },
    updateTodoStatus: function (todo) {
      axios({
        method: 'put',
        url: `${API_URL}/todos/${todo.id}/`,
        data: {title: todo.title, is_completed: !todo.is_completed}
      })
      .then(() => {
        this.getTodos()
      })
      
    },
  },
}
</script>

<style scoped>
  .todo-btn {
    margin-left: 10px;
  }

  .is-completed {
    text-decoration: line-through;
    color: rgb(112, 112, 112);
  }
</style>
