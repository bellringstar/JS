import Vue from 'vue'
import Vuex from 'vuex'
import todo from './modules/todo';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dueDateTime: null
  },
  getters: {

  },
  mutations: {
    CREATE_TODO(state, todoItem){
      state.todo.list.push(todoItem)
      state.dueDateTime = todoItem.dueDateTime
    },
    CHANGE_IMPORTANT(state, todoItem){
      state.todo.list = state.todo.list.map((todo) => {
        if (todo.id === todoItem.id){
          todo.isImportant = !todo.isImportant
        }
        return todo
      })
    }
  },
  actions: {
    createTodo(context, todoContent) {
      const now = new Date()
      const id = now.getTime()
      now.setHours(0, 0, 0, 0)
      const nextDay = new Date(now.getTime() + 24 * 60 * 60 * 1000)
      const dueDateTime = nextDay.toISOString().slice(0, 10) + 'T00:00'
      const todoItem = {
        id: id,
        content: todoContent[0],
        dueDateTime: dueDateTime,
        isCompleted: false,
        isImportant: todoContent[1],
      }
      console.log(todoItem)
      context.commit('CREATE_TODO', todoItem)
    },
    changeImportant(context, todoItem){
      context.commit('CHANGE_IMPORTANT', todoItem)
    }

  },
  modules: {
    todo,
  }
})
