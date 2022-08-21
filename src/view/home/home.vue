<template>
<div class="home">
  <navBar></navBar>
  <div class="banner">
    <img src="@/assets/img/home/banner.webp" alt="">
  </div>
  <NavBox></NavBox>
</div>
</template>

<script setup>
import navBar from './homeSon/nav-bar.vue'
import NavBox from './homeSon/nav-box.vue'

</script>

<style scoped lang="less">
.home{
  .banner{
  img{
    width: 100%;
  }
}
}
</style>