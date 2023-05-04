import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderList: [],
    menuList: [
      {
        title: '아메리카노',
        price: 3000,
        selected: true,
        image: 'https://source.unsplash.com/featured/americano',
      },
      {
        title: '라떼',
        price: 4000,
        selected: false,
        image:'https://source.unsplash.com/featured/latte'
      },
      {
        title: '모카',
        price: 5000,
        selected: false,
        image:'https://source.unsplash.com/featured/moca'
      }
    ],
    sizeList: [
      {
        title: 'small',
        price: 500,
        selected: true,
      },
      {
        title: 'medium',
        price: 700,
        selected: false,
      },
      {
        title: 'large',
        price: 1000,
        selected: false,
      },
    ],
  },
  getters: {
    totalOrderCount(state){
      return state.orderList.length
    },
    totalOrderPirce(state){
      let total = 0
      for(const target of state.orderList){
        total += target.menu.price + target.size.price
      }
      return total
    }
  },
  mutations: {
    ADD_ORDER: function (state) {
      const menu = state.menuList.find((menu) => {
        return menu.selected
      })
      const size = state.sizeList.find((size) => {
        return size.selected
      })
      
      const order = {menu: menu, size: size}
      state.orderList.push(order)
      console.log(state.orderList)

    },
    UPDATE_MENU_LIST: function (state, selectedMenu) {
      state.menuList = state.menuList.map((menu)=>{
        if(menu.title === selectedMenu.title){
          menu.selected = true
        }else{
          menu.selected = false
        }
        return menu
      })
      
    },
    UPDATE_SIZE_LIST: function (state, selectedSize) {
      state.sizeList = state.sizeList.map((size) => {
        if(size.title === selectedSize.title){
          size.selected = true
        }else {
          size.selected = false
        }
        return size
      })
    },
  },
  actions: {
    updateMenuList(context, selectedMenu){
      context.commit("UPDATE_MENU_LIST", selectedMenu)
    },
    updateSizeList(context, selectedSize){
      context.commit("UPDATE_SIZE_LIST", selectedSize)
    },
    addOrder(context){
      context.commit("ADD_ORDER")
    }
  },
  modules: {
  }
})