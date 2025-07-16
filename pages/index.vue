<!-- home.vue -->
<script setup>
defineOptions({
  name: 'Home'
})

import { ref, onMounted, watch, nextTick} from 'vue'
import { useIndexStore } from '~/stores/useIndexStore'
import { storeToRefs } from 'pinia'
import { useSeoMeta } from '#imports'

// Pinia状态管理
const store = useIndexStore()
const { handleToActivity, handleToProject } = store
const { toActivityChecked, toProjectChecked } = storeToRefs(store)

// 组件数据
const width = ref(0)
const activityTop = ref(0)
const projectTop = ref(0)
const activities = ref([])
const projects = ref([])

// SEO配置
useSeoMeta({
  keywords: 'quanta,信息技术,企业化,技术组织,实验室,育人理念,IT行业,运营,策划,市场需求,可行性分析,产品文档,设计,photoshop,illustrator,网页设计,ui设计,开发,研发,前端,安卓,后端，html,css,javascript,页面架构,小程序,小游戏,数据库搭建,mySQL,操作系统,android,java'
})


projects.value = data.value?.projects || []
activities.value = data.value?.activities || []

// 生命周期钩子
onMounted(() => {
  nextTick(() => {
    const activityEl = document.querySelector('#homeActivity')
    const projectEl = document.querySelector('#homeProject')
    if (activityEl) activityTop.value = activityEl.offsetTop
    if (projectEl) projectTop.value = projectEl.offsetTop
  })
})

// 监听器
watch(toActivityChecked, (checked) => {
  if (checked) {
    nextTick(() => {
      setTimeout(() => {
        document.documentElement.scrollTop = activityTop.value
        handleToActivity(false)
      })
    })
  }
}, { immediate: true })

watch(toProjectChecked, (checked) => {
  if (checked) {
    nextTick(() => {
      setTimeout(() => {
        document.documentElement.scrollTop = projectTop.value
        handleToProject(false)
      })
    })
  }
}, { immediate: true })
</script>

<template>
  <div id="home">
    <HomeMain />
    <HomeSwiper />
    <HomeMakeReal />
    <HomeCarousel :list="activities" :type="0" id="homeActivity" />
    <HomeCarousel :list="projects" :type="1" id="homeProject" />
    <HomeFooter />
    <HomeFloatBox />
  </div>
</template>

<style lang="scss" scoped>
#home {
  .home-swiper-container {
    position: relative;
    height: 100vh;
  }
}
</style>
