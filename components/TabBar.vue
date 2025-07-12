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

<script>
import { TAB_LIST } from '@/static/data.js';
import { mapState } from 'vuex';
export default {
  name: 'TabBar',
  data() {
    return {
      isActive: false,
      tabList: TAB_LIST
    };
  },
  computed: {
    ...mapState(['swiperActiveIndex']),
    isTabActive() {
      return (name) => ({
        isTabActive: this.$route.name.includes(name)
      });
    },
    tabActiveColor() {
      return (name) =>
        this.$route.name.includes(name) && this.$route.path.includes('/project')
          ? {
              color: '#978bd7',
              borderColor: '#978bd7'
            }
          : {};
    }
  },
  methods: {
    barItemClick(path) {
      if (location.pathname != path) {
        this.$router.push(path);
      }
    }
  }
};
</script>

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
