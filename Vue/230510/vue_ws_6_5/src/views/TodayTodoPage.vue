<template>
  <div>
    <h1>오늘 할 일</h1>
    <TodoForm :important="false"/>
    <hr>
    <ul>
      <TodoList :TodoList="todayList"/>
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
      todayList: state => state.todo.list.filter(item => new Date(item.dueDateTime)<=new Date(state.dueDateTime) && item.isCompleted === false)
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



