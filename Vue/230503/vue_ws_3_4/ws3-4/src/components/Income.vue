<template>
  <div>
    <p>
      <span>연봉입력(만원): </span>
      <input type="number" v-model="income">
    </p>
    <p>
      <span>세액감면액(만원): </span>
      <input type="number" v-model="minus">
    </p>
    <hr>
    <h2>종합소득금액: {{ income }} 만원</h2>
    <h2>종합소득공제: (-) 150 만원 </h2>
    <h2>과세표준: {{ stand }} 만원 </h2>
    <hr>
    <TaxRate :standard="stand" :minus="minus"/>


  </div>
</template>

<script>
import TaxRate from './Taxrate.vue';
export default {
  name:"InCome",
  components: {
    TaxRate
  },
  data: function () {
    return {
      income:0,
      minus:0,
    }
  },
  computed:{
    stand : function() {
      const s = this.income-150
      if (s < 0) {
        return 0
      }
      return s
    }
  }
}
</script>

<style>

</style>