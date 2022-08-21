<template>
  <div class="city">
    <!-- 搜索框 -->
    <van-search v-model="searchValue" placeholder="城市/地区/位置" show-action shape="round" @cancel="onCancel" />

    <!-- 标签页 -->
    <van-tabs v-model:active="tabActive">
      <template v-for="(value,key,index) in allCities">
        <van-tab :title=value.title :name="key"></van-tab>
      </template>
    </van-tabs>

    <div class="content">
      <template v-for="item in tabActiveCities?.cities">
        <div>
         {{item}}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router'
import useCityStore from '@/stores/modules/city.js'
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const router = useRouter()
const tabActive = ref()

//  绑定搜索框的数据
const searchValue = ref('')
// 搜索框点击取消响应的函数
const onCancel = () => {
  // 点击取消以后返回home页面
  router.back()
}

// 请求数据来处理标签页的
const cityStore = useCityStore()
cityStore.fetchGetCityAll()
const {allCities} = storeToRefs(cityStore)


// 获取渲染地区的数据
const tabActiveCities = computed(() => allCities.value[tabActive.value])
</script>

<style scoped lang="less">
.city{
  height: 100vh;
.content{
  height: calc(100vh - 98px);
  overflow-y: auto ;
}
}
</style>