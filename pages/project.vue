<template>
  <div id="project">
    <ProjectSwiper />
  </div>
</template>

<script setup>
import { useSeoMeta } from '#imports'
import ProjectSwiper from '~/components/project/Swiper.vue'

defineOptions({
  name: 'Project'
})

useSeoMeta({
  keywords: 'quanta,信息技术,企业化,技术组织,实验室,育人理念,IT行业,云山勤工财务审批系统,粤剧文化博览,广外社团管理系统,思政学时,毕业典礼排队系统,宿舍管理系统'
})
</script>

<style lang="scss" scoped></style>
