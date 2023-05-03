<template>
  <div>
    <h1>Video Detail</h1>
    <div>
      <iframe id="player" width="640" height="360"
  :src="videoSrc"
  frameborder="0"></iframe>
      <p>{{ video.snippet.title }}</p>
      <p>{{ video.snippet.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name:"VideoDetail",
  props:{
    video:Object
  },
  computed:{
    videoSrc () {
      return `https://youtube.com/embed/${this.video.id.videoId}` 
    }
  }
}
</script>

<style>

</style>