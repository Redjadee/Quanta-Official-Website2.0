<template>
  <div id="project">
    <ProjectSwiperWrapper />
  </div>
</template>

<script setup>
import { useSeoMeta } from '#imports'
import { ProjectSwiperWrapper } from '#components'

defineOptions({
  name: 'Project'
})

useSeoMeta({
  keywords: 'quanta,信息技术,企业化,技术组织,实验室,育人理念,IT行业,云山勤工财务审批系统,粤剧文化博览,广外社团管理系统,思政学时,毕业典礼排队系统,宿舍管理系统'
})
</script>

<style lang="scss" scoped>
#project {
  height: calc(100vh - 1.2rem);
  text-align: center;
  @media screen and (max-width: 767px) {
    & {
      height: calc(100vh - 20vw);
    }
  }
}
</style>
