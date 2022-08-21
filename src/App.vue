<template>
<div class="app">
  <router-view></router-view>
  <TabBar v-if="!route.meta.tabBarHide"></TabBar>
</div>
</template>

<script setup>
// import TabBar from './components/tabBar/tabBar.vue'
import TabBar from './components/tabBar/tabBar_vant.vue'

import { useRoute } from 'vue-router';
const route = useRoute()
</script>


<style lang="less" scoped>
</style>
