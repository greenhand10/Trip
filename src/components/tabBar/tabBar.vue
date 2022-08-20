<template>
<div class="tabBar">
  <template v-for="(item,index) in tabberData">
  <div class="tabBarItem" @click="activeTabBar(index,item)" :class="{active:currentIndex === index}">
    <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" :alt="item.text">
    <img v-else :src="getAssetURL(item.imageActive)" :alt="item.text">
    <span class="text">{{item.text}}</span>
  </div>
  </template>
</div>
</template>

<script setup>
import tabberData from '@/assets/data/tabbar.js'
import {getAssetURL} from '@/utils/load_assets.js'
import {ref} from 'vue'
import {useRouter} from 'vue-router'

const router = useRouter()

const currentIndex = ref(0)
const activeTabBar = (index,item) => {
  currentIndex.value = index
  router.push(item.path)
}
</script>

<style scoped lang="less">
.tabBar{
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 50px;
  display: flex;
  border-top: 1px solid #aaa;
  .tabBarItem{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items:center;
    flex-direction:column;
    &.active{
      color:var(--primary-color)
    }
    .text{
      font-size: 12px;
    }
    img{
      width: 36px;
    }
  }
}
</style>