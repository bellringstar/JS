<template>
  <div class="d-flex flex-column">
    <h4>주문 내역</h4>
    <p>총 {{ totalOrderCount }}건: {{ totalOrderPrice }}</p>
    <OrderListItem
     v-for="item in orderList" 
     :key="item.title" 
     :order="item"
     class="d-flex flex-column"
     />
     <hr>
  </div>
</template>

<script>
import OrderListItem from './OrderListItem.vue'
export default {
  name: 'OrderList',
  components:{
    OrderListItem
  },
  computed: {
    orderList: function () {
      return this.$store.state.orderList
    },
    totalOrderCount: function () {
      return this.$store.getters.totalOrderCount
    },
    totalOrderPrice (){
      return this.$store.getters.totalOrderPirce
    },
  },
}
</script>

<style>

</style>