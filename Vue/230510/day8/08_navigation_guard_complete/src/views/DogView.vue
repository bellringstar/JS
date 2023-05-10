<template>
  <div>
    <p v-if="!imgSrc">{{ message }}</p>
    <img v-if="imgSrc" :src="imgSrc" alt="">
    <br>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "DogView",
  data(){
    return {
      imgSrc:null,
      message: "로딩중 ..."
    }
  },
  methods:{
    getDogImg(){
      const breed = this.$route.params.breed
      const dogImageSearchUrl = `https://dog.ceo/api/breed/${breed}/images/random`
      
      axios({
        method: 'get',
        url: dogImageSearchUrl
      })
      .then((response) => {
        const imgSrc = response.data.message
        console.log(imgSrc)
        this.imgSrc = imgSrc
      })
      .catch((error) => {
        console.log(error)
        this.message = `${this.$route.params.breed}는 없는 품종입니다.`
        this.$router.push('/404')
      })
    }
  },
  created(){
    this.getDogImg();
  }
  ,updated
}
</script>

<style>

</style>