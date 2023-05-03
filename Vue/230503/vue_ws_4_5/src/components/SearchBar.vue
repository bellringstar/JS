<template>
  <div>
    <h1>SSAFY TUBE</h1>
    <div class="d-flex justify-content-center align-items-center">
      <div class="input-group mb-3">
        <input type="text" class="form-control" v-model="query">
        <button class="btn btn-primary" type="button" @click="onClick" @keyup.enter="onClick">검색</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: "SearchBar",
  data: function () {
    return {
      query: "SSAFY"
    }
  },
  methods: {
    onClick: function(){
      axios({
        method: 'get',
        url:'https://www.googleapis.com/youtube/v3/search',
        params: {
          key:'AIzaSyAEYqoI6w4Hm8r-QXTigyG6yEO53essRGI',
          part:'snippet',
          type: 'video',
          q: this.query,
        }
      })
      .then((res) => {
        // console.log(res.data.items)
        this.$emit('fetch-videos', res.data.items)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style>

</style>
