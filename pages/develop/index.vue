<template>
  <div id="develop">
    <div class="develop-wrapper">
      <DevelopWelcome v-if="$route.name === 'develop'" />
      <Nuxt />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useSeoMeta } from '#imports'
import DevelopWelcome from '~/components/develop/Welcome.vue'

defineOptions({
  name: 'Develop'
})

const isShow = ref(false)

useSeoMeta({
  keywords: 'quanta,信息技术,企业化,技术组织,实验室,育人理念,IT团体,管理层,活动,自主项目,冬令营,宣讲会,成员大会,精英分享会,知识分享会,运营部,设计部,研发部,思政学时,粤剧文化博览,广外社团管理系统,云山勤工财务审批系统'
})
</script>

<style lang="scss" scoped>
.develop-wrapper {
  width: 80%;
  margin: 0 auto;
  height: inherit;
  position: relative;
}
</style>
