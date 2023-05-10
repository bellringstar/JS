<template>
  <div>
    <TodoListItemVue v-for="todo in TodoList" :key="todo.id" :todo=todo class="item"/>
  </div>
</template>

<script>
import TodoListItemVue from './TodoListItem.vue'



export default {
  name: 'TodoList',
  data(){
    return{

    }
  },
  props:{
    TodoList: Array,
  },
  components: {
    TodoListItemVue,

  },
  computed: {
  },
  methods: {

  }
}
</script>

<style>

</style>