<template>
  <div>
    <h5>{{ article.title }}</h5>
    <p>{{ article.content }}</p>
    <hr>
    <p>{{ article.created_at }}</p>
    <hr>
  </div>
</template>

<script>
export default {
  name: 'ArticleListItem',
  props: {
    article: Object,
  }
}
</script>

<style>

</style>
