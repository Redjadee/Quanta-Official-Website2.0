<script setup lang='ts'>
import { ref } from 'vue'
import { TAB_LIST } from '~/assets/data/data.js'
//import { storeToRefs } from 'pinia'
import { useIndexStore } from '~/stores/useIndexStore'
import type { CSSProperties } from 'vue'

// 路由相关
const route = useRoute()

// Pinia状态
const store = useIndexStore()
//const { swiperActiveIndex } = storeToRefs(store)

// 组件数据
// const isActive = ref(false)
const tabList = ref(TAB_LIST)

// 计算属性
const isTabActive = (name: string): string => {
  return route.name?.toString().includes(name) ? 'isTabActive' : ''
}

const tabActiveColor = (name: string): CSSProperties => {
  return route.name?.toString().includes(name) && route.path.includes('/project')
    ? { color: '#978bd7', borderColor: '#978bd7' }
    : {}
}

const getTabLink = (item: any) => {
  // SSR 下没有 window
  if (typeof window === 'undefined') return item.path
  return window.location.pathname !== item.path ? item.path : ''
}
</script>

<template>
  <div id="tab-bar">
    <div
      v-for="(item, index) in tabList"
      :key="index"
      :class="['tab-bar-item', isTabActive(item.name)]"
      :style="tabActiveColor(item.name)"
    >
      <NuxtLink :to="getTabLink(item)">
        {{ item.title }}
      </NuxtLink>
    </div>
  </div>
</template>


<style lang="scss" scoped>
#tab-bar {
  display: flex;
  align-items: center;
  // margin-left: 3rem;
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

    a:active {
      color: #978bd7; //styleConfirm
    }
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
