<template>
  <div>
    <h1>모든 할 일</h1>
    <TodoForm :important="false"/>
    <hr>
    <ul>
      <TodoList :TodoList="todoList"/>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TodoForm from '@/components/TodoForm.vue';
import TodoList from '@/components/TodoList.vue';

export default {
  components:{
    TodoForm,
    TodoList
  },
  computed:{
    ...mapState({
      todoList: state => state.todo.list
    }),   
  },
  data(){
    return {
      todoContent: null
    }
  },
  methods:{
    createTodo() {
      if (this.todoContent) {
        this.$store.dispatch('createTodo', this.todoContent)
      } else {
        alert('todo를 입력하세요!')
      }
      this.todoContent = null
    }

  }
  
}
</script>

<style>

</style>


