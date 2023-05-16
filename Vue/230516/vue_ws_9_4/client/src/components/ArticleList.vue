<template>
  <div class="article-list">
    <h3>게시물 목록</h3>
    <ArticleListItem 
    v-for="article in articles" :key="article.id" :article="article"
    />
  </div>
</template>

<script>
import ArticleListItem from '@/components/ArticleListItem'
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'


export default {
  name: 'ArticleList',
  components: {
    ArticleListItem,
  },
  data(){
    return{
      articles:[]
    }
  },
  created(){
    axios({
        method:'get',
        url: `${API_URL}/articles/`,
      })
      .then((res) => {
        this.articles = res.data
      })
      .catch((err) => {
        console.log(err)
      })
  }

}
</script>

<style>
.article-list {
  text-align: start;
}
</style>
