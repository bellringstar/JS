<template>
  <li>
    <div class="d-flex outside">
      <div>
        <img :src="imgSrc" alt="menu" width="50" height="50"/>
        <div class="d-flex flex-column inside">
          <p>{{ order.menu.title }}</p>
          <p>사이즈:{{ order.size.title }}</p>
        </div>
      </div>
      <span>가격: {{ price }}</span>
    </div>
  </li>
</template>

<script>
export default {
  name: 'OrderListItem',
  props: {
    order: Object,
  },
  computed: {
    totalPrice: function () {
      return 0
    },
    imgSrc (){
      return this.order.menu.image
    },
    price(){
      return this.order.menu.price + this.order.size.price
    }
  },
}
</script>

<style scoped>
div {
  display: flex;
  justify-content: space-between ;
}

.inside{
  margin-top:0px;
  margin-left: 10px;
  margin-bottom: 0px;
}

.outside{
  margin:10px;
}
</style>
