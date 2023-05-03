<template>
  <div id="app">
    <div class="container">
      <nav>
        <!-- searchbar -->
        <search-bar @fetch-videos="onFetch"/>
      </nav>
      <section class="row">
        <!-- 비디오디테일,리스트 -->
        <video-detail v-if="isSelected()" class="col" :video="selectedVideo"/>
        <img v-if="!isSelected()" src="@/assets/noVideo.jpg" alt="">
        <video-list :videos="videos" class="col"
          @select-video="onSelect"
        />
      </section>
    </div>
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
import VideoList from './components/VideoList.vue';
import VideoDetail from './components/VideoDetail.vue';


export default {
  name: 'App',
  components: {
    SearchBar,
    VideoList,
    VideoDetail,
  },
  data: function (){
    return {
      videos: [],
      selectedVideo: {}
    }
  },
  methods:{
    onFetch: function(videos) {
      this.videos = videos
      console.log(this.videos)
    },
    onSelect(video){
      this.selectedVideo = video
      // console.log(this.selectedVideo)
    },
    isSelected () {
      console.log(!!Object.keys(this.selectedVideo).length)
      return !!Object.keys(this.selectedVideo).length
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
}
</style>


