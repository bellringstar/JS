<template>
  <div class="bg">
    <button @click="updateTodo" class="btn btn-success">수정하기</button>
    <div class="input">
      <input type="text" :placeholder="todo.content" v-model="newContent">
      <input type="datetime-local" :placeholder="todo.dueDateTime" v-model="newDueDateTime">
    </div>
  </div>
</template>

<script>
export default {
  name:'TodoUpdateForm',
  props:{
    todo:Object
  },
  data(){
    return{
      newContent : null,
      newDueDateTime : null
    }
  },
  methods:{
    updateTodo(){
      this.$emit('clickUpdate')
      const newData = {
        id: this.todo.id,
        content: this.newContent?this.newContent:this.todo.content,
        dueDateTime: this.newDueDateTime?this.newDueDateTime:this.todo.dueDateTime
      }
        this.$store.dispatch('updateTodo', newData)
      
    }
  }

}
</script>

<style scoped>
.bg{
  background-color: rgb(219, 235, 235);
  display: flex;
  flex-direction: column;
  align-items: start;
}
.btn{
  margin: 5px
}
.input{
  margin: 10px;
}

input{
  margin: 5px;
  width: 100%;
}
</style>