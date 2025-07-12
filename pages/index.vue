<!-- home.vue -->
<template>
  <div id="home">
    <HomeMain />
    <HomeSwiper />
    <HomeMakeReal />
    <HomeCarousel :list="activities" :type="0" ref="homeActivity" />
    <HomeCarousel :list="projects" :type="1" ref="homeProject" />
    <HomeFooter />
    <HomeFloatBox />
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  name: 'Home',
  head() {
    return {
      meta: [
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'quanta,信息技术,企业化,技术组织,实验室,育人理念,IT行业,运营,策划,市场需求,可行性分析,产品文档,设计,photoshop,illustrator,网页设计,ui设计,开发,研发,前端,安卓,后端，html,css,javascript,页面架构,小程序,小游戏,数据库搭建,mySQL,操作系统,android,java'
        }
      ]
    };
  },
  data() {
    return {
      width: 0,
      activityTop: 0,
      projectTop: 0,
      activities: [],
      projects: []
    };
  },
  async fetch() {
    try {
      const response1 = await this.$axios.get('http://home.linwine.space:7100/api/project/recent');
      this.projects = response1;

      const response2 = await this.$axios.get('http://home.linwine.space:7100/api/activity/recent');
      this.activities = response2;
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  },
  computed: mapState(['toActivityChecked', 'toProjectChecked']),
  methods: mapMutations(['handleToActivity', 'handleToProject']),
  watch: {
    toActivityChecked: {
      handler(checked) {
        if (checked) {
          this.$nextTick(() => {
            setTimeout(() => {
              document.documentElement.scrollTop = this.activityTop;
              this.handleToActivity(false);
              // this.$store.commit("handleToActivity", false);
            });
          });
        }
      },
      immediate: true
    },
    toProjectChecked: {
      handler(checked) {
        if (checked) {
          this.$nextTick(() => {
            setTimeout(() => {
              document.documentElement.scrollTop = this.projectTop;
              // this.$store.commit("handleToProject", false);
              this.handleToProject(false);
            });
          });
        }
      },
      immediate: true
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.activityTop = this.$refs.homeActivity.$el.offsetTop;
      this.projectTop = this.$refs.homeProject.$el.offsetTop;
    });
  }
};
</script>

<style lang="scss" scoped>
#home {
  .home-swiper-container {
    position: relative;
    height: 100vh;
  }
}
</style>
