<template>
  <div>
    <h1 class="mb-4">VideoList</h1>
    <ul class="list-group">
      <VideoListItem v-for="video in videos"
        :key="video.id.videoid"
        :video="video"
        @select-video="onSelect"
        class="list-group-item"
      />
    </ul>
  </div>
</template>

<script>
import VideoListItem from './VideoListItem.vue';

export default {
  name: "VideoList",
  components: {
    VideoListItem,
  },
  props: {
    videos: Array,
  },
  methods: {
    onSelect(video) {
      console.log(video);
      this.$emit('select-video', video);
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
}

.list-group-item:hover {
  background-color: #f5f5f5;
}
</style>
