<template>
  <div>
    <h2>결정세액: {{ finalFee }} 만원</h2>
  </div>
</template>

<script>
export default {
  name:"FinalTax",
  props:{
    tax : Number,
    minus: Number,
  },
  computed:{
    finalFee: function () {
      const final = this.tax-this.minus
      if (final < 0){
        return 0
      }
      return final
    }
  }
}
</script>

<style>

</style>