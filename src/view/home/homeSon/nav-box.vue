<template>
  <div class="loaction">
    <div class="city" @click="cityClick()">广州</div>
    <div class="position" @click="positionClick">
      <span class="text">我的位置</span>
      <img src="@/assets/img/home/icon_location.png" alt="">
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

//  获取经纬度
const positionClick = () => {
  navigator.geolocation.getCurrentPosition(res => {
    console.log(res)
  }, err => {
    console.log(err)
  }, {
    enableHighAccuracy: true,
    timeout: 50,
    maximumAge: 0
  })
}

//  点击按键 弹出手动城市选择页面
const cityClick = () => {
  router.push('/city')
}
</script>

<style scoped lang="less">
.loaction {
  display: flex;
  align-items: center;
  height: 44px;
  margin: 0 10px;

  .city {
    flex: 1
  }

  .position {
    .text {
      position: relative;
      top: -2px;
      align-items: center;
    }

    width: 80px;

    img {
      width: 16px;
      height: 16px;

    }
  }
}
</style>