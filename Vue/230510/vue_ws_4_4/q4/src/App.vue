<template>
  <div id="app">
    <h1>SSAFY TUBE</h1>
    <iframe id="player" width="640" height="360"
  :src="videoSrc"
  frameborder="0"></iframe>
  <p class="title">{{ title }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  data(){
    return {
      query: "코딩노래",
      videoSrc: null,
      title: null
    }
  },
  created(){
    axios({
      method: 'get',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        key: process.env.VUE_APP_YOUTUBE_APP,
        part:'snippet',
        type: 'video',
        q: this.query
      }
    })
    .then((response) => {
      // console.log(response.data.items[0])
      const videoId = response.data.items[0].id.videoId
      this.videoSrc = `https://youtube.com/embed/${videoId}`
      this.title =  response.data.items[0].snippet.title
    })

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap');

#app {
  font-family: 'Noto Sans KR', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.title {
  border: #2c3e50 solid 1px;
  width: 80%;
  margin-left: 10%;
  margin-top: 5%
}
</style>
