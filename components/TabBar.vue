<script setup>
import { ref } from 'vue'
import { TAB_LIST } from '~/assets/data/data.js'
import { storeToRefs } from 'pinia'
import { useIndexStore } from '~/stores/useIndexStore'

// 路由相关
const route = useRoute()
const router = useRouter()

// Pinia状态
const store = useIndexStore()
const { swiperActiveIndex } = storeToRefs(store) // 解构并保持响应式

// 组件数据
const isActive = ref(false)
const tabList = ref(TAB_LIST)

// 计算属性
const isTabActive = (name) => ({
  isTabActive: route.name.includes(name)
})

const tabActiveColor = (name) => 
  route.name.includes(name) && route.path.includes('/project')
    ? { color: '#978bd7', borderColor: '#978bd7' }
    : {}

// 方法
const barItemClick = (path) => {
  if (window.location.pathname !== path) {
    router.push(path)
  }
}
</script>

<template>
  <div id="tab-bar">
    <div
      class="tab-bar-item"
      :class="isTabActive(item.name)"
      :style="tabActiveColor(item.name)"
      v-for="(item, index) in tabList"
      :key="index"
      @click="barItemClick(item.path)"
    >
      {{ item.title }}
    </div>
  </div>
</template>

<style lang="scss" scoped>
#tab-bar {
  display: flex;
  align-items: center;
  margin-left: 3rem;
  @media screen and (max-width: 767px) {
    & {
      display: none;
    }
  }
  .tab-bar-item {
    margin: 0 0.55rem;
    color: #908b91;
    font-weight: bold;
    cursor: pointer;
    position: relative;
    font-size: 0.2rem;
    padding-bottom: 0.05rem;
  }
  .isTabActive {
    color: #978bd7;
    border-bottom-width: 2px;
    border-bottom-style: solid;
    border-color: #978bd7;
    position: relative;
    text-align: center;
  }
}
// @media screen and (max-width: 767px) {
// 	#tab-bar {
// 		display: none;
// 	}
// }
</style>
