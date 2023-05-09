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
      <div class="info">
        <span>가격: {{ price }}</span>
        <br>
        <span v-for="option in order.option" :key="option.type">{{ option.type }} {{ option.count }}회|</span>
      </div>
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
      let optionPrice = 0;
        for(const option of this.order.option){
          optionPrice += option.price * option.count
        }
      return this.order.menu.price + this.order.size.price + optionPrice
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

.info{
  display: block;
  width: 300px;
  text-align: left;
}
</style>
