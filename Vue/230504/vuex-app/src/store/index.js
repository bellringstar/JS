import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //data 각 컴포넌트의 데이터를 중앙저장소에서 관리
  state: {
    message: "message store"
  },
  //computed
  getters: {
    messageLength(state) {
      return state.message.length
    },
    doubleLength(state, getters) {
      return getters.messageLength * 2
    }
  },
  //methods----------
  //mutation 실제로 state를 변경하는 유일한 방법

  mutations: {
    CHANGE_MESSAGE(state, message){
      state.message = message
    }
  },
  actions: {
    changeMessage(context, message){
      context.commit("CHANGE_MESSAGE", message)
    }
  },
  //----------------
  modules: {
  }
})
