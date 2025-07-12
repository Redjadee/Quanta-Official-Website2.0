<template>
  <div class="develop-managers">
    <DevelopTimelineItem
      v-for="manager in list"
      :key="manager.id"
      :detail="manager"
    />
  </div>
</template>

<script>
export default {
  name: 'DevelopTimeline',
  props: {
    list: {
      type: Array
    }
  },
  created() {
    console.log(this.list);
  }
};
</script>

<style lang="scss" scoped>
.develop-managers {
  display: flex;
  flex-wrap: wrap;
}
</style>
