<template>
  <div class="article-detail">
    <h1>Detail</h1>
    <p class=".article-meta">글 번호 : {{ article?.id }}</p>
    <p class="article-title">제목 : {{ article?.title }}</p>
    <p class="article-content">내용 : {{ article?.content }}</p>
    <p class=".article-meta">작성시간 : {{ article?.created_at }}</p>
    <p class=".article-meta">수정시간 : {{ article?.updated_at }}</p>
  </div>
</template>

<script>
import axios from 'axios'
const API_URL = 'http://127.0.0.1:8000'
export default {
  name: 'DetailView',
  data() {
    return{
      article : null
    }
  },
  created() {
    this.getArticleDetail();
  },
  methods: {
    getArticleDetail(){
      axios({
        method: 'get',
        url: `${API_URL}/api/v1/articles/${this.$route.params.id}/`
      })
      .then((res)=>{
        console.log(res)
        this.article = res.data
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
body {
  font-family: sans-serif;
  margin: 0;
}

h1 {
  font-size: 2em;
  margin-top: 0;
}

p {
  margin-bottom: 1em;
}

.article-detail {
  width: 500px;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #ccc;
}

.article-title {
  font-size: 1.5em;
  font-weight: bold;
}

.article-content {
  line-height: 1.5em;
}

.article-meta {
  font-size: 0.8em;
  color: #999;
}

</style>