<template>
  <div>
    <div class="d-flex">
      <div class="mx-3">
        <input type="checkbox" class="form-check-input rounded-circle" @click="changeCompleted" :class="{'background':isCompleted}">
      </div>
      <div class="mx-3">
        {{ todo.content }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TodoListItem',
  components:{
    
  },
  data(){
    return{
      isCompleted:false
    }
  },
  props: {
    todo: Object,
  },
  methods: {
    changeCompleted(){
      this.isCompleted=true
      console.log(this.isCompleted)
      this.$store.dispatch('cancle', this.todo)
    }
  }
}
</script>

<style>
.star {
  display: flex;
  align-items: center;
}

.bi-star-fill{
  color: orange;
}

.background{
  background-color: blue;
}




</style>
