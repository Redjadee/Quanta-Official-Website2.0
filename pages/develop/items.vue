<template>
  <div class="develop-project">
    <div
      class="develop-project-item"
      v-for="project in projectList"
      :key="project.id"
    >
      <div class="develop-project-text">
        <h2>{{ project.name }}</h2>
        <p class="develop-project-content">
          {{ project.content }}
        </p>
      </div>
      <div class="develop-project-img">
        <img :src="project.href" alt="项目图片" />
      </div>
    </div>
    <BackTopButton :showHeight="showHeight" />
  </div>
</template>

<script>
export default {
  name: 'DevelopItems',
  data() {
    return {
      projectList: [],
      // 出现回到顶部按钮的scrollTop
      showHeight: 800
    };
  },
  async fetch() {
    try {
      const response = await this.$axios.get('http://home.linwine.space:7100/api/project/all');
      this.projectList = response;
    } catch (error) {
      console.error(error);
    }
  },
  // async asyncData(app) {
  //   const projectList = await app.$getDevelopProjects();
  //   return {
  //     projectList
  //   };
  // },
  mounted() {
    window.innerWidth < 768 && (this.showHeight = 200);
  }
};
</script>

<style lang="scss" scoped>
.develop-project {
  padding: 0.5rem;
  .develop-project-item {
    display: flex;
    height: 2.4rem;
    margin-bottom: 0.2rem;
    &:first-child,
    &:last-child {
      @media screen and (max-width: 767px) {
        & {
          margin: auto;
        }
      }
    }
    @media screen and (max-width: 767px) {
      & {
        display: block;
        margin: 10vw 0;
        height: auto;
      }
    }

    .develop-project-text {
      font-weight: bold;
      flex: 3;
      margin-right: 0.3rem;
      @media screen and (max-width: 767px) {
        & {
          width: 85%;
          margin: 0 auto;
        }
      }
      h2 {
        color: #978bd7;
        font-weight: bold;
        font-size: 0.26rem;
        margin-bottom: 0.5rem;
        @media screen and (max-width: 767px) {
          & {
            font-size: 4.6vw;
          }
        }
      }
      .develop-project-content {
        color: #676d75;
        font-size: 0.18rem;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
        line-height: 0.26rem;
        @media screen and (max-width: 767px) {
          & {
            font-size: 3.2vw;
            line-height: 5vw;
            margin-bottom: 2vw;
            -webkit-line-clamp: 3;
          }
        }
      }
    }
    .develop-project-img {
      flex: 4;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      @media screen and (max-width: 767px) {
        & {
          justify-content: center;
        }
      }
      img {
        height: 90%;
        width: 75%;
        @media screen and (max-width: 767px) {
          & {
            width: 85%;
          }
        }
      }
    }
  }
}
</style>
