<template>
  <div>
    <li @click="onSelect" class="video-item">
      <img :src="videoUrl" :alt="video.id.videoId" class="video-thumbnail">
      <p class="video-title">{{video.snippet.title}}</p>
    </li>
  </div>
</template>

<script>
export default {
  name: "VideoListItem",
  props: {
    video: Object
  },
  computed : {
    videoUrl: function () {
      return this.video.snippet.thumbnails.high.url
    }
  },
  methods:{
    onSelect() {
      this.$emit('select-video', this.video)
    }
  }
}
</script>

<style scoped>
.video-item {
  display: inline;
  flex-direction: column;
  margin-bottom: 20px;
  cursor: pointer;
}

.video-thumbnail {
  width: 120px;
  height: 90px;
  margin-right: 20px;
}

.video-title {
  font-size: 18px;
  font-weight: bold;
  margin: 0;
}
</style>
