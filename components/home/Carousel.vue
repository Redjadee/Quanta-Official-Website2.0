<template>
  <div class="home-carousel">
    <!-- <el-carousel
      height="3.38rem"
      indicator-position="outside"
      arrow="never"
      :interval="3000"
    >
      <el-carousel-item v-for="(item, index) in list" :key="index">
        <img :src="item.href" alt="图片无法显示" />
        <div class="home-carousel-text">
          <div>
            <div class="home-carousel-title">
              {{ type ? item.name : item.title }}
            </div>
            <div class="home-carousel-content">
              {{ type ? item.content : item.digest }}
            </div>
            <a
              :href="item.link"
              class="home-carousel-button"
              target="_blank"
              v-if="!type"
              >了解更多</a
            >
            <a
              class="home-carousel-button"
              @click="$router.push('/project')"
              v-else
              >了解更多</a
            >
          </div>
        </div>
      </el-carousel-item>
    </el-carousel> -->
  </div>
</template>

<script setup>
defineOptions({
  name: 'HomeCarousel'
})

const props = defineProps({
  list: Array,
  type: Number
})

</script>

<style lang="scss" scoped>
.home-carousel {
  height: 100vh;
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    & {
      height: 146vw;
    }
  }
  .home-carousel-text {
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    @media screen and (max-width: 767px) {
      & {
        height: 60%;
        padding: 0 5vw;
        box-sizing: border-box;
        line-height: 6vw;
        display: flex;
        align-items: center;
      }
    }
  }

  .home-carousel-title {
    font-weight: bold;
    font-size: 0.28rem;
    color: #666666;
    margin: 0.2rem 0;
    margin-bottom: 0.4rem;
    @media screen and (max-width: 767px) {
      & {
        font-size: 4.5vw;
        margin-top: auto;
        margin-bottom: 4.5vw;
      }
    }
  }
  .home-carousel-content {
    color: #707070;
    font-size: 0.22rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    @media screen and (max-width: 767px) {
      & {
        font-size: 4.2vw;
      }
    }
  }

  .home-carousel-button {
    border-radius: 0.4rem;
    font-size: 0.18rem;
    position: relative;
    overflow: hidden;
    box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.1);
    background-color: #978bd7;
    color: #fff;
    padding: 0.15rem 0.2rem;
    cursor: pointer;
    display: inline-block;
    @media screen and (max-width: 767px) {
      & {
        padding: 1.8vw 2.2vw;
        font-size: 3.6vw;
        border-radius: 4vw;
        margin-top: 3vw;
      }
    }
    &::after {
      content: '';
      position: absolute;
      top: 15px;
      left: 0;
      width: 240px;
      height: 30px;
      background-image: linear-gradient(
        rgba(0, 0, 0, 0),
        rgba(255, 255, 255, 0.4),
        rgba(0, 0, 0, 0)
      );
      transform: rotate(-45deg) translate(0, -115px);
    }
    &:hover::after {
      transform: rotate(-45deg) translate(0, 100px);
      transition: all 0.6s;
    }
  }
  :deep(.el-carousel--horizontal) {
    width: 70%;
    margin: 0 auto;
  }
  :deep(.el-carousel__container) {
    border-radius: 26px;
    background: #fff;
    @media screen and (max-width: 767px) {
      & {
        height: 92vw !important;
        width: auto;
      }
    }
  }
  :deep(.el-carousel__item) {
    display: flex;
    border-radius: 26px;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
    width: 100%;
    @media screen and (max-width: 767px) {
      & {
        display: block;
      }
    }
    img {
      height: 100%;
      width: 56%;
      @media screen and (max-width: 767px) {
        & {
          height: 40%;
          width: 100%;
        }
      }
    }
  }
  :deep(.el-carousel__button) {
    background-color: #978bd7 !important;
  }
  :deep(.el-carousel__indicator--horizontal) {
    margin: 0.3rem 0.15rem;
    @media screen and (max-width: 767px) {
      & {
        margin: 4vw 2vw;
      }
    }
  }
  :deep(.el-carousel__indicators) {
    display: flex;
    align-items: center;
    justify-content: center;
    .is-active {
      button {
        background-color: #978bd7;
        transform: scale(1.5);
      }
    }
  }
  :deep(.el-carousel__indicators--outside) {
    button {
      background-color: #978bd7;
      width: 0.12rem;
      height: 0.12rem;
      border-radius: 50%;
      @media screen and (max-width: 767px) {
        & {
          width: 2.2vw;
          height: 2.2vw;
        }
      }
    }
    .el-carousel__indicator {
      &:hover {
        button {
          opacity: 1;
        }
      }
    }
  }
}
</style>
