<template>
<div class="tabBar">
<van-tabbar v-model="tabBarActive" :router="true">
<template v-for="(item,index) in tabBar">
  <van-tabbar-item :to="item.path">
    <span>{{item.text}}</span>
    <template #icon>
      <img v-if="index !== tabBarActive" :src=" getAssetURL(item.image)">
      <img v-else :src=" getAssetURL(item.imageActive)">
    </template>
  </van-tabbar-item>
</template>
</van-tabbar>

</div>
</template>

<script setup>
import tabBar from "@/assets/data/tabbar.js"
import { getAssetURL} from '@/utils/load_assets.js'
import {ref} from 'vue'
  const tabBarActive = ref(0)
</script>

<style scoped lang="less">

</style>