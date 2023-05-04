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
        image: '<https://source.unsplash.com/featured/americano>',
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
        name: 'small',
        price: 500,
        selected: true,
      },
      {
        name: 'medium',
        price: 700,
        selected: false,
      },
      {
        name: 'large',
        price: 1000,
        selected: false,
      },
    ],
  },
  getters: {
  },
  mutations: {
    addOrder: function (state) {
      const menu = state.menuList.find((menu) => {
        return menu.selected
      })
      const size = state.sizeList.find((size) => {
        return size.selected
      })
      
      const order = {menu: menu, size: size}
      state.orderList.push(order)
    },
    updateMenuList: function (state, selectedMenu) {
      state.menuList = state.menuList.map((menu)=>{
        if(menu.title === selectedMenu){
          menu.selected = true
        }else{
          menu.selected = false
        }
        return menu
      })
      
    },
    updateSizeList: function (state, selectedSize) {
      state.size = state.sizeList.map((size) => {
        if(size.title === selectedSize){
          size.selected = true
        }else {
          size.selected = false
        }
        return size
      })
    },
  },
  actions: {
  },
  modules: {
  }
})