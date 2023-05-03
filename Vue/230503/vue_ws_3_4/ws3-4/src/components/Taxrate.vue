<template>
  <div>
    <h2>산출세액: {{ tax }} 만원</h2>
    <h2>세액감면: (-) {{ minus }} 만원</h2>
    <hr>
    <FinalTax :tax="tax" :minus="minus"/>
  </div>
</template>

<script>
import FinalTax from './Finaltax.vue';
export default {
  name: 'TaxRate',

  components:{
    FinalTax,
  },
  props:{
    standard: Number,
    minus: Number
  },
  computed: {
    tax : function(){
      if(this.standard<=1200) {
        return Math.round(this.standard*0.06)
      } else if(this.standard <= 4600){
        return Math.round(this.standard*0.15 - 108)
      } else if(this.standard <= 8800){
        return Math.round(this.standard*0.24 - 522)
      } else if(this.standard <=15000){
        return Math.round(this.standard*0.35 - 1490)
      } else if(this.standard <= 30000){
        return Math.round(this.standard*0.38 -1940)
      } else if(this.standard <=50000){
        return Math.round(this.standard*0.4 - 2540)
      } else if(this.standard <= 100000){
        return Math.round(this.standard *0.42 - 3540)
      } else{
        return Math.round(this.standard * 0.45 - 6540)
      }
    }
  }
}
</script>

<style>

</style>