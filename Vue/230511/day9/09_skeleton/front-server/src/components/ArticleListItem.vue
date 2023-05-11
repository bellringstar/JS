<template>
  <div>
    <h5>{{article.id}}</h5>
    <p>{{article.title}}</p>
    <router-link :to="{ name: 'DetailView', params: {id: article.id} }">[DETAIL]</router-link> | 
    <hr>
  </div>
</template>

<script>
export default {
  name: 'ArticleListItem',
  props:{
    article: Object
  }
}
</script>

<style>
  .article-list-item {
  margin: 0 0 10px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f0f0f0;
}

.article-list-item h5 {
  font-size: 18px;
  font-weight: bold;
}

.article-list-item p {
  font-size: 16px;
  line-height: 1.5;
}

</style>
