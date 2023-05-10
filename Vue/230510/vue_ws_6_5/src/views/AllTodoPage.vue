<template>
  <div>
    <h1>모든 할 일</h1>
    <TodoForm :important="false"/>
    <hr>
    <ul>
      <TodoList :TodoList="todoList"/>
      <completedList :TodoList="completedList"/>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TodoForm from '@/components/TodoForm.vue';
import TodoList from '@/components/TodoList.vue';
import completedList from '@/components/completedList.vue'
export default {
  components:{
    TodoForm,
    TodoList,
    completedList
  },
  computed:{
    ...mapState({
      todoList: state => state.todo.list,
      completedList: state=>state.todo.completedList
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


