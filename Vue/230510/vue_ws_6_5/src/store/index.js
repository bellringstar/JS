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
    },
    CHANGE_COMPLETED(state, todoItem){
      // console.log(todoItem)
      state.todo.list = state.todo.list.filter((todo) => {
        return !(todoItem.id === todo.id)
      })
      state.todo.completedList.push(todoItem) 
    },
    UPDATE_TODO(state, newData){
      state.todo.list = state.todo.list.map((todo) => {
        if(todo.id === newData.id){
          todo.content = newData.content
          todo.dueDateTime = newData.dueDateTime
        }
        return todo
      })
      console.log(state.todo.list)
    },
    CANCLE(state, todoItem){
      state.todo.completedList = state.todo.completedList.filter((todo) => {
        return !(todoItem.id === todo.id)
      })
      state.todo.list.push(todoItem)
    }
  },
  actions: {
    createTodo(context, todoContent) {
      const now = new Date()
      const id = now.getTime()
      now.setHours(0, 0, 0, 0)
      const nextDay = new Date(now.getTime() + 24 * 60 * 60 * 1000)
      const dueDateTime = nextDay.toISOString().slice(0, 10) + 'T00:00'
      console.log(dueDateTime)
      const todoItem = {
        id: id,
        content: todoContent[0],
        dueDateTime: dueDateTime,
        isCompleted: false,
        isImportant: todoContent[1],
      }

      context.commit('CREATE_TODO', todoItem)
    },
    changeImportant(context, todoItem){
      context.commit('CHANGE_IMPORTANT', todoItem)
    },
    changeCompleted(context, todoItem){
      context.commit("CHANGE_COMPLETED", todoItem)
    },
    updateTodo(context, newData){
      // console.log(newData)
      context.commit("UPDATE_TODO", newData)
    },
    cancle(context, todoItem){
      context.commit("CANCLE", todoItem)
    }

  },
  modules: {
    todo,
  }
})
