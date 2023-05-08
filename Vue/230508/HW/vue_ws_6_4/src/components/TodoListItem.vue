<template>
  <div class="d-flex">
    <div class="mx-3">
      <input type="checkbox" class="form-check-input rounded-circle">
    </div>
    <div class="mx-3">
      {{ todo.content }}
    </div>
    <div class="star ml-auto" @click="changeImportant">
      <i class="bi" :class="[todo.isImportant ? 'bi-star-fill' : 'bi-star']"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: {
    todo: Object,
  },
  methods: {
    changeImportant(){
      this.$store.dispatch('changeImportant', this.todo)
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





</style>
