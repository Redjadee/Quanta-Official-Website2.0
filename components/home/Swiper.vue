<template>
  <div id="home-swiper">
    <div class="home-swiper-pc">
      <el-carousel
        ref="slide"
        @change="swiperChange"
        trigger="click"
        height="4.5rem"
        arrow="never"
        :autoplay="false"
        direction="vertical"
      >
        <el-carousel-item v-for="slide in swiperList" :key="slide.id">
          <div class="department">
            <div class="department-img" :class="slide.imgClass">
              <img :src="slide.img" :alt="slide.title" />
            </div>
            <div class="department-content">
              <h1>{{ slide.title }}</h1>
              <div class="department-detail">
                {{ slide.detail }}
              </div>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="home-swiper-mobile">
      <van-swipe
        @change="swipeChange"
        class="home-swiper-swipe"
        ref="homeSwipe"
      >
        <van-swipe-item v-for="slide in swiperList" :key="slide.id">
          <div class="van-home-department">
            <div class="van-home-department-img" :class="slide.imgClass">
              <img :src="slide.img" :alt="slide.title" />
            </div>
            <div class="van-home-department-content">
              <h1>{{ slide.title }}</h1>
              <div class="van-home-department-detail">
                {{ slide.detail }}
              </div>
            </div>
          </div>
        </van-swipe-item>
        <template #indicator>
          <div class="van-home-indicators-wrapper">
            <ul class="van-home-indicators">
              <li
                class="van-home-indicator"
                v-for="i in 4"
                :key="i"
                :class="{ indicatorOpacity: swipeIndex === i - 1 }"
                :style="indicatorColor"
                @click="swipeToOthers(i - 1)"
              ></li>
            </ul>
          </div>
        </template>
      </van-swipe>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { SWIPER_LIST, SWIPER_BUTTON_COLOR } from '~/assets/data/data.js'

defineOptions({
  name: 'HomeSwiper'
})

const swiperList = ref(SWIPER_LIST)
const swipeIndex = ref(0)
const homeSwipe = ref(null)

function swiperChange(e) {
  Array.from(document.querySelectorAll('.el-carousel__button')).forEach(
    (item) => {
      item.style.background = SWIPER_BUTTON_COLOR[e]
    }
  )
}
function swipeToOthers(indicatorIndex) {
  homeSwipe.value?.swipeTo(indicatorIndex)
}
function swipeChange(index) {
  swipeIndex.value = index
}
const indicatorColor = computed(() => {
  return { background: SWIPER_BUTTON_COLOR[swipeIndex.value] }
})
</script>

<style lang="scss" scoped>
#home-swiper {
  overflow: hidden;
  margin: 0 auto;
  width: 80%;
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  @media screen and (max-width: 767px) {
    & {
      height: auto;
      padding-top: 0;
      margin: auto;
      width: 100%;
    }
  }
  .home-swiper-pc {
    height: 4rem;
    width: 100%;
    @media screen and (max-width: 767px) {
      & {
        display: none;
      }
    }
    .department-content {
      font-weight: bold;
      color: #707070;
      width: 4rem;
      font-size: 0.16rem;
      letter-spacing: 0.01rem;
      margin-left: 0.4rem;
      line-height: 0.22rem;
      & > * {
        opacity: 0;
        transition: all 0.4s;
      }

      h1 {
        font-family: quanta;
        margin: -0.2rem 0 0.4rem 0;
        font-size: 0.3rem;
      }
    }

    .department-img {
      margin-left: -0.5rem;
      & > * {
        opacity: 0;
        transition: all 0.4s;
      }
    }
    .department {
      display: flex;
      align-items: center;
      /* !! */
      justify-content: center;
      width: 85%;
    }
    .department1 {
      img {
        width: 5.4rem;
      }
    }
    .department2,
    .department3,
    .department3,
    .department4 {
      width: 5rem;
      text-align: center;
      img {
        height: 3rem;
      }
    }
    :deep(.el-carousel__button) {
      background-color: #978bd7;
      width: 0.25rem;
      height: 0.25rem;
      margin: 0.1rem;
      border-radius: 1rem;
      transition: all 0.5s;
      cursor: pointer;
    }
    :deep(.is-active) {
      .el-carousel__button {
        background: #978bd7;
        height: 0.4rem;
        border-radius: 0.4rem;
      }
      .department-img {
        img {
          opacity: 1;
          transition-delay: 0.3s;
        }
      }
      .department-content {
        h1 {
          opacity: 1;
          transform: none;
          transition-delay: 0.4s;
        }
      }
      .department-detail {
        opacity: 1;
        transform: none;
        transition-delay: 0.5s;
      }
    }
    :deep(.el-carousel--vertical) {
      width: 100%;
      height: 4rem;
      position: relative;
    }
    :deep(.el-carousel--horizontal) {
      height: 80vh;
    }
    :deep(.el-carousel__indicators--horizontal) {
      bottom: 10vh;
    }
    :deep(.el-carousel__item) {
      display: flex;
      justify-content: center;
    }
  }
  .home-swiper-mobile {
    height: 100%;
    display: none;
    @media screen and (max-width: 767px) {
      & {
        display: block;
        width: 100%;
        padding-bottom: 5vw;
      }
    }
    .home-swiper-swipe {
      padding-top: 10vw;
      .van-home-department {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        width: 90%;
        margin: 0 auto;
        .van-home-department-img {
          width: 100%;
          img {
            margin: 0 auto;
          }
        }
        .department1 {
          img {
            width: 80vw;
          }
        }
        .department2 {
          img {
            width: 50vw;
            height: 45vw;
          }
        }
        .department3 {
          img {
            width: 60vw;
            height: 45vw;
            margin-left: 10vw;
          }
        }
        .department4 {
          img {
            width: 62vw;
            height: 48vw;
          }
        }
        .department2,
        .department3,
        .department4 {
          width: auto;
        }
        .van-home-department-content {
          color: #707070;
          font-weight: bold;
          margin-top: 5vw;
          h1 {
            font-family: quanta;
            font-size: 5.5vw;
            margin-top: 0;
            margin-bottom: 5vw;
          }
          .van-home-department-detail {
            font-size: 3.2vw;
            line-height: 5.2vw;
            width: 85%;
            margin: 0 auto;
            margin-bottom: 5vw;
          }
        }
      }
      .van-home-indicators-wrapper {
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
        .van-home-indicators {
          display: flex;
          .van-home-indicator {
            width: 3vw;
            height: 3vw;
            margin: 1.5vw;
            border-radius: 50%;
            opacity: 0.3;
          }
          .indicatorOpacity {
            opacity: 1 !important;
          }
        }
      }
    }
    .van-swipe {
      position: static;
    }
  }
}
</style>
