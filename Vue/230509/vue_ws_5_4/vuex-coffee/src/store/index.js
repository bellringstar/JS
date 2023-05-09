import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    optionList:[
      {
        type: '샷',
        price: 500,
        count: 0,
      },
      {
        type: '바닐라 시럽',
        price: 700,
        count: 0,
      },
      {
        type: '카라멜 시럽',
        price: 900,
        count: 0,
      }
    ],
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
        let optionPrice = 0;
        for(const option of target.option){
          optionPrice += option.price * option.count
        }
        total += (target.menu.price + target.size.price + optionPrice)
      }
      console.log(total)
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
      const option = state.optionList.filter((option) => {
        return option.count
      })
      
      const order = {menu: menu, size: size, option: option}
      state.orderList.push(order)
      state.optionList = [
        {
          type: '샷',
          price: 500,
          count: 0,
        },
        {
          type: '바닐라 시럽',
          price: 700,
          count: 0,
        },
        {
          type: '카라멜 시럽',
          price: 900,
          count: 0,
        }
      ]
      
    


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
    UPDATE_OPTION_LIST(state, newOption){
    
      state.optionList = state.optionList.map((option)=>{
        if(option.type === newOption.type){
          option = newOption
        }
        return option
      })
    }

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
    },
    updateOptionList(context, newOption){
      context.commit("UPDATE_OPTION_LIST", newOption)
    }
  },
  modules: {
  }
})