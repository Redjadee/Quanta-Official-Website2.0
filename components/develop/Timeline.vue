<template>
  <div class="develop-managers">
    <DevelopTimelineItem
      v-for="manager in list"
      :key="manager.id"
      :detail="manager"
    />
  </div>
</template>

<script setup>
defineOptions({
  name: 'DevelopTimeline'
})

const props = defineProps({
  list: Array
})

import { onMounted } from 'vue'
onMounted(() => {
  console.log(props.list)
})
</script>

<style lang="scss" scoped>
.develop-managers {
  display: flex;
  flex-wrap: wrap;
}
</style>
