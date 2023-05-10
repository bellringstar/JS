<template>
  <div class="nav-box">
    <nav>
      <router-link to="/">모든</router-link> 
    </nav>
    <nav>
      <router-link to="/today">오늘</router-link>
    </nav>
    <nav>
      <router-link to="/important">중요</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  .nav-box{
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

</style>