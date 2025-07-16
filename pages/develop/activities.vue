<template>
  <div class="develop-activity">
    <div
      class="develop-activity-item"
      v-for="(activity, index) in activitiesList"
      :key="index"
      @click="fetchLink(activity.id)"
    >
      <a :href="activity.link">
        <div class="develop-activity-text">
          <h2 class="develop-activity-title">{{ activity.title }}</h2>
          <p class="develop-activity-time">{{ activity.publicTime }}</p>
          <p class="develop-activity-content">
            {{ activity.digest }}
          </p>
        </div>
        <div class="develop-activity-img">
          <img :src="activity.href" alt="活动图片" />
        </div>
      </a>
    </div>
    <BackTopButton :showHeight="showHeight" />
  </div>
</template>

<script>
export default {
  name: 'DevelopActivities',
  data() {
    return {
      activitiesList: [],
      // 出现回到顶部按钮的scrollTop
      showHeight: 800
    };
  },
  mounted() {
    window.innerWidth < 768 && (this.showHeight = 200);
  }
};
</script>

<style lang="scss" scoped>
.develop-activity {
  padding: 0.5rem;
  .develop-activity-item {
    cursor: pointer;
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
      }
    }
    a {
      display: flex;
      height: 2.4rem;
      margin-bottom: 0.2rem;
      @media screen and (max-width: 767px) {
        & {
          display: initial;
        }
      }
    }
    .develop-activity-text {
      font-weight: bold;
      width: calc(100% * 3 / 7);
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
        margin-bottom: 0.2rem;
        width: 60%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        @media screen and (max-width: 767px) {
          & {
            font-size: 4.6vw;
            margin-bottom: 3vw;
          }
        }
      }
      .develop-activity-time {
        color: #908b91;
        font-size: 0.16rem;
        margin-bottom: 0.1rem;
        @media screen and (max-width: 767px) {
          & {
            font-size: 3.2vw;
            margin-bottom: 2vw;
          }
        }
      }
      .develop-activity-content {
        color: #676d75;
        word-wrap: break-word;
        font-size: 0.18rem;
        text-overflow: ellipsis;
        display: -webkit-box;
        line-clamp: 5;
        -webkit-box-orient: vertical;
        overflow: hidden;
        line-height: 0.26rem;
        @media screen and (max-width: 767px) {
          & {
            font-size: 3.2vw;
            line-height: 5vw;
          }
        }
      }
    }
    .develop-activity-img {
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
        object-fit: fill;
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
