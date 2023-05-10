<template>
  <div>
    <hr>
    <h3>완료한일</h3>
    <completedItem v-for="todo in TodoList" :key="todo.id" :todo=todo class="border item"/>
  </div>
</template>

<script>
import completedItem from './completedItem.vue';


export default {
  name: 'completedList',
  data(){
    return{
    }
  },
  props:{
    TodoList: Array,
  },
  components: {
    completedItem

  },
  computed: {
  },
  methods: {

  }
}
</script>

<style>

</style>