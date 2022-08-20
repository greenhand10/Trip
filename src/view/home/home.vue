<template>
<div class="home">
  <div class="nav-bar">
    <div class="title">Trip</div>
  </div>

  <div class="banner">
    <img src="@/assets/img/home/banner.webp" alt="">
  </div>

  <div class="loaction">
    <div class="city">广州</div>
    <div class="position">
      <span class="text">我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="">
    </div>
  </div>
</div>
</template>

<script setup>
</script>

<style scoped lang="less">
.home{
  .nav-bar{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 46px;
    border-bottom: 1px solid #f2f2f2;
    .title{
      color: var(--primary-color);
      font-size: 16px;
      font-weight: 600;
    }
  }
}

.banner{
  img{
    width: 100%;
  }
}

.loaction{
  display: flex;
  align-items: center;
  height: 44px;
  margin: 0 10px;
  .city{
    flex:1
  }
  .position{
    .text{
      position: relative;
      top: -2px;
      align-items: center;
    }
    width: 80px;
    img{
      width: 16px;
      height: 16px;

    }
  }
}
</style>