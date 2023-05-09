<template>
  <div id="app" class="d-flex flex-column">
    <h1>Coffe Order App</h1>
    <div class="row border" style="
    margin-right: 0px;
    margin-left: 0px;"
>
      <MenuList class="col"/>
      <SizeList class="col"/>
      <OptionList class="col"/>

    </div>
    <div>
      <div class="d-grid gap-2">
        <button @click="addOrder" class="btn btn-primary" type="button">장바구니 담기</button>
      </div>
    </div>
    <OrderList class="border"/>
  </div>
</template>

<script>

import MenuList from './components/MenuList.vue';
import SizeList from './components/SizeList.vue';
import OrderList from './components/OrderList.vue';
import OptionList from './components/OptionList.vue';

export default {
  name: 'App',
  components: {
    MenuList,
    OptionList,
    SizeList,
    OrderList
  },
  methods:{
    addOrder(){
      return this.$store.dispatch('addOrder')
    }
  },
  computed:{
    totalOrderPrice (){
      return this.$store.getters.totalOrderPirce
    }
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-left: 50px;
  margin-right: 50px;
}

div{
  margin-top: 10px;
}

.selected {
    background-color: yellow;

  }
.unselected {
    background-color: white;
  }

.border {
  border: solid 1px #ddd;
  border-radius: 10px;
  background-color: #f7f7f7;
  margin-top:10px;
  margin-bottom:20px;
  padding: 10px 15px;
  box-sizing: border-box;
  width: 100%;
}
button {
  border-radius: 10px;
  margin-bottom: 10px;
  width: 100%;
  box-sizing: border-box;
}
.menu-list,
.size-list,
.option-list {
  border: solid 1px #ddd;
  border-radius: 10px;
  background-color: #ffffff;
  padding:0 20px;
  margin: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.item{
  border: solid 2px black;
  border-radius: 10px;
  margin-top:10px;
  padding: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between 
}

span{
  margin-top: 10px;
}

h2, h4{
  padding-top: 20px;
}


</style>
