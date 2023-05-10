<template>
  <div>
    <div class="d-flex border">
      <div class="mx-3 content">
        <input type="checkbox" class="form-check-input rounded-circle" @click="changeCompleted">
      </div>
      <div class="mx-3 content" @click="update">
        {{ todo.content }}
      </div>
      <div class="star ml-auto content" @click="changeImportant">
        <i class="bi" :class="[todo.isImportant ? 'bi-star-fill' : 'bi-star']"></i>
      </div>
    </div>
    <TodoUpdateForm :todo="todo" v-show="isClicked" @clickUpdate="clickUpdate" class="border update_box"/>
  </div>
</template>

<script>
import TodoUpdateForm from './TodoUpdateForm.vue'
export default {
  name: 'TodoListItem',
  components:{
    TodoUpdateForm
  },
  data(){
    return{
      isClicked:false
    }
  },
  props: {
    todo: Object,
  },
  methods: {
    changeImportant(){
      this.$store.dispatch('changeImportant', this.todo)
    },
    changeCompleted(){
      this.$store.dispatch('changeCompleted', this.todo)
    },
    update(){
      this.isClicked = !this.isClicked
    },
    clickUpdate(){
      this.isClicked =! this.isClicked
    }
  }
}
</script>

<style scoped>
.star {
  display: flex;
  align-items: center;
}

.bi-star-fill{
  color: orange;
}
.update_box{
  margin-top: 10px;
}

.content{
  margin:10px
}





</style>
